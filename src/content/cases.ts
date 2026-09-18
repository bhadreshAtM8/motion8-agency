/**
 * Case studies. Real, verified client engagements.
 *
 * Client names are held back in favour of anonymised descriptors (sector,
 * stage, region), which is standard for NDA-bound work. To name a client,
 * swap `client` for the real name once you have their written sign-off.
 *
 * `measures` lists what each engagement is judged on. Where you have the
 * achieved figures and permission to publish them, those numbers belong here
 * and will land harder than the targets.
 */

export type CaseStudy = {
  slug: string;
  /** Card/hero title. */
  title: string;
  /** Who the engagement is with, as an anonymised descriptor. */
  client: string;
  pillar: string;
  pillarHref: string;
  industry: string;
  region: string;
  engagement: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  /** Tone drives the card treatment in the sticky stack. */
  tone: "ink" | "terracotta" | "light";
  challenge: string[];
  approach: { title: string; body: string }[];
  /** What the engagement is measured against — targets, not claimed results. */
  measures: string[];
  /** Real internal links to the services involved. */
  services: { name: string; href: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "b2b-saas-demand-engine",
    title: "Rebuilding a demand engine around pipeline, not leads",
    client: "A Series A B2B SaaS platform",
    pillar: "Digital Marketing",
    pillarHref: "/digital-marketing",
    industry: "B2B SaaS",
    region: "US · UK",
    engagement: "Performance, SEO/AEO, lifecycle, analytics",
    tone: "ink",
    summary:
      "Plenty of leads, almost no pipeline. The fix was a measurement model everyone trusted, then rebuilding the channel mix on top of it.",
    metaTitle: "Case Study — B2B SaaS Demand Engine | Motion 8",
    metaDescription:
      "How Motion 8 rebuilt a Series A SaaS demand engine around pipeline instead of raw lead volume: measurement first, then channels.",
    challenge: [
      "Marketing reported record lead volume while sales reported a quiet quarter — both were reading different systems and neither number reconciled.",
      "Paid spend was optimised to platform ROAS, which rewarded retargeting people who were going to convert anyway.",
      "Organic traffic was growing on informational terms that never touched a commercial page.",
    ],
    approach: [
      {
        title: "Fix the measurement before touching spend",
        body: "A single data model joining product, CRM and marketing, with server-side collection so the platforms optimise against real outcomes rather than browser-side approximations. Until marketing and sales are reading the same number, every other decision is an argument.",
      },
      {
        title: "Re-cut the channel mix against pipeline",
        body: "With attribution reconciled, spend gets re-weighted toward the campaigns that source pipeline rather than the ones that harvest it. That usually means cutting branded retargeting budget and being uncomfortable for a fortnight.",
      },
      {
        title: "Rebuild the content around commercial intent",
        body: "Topic clusters mapped to the queries buyers use when they are close to a decision, structured so answer engines can quote them — the same structural work serves SEO and AEO at once.",
      },
      {
        title: "Close the lifecycle gap",
        body: "Scoring and routing agreed with sales, and flows that follow up whether or not anyone remembers. Most pipeline is lost to silence after the form fill, not before it.",
      },
    ],
    measures: [
      "Pipeline sourced by channel, reconciled to closed revenue — the headline number",
      "Cost per qualified opportunity, replacing cost per lead",
      "Answer share across assistants for the target query set",
      "Lead-to-opportunity conversion after lifecycle changes",
    ],
    services: [
      { name: "Performance Marketing", href: "/digital-marketing/performance-marketing" },
      { name: "SEO & Content Strategy", href: "/digital-marketing/seo-content-strategy" },
      { name: "AEO — Answer Engine Optimization", href: "/digital-marketing/aeo-answer-engine-optimization" },
      { name: "Advanced Analytics", href: "/digital-marketing/advanced-analytics" },
    ],
  },
  {
    slug: "marketplace-mvp-to-production",
    title: "From MVP to a platform that survives its own growth",
    client: "An early-stage marketplace",
    pillar: "Software & Blockchain Development",
    pillarHref: "/software-development",
    industry: "Marketplace",
    region: "UAE · India",
    engagement: "MVP, web & mobile, DevOps, dedicated squad",
    tone: "terracotta",
    summary:
      "The prototype proved demand and then started failing under it. Rebuilding the load-bearing parts without stopping the roadmap.",
    metaTitle: "Case Study — Marketplace MVP to Production | Motion 8",
    metaDescription:
      "How Motion 8 took a proven marketplace prototype to production: rebuilding what carries money and data without pausing the roadmap.",
    challenge: [
      "The MVP answered its question — people wanted this — and then buckled: manual payouts, no observability, deploys that needed a quiet evening.",
      "A rewrite would have stopped the roadmap for a quarter, which the funding timeline did not allow.",
      "Two contractors had rotated off and nobody remaining understood the payments flow.",
    ],
    approach: [
      {
        title: "Separate what must be rebuilt from what can wait",
        body: "The parts that carry money, identity and data get rebuilt properly. The parts that exist to test a hypothesis stay disposable. Naming which is which, out loud, is most of the work.",
      },
      {
        title: "Put the pipeline in before the features",
        body: "CI/CD with automated tests and safe rollback, infrastructure as code, logging and alerting with a named owner. Shipping weekly is an infrastructure decision before it is a cultural one.",
      },
      {
        title: "Rebuild payments and identity first",
        body: "Payouts move off manual processing onto a reconciled flow with an audit trail. Identity gets consolidated so mobile and web stop disagreeing about who someone is.",
      },
      {
        title: "Hand over as we go",
        body: "A dedicated squad with a named lead, writing documentation while the context is fresh rather than assembling it in a panic at the end.",
      },
    ],
    measures: [
      "Deploy frequency and change failure rate",
      "Payment reconciliation exceptions per cycle",
      "p95 response time on the core browse and checkout paths",
      "Onboarding time for a new engineer to first merged PR",
    ],
    services: [
      { name: "MVP & Rapid Prototyping", href: "/software-development/mvp-rapid-prototyping" },
      { name: "Web & Mobile App Development", href: "/software-development/web-mobile-app-development" },
      { name: "DevOps & Cloud Services", href: "/software-development/devops-cloud-services" },
      { name: "Dedicated Teams", href: "/software-development/dedicated-teams" },
    ],
  },
  {
    slug: "support-automation-with-escalation",
    title: "Automating support without making customers angrier",
    client: "A DTC brand with a small support team",
    pillar: "AI & Automation",
    pillarHref: "/ai-automation",
    industry: "Direct-to-consumer retail",
    region: "US · India",
    engagement: "AI agents, workflow automation, integration",
    tone: "light",
    summary:
      "Ticket volume grew faster than headcount. The constraint was not answering questions — it was knowing when to stop and hand over.",
    metaTitle: "Case Study — Support Automation with Escalation | Motion 8",
    metaDescription:
      "How Motion 8 grounded a support agent in real documentation, wired it to order systems, and designed the human escalation path properly.",
    challenge: [
      "Support volume was doubling while headcount was not, and most tickets were the same dozen questions about orders and returns.",
      "An off-the-shelf bot had been tried and removed after it confidently gave wrong delivery information.",
      "The documentation the bot would need to read was scattered across a helpdesk, a spreadsheet and two people's heads.",
    ],
    approach: [
      {
        title: "Fix the knowledge before the model",
        body: "Retrieval is only as good as what it retrieves. Consolidating and structuring the real answers came first — which also made the human team faster, independently of the agent.",
      },
      {
        title: "Ground every answer, and cite it",
        body: "Hybrid search with reranking over the real documentation and live order data, so answers come from the source rather than the model's memory, with the passage attached.",
      },
      {
        title: "Design the handover, not just the answer",
        body: "Confidence thresholds that escalate to a person with the full conversation and the agent's own uncertainty attached. An agent that guesses confidently does more damage than no agent.",
      },
      {
        title: "Gate every write",
        body: "Read access to orders is open; refunds, address changes and cancellations sit behind explicit confirmation and scoped permissions. The agent cannot quietly take a destructive action on a customer record.",
      },
    ],
    measures: [
      "Deflection rate on grounded question types, against the pre-launch ticket baseline",
      "Escalation quality — how often a handed-over ticket needed no re-explanation",
      "CSAT on agent-handled conversations versus human-handled",
      "Cost per resolved conversation, inference included",
    ],
    services: [
      { name: "Custom AI Agents & Chatbots", href: "/ai-automation/ai-agents-chatbots" },
      { name: "Workflow Automation", href: "/ai-automation/workflow-automation" },
      { name: "AI Integration into Existing Products", href: "/ai-automation/ai-integration" },
      { name: "LLM Fine-Tuning & RAG", href: "/ai-automation/llm-fine-tuning-rag" },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((study) => study.slug === slug);
