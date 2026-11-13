import type { ServiceDetailMap } from "./types";

export const DIGITAL_MARKETING_DETAILS: ServiceDetailMap = {
  "digital-marketing/performance-marketing": {
    h1: "Performance Marketing Agency for B2B & DTC Brands",
    tagline: "Spend measured against pipeline, not platform ROAS.",
    intro: [
      "Performance marketing is paid search, paid social and retargeting run against a business outcome — for us, qualified pipeline and closed revenue rather than the ROAS figure an ad platform reports about itself. We manage Google, Meta and LinkedIn for seed-to-Series-B startups and growing DTC brands, working inside your own ad accounts with media billed to you directly.",
      "Platform dashboards are optimistic by design. They credit themselves for conversions that would have happened anyway, and retargeting looks brilliant because it follows people who were already on their way to buying. So the first job is measurement: server-side conversion tracking that sends real outcomes back to the platforms, and a weekly report that reconciles spend to what actually closed in your CRM.",
      "Once the numbers agree, budget follows cost per qualified opportunity. That usually means spending less in more places that work, cutting campaigns that harvest demand they did not create, and running creative tests with a named hypothesis instead of rotating assets and hoping. Because the same team builds your landing pages and tracking, there is no handoff gap between the ad, the page and the number in the CRM.",
    ],
    deliverables: [
      {
        title: "Tracking and attribution fix",
        body: "Server-side conversion tracking, offline conversion imports from the CRM and a reconciled baseline before any budget moves.",
      },
      {
        title: "Channel and account structure",
        body: "A channel mix chosen for your buyer and deal size — usually one or two platforms first — with campaigns structured so spend can be read by stage and intent.",
      },
      {
        title: "Creative testing programme",
        body: "Concepts briefed against your positioning, produced in-house, tested against written hypotheses and retired on performance rather than on a calendar.",
      },
      {
        title: "Landing pages that match the ad",
        body: "Pages built or rebuilt by the same team so message, offer and form match the click that paid for them.",
      },
      {
        title: "Weekly pipeline report",
        body: "Spend tied to pipeline and closed revenue by channel, the tests that ran and what we concluded. ROAS and CPM sit underneath as diagnostics.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Account, tracking and CRM review: where spend goes today, what the platforms can see and where the numbers disagree.",
      },
      {
        phase: "Structure",
        duration: "Weeks 3–4",
        body: "Tracking rebuilt, channel mix and account structure agreed, first test plan written with owners against each line.",
      },
      {
        phase: "Publish",
        duration: "Week 5 onward, in two-week cycles",
        body: "Campaigns and creative shipped in two-week increments, each cycle closing with a read on what worked and what gets cut.",
      },
      {
        phase: "Track",
        duration: "Weekly, ongoing",
        body: "Budget shifted toward the lowest cost per qualified opportunity, scaled in measured steps so delivery does not reset.",
      },
    ],
    goodFit: [
      "B2B SaaS teams whose lead volume looks healthy while sales reports a quiet quarter",
      "DTC brands spending enough on Meta and Google that platform-reported ROAS has stopped matching the bank account",
      "Companies with a CRM in place, or willing to fix one, so spend can be tied to revenue",
      "Founders who want one accountable person deciding where spend goes and seeing what closed",
    ],
    notFit: [
      "Teams with media budgets too small to produce signal — fixing conversion and organic first is usually the better use of money",
      "Anyone who wants clicks, impressions or platform ROAS as the headline number",
      "Brands looking for a guaranteed CAC before tracking and baseline data exist",
    ],
    stack: [
      "Google Ads",
      "Meta Ads Manager",
      "LinkedIn Campaign Manager",
      "GA4",
      "Server-side GTM",
      "HubSpot",
      "Salesforce",
      "Looker Studio",
    ],
    engagement:
      "Most engagements start somewhere between US$10k and US$150k a month in media. Ad spend runs through your own platform accounts and is billed to you directly by the platforms.",
    relatedCases: ["b2b-saas-demand-engine"],
    relatedPosts: [],
  },

  "digital-marketing/seo-content-strategy": {
    h1: "SEO & Content Strategy Services",
    tagline: "Content that ranks because it is worth citing.",
    intro: [
      "SEO and content strategy is the work of earning search visibility without paying per click: a technically healthy site, a topic map that matches how your buyers actually search, and pages written by people who understand the product. We run all three as one programme rather than splitting technical SEO and content into separate workstreams that compete for the same URLs.",
      "Most content strategies converge on the same blog-and-cadence shape that any competitor could reproduce in an afternoon. We start from commercial intent instead — the queries buyers use when they are close to a decision — and build clusters outward from there. Drafts go through someone who understands your product before they publish, because generic content stopped working years ago and does worse now that AI summaries absorb informational queries.",
      "The same structure feeds answer engines. Clean markup, clear headings, real authorship and schema are what get a page cited inside AI answers, so the technical and editorial foundation laid here carries straight into AEO and GEO. We report rankings alongside citation share, crawl health and the demo requests or sign-ups organic pages actually produce.",
    ],
    deliverables: [
      {
        title: "Technical SEO audit",
        body: "Crawl, index coverage, Core Web Vitals, internal linking and site architecture, with fixes prioritised by impact and handled by our own engineers where needed.",
      },
      {
        title: "Topic and cluster map",
        body: "Clusters mapped against real buyer queries and weighted toward commercial pages, not just informational traffic that never reaches a product page.",
      },
      {
        title: "Editorial production",
        body: "Briefs, drafts, edits and publishing, with subject-matter review from your team before anything goes live.",
      },
      {
        title: "Schema and structure",
        body: "Structured data and page templates built so the same work doubles as AEO and GEO groundwork.",
      },
      {
        title: "Product-led page opportunities",
        body: "Where your product holds data nobody else has, a plan for pages generated from it — with the quality controls that keep them from becoming thin content.",
      },
      {
        title: "Monthly organic report",
        body: "Leading indicators — crawl health, coverage, early ranking movement — alongside organic sign-ups, demo requests and assisted conversions by page.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Technical crawl, content inventory, keyword gaps and competitor review, ending in a prioritised fix list.",
      },
      {
        phase: "Structure",
        duration: "Weeks 3–4",
        body: "Topic map, information architecture and editorial calendar agreed; critical technical fixes shipped.",
      },
      {
        phase: "Publish",
        duration: "Week 5 onward, in two-week cycles",
        body: "New and refreshed pages shipped in two-week increments, commercial clusters first.",
      },
      {
        phase: "Track",
        duration: "Weekly, with a monthly review",
        body: "Technical fixes can move impressions within weeks; new commercial content generally takes one to two quarters to compound.",
      },
    ],
    goodFit: [
      "Startups whose organic traffic grows on informational terms that never touch a commercial page",
      "Newly launched products that want the technical foundation and architecture right before rework gets expensive",
      "Teams able to give a subject-matter expert a little time each cycle to review drafts",
      "Companies that want SEO, AEO and GEO built off one foundation rather than three vendors",
    ],
    notFit: [
      "Anyone expecting commercial rankings inside a month",
      "Teams looking for bulk content or link schemes that risk a penalty",
      "Companies unwilling to let anyone with product knowledge review content before it ships",
    ],
    stack: [
      "Google Search Console",
      "Semrush",
      "Screaming Frog",
      "GA4",
      "PageSpeed Insights",
      "Looker Studio",
    ],
    relatedCases: ["b2b-saas-demand-engine"],
    relatedPosts: ["product-led-seo", "aeo-vs-geo-vs-seo"],
  },

  "digital-marketing/marketing-automation-email": {
    h1: "Marketing Automation & Email Marketing Services",
    tagline: "The follow-up that happens whether anyone remembers or not.",
    intro: [
      "Marketing automation and email is the lifecycle layer of your funnel: the flows, lead scoring and CRM rules that decide what happens after someone signs up, clicks or goes quiet. Most teams lose more pipeline to silence after the form fill than to anything before it, and the fix is rarely another campaign. It is follow-up that runs whether or not anyone remembers.",
      "We build in HubSpot, Klaviyo, Customer.io, Braze, Salesforce Marketing Cloud or whatever you already pay for. We would rather make your current stack work than sell you a migration. The work usually starts in the CRM itself — deduplication, field discipline and a lifecycle definition marketing and sales both agree on — because flows built on bad data just distribute the mess faster.",
      "From there we map the lifecycle from first touch through expansion, write the emails against your positioning, and set up the sending infrastructure so the messages actually land. Scoring and routing rules are agreed with your sales team rather than invented for them, so a sales-ready contact reaches a person while the intent is still warm.",
    ],
    deliverables: [
      {
        title: "CRM hygiene and lifecycle definition",
        body: "Deduplication, field standardisation and lifecycle stages everyone uses the same way, with reporting that reconciles.",
      },
      {
        title: "Lifecycle map",
        body: "Every stage from first touch to expansion, with the trigger, message and owner for each transition written down.",
      },
      {
        title: "Core flows",
        body: "Welcome and onboarding, activation or trial nurture and win-back built first, then expanded where the data shows users leaking.",
      },
      {
        title: "Lead scoring and routing",
        body: "Behaviour-based scoring and handoff triggers agreed with sales, so sales-ready contacts get a person, not another email.",
      },
      {
        title: "Copy, templates and deliverability",
        body: "Emails written against the positioning work, templates built, and SPF, DKIM and DMARC set up before volume increases.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Current flows, CRM data quality, deliverability and the points where leads stall or disappear.",
      },
      {
        phase: "Structure",
        duration: "Weeks 3–4",
        body: "CRM cleanup, lifecycle definitions and scoring rules agreed with sales; flow architecture signed off.",
      },
      {
        phase: "Publish",
        duration: "Week 5 onward, in two-week cycles",
        body: "Flows shipped in two-week increments, the highest-leakage stage first, each tested for inbox placement before it goes live.",
      },
      {
        phase: "Track",
        duration: "Weekly, ongoing",
        body: "Activation, lead-to-opportunity conversion and revenue influenced by automated touches — not just opens and clicks.",
      },
    ],
    goodFit: [
      "B2B teams where marketing and sales work off different lists and neither number reconciles",
      "Ecommerce and consumer brands with traffic and sign-ups but little happening after the first purchase or session",
      "Companies paying for HubSpot, Klaviyo or similar and using a fraction of it",
      "Teams without the headcount for a dedicated lifecycle marketer",
    ],
    notFit: [
      "Teams wanting more automation layered on a CRM they are not willing to clean up first",
      "Anyone looking to buy lists or send cold volume through a marketing platform",
    ],
    stack: [
      "HubSpot",
      "Klaviyo",
      "Customer.io",
      "Braze",
      "Salesforce Marketing Cloud",
      "Salesforce",
      "GA4",
    ],
    relatedCases: ["b2b-saas-demand-engine"],
    relatedPosts: ["marketing-automation-stack-by-stage"],
  },

  "digital-marketing/conversion-rate-optimization": {
    h1: "Conversion Rate Optimization (CRO) Services",
    tagline: "Fix the pages traffic already lands on.",
    intro: [
      "Conversion rate optimization is the process of turning more of the traffic you already have into sign-ups, demo requests or orders, without spending more on acquisition. Buying more visitors for a page that leaks is the most expensive way to grow, and because a better conversion rate makes every channel cheaper, CRO is the multiplier underneath your paid and organic spend.",
      "Our CRO is research-led. Analytics, session recordings, heatmaps and user interviews show where visitors hesitate or drop off; those findings become a hypothesis backlog scored on impact and effort. Every test is written down before it runs — what we expect, the metric that decides it, and the confidence threshold — so a result cannot be reinterpreted after the fact.",
      "The part that usually stalls CRO is implementation. Here the same team that builds the site builds the variants and ships the winners, so fixes go live in days rather than waiting in someone else’s sprint queue. Where traffic is too thin for a valid split test, we say so and run structured qualitative research instead of pretending an underpowered test proved something.",
    ],
    deliverables: [
      {
        title: "Funnel and analytics audit",
        body: "Event tracking checked, drop-off points quantified and the pages carrying real traffic identified before any testing starts.",
      },
      {
        title: "Qualitative research",
        body: "Session recordings, heatmaps, on-site surveys and user interviews that explain why visitors leave, not just where.",
      },
      {
        title: "Prioritised hypothesis backlog",
        body: "Every idea scored on expected impact, effort and traffic available to test it, with the evidence behind it attached.",
      },
      {
        title: "Test design and build",
        body: "A/B and multivariate tests with pre-registered success criteria, built and QA’d by our own engineers.",
      },
      {
        title: "Test log and rollout",
        body: "A running record of every experiment — winners, losers and why — with validated changes shipped to production.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Tracking check, funnel analysis and research on the highest-traffic pages, often checkout, sign-up or paid landing pages.",
      },
      {
        phase: "Structure",
        duration: "Weeks 3–4",
        body: "Hypothesis backlog prioritised, test plan agreed and the testing tool set up or configured.",
      },
      {
        phase: "Publish",
        duration: "Week 5 onward, in two-week cycles",
        body: "Tests launched in two-week increments and run to their pre-agreed sample size, not stopped early on a good-looking day.",
      },
      {
        phase: "Track",
        duration: "Weekly, ongoing",
        body: "Results logged, winners shipped, losers reverted cleanly and folded into the next hypothesis.",
      },
    ],
    goodFit: [
      "Sites with roughly 10,000 sessions and a few hundred conversions a month on the target page",
      "Teams running paid traffic to landing pages that have never been tested",
      "Products with signup or checkout flows where small friction directly costs revenue",
      "Companies whose last CRO effort stalled waiting for developer time",
    ],
    notFit: [
      "Anyone wanting a guaranteed percentage lift — nobody can honestly promise one",
      "Teams that want tests called early because the first few days look good",
    ],
    stack: [
      "GA4",
      "Google Tag Manager",
      "Microsoft Clarity",
      "Hotjar",
      "VWO",
      "Optimizely",
      "Looker Studio",
    ],
    relatedCases: [],
    relatedPosts: [],
  },

  "digital-marketing/social-media-management": {
    h1: "Social Media Management Services for B2B & DTC",
    tagline: "A channel with a strategy, not a posting calendar.",
    intro: [
      "Social media management is the editorial planning, content production and community work that keeps your brand present on the platforms your buyers use. It works when it has an editorial point of view and someone accountable for what it returns — and fails when it is a posting schedule someone fills in on Fridays.",
      "We start from your customer, not a platform checklist. B2B companies usually get the most from LinkedIn and X, often with a founder-led presence doing much of the work; consumer brands lean on Instagram, TikTok and YouTube. We recommend concentrating on two platforms done properly rather than five done thinly, with a sustainable cadence over a heavy one that collapses by month three.",
      "Production happens in-house — copy, design, motion and short-form video — which means social and paid creative share one pipeline instead of duplicating work. The calendar is tied to campaigns and to the positioning every other channel uses. We measure engagement as a diagnostic, and track UTM-tagged traffic, sign-ups, assisted pipeline and branded search lift as the numbers that matter.",
    ],
    deliverables: [
      {
        title: "Channel and editorial strategy",
        body: "Which platforms, what point of view, what cadence, and how each ties into campaigns and positioning.",
      },
      {
        title: "Voice guide and asset library",
        body: "A written voice guide drawn from your existing content, founder interviews and customer language, plus templates so the calendar is not blocked on design.",
      },
      {
        title: "Content production",
        body: "Static, motion and short-form video produced in-house, with founder posts scripted and prompted for authenticity.",
      },
      {
        title: "Community management",
        body: "Comments, DMs and mentions handled within agreed SLAs, with product questions and sales-ready conversations routed to your team.",
      },
      {
        title: "Monthly reporting",
        body: "Reach and engagement as leading indicators, alongside the traffic, sign-ups and pipeline social actually sources.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Existing channels, content, competitors and audience reviewed; first month of content drafted for review.",
      },
      {
        phase: "Structure",
        duration: "Weeks 3–4",
        body: "Platform choice, editorial pillars, voice guide, approval workflow and reporting setup agreed.",
      },
      {
        phase: "Publish",
        duration: "Week 5 onward, in two-week cycles",
        body: "Content shipped on the agreed cadence, planned and reviewed in two-week batches.",
      },
      {
        phase: "Track",
        duration: "Weekly, with a monthly review",
        body: "What earned attention gets more of it — including organic posts worth putting paid budget behind.",
      },
    ],
    goodFit: [
      "Startups that cannot yet justify a full in-house social team but need more than one person’s skill set",
      "Founders willing to give a short weekly slot for genuine commentary on LinkedIn or X",
      "Brands that want social and paid creative produced from the same pipeline",
      "Teams starting with few brand assets who need the library built as part of onboarding",
    ],
    notFit: [
      "Anyone wanting a presence on every platform at once regardless of where buyers are",
      "Brands judging the channel on follower counts alone",
    ],
    stack: [
      "LinkedIn",
      "Instagram",
      "TikTok",
      "YouTube Studio",
      "Meta Business Suite",
      "Figma",
      "Adobe Premiere Pro",
      "GA4",
    ],
    relatedCases: [],
    relatedPosts: [],
  },

  "digital-marketing/aeo-answer-engine-optimization": {
    h1: "Answer Engine Optimization (AEO) Agency",
    tagline: "Be the source the assistant quotes.",
    intro: [
      "Answer engine optimization (AEO) is the work of structuring your content so that when a buyer asks a direct question, the answer is taken from your page. That answer might be a featured snippet, a People Also Ask expansion, a voice reply, or the response ChatGPT, Perplexity, Gemini or a Google AI Overview composes. In each case there is one answer, not ten blue links, and AEO competes to be its source.",
      "The foundations overlap with SEO — clean markup, clear structure, genuine expertise on the page — but the unit of success changes from a ranking to a citation. Schema helps engines parse you; it does not make you worth quoting. The heavier work is restructuring what you already know into answerable units and building the corroborating signals — consistent entity data, real authorship, mentions elsewhere — that make an engine confident enough to name you.",
      "We usually start with pages that already carry ranking signal and rewrite the relevant sections into clean, extractable answers, adding new content only where buyers ask a question you do not answer anywhere. Measurement is honest about its limits: we sample a fixed set of buyer prompts across the major assistants on a schedule and track citation share over weeks, because any single response is noise.",
    ],
    deliverables: [
      {
        title: "Question map",
        body: "The definition, comparison and how-to questions buyers ask in your category, prioritised by commercial relevance rather than volume alone.",
      },
      {
        title: "Answer-ready page restructuring",
        body: "Existing pages rewritten so each priority question has a direct, specific, quotable answer near the top of its section.",
      },
      {
        title: "Schema implementation",
        body: "FAQPage, Organization, Product, HowTo and Article markup added to your templates or CMS alongside your developers’ workflow.",
      },
      {
        title: "Entity and citation building",
        body: "Consistent naming, author pages and third-party mentions so engines can corroborate your claims.",
      },
      {
        title: "Answer-share tracking",
        body: "A fixed prompt set sampled across ChatGPT, Perplexity, Gemini and AI Overviews, plus SERP-feature ownership, reported as trends.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Snippet and answer audit: which priority questions trigger an answer, who currently holds it, and your baseline citation share.",
      },
      {
        phase: "Structure",
        duration: "Weeks 3–4",
        body: "Question map, page-by-page restructuring plan and schema scope agreed.",
      },
      {
        phase: "Publish",
        duration: "Week 5 onward, in two-week cycles",
        body: "Restructured pages, new answers and markup shipped in two-week increments, strongest existing pages first.",
      },
      {
        phase: "Track",
        duration: "Weekly sampling, ongoing",
        body: "Structural changes can register within weeks; corroboration that earns steady citation takes a quarter or more.",
      },
    ],
    goodFit: [
      "Companies whose category questions are now answered directly by assistants and AI Overviews",
      "Sites with solid technical SEO and pages that already rank, ready to be restructured",
      "Teams with real expertise that is buried in long pages nobody can quote from",
    ],
    notFit: [
      "Sites with thin content — AEO will not rescue a page with nothing specific in it",
      "Anyone wanting guaranteed placement in a given snippet or assistant answer",
      "Teams expecting schema markup alone to do the work",
    ],
    stack: [
      "Google Search Console",
      "Semrush",
      "Google Rich Results Test",
      "Schema.org JSON-LD",
      "ChatGPT",
      "Perplexity",
      "Gemini",
      "Google AI Overviews",
    ],
    relatedCases: ["b2b-saas-demand-engine"],
    relatedPosts: ["aeo-vs-geo-vs-seo"],
  },

  "digital-marketing/geo-generative-engine-optimization": {
    h1: "Generative Engine Optimization (GEO) Agency",
    tagline: "Visibility inside the answer, not just under it.",
    intro: [
      "Generative engine optimization (GEO) is the work of earning presence inside the longer answers AI systems write — ChatGPT, Claude, Perplexity, Gemini, Microsoft Copilot and Google AI Overviews — when a buyer asks them to explain, compare or recommend options in your category. Generative results compress the funnel: the engine summarises your category instead of listing it, and GEO is how you stay in that summary.",
      "It overlaps heavily with AEO and we usually run them together. The distinction we use: AEO targets being the cited source for a direct question; GEO targets presence and framing in category-level summaries, including whether the engine describes you the way you would. That second half — fair representation when you are not the subject of the question — is the one most teams never check.",
      "What is controllable is whether your content is extractable, corroborated and specific enough to be worth including. That means pages shaped around claims, evidence and honest comparisons; consistent entity data and llms.txt as part of the technical foundation; and presence on the third-party sources engines lean on for corroboration. There is no submission process or ads product for AI Overviews, so nobody can guarantee placement — we measure it and iterate like SEO.",
    ],
    deliverables: [
      {
        title: "Prompt-space research",
        body: "The questions generative engines answer in your category, and who they currently name and how.",
      },
      {
        title: "Content shaped for extraction",
        body: "Existing pages restructured around claims, evidence, comparisons and specifics; new pages only where a real gap exists.",
      },
      {
        title: "Technical and entity foundation",
        body: "Organization, Product, FAQ and Article schema, llms.txt and consistent entity data across your site and profiles.",
      },
      {
        title: "Third-party presence",
        body: "Mentions and listings on the sources engines use to corroborate claims, coordinated with PR where it is in scope.",
      },
      {
        title: "Visibility benchmarking",
        body: "Structured prompt tests across the major engines, reported monthly as mention frequency, framing and share of voice against named competitors.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "AI-visibility baseline across the major engines, competitor set named, and how your category is currently described.",
      },
      {
        phase: "Structure",
        duration: "Weeks 3–4",
        body: "Priority prompts, content restructuring plan, entity fixes and third-party targets agreed.",
      },
      {
        phase: "Publish",
        duration: "Week 5 onward, in two-week cycles",
        body: "Technical fixes first, then content and corroboration work shipped in two-week increments.",
      },
      {
        phase: "Track",
        duration: "Weekly sampling, monthly benchmark",
        body: "Early mentions can appear within weeks; durable presence across engines and phrasings builds over months and needs refreshing as models change.",
      },
    ],
    goodFit: [
      "Companies whose buyers ask assistants to compare vendors before they ever visit a website",
      "Brands that are absent from, or misdescribed in, AI summaries of their own category",
      "Teams with a working SEO foundation who want the next layer built on it",
    ],
    notFit: [
      "Anyone looking for guaranteed placement in AI Overviews or a specific assistant",
      "Sites whose technical foundation is weak — fix that first, since every engine depends on it",
    ],
    stack: [
      "ChatGPT",
      "Claude",
      "Perplexity",
      "Gemini",
      "Microsoft Copilot",
      "Google AI Overviews",
      "Google Search Console",
      "Semrush",
    ],
    relatedCases: [],
    relatedPosts: ["aeo-vs-geo-vs-seo"],
  },

  "digital-marketing/advanced-analytics": {
    h1: "Marketing Analytics & Attribution Services",
    tagline: "One number everyone agrees on.",
    intro: [
      "Marketing analytics is the tracking, data model and reporting that tell you which channels produce revenue — and our version of it joins product, marketing and CRM data into one model so the whole company reads the same number. Most reporting disagreements are data-model problems, not judgement problems, so we fix the model first.",
      "The usual starting point is tracking that is already broken: default GA4 counting last clicks, duplicated conversions, browser-side tags losing signal, and no link between ad spend and CRM revenue. We write a tracking plan, reimplement it with server-side collection, and run old and new numbers side by side for a reconciliation period so any change in reported performance can be explained.",
      "Attribution is chosen for your sales cycle, with its limits stated. For long B2B cycles multi-touch models are directional at best, so we pair a simple, well-understood model with incrementality testing on the channels carrying real spend. Dashboards are built around the two or three decisions each stakeholder makes every week, not around every metric available.",
    ],
    deliverables: [
      {
        title: "Tracking plan and implementation",
        body: "Events, conversions and naming defined in writing, implemented in GA4 and Google Tag Manager with server-side collection and consent mode.",
      },
      {
        title: "Warehouse data model",
        body: "Product, marketing and CRM data joined in BigQuery or Snowflake and modelled with dbt, or built on the warehouse you already have.",
      },
      {
        title: "Attribution and incrementality",
        body: "An attribution model suited to your sales motion, with incrementality tests on major channels and marketing mix modelling once there is enough spend history.",
      },
      {
        title: "Decision dashboards",
        body: "Views for growth, finance and channel owners in Looker Studio, Metabase or your existing BI tool.",
      },
      {
        title: "Cohort and retention analysis",
        body: "Which channels and campaigns bring in customers who stay, so budget moves toward durable growth.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Tracking, tag, CRM and reporting review; where numbers disagree and why.",
      },
      {
        phase: "Structure",
        duration: "Weeks 3–4",
        body: "Tracking plan, data model design and dashboard requirements agreed; core instrumentation underway.",
      },
      {
        phase: "Publish",
        duration: "Week 5 onward, in two-week cycles",
        body: "Server-side tracking, models and dashboards shipped in increments, with a side-by-side reconciliation period.",
      },
      {
        phase: "Track",
        duration: "Weekly, ongoing",
        body: "Reviews turn trends into budget and product decisions; attribution and mix modelling mature as data accumulates.",
      },
    ],
    goodFit: [
      "Founders whose CAC, pipeline and revenue figures change depending on which dashboard they open",
      "Companies about to scale paid spend who need platforms optimising against real outcomes",
      "Founders reporting to investors and boards who need figures that hold up to scrutiny",
      "In-house or agency teams that run campaigns well but need the measurement layer built",
    ],
    notFit: [
      "Anyone wanting a precise-looking attribution model to justify decisions already made",
      "Teams wanting a full stack rebuild when fixing the current one would do",
    ],
    stack: [
      "GA4",
      "Server-side GTM",
      "BigQuery",
      "Snowflake",
      "dbt",
      "Looker Studio",
      "Metabase",
      "HubSpot",
    ],
    relatedCases: ["b2b-saas-demand-engine"],
    relatedPosts: [],
  },

  "digital-marketing/public-relations": {
    h1: "B2B Tech PR Agency for Startups",
    tagline: "Coverage that supports the position you are building.",
    intro: [
      "Public relations is how a company earns credibility it cannot buy: a journalist, analyst or podcast host independently deciding your story is worth their audience’s time. For startups and B2B tech companies, PR earns its place when it reinforces the category story the rest of your funnel is already telling, and when the coverage lands somewhere your buyers actually read.",
      "We build the programme from your positioning. A narrative and message house come first, then outlet-specific media lists chosen for audience fit rather than size, analyst and industry relations, and executive visibility through bylines, podcasts and speaking. Funding rounds and launches help, but most sustained programmes run on point of view, proprietary data and customer outcomes.",
      "We do not guarantee coverage. Any agency that does is either buying it — which makes it advertising — or overpromising. We commit to activity levels, pitch quality and a narrative worth covering, and if there is genuinely no story yet we will say to wait rather than burn relationships on thin pitches. Measurement is share of voice against named competitors, placement quality weighted by audience fit, branded search lift and assisted pipeline — never advertising value equivalency.",
    ],
    deliverables: [
      {
        title: "Narrative and message house",
        body: "The story, proof points and spokesperson angles, built from the positioning work so every interview says the same thing.",
      },
      {
        title: "Press kit",
        body: "Company one-pager, founder bios, product facts and approved imagery so an interested journalist can move quickly.",
      },
      {
        title: "Media relations",
        body: "Researched, outlet-specific lists and pitches across startup, tech and vertical trade press in the markets you sell to.",
      },
      {
        title: "Analyst and industry relations",
        body: "Briefings and ongoing relationships with the analysts and communities that shape your category.",
      },
      {
        title: "Executive visibility",
        body: "Bylined articles, podcast guest slots and speaking opportunities on topics your founder is genuinely credible on.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Current coverage, competitor share of voice, spokesperson strengths and upcoming news moments.",
      },
      {
        phase: "Structure",
        duration: "Weeks 3–4",
        body: "Narrative, message house, press kit and media lists locked; first angles chosen.",
      },
      {
        phase: "Publish",
        duration: "Week 5 onward, in two-week cycles",
        body: "Pitch cycles, bylines and speaking submissions run in two-week increments, built around any raise or launch.",
      },
      {
        phase: "Track",
        duration: "Weekly, ongoing",
        body: "Coverage weighted by audience fit, with branded search and referral traffic checked after each placement.",
      },
    ],
    goodFit: [
      "Startups approaching a funding announcement, launch or category-defining moment",
      "B2B founders with a credible point of view who are willing to put their name to it",
      "Companies with proprietary data or customer outcomes worth publishing",
    ],
    notFit: [
      "Anyone wanting guaranteed placements or paid coverage presented as earned",
      "Teams measuring success by clipping counts",
      "Companies with no story yet — waiting is usually the better advice",
    ],
    stack: [
      "Muck Rack",
      "Google Alerts",
      "Google Search Console",
      "GA4",
      "Semrush",
    ],
    relatedCases: [],
    relatedPosts: [],
  },

  "digital-marketing/brand-positioning": {
    h1: "Brand Positioning & Messaging Strategy Agency",
    tagline: "Decide what you are before you buy attention for it.",
    intro: [
      "Brand positioning is the decision about what category you compete in, who you are for, and why a buyer should pick you — written down precisely enough that ads, website, content and sales calls all repeat it. It is the cheapest lever in marketing and the one most often skipped, and everything downstream gets easier or harder because of it.",
      "Running paid, SEO and PR against unsettled positioning means paying three times to say something you will change in a quarter. A logo refresh changes how you look; positioning changes what you are known for. We start with the strategic question and only brief visual identity once it is answered, through the UI/UX and design side of the studio when that is in scope.",
      "The work is research-led: founder and customer interviews, a teardown of the real competitors and the alternatives buyers actually weigh, then a working session with your leadership to make the hard choices. Most of our clients sell technical or B2B products to sceptical buyers, so the aim is to make a complex product sound clear and credible, not to dress it in hype it does not need.",
    ],
    deliverables: [
      {
        title: "Category and competitive analysis",
        body: "Who else is competing for your buyer’s attention, how they describe themselves, and the ground only you can defend.",
      },
      {
        title: "Customer and founder interviews",
        body: "The language buyers use for the problem and the reasons they chose — or nearly did not choose — you.",
      },
      {
        title: "Positioning and proof architecture",
        body: "Positioning statement, value proposition and the evidence behind each claim.",
      },
      {
        title: "Messaging hierarchy",
        body: "Core message and supporting points by audience and funnel stage, ready to brief paid, content, web and sales.",
      },
      {
        title: "Verbal identity and guidelines",
        body: "Voice, vocabulary and usage rules that keep the message consistent as more people write for the brand.",
      },
    ],
    timeline: [
      {
        phase: "Research",
        duration: "Weeks 1–2",
        body: "Interviews, competitor teardown and a review of how sales, website and decks describe the company today.",
      },
      {
        phase: "Leadership session",
        duration: "Week 3",
        body: "Findings presented and the category, audience and differentiator decisions made with your leadership.",
      },
      {
        phase: "Messaging architecture",
        duration: "Weeks 4–5",
        body: "Positioning, proof and messaging hierarchy drafted, tested with target customers where possible, and refined.",
      },
      {
        phase: "Guidelines and handover",
        duration: "Week 6",
        body: "Verbal identity and guidelines delivered, and the positioning briefed into every other channel we run.",
      },
    ],
    goodFit: [
      "Startups about to scale spend who want the message settled before it gets louder",
      "Companies after a new raise or a change in who they sell to",
      "Teams where sales, website and founders each describe the product differently",
      "Technical and B2B products that buyers find hard to explain to each other",
    ],
    notFit: [
      "Teams that only want a new logo and no strategic decisions",
      "Leadership unable to commit time to interviews and the decision session",
    ],
    stack: ["Figma", "Notion", "Miro", "Semrush"],
    engagement:
      "Positioning work typically takes four to six weeks, longer if the category itself is genuinely unsettled.",
    relatedCases: [],
    relatedPosts: [],
  },
};
