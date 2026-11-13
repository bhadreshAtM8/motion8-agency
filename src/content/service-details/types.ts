/**
 * Long-form, per-service content that makes each service page unique.
 * Keyed by "pillar-slug/service-slug". Anything here overrides or extends
 * the short entry in pillars.ts; a service without a detail entry still
 * renders from pillars.ts alone.
 *
 * Content rules (keep the site honest):
 * - No invented client names, statistics, results or prices. Use only facts
 *   already on the site (see pillars.ts, cases.ts, faqs.ts) or describe the
 *   work qualitatively.
 * - `h1` leads with the search term buyers use ("SEO Services for B2B SaaS"),
 *   the old slogan moves to `tagline`.
 * - First sentence of `intro[0]` contains the head term naturally.
 */
export type ServiceDetail = {
  /** Keyword-led H1, e.g. "Performance Marketing Agency for B2B & DTC Brands". */
  h1: string;
  /** The original slogan, shown as a sub-heading under the H1. */
  tagline: string;
  /** 2–3 paragraphs. First sentence names the service plainly. */
  intro: string[];
  /** 4–6 concrete deliverables. */
  deliverables: { title: string; body: string }[];
  /** 3–4 phases with indicative durations ("Weeks 1–2"). */
  timeline: { phase: string; duration: string; body: string }[];
  /** Who this is a good fit for (3–4 bullets). */
  goodFit: string[];
  /** Who it is not for (2–3 bullets) — builds trust. */
  notFit: string[];
  /** Tools and platforms typically used. */
  stack: string[];
  /** Optional pricing / engagement note. Only facts already stated on the site. */
  engagement?: string;
  /** Case-study slugs from cases.ts that relate to this service. */
  relatedCases: string[];
  /** Blog post slugs from posts.ts that relate to this service. */
  relatedPosts: string[];
};

export type ServiceDetailMap = Record<string, ServiceDetail>;
