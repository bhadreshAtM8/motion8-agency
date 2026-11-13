import { CASE_STUDIES } from "@/content/cases";
import { getFaqs } from "@/content/faqs";
import { getServiceDetail } from "@/content/service-details";
import { PILLARS, PLATFORMS, PLATFORM_PARENT } from "@/content/pillars";
import { POSTS } from "@/content/posts";
import { HOME_FAQS, SITE } from "@/content/site";

/**
 * /llms-full.txt — a full Markdown digest of the site for LLM ingestion
 * (llmstxt.org convention). Generated from the same content modules the pages
 * render from, at build time, so it can never drift from the live copy.
 * Curated index lives in public/llms.txt.
 */
export const dynamic = "force-static";

const url = (path: string) => (path === "/" ? SITE.url : `${SITE.url}${path}`);
const faqBlock = (faqs: { question: string; answer: string }[]) =>
  faqs.length
    ? ["#### FAQs", "", ...faqs.flatMap((f) => [`**Q: ${f.question}**`, "", f.answer, ""])]
    : [];
const list = (items: string[]) => items.map((i) => `- ${i}`);

function build(): string {
  const out: string[] = [];
  const push = (...lines: string[]) => out.push(...lines);

  push(
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `- Website: ${SITE.url}`,
    `- Email: ${SITE.email}`,
    `- Offices: ${SITE.offices}`,
    `- Founded: ${SITE.founded}`,
    `- Tagline: ${SITE.tagline}`,
    `- Contact: ${url("/contact")}`,
    `- Curated index: ${url("/llms.txt")}`,
    "",
    "## About",
    "",
    ...faqBlock(HOME_FAQS),
  );

  for (const p of PILLARS) {
    push(
      `## Pillar ${p.index}: ${p.name}`,
      "",
      `URL: ${url(`/${p.slug}`)}`,
      "",
      `**${p.h1}**`,
      "",
      p.lede,
      "",
      "Process:",
      ...p.process.map((s) => `${s.num}. ${s.title} — ${s.body}`),
      "",
      ...faqBlock(p.faqs),
    );
    for (const s of p.services) {
      const d = getServiceDetail(p.slug, s.slug);
      push(
        `### ${s.name}`,
        "",
        `URL: ${url(`/${p.slug}/${s.slug}`)}`,
        "",
        `**${d?.h1 ?? s.h1}**`,
        "",
        ...(d ? [...d.intro.flatMap((para) => [para, ""])] : [s.lede, ""]),
        "What's included:",
        ...list(s.includes),
        "",
        ...(d
          ? [
              "Deliverables:",
              ...list(d.deliverables.map((x) => `${x.title} — ${x.body}`)),
              "",
              "Good fit if:",
              ...list(d.goodFit),
              "",
              "Not a fit if:",
              ...list(d.notFit),
              "",
            ]
          : []),
        ...faqBlock(getFaqs(`${p.slug}/${s.slug}`).length ? getFaqs(`${p.slug}/${s.slug}`) : s.faqs),
      );
    }
  }

  push(
    "## Ecommerce platforms",
    "",
    `Parent service: ${url(`/${PLATFORM_PARENT.pillar}/${PLATFORM_PARENT.service}`)}`,
    "",
  );
  for (const pl of PLATFORMS) {
    push(
      `### ${pl.name}`,
      "",
      `URL: ${url(`/platforms/${pl.slug}`)}`,
      "",
      `**${pl.h1}**`,
      "",
      pl.lede,
      "",
      "What's included:",
      ...list(pl.includes),
      "",
      ...faqBlock(pl.faqs),
    );
  }

  push(
    "## Case studies",
    "",
    "Client names are withheld. Measures are what each engagement is measured against (targets), not claimed results.",
    "",
  );
  for (const c of CASE_STUDIES) {
    push(
      `### ${c.title}`,
      "",
      `URL: ${url(`/case-studies/${c.slug}`)}`,
      "",
      `- Client: ${c.client}`,
      `- Industry: ${c.industry}`,
      `- Region: ${c.region}`,
      `- Pillar: ${c.pillar}`,
      `- Engagement: ${c.engagement}`,
      "",
      c.summary,
      "",
      "Challenge:",
      ...list(c.challenge),
      "",
      "Approach:",
      ...c.approach.map((a) => `- **${a.title}** — ${a.body}`),
      "",
      "Measured against:",
      ...list(c.measures),
      "",
      `Services: ${c.services.map((s) => `[${s.name}](${url(s.href)})`).join(", ")}`,
      "",
    );
  }

  push("## Blog", "", `Index: ${url("/blog")}`, "");
  for (const post of POSTS) {
    push(
      `### ${post.title}`,
      "",
      `URL: ${url(`/blog/${post.slug}`)}`,
      `Published: ${post.published}${post.updated ? ` · Updated: ${post.updated}` : ""} · Category: ${post.category} · ${post.readingMinutes} min read`,
      "",
      post.excerpt,
      "",
      ...post.intro.flatMap((para) => [para, ""]),
      "Sections:",
      ...list(post.sections.map((s) => s.heading)),
      "",
      ...faqBlock(post.faqs),
    );
  }

  push("## Contact", "", `- Start a project: ${url("/contact")}`, `- Email: ${SITE.email}`, "");

  return out.join("\n");
}

export function GET() {
  return new Response(build(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
