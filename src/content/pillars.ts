/**
 * The service taxonomy. One source of truth for: the Home pillar strip, the
 * pillar hub pages, every service page, the nav mega-menus, and sitemap.ts.
 * Adding a service here creates its URL and its sitemap entry.
 */

export type Service = {
  slug: string;
  name: string;
  /** One line, used on pillar-hub cards and the Home strip. */
  blurb: string;
  /** Rendered in blue as a "Featured" service. */
  featured?: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  includes: string[];
  faqs: { question: string; answer: string }[];
};

export type Pillar = {
  slug: string;
  index: string;
  name: string;
  /** Shorter label for nav and breadcrumbs. */
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  /** Sits under the pillar card heading on Home. */
  blurb: string;
  eyebrow: string;
  stats: { value: string; label: string }[];
  process: { num: string; title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  services: Service[];
};

const DM_PROCESS = [
  { num: "01", title: "Audit", body: "Two weeks inside the funnel, the spend and the analytics you already have." },
  { num: "02", title: "Structure", body: "Channel mix, measurement model and a roadmap with owners against each line." },
  { num: "03", title: "Publish", body: "Campaigns, content and flows shipped in two-week increments." },
  { num: "04", title: "Track", body: "Weekly reporting against pipeline, so cuts and doubles-down are obvious." },
];

const BUILD_PROCESS = [
  { num: "01", title: "Audit", body: "We map the product, the stack and the constraints before a line is written." },
  { num: "02", title: "Structure", body: "Architecture, scope and a release plan you can hold us to." },
  { num: "03", title: "Publish", body: "Shipped in two-week increments, demoed against real usage." },
  { num: "04", title: "Track", body: "Instrumentation, uptime and iteration once it is live." },
];

const AI_PROCESS = [
  { num: "01", title: "Audit", body: "Where the manual hours actually go, and which of them a model can carry." },
  { num: "02", title: "Structure", body: "Data access, evaluation criteria and the guardrails before the build." },
  { num: "03", title: "Publish", body: "One workflow live and measured before the second one starts." },
  { num: "04", title: "Track", body: "Accuracy, cost per run and hours returned, reported monthly." },
];

export const PILLARS: Pillar[] = [
  {
    slug: "digital-marketing",
    index: "01",
    name: "Digital Marketing",
    shortName: "Digital Marketing",
    eyebrow: "Pillar 01 — 10 services",
    metaTitle: "Digital Marketing Services | Motion 8 Agency",
    metaDescription:
      "Performance marketing, SEO, AEO and GEO, automation, CRO and analytics — ten services run by one accountable team inside your growth infrastructure.",
    h1: "Demand that compounds, not campaigns that expire.",
    lede: "Paid, organic, lifecycle and the analytics that tell you which of them is actually working. Run by the same team that builds your product, so the funnel and the thing it sells stop drifting apart.",
    blurb:
      "Demand that compounds — paid, organic, lifecycle, and the analytics to tell which of them is actually working.",
    stats: [
      { value: "10", label: "Services in this pillar" },
      { value: "1", label: "Strategist accountable" },
      { value: "2 wk", label: "Audit to roadmap" },
      { value: "7", label: "Countries served" },
    ],
    process: DM_PROCESS,
    faqs: [
      {
        question: "What does a digital marketing agency actually own?",
        answer:
          "In our model, the channel strategy, the execution and the measurement all sit with one team. That means the person deciding where spend goes is the same person who sees what closed, and there is nobody to point at when the numbers disagree. Engagements typically start with an audit, then a roadmap covering the three or four services that move your pipeline first.",
      },
      {
        question: "How is AEO different from SEO?",
        answer:
          "SEO optimizes for a ranked list of links; answer engine optimization optimizes for being the source an assistant quotes when it composes a direct answer. The technical work overlaps — clean markup, clear structure, real expertise on the page — but the target changes from position one to citation, and the measurement moves from rank tracking to answer share across assistants.",
      },
      {
        question: "How soon do results show?",
        answer:
          "Paid and CRO changes usually register inside the first month because the traffic already exists. SEO, AEO and PR compound over a quarter or more. We sequence engagements so something measurable lands early while the slower assets are being built, and the weekly report shows both tracks separately rather than averaging them into one flattering number.",
      },
    ],
    services: [
      {
        slug: "performance-marketing",
        name: "Performance Marketing",
        blurb: "Paid search, social and retargeting managed against pipeline, not platform ROAS.",
        metaTitle: "Performance Marketing Agency | Motion 8",
        metaDescription:
          "Paid search, paid social and retargeting managed against pipeline and revenue rather than platform ROAS — run by the team that also builds your product.",
        h1: "Spend measured against pipeline, not platform ROAS.",
        lede: "Platform dashboards are optimistic by design. We run paid against the revenue that actually landed, which usually means spending less in more places that work.",
        includes: [
          "Paid search, paid social and retargeting across Google, Meta and LinkedIn",
          "Creative testing cycles with named hypotheses, not shuffled assets",
          "Server-side conversion tracking so the platform sees real outcomes",
          "Weekly pipeline reporting that reconciles ad spend to closed revenue",
        ],
        faqs: [
          {
            question: "What budget do you work with?",
            answer:
              "Most engagements start somewhere between $10k and $150k a month in media. Below that, the testing cycles take too long to produce signal and you are usually better served by fixing conversion and organic first — we will say so rather than take the retainer.",
          },
          {
            question: "Do you manage the creative too?",
            answer:
              "Yes. Creative is the largest lever in paid social, so it sits inside the engagement rather than waiting on a separate agency. Concepts are briefed against the positioning work, produced in-house, and retired on performance rather than on a calendar.",
          },
          {
            question: "How is this reported?",
            answer:
              "One weekly report tying spend to pipeline and closed revenue by channel, plus the tests that ran and what we concluded. Platform metrics like ROAS and CPM are there as diagnostics, not headlines.",
          },
        ],
      },
      {
        slug: "seo-content-strategy",
        name: "SEO & Content Strategy",
        blurb: "Technical fixes, topical authority and content built for the buyer, not the crawler.",
        metaTitle: "SEO & Content Strategy Services | Motion 8",
        metaDescription:
          "Technical SEO, topical authority and content strategy built for buyers and the engines that cite them — structured so AEO and GEO compound off the same work.",
        h1: "Content that ranks because it is worth citing.",
        lede: "Technical health, a topic map that matches how your buyers actually search, and pages written by people who understand the product. The same structure feeds answer engines.",
        includes: [
          "Technical audit: crawl, index coverage, Core Web Vitals, internal linking",
          "Topic and cluster mapping against real buyer queries",
          "Editorial production with subject-matter review before publish",
          "Schema and structure that doubles as AEO and GEO groundwork",
        ],
        faqs: [
          {
            question: "How long before SEO shows results?",
            answer:
              "Technical fixes can move impressions within weeks. New content competing on commercial terms generally takes one to two quarters to compound. We report leading indicators — crawl health, coverage, early ranking movement — so the quarter is not a black box.",
          },
          {
            question: "Do you write the content or just the strategy?",
            answer:
              "Both. Strategy without production stalls, and production without subject-matter input produces the generic content that stopped working years ago. Drafts go through someone who understands the product before they publish.",
          },
          {
            question: "Does SEO still matter with AI answers?",
            answer:
              "The work matters more, the metric changes. Clean structure, genuine expertise and crawlable markup are what get you cited inside AI answers, so the technical and editorial foundation carries over — we just measure citation share alongside rankings.",
          },
        ],
      },
      {
        slug: "marketing-automation-email",
        name: "Marketing Automation & Email",
        blurb: "Lifecycle flows, scoring and CRM hygiene so leads stop dying in the inbox.",
        metaTitle: "Marketing Automation & Email Services | Motion 8",
        metaDescription:
          "Lifecycle flows, lead scoring and CRM hygiene built so leads convert instead of going stale — implemented in HubSpot, Klaviyo or your existing stack.",
        h1: "The follow-up that happens whether anyone remembers or not.",
        lede: "Most teams lose more pipeline to silence after the form fill than to anything before it. Lifecycle flows, scoring and clean CRM data fix that quietly.",
        includes: [
          "Lifecycle mapping from first touch through expansion",
          "Flow build in HubSpot, Klaviyo, Customer.io or your current platform",
          "Lead scoring and routing rules agreed with sales, not invented for them",
          "CRM hygiene: deduplication, field discipline, reporting that reconciles",
        ],
        faqs: [
          {
            question: "Which platforms do you work in?",
            answer:
              "HubSpot, Klaviyo, Customer.io, Braze and Salesforce Marketing Cloud most often, plus whatever you already pay for. We would rather make your current stack work than sell you a migration you did not ask for.",
          },
          {
            question: "Can you fix a messy CRM?",
            answer:
              "Yes, and it is usually step one. Deduplication, field standardisation and a lifecycle definition everyone agrees on come before new automation, because flows built on bad data just distribute the mess faster.",
          },
          {
            question: "Who writes the emails?",
            answer:
              "We do, against the positioning work. Copy, templates and the sending infrastructure — including deliverability setup like SPF, DKIM and DMARC — are part of the engagement.",
          },
        ],
      },
      {
        slug: "conversion-rate-optimization",
        name: "Conversion Rate Optimization",
        blurb: "Research, hypotheses and tests run on the pages that carry real traffic.",
        metaTitle: "Conversion Rate Optimization (CRO) Services | Motion 8",
        metaDescription:
          "Research-led CRO: session analysis, prioritised hypotheses and statistically honest tests run on the pages that actually carry your traffic.",
        h1: "Fix the pages traffic already lands on.",
        lede: "Buying more traffic to a page that leaks is the most expensive way to grow. CRO is the cheapest compounding lever most teams leave alone.",
        includes: [
          "Quantitative and qualitative research: analytics, sessions, user interviews",
          "Prioritised hypothesis backlog scored on impact and effort",
          "A/B and multivariate testing with pre-registered success criteria",
          "Implementation handled by the same team that builds the site",
        ],
        faqs: [
          {
            question: "How much traffic do I need to test?",
            answer:
              "Roughly 10,000 sessions and a few hundred conversions a month on the target page to reach significance in a sensible timeframe. Below that we run qualitative research and ship considered changes rather than pretending an underpowered test proved something.",
          },
          {
            question: "What lifts are realistic?",
            answer:
              "Anyone quoting a guaranteed percentage is guessing. Across engagements, compounding single-digit and low double-digit wins on high-traffic pages are the norm; the occasional structural change does more. We report losing tests too, because those are what stop bad ideas from shipping.",
          },
          {
            question: "Do you need developer time from us?",
            answer:
              "No. Test implementation and the winning variant both get built by our team, which is why fixes ship in days rather than sitting in someone else's sprint queue.",
          },
        ],
      },
      {
        slug: "social-media-management",
        name: "Social Media Management",
        blurb: "Editorial, production and community handled as a channel, not a chore.",
        metaTitle: "Social Media Management Services | Motion 8",
        metaDescription:
          "Editorial planning, production and community management run as a demand channel with real measurement — not a posting schedule someone fills in on Fridays.",
        h1: "A channel with a strategy, not a posting calendar.",
        lede: "Social works when it has an editorial point of view and someone accountable for what it returns. We run both.",
        includes: [
          "Editorial strategy and a calendar tied to campaigns, not filler",
          "Production: static, motion and short-form video",
          "Community management and response handling within agreed SLAs",
          "Reporting on reach, engagement and the pipeline it actually sources",
        ],
        faqs: [
          {
            question: "Which platforms do you cover?",
            answer:
              "LinkedIn, Instagram, X, TikTok and YouTube most often. We recommend concentrating on two done properly rather than five done thinly, and the recommendation follows where your buyers actually are.",
          },
          {
            question: "Do you handle video production?",
            answer:
              "Yes — short-form and motion are produced in-house, which is also why social and paid creative can share a pipeline instead of duplicating work.",
          },
          {
            question: "How do you measure social?",
            answer:
              "Engagement is a diagnostic, not the goal. We track assisted pipeline and branded search lift alongside the platform metrics, and we are honest that social's contribution is often upstream of the last click.",
          },
        ],
      },
      {
        slug: "aeo-answer-engine-optimization",
        name: "AEO — Answer Engine Optimization",
        blurb: "Structured content and schema so assistants quote you when buyers ask.",
        featured: true,
        metaTitle: "AEO — Answer Engine Optimization Services | Motion 8",
        metaDescription:
          "Answer engine optimization: structured content, schema and genuine expertise so ChatGPT, Perplexity and AI Overviews cite you when buyers ask.",
        h1: "Be the source the assistant quotes.",
        lede: "Buyers increasingly get one composed answer instead of ten blue links. AEO is the work that makes your page the one it was composed from.",
        includes: [
          "Question-level content architecture mapped to real buyer prompts",
          "Schema implementation — FAQPage, Organization, Product, HowTo",
          "Entity and citation building so engines can corroborate your claims",
          "Answer-share tracking across ChatGPT, Perplexity, Gemini and AI Overviews",
        ],
        faqs: [
          {
            question: "How is AEO different from SEO?",
            answer:
              "SEO competes for a position in a ranked list; AEO competes to be the source an assistant quotes when it writes the answer. The foundations overlap — clean markup, clear structure, real expertise — but the unit of success changes from a ranking to a citation, and measurement moves to answer share across assistants.",
          },
          {
            question: "Can you actually measure it?",
            answer:
              "Yes, though it is younger and noisier than rank tracking. We sample a fixed set of buyer prompts across the major assistants on a schedule and track how often you are cited, what you are cited for, and who is cited instead. Trends over weeks are meaningful; any single response is not.",
          },
          {
            question: "Is this just schema markup?",
            answer:
              "Schema helps engines parse you, but it does not make you worth quoting. The heavier work is structuring genuine expertise into answerable units and building the corroborating signals — mentions, consistent entity data, real authorship — that make an assistant confident enough to name you.",
          },
        ],
      },
      {
        slug: "geo-generative-engine-optimization",
        name: "GEO — Generative Engine Optimization",
        blurb: "Visibility inside AI answers and overviews, measured and iterated like SEO.",
        featured: true,
        metaTitle: "GEO — Generative Engine Optimization Services | Motion 8",
        metaDescription:
          "Generative engine optimization: earn presence inside AI Overviews and assistant answers, measured and iterated with the same discipline as SEO.",
        h1: "Visibility inside the answer, not just under it.",
        lede: "Generative results compress the funnel. GEO is how you stay present when the engine summarises your category instead of listing it.",
        includes: [
          "Prompt-space research: the questions generative engines answer in your category",
          "Content shaped for extraction — claims, evidence, comparisons, specifics",
          "Third-party presence building where engines source corroboration",
          "Monthly visibility benchmarking against named competitors",
        ],
        faqs: [
          {
            question: "How is GEO different from AEO?",
            answer:
              "They overlap heavily and we usually run them together. The distinction we use: AEO targets being the cited source in a direct answer, GEO targets presence and framing inside longer generated summaries and overviews — including being represented fairly when the engine describes your category.",
          },
          {
            question: "Can you guarantee placement in AI Overviews?",
            answer:
              "No, and neither can anyone else — there is no submission process and no ads product for it. What is controllable is whether your content is extractable, corroborated and specific enough to be worth including, which is what the work targets.",
          },
          {
            question: "Does this cannibalise our search traffic?",
            answer:
              "Generative answers do reduce clicks on informational queries; that is happening whether or not you invest. The response is to be the cited brand in those answers and to make sure your commercial pages still earn the visit, which is how we sequence the work.",
          },
        ],
      },
      {
        slug: "advanced-analytics",
        name: "Advanced Analytics",
        blurb: "One data model, clean attribution, dashboards leadership actually opens.",
        metaTitle: "Advanced Marketing Analytics Services | Motion 8",
        metaDescription:
          "One data model across product, marketing and sales — clean attribution, server-side tracking and dashboards leadership actually opens.",
        h1: "One number everyone agrees on.",
        lede: "Most reporting disagreements are data model problems, not judgement problems. We fix the model first.",
        includes: [
          "Tracking plan and implementation, including server-side collection",
          "Warehouse-backed data model unifying product, marketing and CRM",
          "Attribution appropriate to your sales cycle, with its limits stated",
          "Dashboards built for the decisions they inform",
        ],
        faqs: [
          {
            question: "What does the stack look like?",
            answer:
              "Typically GA4 plus server-side collection into BigQuery or Snowflake, modelled with dbt, surfaced in Looker Studio or Metabase. We fit what you have where it is reasonable rather than mandating a rebuild.",
          },
          {
            question: "Is multi-touch attribution worth it?",
            answer:
              "For long B2B cycles it is directional at best, and we will say so. We usually pair a simple, well-understood model with incrementality testing on the channels carrying real spend — that combination beats a precise-looking model nobody trusts.",
          },
          {
            question: "Can you fix tracking that is already broken?",
            answer:
              "That is the common starting point. Audit, tracking plan, reimplementation, then a reconciliation period where old and new numbers run side by side so the change in reported performance is explainable.",
          },
        ],
      },
      {
        slug: "public-relations",
        name: "Public Relations",
        blurb: "Earned coverage and analyst presence tied to the positioning, not vanity hits.",
        metaTitle: "B2B Public Relations Services | Motion 8",
        metaDescription:
          "Earned media, analyst relations and executive visibility tied to your positioning and pipeline — not a clipping report of vanity coverage.",
        h1: "Coverage that supports the position you are building.",
        lede: "PR earns its place when it reinforces the category story the rest of the funnel is telling — and when the coverage is somewhere your buyers actually read.",
        includes: [
          "Narrative and message house built from the positioning work",
          "Media relations with outlets your buyers read, not the largest list",
          "Analyst and industry relations programmes",
          "Executive visibility: bylines, podcasts, speaking",
        ],
        faqs: [
          {
            question: "Can you guarantee coverage?",
            answer:
              "No. Any agency guaranteeing earned placements is either buying it — in which case it is advertising and should be labelled as such — or overpromising. We commit to activity levels, pitch quality and a narrative worth covering.",
          },
          {
            question: "How is PR measured?",
            answer:
              "Share of voice against named competitors, quality of placement weighted by audience fit, branded search lift, and assisted pipeline. Not raw clipping counts or advertising value equivalency, which we do not use.",
          },
          {
            question: "Do we need news to do PR?",
            answer:
              "Funding and launches help, but most sustained programmes run on point of view, proprietary data and customer outcomes. If there is genuinely no story yet, we will say to wait rather than burn relationships on thin pitches.",
          },
        ],
      },
      {
        slug: "brand-positioning",
        name: "Brand & Positioning",
        blurb: "The story, the category and the words every other service then repeats.",
        metaTitle: "Brand & Positioning Strategy | Motion 8",
        metaDescription:
          "Category definition, positioning and messaging architecture — the decisions every campaign, page and sales call downstream then repeats consistently.",
        h1: "Decide what you are before you buy attention for it.",
        lede: "Positioning is the cheapest lever and the one most often skipped. Everything downstream — ads, content, sales decks — gets easier or harder based on it.",
        includes: [
          "Category and competitive landscape analysis",
          "Positioning statement, value proposition and proof architecture",
          "Messaging hierarchy by audience and funnel stage",
          "Verbal identity and the guidelines that keep it consistent",
        ],
        faqs: [
          {
            question: "How long does positioning work take?",
            answer:
              "Four to six weeks typically: research and customer interviews, a working session with your leadership, then the messaging architecture and guidelines. Longer if the category itself is genuinely unsettled.",
          },
          {
            question: "Do you do visual identity too?",
            answer:
              "Verbal identity always. Visual identity we handle through the UI/UX and design side of the studio when it is in scope — the two are briefed together so they do not drift.",
          },
          {
            question: "Why start here?",
            answer:
              "Because every other service repeats these words. Running paid, SEO and PR against unsettled positioning means paying three times to say something you will change in a quarter.",
          },
        ],
      },
    ],
  },
  {
    slug: "software-development",
    index: "02",
    name: "Software & Blockchain Development",
    shortName: "Software & Blockchain Dev",
    eyebrow: "Pillar 02 — 11 services",
    metaTitle: "Software & Blockchain Development Services | Motion 8",
    metaDescription:
      "Custom software, web and mobile apps, MVPs, ecommerce, DevOps and on-chain products — shipped in weeks by the team that planned them.",
    h1: "The product itself, shipped in weeks.",
    lede: "Web, mobile and on-chain, built by the same team that planned the roadmap and runs the growth engine around it. No translation layer between strategy and the build.",
    blurb:
      "The product itself — web, mobile, on-chain — shipped in weeks by the same team that planned it.",
    stats: [
      { value: "11", label: "Services in this pillar" },
      { value: "2 wk", label: "Release increments" },
      { value: "30", label: "Engineers and designers" },
      { value: "7", label: "Countries served" },
    ],
    process: BUILD_PROCESS,
    faqs: [
      {
        question: "Do you work with our existing engineering team?",
        answer:
          "Often, yes. We run as an embedded squad alongside in-house engineers, or as the whole team where there isn't one yet. What stays constant is one accountable lead and a release cadence you can plan around, rather than a rotating bench of contractors.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You do, from the first commit. Repositories sit in your organisation, infrastructure runs in your accounts, and handover documentation is written as we go rather than assembled in a panic at the end of the engagement.",
      },
      {
        question: "How do you price builds?",
        answer:
          "Discovery is fixed-price. Delivery is usually a monthly squad rate, because fixed-bid full builds reward padding the estimate and punish learning anything mid-project. Where a genuinely fixed scope exists — a defined integration, a migration — we will quote it fixed.",
      },
    ],
    services: [
      {
        slug: "custom-software-development",
        name: "Custom Software Development",
        blurb: "Internal tools and platforms built around how your business actually runs.",
        metaTitle: "Custom Software Development Services | Motion 8",
        metaDescription:
          "Bespoke platforms and internal tools built around your actual operations — architected for the load you expect, owned by you from the first commit.",
        h1: "Software shaped to the business, not the other way round.",
        lede: "When the off-the-shelf tool forces a process nobody believes in, custom is cheaper than the workaround it replaces.",
        includes: [
          "Discovery: process mapping, constraints and a build-or-buy recommendation",
          "Architecture and technical design signed off before delivery starts",
          "Delivery in two-week increments against working software",
          "Documentation, handover and optional ongoing support",
        ],
        faqs: [
          {
            question: "What stack do you build on?",
            answer:
              "TypeScript across the board most often — React or Next.js on the front end, Node or Python services behind it, Postgres, deployed to AWS, GCP or Vercel. We will work in your existing stack where one exists rather than rewriting for preference.",
          },
          {
            question: "Should we build or buy?",
            answer:
              "Buy when the process is genuinely standard; build when the process is the advantage. Discovery includes an honest recommendation, and we have told clients to buy the SaaS and skip the engagement more than once.",
          },
          {
            question: "What happens after launch?",
            answer:
              "Either your team takes it — with documentation and a handover period — or we hold a support retainer covering maintenance, dependency updates and iteration. Both are priced up front so the decision isn't made under pressure.",
          },
        ],
      },
      {
        slug: "web-mobile-app-development",
        name: "Web & Mobile App Development",
        blurb: "Production web and native apps built to ship, not to demo.",
        metaTitle: "Web & Mobile App Development | Motion 8",
        metaDescription:
          "Production web and mobile applications — React, Next.js, React Native and Swift — built for real usage, instrumented, and shipped in two-week increments.",
        h1: "Apps built for production, not for the demo.",
        lede: "The gap between a working prototype and something you can put a marketing budget behind is mostly the unglamorous part. We build for that part.",
        includes: [
          "Web applications in React and Next.js, server-rendered where it matters",
          "Native and cross-platform mobile: React Native, Swift, Kotlin",
          "Accessibility and performance budgets set before the build",
          "App store submission, release management and crash monitoring",
        ],
        faqs: [
          {
            question: "Native or cross-platform?",
            answer:
              "React Native covers most cases and halves the cost of maintaining two codebases. Native is the right call when you depend on platform-specific hardware, heavy graphics or background behaviour — we will tell you which you are, at discovery.",
          },
          {
            question: "How long does an app take?",
            answer:
              "A focused MVP is typically 8 to 14 weeks. A full production application with multiple user types, integrations and admin tooling runs a quarter or more. You get working software every two weeks either way.",
          },
          {
            question: "Do you handle app store submission?",
            answer:
              "Yes, including review responses and the release process. Store rejections are usually predictable, so we design against the guidelines rather than discovering them on submission day.",
          },
        ],
      },
      {
        slug: "mvp-rapid-prototyping",
        name: "MVP & Rapid Prototyping",
        blurb: "The smallest honest version of the product, in front of real users fast.",
        metaTitle: "MVP Development & Rapid Prototyping | Motion 8",
        metaDescription:
          "Get the smallest honest version of your product in front of real users in weeks — scoped to answer one question, instrumented to actually answer it.",
        h1: "Ship the version that answers the question.",
        lede: "An MVP is not a cheap version of the whole product. It is the smallest thing that settles the riskiest assumption, built well enough to trust the answer.",
        includes: [
          "Assumption mapping: what has to be true for this to work",
          "Scope cut to the one question the build should answer",
          "6–10 week delivery to something real users can use",
          "Instrumentation so the result is measured, not argued about",
        ],
        faqs: [
          {
            question: "How fast can we launch?",
            answer:
              "Six to ten weeks for most MVPs. Faster than that usually means cutting the instrumentation or the auth, which is how you end up with a launch you cannot learn anything from.",
          },
          {
            question: "Will we have to rebuild it later?",
            answer:
              "Some of it, deliberately. We build the parts that carry user data and money properly, and accept throwaway work in the parts that exist to test a hypothesis — and we tell you which is which as we go.",
          },
          {
            question: "Do you work with pre-seed teams?",
            answer:
              "Yes, and with enterprises launching a new line. The constraint that matters is whether the question is clear, not the funding stage.",
          },
        ],
      },
      {
        slug: "ecommerce-development",
        name: "Ecommerce Development",
        blurb: "Storefronts built for conversion rate and catalogue reality.",
        metaTitle: "Ecommerce Development Services | Motion 8",
        metaDescription:
          "Custom and platform ecommerce builds — Shopify Plus, WooCommerce, BigCommerce, Magento and headless — built around conversion rate and real catalogue complexity.",
        h1: "Storefronts that hold up at catalogue scale.",
        lede: "Most ecommerce problems are not theme problems. They are catalogue, checkout and integration problems that the theme is hiding.",
        includes: [
          "Platform selection with the trade-offs written down",
          "Custom theme and headless storefront development",
          "ERP, PIM, OMS and payment integrations",
          "Migration with URL mapping and rank preservation",
        ],
        faqs: [
          {
            question: "Which platform should we use?",
            answer:
              "Shopify Plus for most DTC and mid-market catalogues, WooCommerce where WordPress content is the centre of gravity, BigCommerce for complex B2B pricing, Magento where deep customisation justifies the running cost. The recommendation comes with the trade-offs written down.",
          },
          {
            question: "Can you migrate without losing rankings?",
            answer:
              "Yes, with a full URL map, 301s, structured data carried across and a crawl comparison before and after. Some volatility for a few weeks is normal; permanent loss is a planning failure, not an inevitability.",
          },
          {
            question: "Do you do headless?",
            answer:
              "When it earns its cost — content-heavy catalogues, multi-region storefronts, unusual front-end requirements. For a standard catalogue it often adds complexity without adding revenue, and we will say so.",
          },
        ],
      },
      {
        slug: "ecommerce-maintenance",
        name: "Ecommerce Maintenance",
        blurb: "Ongoing platform care so peak season is not a gamble.",
        metaTitle: "Ecommerce Maintenance & Support | Motion 8",
        metaDescription:
          "Ongoing ecommerce support — updates, monitoring, performance work and peak-season readiness — so your store stops being a quarterly emergency.",
        h1: "The store still works in November.",
        lede: "Maintenance is unglamorous until checkout breaks on the highest-traffic day of the year. Then it is the only thing that matters.",
        includes: [
          "Platform, theme and dependency updates on a schedule",
          "Uptime, error and Core Web Vitals monitoring with alerting",
          "Conversion-path regression checks after every release",
          "Peak-season load planning and a rollback plan",
        ],
        faqs: [
          {
            question: "What does a retainer cover?",
            answer:
              "Scheduled updates, monitoring, bug fixes within agreed response times, and a block of hours for small improvements. Larger feature work is quoted separately so the retainer does not quietly become a queue.",
          },
          {
            question: "Do you support stores you did not build?",
            answer:
              "Yes, after an audit. We need to understand what is there — and flag anything genuinely unsafe — before taking responsibility for keeping it running.",
          },
          {
            question: "What are your response times?",
            answer:
              "Checkout-down is treated as a same-hour incident during business hours, with out-of-hours cover available. Everything else runs on an agreed severity ladder written into the contract.",
          },
        ],
      },
      {
        slug: "custom-plugins-app-development",
        name: "Custom Plugins & App Development",
        blurb: "Extensions and marketplace apps where the platform stops short.",
        metaTitle: "Custom Plugin & Marketplace App Development | Motion 8",
        metaDescription:
          "Custom plugins, extensions and marketplace apps for Shopify, WordPress and WooCommerce — built to platform review standards and maintained past launch.",
        h1: "When the platform stops short of what you need.",
        lede: "Every mature platform has a wall. Extensions are how you get past it without abandoning the ecosystem you rely on.",
        includes: [
          "Shopify apps, WordPress and WooCommerce plugins, browser extensions",
          "Public marketplace listings built to review guidelines",
          "Private and custom distribution for single-merchant needs",
          "Version support across platform releases",
        ],
        faqs: [
          {
            question: "Public app or private?",
            answer:
              "Private or custom distribution when it solves your own problem and you want it fast. Public listing when the extension is itself a product — that path adds review cycles, support obligations and a longer runway.",
          },
          {
            question: "Will it survive platform updates?",
            answer:
              "That is what the support arrangement is for. Platforms deprecate APIs on a published schedule; we track it for the extensions we maintain rather than finding out from a broken store.",
          },
          {
            question: "Can you take over an existing plugin?",
            answer:
              "Usually, after a code audit. Inherited extensions often carry security debt in how they handle credentials and webhooks, so that assessment comes before any feature work.",
          },
        ],
      },
      {
        slug: "ui-ux-design",
        name: "UI/UX Design",
        blurb: "Interface and product design that survives contact with engineering.",
        metaTitle: "UI/UX Design Services | Motion 8",
        metaDescription:
          "Product and interface design grounded in user research, delivered as a real design system that engineering can build from without reinterpretation.",
        h1: "Design that gets built the way it was drawn.",
        lede: "Design and engineering sit on the same team here, so the handoff is a conversation rather than a specification thrown over a wall.",
        includes: [
          "User research, journey mapping and usability testing",
          "Interface design across web, mobile and internal tooling",
          "Design system with tokens and documented components",
          "WCAG 2.2 AA accessibility built in rather than retrofitted",
        ],
        faqs: [
          {
            question: "Do you do design without the build?",
            answer:
              "Yes, and we will make the deliverable genuinely buildable — tokens, states, edge cases — rather than a set of beautiful screens that fall apart on the first real dataset.",
          },
          {
            question: "How much research is included?",
            answer:
              "Enough to stop the team designing for itself: typically five to eight user interviews, analytics review and a usability pass on the current product. More where the domain is unfamiliar.",
          },
          {
            question: "Is accessibility included?",
            answer:
              "WCAG 2.2 AA is the default standard, designed in from the start. Retrofitting accessibility after launch costs several times more and usually produces a worse result.",
          },
        ],
      },
      {
        slug: "devops-cloud-services",
        name: "DevOps & Cloud Services",
        blurb: "Pipelines, infrastructure and the monitoring that catches it first.",
        metaTitle: "DevOps & Cloud Infrastructure Services | Motion 8",
        metaDescription:
          "CI/CD pipelines, infrastructure as code, cloud cost control and observability — so deploys stop being events and you hear about incidents before customers do.",
        h1: "Deploys that stop being events.",
        lede: "Shipping weekly is an infrastructure decision before it is a cultural one. Pipelines, environments and observability are what make the cadence sustainable.",
        includes: [
          "CI/CD pipelines with automated testing and safe rollback",
          "Infrastructure as code in Terraform across AWS, GCP or Azure",
          "Observability: logging, tracing, alerting and on-call runbooks",
          "Cloud cost review and rightsizing",
        ],
        faqs: [
          {
            question: "Which cloud do you work with?",
            answer:
              "AWS most, then GCP and Azure, plus Vercel and Fly for application hosting. We work in whichever you are already committed to — migrating clouds is rarely the highest-value thing available.",
          },
          {
            question: "Can you reduce our cloud bill?",
            answer:
              "Usually, and the first pass is often substantial: idle resources, oversized instances, forgotten environments and unreviewed data transfer. We quantify it before recommending any architectural change.",
          },
          {
            question: "Do you provide on-call cover?",
            answer:
              "We can, under an agreed SLA, or we can set up the rotation, runbooks and alerting so your team runs it well. Alerting that pages nobody is worse than no alerting.",
          },
        ],
      },
      {
        slug: "blockchain-smart-contracts",
        name: "Blockchain & Smart Contracts",
        blurb: "Contracts written to be audited, not just to compile.",
        metaTitle: "Blockchain & Smart Contract Development | Motion 8",
        metaDescription:
          "Smart contract design, development and audit preparation on Ethereum, Solana and L2s — written to be reviewed, tested against adversarial cases, and upgraded safely.",
        h1: "Contracts written to be audited.",
        lede: "On-chain code is public, immutable and holds value. That changes how it has to be written, tested and reviewed — not just what it does.",
        includes: [
          "Contract architecture and tokenomics review",
          "Solidity and Rust development with adversarial test coverage",
          "Audit preparation and remediation with third-party firms",
          "Deployment, verification and upgrade strategy",
        ],
        faqs: [
          {
            question: "Which chains do you work on?",
            answer:
              "Ethereum and EVM L2s — Base, Arbitrum, Optimism — plus Solana. Chain choice should follow where your users and liquidity are, not where the grant is.",
          },
          {
            question: "Do you provide the audit?",
            answer:
              "No, and you should be wary of anyone who builds and audits the same contract. We prepare for audit, coordinate with independent firms like Trail of Bits or OpenZeppelin, and fix what they find.",
          },
          {
            question: "Can contracts be updated after deploy?",
            answer:
              "Only if you design for it — proxy patterns, timelocks, clear admin boundaries. Those choices are governance decisions as much as technical ones, so we make them explicitly at architecture rather than by default.",
          },
        ],
      },
      {
        slug: "web3-development",
        name: "Web3 Development",
        blurb: "On-chain products with an interface ordinary people can use.",
        metaTitle: "Web3 Product Development Services | Motion 8",
        metaDescription:
          "Full-stack Web3 products — wallet flows, indexing, dApp front ends and the fiat on-ramps that make on-chain products usable by ordinary customers.",
        h1: "On-chain products people can actually use.",
        lede: "The contract is the easy half. Making an on-chain product legible to someone who has never signed a transaction is the real work.",
        includes: [
          "dApp front ends with wallet connection and transaction states designed",
          "Indexing and subgraphs so reads are fast and reliable",
          "Fiat on-ramp and custody integrations",
          "Gas strategy, including sponsored and account-abstraction flows",
        ],
        faqs: [
          {
            question: "Do users need a wallet?",
            answer:
              "Increasingly not. Embedded wallets and account abstraction let people sign in with email and never see a seed phrase, with self-custody available for those who want it. Which model fits depends on your audience.",
          },
          {
            question: "How do you handle failed transactions?",
            answer:
              "As a first-class design problem. Pending, failed, reverted and replaced states all get designed and copywritten, because a silent failure holding someone's money is the fastest way to lose them permanently.",
          },
          {
            question: "Is this regulated?",
            answer:
              "Depending on what you are building and where, often yes. We build to the structure your counsel specifies — we are engineers, not your lawyers, and we will not pretend otherwise.",
          },
        ],
      },
      {
        slug: "dedicated-teams",
        name: "Dedicated Teams",
        blurb: "An embedded squad that stays long enough to know the codebase.",
        metaTitle: "Dedicated Development Teams | Motion 8",
        metaDescription:
          "A dedicated, embedded engineering squad with a named lead — continuity and context instead of a rotating bench of contractors.",
        h1: "The same people, long enough to matter.",
        lede: "Most outsourcing fails on continuity. A dedicated squad keeps the context that makes the second quarter faster than the first.",
        includes: [
          "Named engineers, designers and a delivery lead assigned to you",
          "Your rituals, your board, your definition of done",
          "Scale up or down with a notice period agreed in advance",
          "Direct communication with the people writing the code",
        ],
        faqs: [
          {
            question: "How is this different from staff augmentation?",
            answer:
              "Augmentation hands you individuals to manage. A dedicated team comes with its own delivery lead who is accountable for output, which is the difference between renting hands and buying progress.",
          },
          {
            question: "What is the minimum engagement?",
            answer:
              "Three months, because ramp-up costs make anything shorter bad value for both sides. Most run considerably longer.",
          },
          {
            question: "Which time zones do you cover?",
            answer:
              "Teams operate across India, the USA and the UAE, so we can guarantee a meaningful overlap window with US, UK, European and APAC hours. The overlap is agreed at contract rather than assumed.",
          },
        ],
      },
    ],
  },
  {
    slug: "ai-automation",
    index: "03",
    name: "AI & Automation",
    shortName: "AI & Automation",
    eyebrow: "Pillar 03 — 6 services",
    metaTitle: "AI & Automation Services | Motion 8 Agency",
    metaDescription:
      "Custom AI agents, workflow automation, LLM fine-tuning and RAG, predictive models and computer vision — wired into the systems you already run.",
    h1: "AI wired into the work, not bolted onto it.",
    lede: "Agents, automations and models connected to the systems you already run — scoped against hours returned and error rates, not demo appeal.",
    blurb:
      "The systems running behind the product — agents, automations, and models wired into what you already have.",
    stats: [
      { value: "6", label: "Services in this pillar" },
      { value: "1", label: "Workflow live first" },
      { value: "30", label: "Engineers and designers" },
      { value: "7", label: "Countries served" },
    ],
    process: AI_PROCESS,
    faqs: [
      {
        question: "Is our data used to train models?",
        answer:
          "Not unless you explicitly ask for it. We work through enterprise API tiers with training disabled by default, and where data cannot leave your environment we deploy open models inside your own infrastructure instead.",
      },
      {
        question: "How do you stop it from making things up?",
        answer:
          "Retrieval grounding so answers come from your documents, evaluation suites that run on every change, confidence thresholds that escalate to a human, and citations on generated answers. Hallucination is managed by architecture and measurement, not by prompt wording alone.",
      },
      {
        question: "What does this actually cost to run?",
        answer:
          "Inference cost per run is modelled during discovery, before the build. Most workflows land between fractions of a cent and a few cents per execution — the number that matters is cost per run against the hours it returns, and we will tell you when that maths does not work.",
      },
    ],
    services: [
      {
        slug: "ai-agents-chatbots",
        name: "Custom AI Agents & Chatbots",
        blurb: "Assistants grounded in your data, with a human escalation path.",
        metaTitle: "Custom AI Agents & Chatbot Development | Motion 8",
        metaDescription:
          "Support and internal AI agents grounded in your own documentation, with tool access, evaluation suites and a human escalation path that actually works.",
        h1: "Assistants that know your business and know when to stop.",
        lede: "A useful agent is grounded in your data, can take real actions, and hands over cleanly when it is out of its depth. The third part is what most deployments skip.",
        includes: [
          "Retrieval grounding on your documentation, tickets and product data",
          "Tool and API access so the agent can act, not just answer",
          "Escalation to a human with full conversation context attached",
          "Evaluation suite and quality monitoring after launch",
        ],
        faqs: [
          {
            question: "How accurate will it be?",
            answer:
              "For grounded support questions with good documentation, deflection in the 40–70% range is realistic. We establish the baseline during discovery against your real ticket history rather than quoting someone else's benchmark.",
          },
          {
            question: "What happens when it does not know?",
            answer:
              "It escalates, with the conversation and its own uncertainty passed to a person. Agents that guess confidently do more damage than agents that hand over — the threshold is tuned deliberately, with you.",
          },
          {
            question: "Can it connect to our systems?",
            answer:
              "Yes — CRM, helpdesk, order systems, internal APIs. Write access is gated behind explicit confirmation steps and scoped permissions, so an agent cannot quietly take a destructive action on a customer record.",
          },
        ],
      },
      {
        slug: "workflow-automation",
        name: "Workflow Automation",
        blurb: "The repetitive operational work, running without anyone remembering.",
        metaTitle: "Business Workflow Automation Services | Motion 8",
        metaDescription:
          "Automate the repetitive operational work — document handling, data entry, routing and reporting — with error handling and monitoring built in from the start.",
        h1: "Hours back, every week, quietly.",
        lede: "Most companies are carrying a few processes that eat days a month and exist only because nobody has had time to fix them. Those are the ones worth automating first.",
        includes: [
          "Process discovery and honest ROI modelling before any build",
          "Automation across your existing tools and internal systems",
          "Document and unstructured-data handling where rules alone fail",
          "Error handling, retries and alerting when something needs a human",
        ],
        faqs: [
          {
            question: "Which processes are worth automating?",
            answer:
              "High-frequency, rule-shaped and currently painful. Discovery ranks candidates on hours returned against build cost, and it regularly concludes that two of the five ideas on the list are not worth doing.",
          },
          {
            question: "What tools do you build in?",
            answer:
              "n8n, Make and Zapier for straightforward orchestration; custom services where volume, reliability or data sensitivity justify it. Cheapest tool that survives the load, not the most impressive one.",
          },
          {
            question: "What happens when an automation fails?",
            answer:
              "It fails loudly and safely: retries with backoff, a dead-letter queue, alerting to a named owner and a documented manual fallback. Silent failure is the failure mode that actually hurts.",
          },
        ],
      },
      {
        slug: "ai-integration",
        name: "AI Integration into Existing Products",
        blurb: "AI features inside the product you already ship.",
        featured: true,
        metaTitle: "AI Integration for Existing Products | Motion 8",
        metaDescription:
          "Add AI features to the product you already ship — scoped, evaluated and cost-modelled, with graceful degradation when the model is wrong or unavailable.",
        h1: "AI features your users would actually miss.",
        lede: "The question is not whether to add AI. It is which single feature earns its latency, its cost and its failure modes.",
        includes: [
          "Feature scoping against real user problems, not roadmap optics",
          "Model selection and cost-per-use modelling before commitment",
          "Evaluation harness so quality is measured, not vibed",
          "Graceful degradation when the model is wrong or unavailable",
        ],
        faqs: [
          {
            question: "Which model should we use?",
            answer:
              "It depends on the task, your latency budget and your cost ceiling — frontier models for hard reasoning, smaller or open models for high-volume narrow tasks. We benchmark candidates on your actual data during discovery rather than arguing from leaderboards.",
          },
          {
            question: "How do you keep costs predictable?",
            answer:
              "Cost per use is modelled before the build, then controlled with caching, prompt discipline, routing cheap tasks to cheap models, and hard rate limits. You get the projection before committing, not after the first invoice.",
          },
          {
            question: "What if the model gets it wrong?",
            answer:
              "Design for it: confidence thresholds, human review on consequential actions, easy correction paths, and a fallback to the deterministic behaviour that existed before. Features that break badly when the model misses do not ship.",
          },
        ],
      },
      {
        slug: "llm-fine-tuning-rag",
        name: "LLM Fine-Tuning & RAG",
        blurb: "Retrieval and tuning so answers come from your knowledge, with citations.",
        metaTitle: "LLM Fine-Tuning & RAG Development | Motion 8",
        metaDescription:
          "Retrieval-augmented generation and fine-tuning pipelines that ground answers in your own knowledge base, with evaluation and citations built in.",
        h1: "Answers grounded in your knowledge, with receipts.",
        lede: "Retrieval fixes what the model does not know. Fine-tuning fixes how it behaves. Most projects need the first and think they need the second.",
        includes: [
          "Document pipeline: chunking, embedding, hybrid search, reranking",
          "Citation-backed answers traceable to the source passage",
          "Fine-tuning for format, tone and domain behaviour where warranted",
          "Evaluation sets that catch regressions before your users do",
        ],
        faqs: [
          {
            question: "RAG or fine-tuning?",
            answer:
              "RAG when the model needs to know things — it updates instantly and cites sources. Fine-tuning when the model needs to behave a particular way consistently. Roughly four in five projects we scope need retrieval and not tuning.",
          },
          {
            question: "How much data do we need to fine-tune?",
            answer:
              "Often fewer examples than people expect — several hundred high-quality ones beat tens of thousands of noisy ones. If that dataset does not exist yet, building it properly is part of the engagement.",
          },
          {
            question: "Where does our data live?",
            answer:
              "Wherever your compliance requires. Your cloud with enterprise API tiers and training disabled, or fully self-hosted open models inside your own VPC where data genuinely cannot leave.",
          },
        ],
      },
      {
        slug: "predictive-analytics-ml",
        name: "Predictive Analytics & Custom ML Models",
        blurb: "Forecasting and scoring models that report their own uncertainty.",
        metaTitle: "Predictive Analytics & Custom ML Models | Motion 8",
        metaDescription:
          "Churn, demand, lifetime value and scoring models built on your data — deployed with monitoring, honest error bars and drift detection.",
        h1: "Forecasts that admit what they do not know.",
        lede: "A prediction without an error bar is a guess with better typography. Useful models ship with their uncertainty attached and a plan for when they drift.",
        includes: [
          "Feasibility assessment on your data before any modelling promise",
          "Churn, demand, LTV, lead scoring and propensity models",
          "Deployment as a monitored service with versioning",
          "Drift detection and a scheduled retraining pipeline",
        ],
        faqs: [
          {
            question: "Do we have enough data?",
            answer:
              "That is the first question we answer, before scoping the build. It depends on event volume, how many outcomes you have observed and how much the world has changed since. Sometimes the answer is no, and the right advice is to fix instrumentation and revisit in two quarters.",
          },
          {
            question: "How accurate will it be?",
            answer:
              "Nobody can answer that before seeing your data. We run a short feasibility phase, report the achievable baseline honestly, and let you decide whether it clears the bar for the decision it is meant to inform.",
          },
          {
            question: "What happens as the model ages?",
            answer:
              "Models decay as behaviour shifts. Deployments include drift monitoring, alerting when performance degrades past a threshold, and a retraining schedule — otherwise you are trusting last year's world.",
          },
        ],
      },
      {
        slug: "computer-vision-generative-ai",
        name: "Computer Vision & Generative AI",
        blurb: "Image, video and generative pipelines for real production volume.",
        metaTitle: "Computer Vision & Generative AI Services | Motion 8",
        metaDescription:
          "Detection, classification, OCR and generative image pipelines built for production volume — with human review where the cost of being wrong is high.",
        h1: "Vision and generation at production volume.",
        lede: "Demos handle clean inputs. Production handles blurry photos, odd lighting and the batch of ten thousand that has to finish overnight.",
        includes: [
          "Detection, classification, segmentation and OCR pipelines",
          "Generative image and video workflows for content at volume",
          "Inference optimisation — batching, quantisation, edge deployment",
          "Human-in-the-loop review where errors are expensive",
        ],
        faqs: [
          {
            question: "Do you need labelled data?",
            answer:
              "Usually some. Pre-trained foundation models have cut the requirement dramatically, so fine-tuning on a few hundred well-labelled examples often beats training from scratch. We can manage the labelling process if you do not have one.",
          },
          {
            question: "Can this run on-device?",
            answer:
              "Often yes — quantised models run on modern phones and edge hardware, which removes latency and keeps images off your network entirely. It is a trade against accuracy, and we measure that trade rather than assuming it.",
          },
          {
            question: "What about rights and licensing?",
            answer:
              "For generative work, model licensing and training-data provenance affect what you can commercially use. We build on models whose terms permit your use case and flag where the legal position is genuinely unsettled rather than papering over it.",
          },
        ],
      },
    ],
  },
];

/** Platform-expert pages, nested under ecommerce development. */
export type Platform = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  blurb: string;
  includes: string[];
  faqs: { question: string; answer: string }[];
};

export const PLATFORM_PARENT = {
  pillar: "software-development",
  service: "ecommerce-development",
};

export const PLATFORMS: Platform[] = [
  {
    slug: "shopify-plus",
    name: "Shopify Plus",
    blurb: "Enterprise Shopify builds, checkout extensibility and multi-store operations.",
    metaTitle: "Shopify Plus Development Agency | Motion 8",
    metaDescription:
      "Shopify Plus development — checkout extensibility, Shopify Functions, B2B, multi-store and headless builds for high-volume merchants.",
    h1: "Shopify Plus, built past the theme editor.",
    lede: "Plus earns its cost through checkout control, scripts and multi-store operations. Most merchants pay for it and use almost none of it.",
    includes: [
      "Checkout extensibility and Shopify Functions",
      "B2B on Plus: company accounts, catalogues and price lists",
      "Multi-store and multi-region architecture",
      "Headless storefronts with Hydrogen where justified",
    ],
    faqs: [
      {
        question: "Is Plus worth it over standard Shopify?",
        answer:
          "It becomes worth it around the point where checkout customisation, B2B functionality or multi-store operations are blocking revenue — and where transaction-fee savings at your volume start to offset the platform fee. Below that, standard Shopify plus good apps is the honest answer.",
      },
      {
        question: "Can you migrate us to Plus?",
        answer:
          "Yes, including catalogue, customers, order history and URL structure with redirects mapped. Migrations are planned around your lowest-traffic window with a rollback path defined before we start.",
      },
      {
        question: "Do you build custom apps for Plus?",
        answer:
          "Yes — private and custom-distribution apps for integrations, operational tooling and checkout logic that Functions alone cannot express.",
      },
    ],
  },
  {
    slug: "shopify",
    name: "Shopify",
    blurb: "Conversion-focused Shopify storefronts and app integrations.",
    metaTitle: "Shopify Development Agency | Motion 8",
    metaDescription:
      "Custom Shopify theme development, app integration and performance work — storefronts built around conversion rate rather than template defaults.",
    h1: "Shopify storefronts built around conversion.",
    lede: "A fast, well-structured Shopify store outperforms an elaborate one. Most of the work is in the parts buyers never consciously notice.",
    includes: [
      "Custom theme development on Online Store 2.0",
      "App selection and integration without stacking redundant scripts",
      "Core Web Vitals and storefront performance work",
      "Subscription, bundle and loyalty configuration",
    ],
    faqs: [
      {
        question: "Custom theme or premium template?",
        answer:
          "A well-chosen premium theme, customised properly, is the right call for most catalogues under a few hundred SKUs. Custom earns its cost when your merchandising or brand expression genuinely does not fit an existing structure.",
      },
      {
        question: "Why is our store slow?",
        answer:
          "Usually app script accumulation, oversized images and render-blocking third parties rather than the theme itself. An audit quantifies each contributor before anything is rebuilt.",
      },
      {
        question: "Can you move us off another platform?",
        answer:
          "Yes — WooCommerce, Magento and BigCommerce migrations with catalogue, customer and order history carried over, plus a full redirect map so rankings survive.",
      },
    ],
  },
  {
    slug: "wordpress-woocommerce",
    name: "WordPress & WooCommerce",
    blurb: "Content-led commerce where WordPress is the centre of gravity.",
    metaTitle: "WordPress & WooCommerce Development | Motion 8",
    metaDescription:
      "WooCommerce and WordPress development — custom themes, blocks and plugins, with the hosting, caching and security work that keeps them fast and safe.",
    h1: "Commerce that lives inside the content.",
    lede: "WooCommerce wins when editorial drives the sale. It needs proper hosting and maintenance discipline to stay fast — that part is not optional.",
    includes: [
      "Custom themes, block patterns and the block editor configured for editors",
      "WooCommerce build, payment and shipping configuration",
      "Performance: caching layers, query optimisation, image handling",
      "Security hardening and managed update discipline",
    ],
    faqs: [
      {
        question: "Is WooCommerce secure enough?",
        answer:
          "Yes, when it is maintained. Nearly every WordPress compromise traces to outdated plugins, weak credentials or unmanaged hosting rather than the core platform. Our builds ship with an update and monitoring regime attached.",
      },
      {
        question: "WooCommerce or Shopify?",
        answer:
          "Woo when content and SEO are the centre of gravity and you want full ownership of the stack. Shopify when you would rather not run infrastructure and want checkout to be somebody else's operational problem.",
      },
      {
        question: "Can you rescue a slow WordPress site?",
        answer:
          "Usually, and often substantially. Plugin audit, database cleanup, caching strategy, image pipeline and hosting review — in that order, measuring after each step so you can see what actually moved.",
      },
    ],
  },
  {
    slug: "bigcommerce",
    name: "BigCommerce",
    blurb: "B2B pricing complexity and multi-storefront catalogues.",
    metaTitle: "BigCommerce Development Agency | Motion 8",
    metaDescription:
      "BigCommerce development for complex B2B catalogues — customer-group pricing, quoting, multi-storefront and ERP integration.",
    h1: "Where B2B pricing gets complicated.",
    lede: "BigCommerce handles customer-specific pricing, quoting and multi-storefront catalogues natively — which is exactly where other platforms need apps to fake it.",
    includes: [
      "B2B Edition: customer groups, price lists, quoting workflows",
      "Multi-storefront architecture from one catalogue",
      "ERP, PIM and punchout integrations",
      "Headless builds on the Catalyst stack where justified",
    ],
    faqs: [
      {
        question: "Why BigCommerce over Shopify for B2B?",
        answer:
          "Native customer-group pricing, price lists and quoting without app dependencies, plus multi-storefront from a single catalogue. If your pricing genuinely varies per account, that is a structural advantage rather than a preference.",
      },
      {
        question: "Can it handle a large catalogue?",
        answer:
          "Yes — tens of thousands of SKUs with complex variant structures is well within range. The practical constraint is usually the quality of your product data, which is why PIM often comes up early.",
      },
      {
        question: "Do you integrate ERP systems?",
        answer:
          "Yes — NetSuite, SAP, Dynamics and others, for inventory, pricing and order flow. Integration design comes before storefront work, because it constrains what the storefront can promise.",
      },
    ],
  },
  {
    slug: "magento",
    name: "Magento / Adobe Commerce",
    blurb: "Deep customisation for catalogues that justify the running cost.",
    metaTitle: "Magento & Adobe Commerce Development | Motion 8",
    metaDescription:
      "Magento and Adobe Commerce development — upgrades, performance work, custom module development and honest replatforming advice when it no longer fits.",
    h1: "Magento, maintained properly or migrated honestly.",
    lede: "Adobe Commerce still wins for genuinely complex catalogues and multi-region operations. It also costs real money to run well, and pretending otherwise helps nobody.",
    includes: [
      "Magento 2 and Adobe Commerce builds and version upgrades",
      "Custom module development and extension cleanup",
      "Performance: Varnish, Redis, indexing, Adobe Commerce Cloud tuning",
      "Replatforming assessment when the fit has genuinely changed",
    ],
    faqs: [
      {
        question: "Should we stay on Magento?",
        answer:
          "Stay if you use the catalogue complexity, multi-region setup and customisation depth that justify the total cost of ownership. If you are running a mid-size catalogue on Magento out of inertia, a migration usually pays for itself — and we will tell you which case you are.",
      },
      {
        question: "Why is our Magento slow?",
        answer:
          "Typically indexing configuration, missing or misconfigured caching layers, and extension conflicts. An audit isolates the contributors and quantifies each before work starts.",
      },
      {
        question: "Can you handle the upgrade backlog?",
        answer:
          "Yes. Security patches and version upgrades on a managed schedule, tested against a staging environment that mirrors production, so upgrades stop being annual emergencies.",
      },
    ],
  },
];

/**
 * Every service count on the site derives from here — the ticker, the stat
 * band, the pillar eyebrows and the hero curtains. Adding a service updates
 * all of them, so the numbers cannot drift apart again.
 */
export const TOTAL_SERVICES = PILLARS.reduce((n, p) => n + p.services.length, 0);
export const TOTAL_PILLARS = PILLARS.length;

/* Lookup helpers used by the route templates and sitemap. */
export const getPillar = (slug: string) => PILLARS.find((p) => p.slug === slug);

export const getService = (pillarSlug: string, serviceSlug: string) =>
  getPillar(pillarSlug)?.services.find((s) => s.slug === serviceSlug);

export const getPlatform = (slug: string) => PLATFORMS.find((p) => p.slug === slug);

export const ALL_SERVICE_PATHS = PILLARS.flatMap((p) =>
  p.services.map((s) => ({ pillar: p.slug, service: s.slug })),
);
