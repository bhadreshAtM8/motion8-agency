export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  /** ISO date — drives BlogPosting schema and the visible byline. */
  published: string;
  updated?: string;
  readingMinutes: number;
  category: string;
  intro: string[];
  sections: { heading: string; body: string[] }[];
  faqs: { question: string; answer: string }[];
  related: { name: string; href: string }[];
};

export const POSTS: Post[] = [
  {
    slug: "aeo-vs-geo-vs-seo",
    title: "AEO vs GEO vs SEO: what actually changes",
    metaTitle: "AEO vs GEO vs SEO — What Actually Changes | Motion 8 Agency",
    metaDescription:
      "AEO, GEO and SEO overlap more than the acronyms suggest. What genuinely changes is the unit of success — a citation, not a ranking — and how you measure it.",
    excerpt:
      "Three acronyms, one shared foundation, and two genuinely different targets. Here is what changes in practice — and what does not.",
    published: "2026-09-18",
    readingMinutes: 7,
    category: "Search",
    intro: [
      "Every few months a new acronym arrives promising that search has been reinvented and your current work is obsolete. AEO and GEO have been getting that treatment for about a year now.",
      "The honest position is less dramatic and more useful: the foundations of all three are the same, the target is different, and the measurement is where most teams get lost. Here is what actually changes.",
    ],
    sections: [
      {
        heading: "The one-line version",
        body: [
          "SEO competes for a position in a ranked list of links. AEO competes to be the source an assistant quotes when it composes a direct answer. GEO competes for presence and framing inside longer generated summaries — including how your category gets described when you are not the subject of the question.",
          "That is the whole distinction. Everything else is implementation detail, and most of that detail is shared.",
        ],
      },
      {
        heading: "What all three still require",
        body: [
          "Crawlable, well-structured pages. An assistant cannot cite what it cannot parse, and the parsing bar is higher, not lower, than it was for classic crawling.",
          "Genuine expertise expressed specifically. Generic content did badly in search before generative answers and does worse now, because a summarising model has no reason to quote a page that says what every other page says.",
          "Clean entity data — consistent naming, real authorship, corroborating mentions elsewhere. Engines need to be confident enough about who you are to put your name next to a claim.",
          "Schema markup. It does not make you worth quoting, but it makes you easier to parse correctly, and the cost of adding it is close to zero.",
        ],
      },
      {
        heading: "What genuinely changes: the unit of success",
        body: [
          "In SEO, the unit is a ranking for a query. You can watch it, chart it, and mostly reproduce it.",
          "In AEO, the unit is a citation. You are either the source the answer was composed from or you are not, and there is no position four to settle for. This makes results lumpier: you can be cited for a question you never targeted and absent from one you optimised hard for.",
          "In GEO, the unit is closer to share of narrative. When someone asks an assistant to compare options in your category, are you in the set being compared, and is the description of you the one you would have written? Both halves matter, and the second half is the one most teams never check.",
        ],
      },
      {
        heading: "What genuinely changes: how you measure",
        body: [
          "Rank tracking does not transfer. Assistants are non-deterministic — the same prompt can produce different sources on consecutive runs — so a single observation tells you nothing.",
          "What works is sampling. Fix a set of buyer prompts, run them across the major assistants on a schedule, and record how often you are cited, what you are cited for, and who is cited instead. Trends across weeks are meaningful; any individual response is noise.",
          "Pair that with the boring stuff that still works: branded search volume, direct traffic, and whether your commercial pages are still earning visits. Generative answers reduce clicks on informational queries whether or not you invest — the response is to be the cited brand in those answers and keep your commercial pages sharp.",
        ],
      },
      {
        heading: "What this means for sequencing",
        body: [
          "If your technical foundation is weak, fix it first. It is the shared dependency for all three, and it is the only part with predictable returns.",
          "If your content is thin, AEO and GEO will not rescue it. A model summarising your category has no incentive to quote a page with nothing specific in it.",
          "If both are solid, the incremental AEO and GEO work is mostly restructuring what you already know into answerable units, building corroboration, and standing up the measurement. That is a quarter of work, not a replatform.",
          "And if someone offers you guaranteed placement in AI Overviews, walk. There is no submission process and no ads product for it.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is SEO dead because of AI answers?",
        answer:
          "No, but the metric moved. The technical and editorial work that earns rankings is the same work that earns citations — clean structure, real expertise, crawlable markup. What changes is that you now also measure citation share across assistants, and you accept that informational queries will send fewer clicks regardless of what you do.",
      },
      {
        question: "Should we do AEO and GEO separately?",
        answer:
          "In practice they run together, because roughly 80% of the work is shared. We separate them in reporting rather than in delivery: AEO reporting tracks citation on direct questions, GEO reporting tracks presence and framing inside category-level summaries.",
      },
      {
        question: "How long before AEO work shows up?",
        answer:
          "Structural changes can register within weeks, because engines re-crawl and re-embed content on a faster cycle than classic ranking updates settle. Building the corroborating signals that make an engine confident enough to cite you takes a quarter or more, same as authority-building always has.",
      },
    ],
    related: [
      { name: "AEO — Answer Engine Optimization", href: "/digital-marketing/aeo-answer-engine-optimization" },
      { name: "GEO — Generative Engine Optimization", href: "/digital-marketing/geo-generative-engine-optimization" },
      { name: "SEO & Content Strategy", href: "/digital-marketing/seo-content-strategy" },
    ],
  },
  {
    slug: "product-led-seo",
    title: "Product-led SEO: when the product is the content",
    metaTitle: "Product-Led SEO: When the Product Is the Content",
    metaDescription:
      "Product-led SEO turns what your product knows into pages worth ranking. How to tell if you have the data — and when it quietly becomes a liability.",
    excerpt:
      "Blog posts compete with everyone. Pages generated from something only your product knows compete with almost nobody. The catch is that most companies do not have the data they think they do.",
    published: "2026-09-18",
    readingMinutes: 8,
    category: "Search",
    intro: [
      "Most content strategies converge on the same shape: a blog, a cadence, and a topic map that any competent competitor could reproduce in an afternoon.",
      "Product-led SEO is the alternative — turning what your product already knows into pages that rank, and that nobody can copy without rebuilding your product. When it works it is the most durable organic channel available. When it fails it produces tens of thousands of near-identical pages and a manual action.",
    ],
    sections: [
      {
        heading: "What it actually is",
        body: [
          "A page whose value comes from the product's data rather than from someone's opinion. A pricing comparison generated from real transactions. A directory built from a marketplace's inventory. A benchmark page generated from aggregated usage. A template gallery where each template is a real, usable artefact.",
          "The test is simple: could a competitor write this page with a good freelancer and a week? If yes, it is a blog post. If it requires your data to exist at all, it is product-led.",
        ],
      },
      {
        heading: "Why it compounds",
        body: [
          "These pages target the long tail of specific, high-intent queries — the ones with low volume individually and enormous volume collectively. Nobody writes a hand-crafted article for each because the economics do not work.",
          "They also improve on their own. As your product accumulates data, the pages get more accurate and more complete without anyone editing them, which is the opposite of a blog archive quietly decaying.",
          "And they are unusually well suited to being cited by assistants, because they contain specific, structured, verifiable claims rather than general advice.",
        ],
      },
      {
        heading: "The failure mode nobody warns you about",
        body: [
          "The moment you can generate pages programmatically, you can generate bad ones at scale. The pattern is always the same: a template, a thin data source, and forty thousand URLs that differ by one variable.",
          "Search engines have been explicit about this for years, and generative engines are, if anything, less forgiving — a page with nothing specific to say is not going to be the source of an answer.",
          "The discipline is to publish only the pages where you genuinely have enough data to be useful, and to suppress the rest. That usually means shipping a fraction of the URLs the template could theoretically produce, and holding that line when someone points out that more pages would mean more traffic.",
        ],
      },
      {
        heading: "How to tell whether you have the data",
        body: [
          "Pick the twenty most valuable variants your template would generate. Build those twenty by hand, honestly, using only real data. If a third of them are embarrassing, you do not have the data yet — you have a template and an aspiration.",
          "Check coverage before committing: how many variants clear your quality bar today, and how does that grow as the product does? A page type that only works for your top 200 records is still worth building; it just should not generate 20,000 URLs.",
          "Decide the suppression rule before launch, not after the traffic drops. Minimum data thresholds, noindex below them, and a re-evaluation as records accumulate.",
        ],
      },
      {
        heading: "Where it fits alongside everything else",
        body: [
          "Product-led SEO is not a replacement for the commercial pages that convert, or for the expertise content that builds the case for your category. It is the layer underneath — scale and specificity that editorial cannot reach.",
          "It also needs engineering, which is the real reason most agencies do not offer it. The page type is a product surface: it needs a data model, rendering, internal linking, monitoring and a suppression rule. Treating it as a content deliverable is how it ends up half-built.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is this different from programmatic SEO?",
        answer:
          "Programmatic SEO describes the mechanism — generating pages from a template and a dataset. Product-led SEO describes where the dataset comes from: your own product. You can do programmatic SEO with scraped or licensed data, and plenty of people do; it is just far easier to replicate and far weaker as a moat.",
      },
      {
        question: "How many pages should we launch with?",
        answer:
          "Fewer than the template allows. Launch the variants that clear a real quality threshold, monitor indexation and engagement, then expand. Publishing the full set on day one removes your ability to tell whether the page type works or whether you simply flooded the index.",
      },
      {
        question: "Does this work for B2B SaaS with little public data?",
        answer:
          "Sometimes, using aggregated and anonymised benchmarks rather than record-level pages. If the aggregate is genuinely interesting — real usage patterns, real pricing distributions — it works. If the only honest output is a generic definition page, the answer is that you do not have the data for this yet.",
      },
    ],
    related: [
      { name: "SEO & Content Strategy", href: "/digital-marketing/seo-content-strategy" },
      { name: "Custom Software Development", href: "/software-development/custom-software-development" },
      { name: "Advanced Analytics", href: "/digital-marketing/advanced-analytics" },
    ],
  },
  {
    slug: "marketing-automation-stack-by-stage",
    title: "The marketing automation stack, by stage",
    metaTitle: "Marketing Automation Stack by Stage | Motion 8 Agency",
    metaDescription:
      "What to actually run at pre-seed, Series A and Series B — and the expensive mistake of buying the stack you will need in two years before you need it.",
    excerpt:
      "Most automation problems are not tooling problems. They are a company running Series B tooling on pre-seed process, or the reverse.",
    published: "2026-09-18",
    readingMinutes: 7,
    category: "Lifecycle",
    intro: [
      "There is a predictable moment in a company's life when someone buys an enterprise marketing automation platform, and a second predictable moment, roughly nine months later, when everyone agrees it is not being used properly.",
      "The tooling is rarely the problem. The mismatch between tooling and process is. Here is what is worth running at each stage, and what to deliberately not buy yet.",
    ],
    sections: [
      {
        heading: "Pre-seed and seed: one list, one source of truth",
        body: [
          "You need somewhere to put people, somewhere to see deals, and the ability to send an email that does not come from a personal inbox. That is genuinely it.",
          "A lightweight CRM and an email tool are enough. The single highest-value thing at this stage is deciding what a lead, an opportunity and a customer mean, and writing it down. Every automation you build later inherits those definitions, and re-deriving them at Series A is far more expensive than agreeing them now.",
          "Deliverability setup — SPF, DKIM and DMARC — belongs here too. It is an afternoon of work and it prevents a category of problem that is miserable to diagnose later.",
        ],
      },
      {
        heading: "Series A: the lifecycle becomes real",
        body: [
          "This is where flows earn their keep: onboarding sequences, trial nudges, re-engagement, and handover rules between marketing and sales that both sides actually agreed to.",
          "It is also where lead scoring usually gets introduced too early. Scoring is only useful once you have enough closed-won and closed-lost history to know which behaviours predict anything. Before that it is a formula someone invented in a meeting, and it will route your best leads to the wrong place with great confidence.",
          "Pick the platform you can staff. A capable tool your one marketer knows well beats a powerful one nobody can configure without a contractor.",
        ],
      },
      {
        heading: "Series B and beyond: the integration problem",
        body: [
          "By now the constraint is rarely the marketing tool. It is that product data, billing data and CRM data disagree, and every report requires someone to reconcile them by hand.",
          "The fix is architectural: a warehouse as the source of truth, models that define the metrics once, and tools that read from it rather than each maintaining a private version of the customer. This is the point where the automation platform stops being the centre of the stack and becomes one consumer of it.",
          "It is also the point where a migration may genuinely be warranted — but for integration and data-model reasons, not because a competitor's tool has a nicer campaign builder.",
        ],
      },
      {
        heading: "The mistakes that repeat at every stage",
        body: [
          "Buying ahead of process. An enterprise platform does not create lifecycle discipline; it makes the absence of it more expensive.",
          "Automating a broken process faster. If the handover between marketing and sales is unclear, automation distributes the ambiguity at speed.",
          "Building flows on unclean data. Deduplication and field discipline are unglamorous and they determine whether any of the rest works.",
          "No owner. A stack with no named owner degrades within two quarters — fields drift, flows conflict, and nobody is sure which of the three welcome emails is live.",
        ],
      },
      {
        heading: "A reasonable default",
        body: [
          "Start with the smallest stack that covers capture, storage and sending. Write the lifecycle definitions down before you automate against them. Add scoring only when you have outcome history to calibrate it. Move to a warehouse-backed model when reconciliation starts costing real hours.",
          "And whenever someone proposes a new tool, ask which existing tool it replaces. If the answer is none, you are adding an integration surface, not a capability.",
        ],
      },
    ],
    faqs: [
      {
        question: "HubSpot, Klaviyo or Customer.io?",
        answer:
          "Klaviyo for ecommerce lifecycle, where the catalogue and purchase data are the centre of gravity. HubSpot where marketing and sales need one shared object model and the team is non-technical. Customer.io where behaviour is driven by product events and you have engineering capacity to instrument them properly. Any of the three can be the wrong answer if nobody on the team can operate it.",
      },
      {
        question: "When should we hire versus outsource this?",
        answer:
          "Outsource the build — architecture, flows, integrations — because it is intermittent, specialised work. Hire for the ongoing operation once there are enough live campaigns that someone needs to own them daily. Reversing those two is the common and expensive mistake.",
      },
      {
        question: "Is lead scoring worth it?",
        answer:
          "Once you have outcome history, yes. Before that, a simple fit-based rule everyone understands beats a behavioural model calibrated on guesses. The value of scoring comes from calibration, and calibration requires closed deals to learn from.",
      },
    ],
    related: [
      { name: "Marketing Automation & Email", href: "/digital-marketing/marketing-automation-email" },
      { name: "Advanced Analytics", href: "/digital-marketing/advanced-analytics" },
      { name: "Workflow Automation", href: "/ai-automation/workflow-automation" },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((post) => post.slug === slug);
