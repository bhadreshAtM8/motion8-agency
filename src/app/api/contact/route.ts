import { NextResponse } from "next/server";
import { SITE } from "@/content/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  message?: string;
  /** Honeypot — real people leave this empty. */
  website?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* Best-effort in-memory throttle. Resets on deploy and isn't shared across
   instances — it slows down casual abuse, it is not a security boundary. */
const hits = new Map<string, { count: number; first: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const record = hits.get(ip);
  if (!record || now - record.first > WINDOW_MS) {
    hits.set(ip, { count: 1, first: now });
    return false;
  }
  record.count += 1;
  return record.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Try again in a minute." },
      { status: 429 },
    );
  }

  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Silently accept bot submissions so they don't learn to retry.
  if (body.website) return NextResponse.json({ ok: true });

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Tell us your name.";
  if (!EMAIL.test(email)) errors.email = "That email doesn't look right.";
  if (message.length < 10) errors.message = "A sentence or two about the project, please.";
  if (message.length > 5000) errors.message = "That's longer than we can accept.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? SITE.email;

  /* Without a key the endpoint still validates and returns success, so the
     form is testable before the email provider is connected. */
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY unset — submission accepted but not emailed:", {
      name,
      email,
      company,
      budget,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    budget && `Budget: ${budget}`,
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
        from: process.env.CONTACT_FROM_EMAIL ?? "Motion 8 Website <noreply@motion8agency.co>",
        to: [to],
        reply_to: email,
        subject: `New project enquiry — ${name}${company ? ` (${company})` : ""}`,
        text,
      }),
    });

    if (!response.ok) {
      console.error("[contact] provider rejected:", response.status, await response.text());
      return NextResponse.json(
        { ok: false, error: "We couldn't send that just now. Please email us directly." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[contact] provider unreachable:", error);
    return NextResponse.json(
      { ok: false, error: "We couldn't send that just now. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
