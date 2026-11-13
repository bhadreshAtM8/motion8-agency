import { NextResponse } from "next/server";
import { SITE } from "@/content/site";

export const runtime = "nodejs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FAIL_MESSAGE = `We couldn't send that just now. Please email us at ${SITE.email}.`;

/* Best-effort in-memory throttle. Resets on deploy and isn't shared across
   instances — it slows down casual abuse, it is not a security boundary. */
const hits = new Map<string, { count: number; first: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  if (hits.size > 5_000) {
    for (const [key, record] of hits) if (now - record.first > WINDOW_MS) hits.delete(key);
  }
  const record = hits.get(ip);
  if (!record || now - record.first > WINDOW_MS) {
    hits.set(ip, { count: 1, first: now });
    return false;
  }
  record.count += 1;
  return record.count > MAX_PER_WINDOW;
}

/** Coerce an unknown field to a trimmed string capped at `max` chars. */
function field(value: unknown, max = 200) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  // Vercel sets x-real-ip; the first x-forwarded-for hop is client-controlled.
  const ip =
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",").pop()?.trim() ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Try again in a minute." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object") throw new Error("not an object");
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions so they don't learn to retry.
  if (field(body.website)) return NextResponse.json({ ok: true, spam: true });

  const name = field(body.name);
  const email = field(body.email, 254);
  const company = field(body.company);
  const budget = field(body.budget);
  const socialOrWebsite = field(body.socialOrWebsite) || field(body.handle);
  const rawMessage = typeof body.message === "string" ? body.message.trim() : "";
  const message = rawMessage.slice(0, 5000);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Tell us your name.";
  if (!EMAIL.test(email)) errors.email = "That email doesn't look right.";
  if (message.length < 5) errors.message = "Please share what's the goal or what you need help with.";
  if (rawMessage.length > 5000) errors.message = "That's longer than we can accept.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const lead = { name, email, company, socialOrWebsite, budget, message };
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? SITE.email;

  if (!apiKey) {
    // Full submission goes to the server log so it can be recovered from Vercel logs.
    console.error("[contact] RESEND_API_KEY unset — lead NOT emailed:", JSON.stringify(lead));
    // In development, accept so the form can be tested without a provider.
    // In production, never tell a visitor their message arrived when it didn't.
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ ok: true, delivered: false });
    }
    return NextResponse.json({ ok: false, error: FAIL_MESSAGE }, { status: 503 });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company && `Company / Business: ${company}`,
    socialOrWebsite && `Instagram / Website: ${socialOrWebsite}`,
    budget && `Budget / Package: ${budget}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Motion 8 Website <noreply@mail.motion8agency.co>",
        to: [to],
        reply_to: email,
        subject: `New project enquiry — ${name}${company ? ` (${company})` : ""}`,
        text,
      }),
    });

    if (!response.ok) {
      console.error(
        "[contact] provider rejected:",
        response.status,
        await response.text(),
        "lead:",
        JSON.stringify(lead),
      );
      return NextResponse.json({ ok: false, error: FAIL_MESSAGE }, { status: 502 });
    }
  } catch (error) {
    console.error("[contact] provider unreachable:", error, "lead:", JSON.stringify(lead));
    return NextResponse.json({ ok: false, error: FAIL_MESSAGE }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
