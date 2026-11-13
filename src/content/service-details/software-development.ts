import type { ServiceDetailMap } from "./types";

export const SOFTWARE_DEVELOPMENT_DETAILS: ServiceDetailMap = {
  "software-development/custom-software-development": {
    h1: "Custom Software Development Company",
    tagline: "Software shaped to the business, not the other way round.",
    intro: [
      "Custom software development is building the internal tools, platforms and customer-facing systems that fit how your business actually runs, instead of bending the business to fit a tool built for someone else. When an off-the-shelf product forces a process nobody believes in, custom is usually cheaper than the workaround it replaces: the spreadsheets, the brittle middleware, and the person whose job has quietly become copying data from one system to another.",
      "We start with discovery. That means mapping the process, the constraints and the systems already in place, and finishing with an honest build-or-buy recommendation. Buy when the process is genuinely standard; build when the process is the advantage. If the answer is build, the architecture and technical design are signed off before delivery starts, and the software ships in two-week increments you can use, not slide decks describing it.",
      "Most of what we build is TypeScript end to end: React or Next.js on the front end, Node or Python services behind it, Postgres underneath, deployed to AWS, GCP or Vercel. If you already have a stack, we work in it rather than rewriting for preference. Repositories sit in your organisation and infrastructure runs in your accounts from the first commit, so nothing has to be handed back at the end.",
    ],
    deliverables: [
      {
        title: "Discovery and a build-or-buy call",
        body: "Process maps, constraints, the systems the software has to talk to, and a written recommendation, including when the right answer is to buy the SaaS and skip the build.",
      },
      {
        title: "Architecture and technical design",
        body: "Data model, service boundaries, integration points, auth and permissions, and the load the system is designed for, all signed off before delivery begins.",
      },
      {
        title: "Working software every two weeks",
        body: "Each increment is demoed against real usage, not a staging script. Scope stays visible, and change requests get priced and scheduled instead of quietly absorbed.",
      },
      {
        title: "Integrations with what you already run",
        body: "CRM, ERP, payments and internal APIs, with integration risk raised during discovery so it doesn’t turn into a surprise halfway through the build.",
      },
      {
        title: "Security baseline",
        body: "Authentication, role-based access, encryption in transit and at rest, and dependency scanning as standard. Requirements for regulated data are designed into the architecture from the start.",
      },
      {
        title: "Documentation and handover",
        body: "Architecture notes, runbooks and onboarding docs written during the build, then either a handover period to your team or a support retainer for maintenance and iteration.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Process mapping, stakeholder interviews, a review of existing systems and data, and the build-or-buy recommendation.",
      },
      {
        phase: "Structure",
        duration: "Weeks 2–4",
        body: "Architecture, scope and a release plan you can hold us to. Repositories, environments and CI are set up in your accounts.",
      },
      {
        phase: "Publish",
        duration: "Weeks 4–12+",
        body: "Delivery in two-week increments. A focused single-workflow tool typically lands in six to ten weeks overall; a multi-module platform with several roles and integrations runs three to six months.",
      },
      {
        phase: "Track",
        duration: "Ongoing",
        body: "Instrumentation, uptime monitoring and iteration once it’s live. Your team runs it after handover, or we do on a support retainer.",
      },
    ],
    goodFit: [
      "Teams that have outgrown spreadsheets and no-code tools and can name the process that hurts",
      "Companies whose way of operating is the advantage, where a generic SaaS product would flatten it",
      "Funded startups that need a platform built for the load they can credibly expect, not a hypothetical one",
      "Engineering teams that want an embedded squad working inside their existing stack",
    ],
    notFit: [
      "Processes that are genuinely standard, such as payroll, ticketing or a basic CRM, where a mature SaaS product will do the job for less",
      "Full builds that need a fixed bid while the requirements are still moving. Discovery comes first",
    ],
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS", "GCP"],
    engagement:
      "Discovery is fixed-price. Delivery is usually a monthly squad rate; where a genuinely fixed scope exists, such as a defined integration or a migration, we quote it fixed. You own the code from the first commit.",
    relatedCases: ["marketplace-mvp-to-production"],
    relatedPosts: [],
  },

  "software-development/web-mobile-app-development": {
    h1: "Web & Mobile App Development Services",
    tagline: "Apps built for production, not for the demo.",
    intro: [
      "Web and mobile app development, the way we run it, means building production applications that hold up once real users and a marketing budget arrive: React and Next.js on the web, and React Native, Swift or Kotlin on mobile. Most of the distance between a working prototype and an app you can put spend behind is unglamorous: auth edge cases, offline and error states, store review, crash reporting. That’s the part we build for.",
      "We decide native or cross-platform at discovery, not out of habit. React Native covers most products and saves you maintaining two codebases. Native is the right call when the product depends on platform-specific hardware, heavy graphics or background behaviour, and we’ll tell you which case you’re in. On the web, we server-render where search visibility and first load matter and keep client-side rendering where the app sits behind a login.",
      "Accessibility and performance budgets are set before the build, so they shape decisions instead of being audited at the end. Every app ships with event tracking and crash monitoring already wired in. We also handle App Store and Play Store submission, including responses to reviewers, and design against the store guidelines from the start instead of discovering them on submission day.",
    ],
    deliverables: [
      {
        title: "Web applications",
        body: "React and Next.js apps, server-rendered where it matters, with the backend, database and API layer built by the same team so there’s one accountable owner.",
      },
      {
        title: "Mobile apps",
        body: "Cross-platform React Native or native Swift and Kotlin, chosen against your feature list, timeline and how much you want to spend maintaining it afterwards.",
      },
      {
        title: "Flows and a clickable prototype",
        body: "User flows, wireframes and platform-appropriate UI in Figma, signed off as a clickable prototype before production code starts.",
      },
      {
        title: "Performance and accessibility budgets",
        body: "Targets for load time, bundle size and accessibility, agreed at the start and tested against on real devices all the way through the build.",
      },
      {
        title: "Instrumentation from day one",
        body: "Event tracking, crash reporting and release monitoring, so you have usage and stability data on launch day instead of months later.",
      },
      {
        title: "Store submission and release management",
        body: "Listings, metadata, reviewer responses and a staged release process for both Apple and Google.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Product goals, user types, integrations and the native-or-cross-platform decision. If there’s an existing codebase, it gets an architecture audit first.",
      },
      {
        phase: "Structure",
        duration: "Weeks 2–4",
        body: "Flows, prototype, data model and API design, plus the release plan and the performance budgets the build will be held to.",
      },
      {
        phase: "Publish",
        duration: "Weeks 4–14+",
        body: "Two-week increments, each with a working build on real devices. A focused MVP is typically 8 to 14 weeks overall; a full production app with several user types and admin tooling runs a quarter or more.",
      },
      {
        phase: "Track",
        duration: "Ongoing",
        body: "Store submission, staged rollout, crash and usage monitoring, then OS and framework updates as Apple and Google ship new versions.",
      },
    ],
    goodFit: [
      "Startups moving from a prototype to an app they can put acquisition spend behind",
      "Products where web and mobile need to share logic and agree on who a user is",
      "Teams with a backend that needs a proper client, or that need both built by one team",
      "Companies inheriting an app from another agency who need an honest audit before more features",
    ],
    notFit: [
      "Ideas that haven’t yet settled their riskiest assumption. MVP & Rapid Prototyping is the better starting point",
      "Projects that want one fixed bid for a full product while the scope is still changing",
    ],
    stack: ["TypeScript", "React", "Next.js", "React Native", "Swift", "Kotlin", "Node.js", "PostgreSQL"],
    engagement:
      "A focused MVP is typically 8 to 14 weeks; a full production application runs a quarter or more, with working software every two weeks either way. Discovery is fixed-price, and delivery is usually a monthly squad rate.",
    relatedCases: ["marketplace-mvp-to-production"],
    relatedPosts: [],
  },

  "software-development/mvp-rapid-prototyping": {
    h1: "MVP Development for Startups",
    tagline: "Ship the version that answers the question.",
    intro: [
      "MVP development means building the smallest honest version of your product and getting it in front of real users, typically in six to ten weeks. An MVP isn’t a cheap version of the whole product. It’s the smallest thing that settles your riskiest assumption, built well enough that you can trust the answer it gives you.",
      "Most of the work happens before the build. We map what has to be true for the business to work, pick the assumption that would hurt most if it turned out to be wrong, and cut scope down to the one question the MVP should answer. Every feature request after that gets tested against that question, and anything that doesn’t serve it goes to a parked backlog, not the current sprint. You don’t need a finished spec to start; a rough idea or a whiteboard sketch is enough for discovery.",
      "Rapid doesn’t mean careless. The parts that carry user data and money, like auth, payments and permissions, are built properly. The parts that exist only to test a hypothesis are allowed to be disposable, and we tell you which is which as we go, so a later rebuild is a decision you make rather than a surprise. Instrumentation ships with the MVP, because if you can’t measure a launch, you can’t learn anything from it.",
    ],
    deliverables: [
      {
        title: "Assumption map",
        body: "What has to be true for the product to work, ranked by risk, with the one the build is meant to settle named in writing.",
      },
      {
        title: "Locked scope and a parked backlog",
        body: "A written scope cut to that single question. Everything else goes to a backlog, and any genuine change is renegotiated openly rather than allowed to drift in.",
      },
      {
        title: "Prototype where it helps",
        body: "A clickable prototype first if the risk is whether people understand or want the idea; straight to working software if the risk is execution.",
      },
      {
        title: "A working MVP",
        body: "Real, shipped software that early users run on. Usually web-first, because web alone moves faster than web plus native iOS and Android.",
      },
      {
        title: "Instrumentation and success criteria",
        body: "Event tracking and the metric that will answer the question, both agreed before launch so the result gets measured rather than argued about.",
      },
      {
        title: "Keep, refactor or replace notes",
        body: "A record of which parts were built to last and which were deliberately shortcut, so the next phase starts from facts.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Week 1",
        body: "Assumption mapping, user and market context, technical constraints, and the one question the MVP has to answer.",
      },
      {
        phase: "Structure",
        duration: "Weeks 1–2",
        body: "Scope locked in writing, flows and prototype, architecture for the parts that carry data and money, and a firm date.",
      },
      {
        phase: "Publish",
        duration: "Weeks 2–10",
        body: "Two-week increments with demos against real usage. Six to ten weeks for most MVPs; integrations, compliance requirements and native mobile push toward the longer end.",
      },
      {
        phase: "Track",
        duration: "After launch",
        body: "Usage measured against the agreed success criteria, then an assessment of what stays, what gets refactored and what gets replaced.",
      },
    ],
    goodFit: [
      "Founders, from pre-seed onwards, who can state the question the product has to answer",
      "Enterprises launching a new product line without disturbing the core platform",
      "Teams that would rather learn something in weeks than spend a quarter building features nobody asked for",
    ],
    notFit: [
      "Founders who want the full product, with every role and integration, under the MVP label",
      "Launches that can only go faster by cutting auth or instrumentation, because then you can’t learn anything from them",
    ],
    stack: ["TypeScript", "React", "Next.js", "React Native", "Node.js", "PostgreSQL", "Vercel", "AWS"],
    engagement:
      "Six to ten weeks for most MVPs, with a firm date set at the end of discovery. Discovery is fixed-price, and you own the code from the first commit.",
    relatedCases: ["marketplace-mvp-to-production"],
    relatedPosts: [],
  },

  "software-development/ecommerce-development": {
    h1: "Ecommerce Development: Shopify, WooCommerce & Headless",
    tagline: "Storefronts that hold up at catalogue scale.",
    intro: [
      "Ecommerce development covers platform selection, storefront builds, integrations and migrations across Shopify Plus, Shopify, WooCommerce, BigCommerce, Magento and headless stacks. Most ecommerce problems aren’t theme problems. They’re catalogue, checkout and integration problems that the theme is hiding, which is why we start with the product data and the systems around the store rather than the homepage.",
      "Every platform recommendation comes with the trade-offs written down. Shopify Plus suits most DTC and mid-market catalogues. WooCommerce makes sense where WordPress content is the centre of gravity. BigCommerce handles complex B2B pricing natively, and Magento is worth its running cost only where its deep customisation actually gets used. Headless earns its cost for content-heavy catalogues, multi-region storefronts and unusual front-end requirements; for a standard catalogue it often adds complexity without adding revenue, and we’ll say so.",
      "Integrations get designed before the storefront, because ERP, PIM, OMS and payment systems limit what the storefront can promise. For migrations we build a full URL map, set up 301s, carry structured data across, and compare crawls before and after. The existing store stays live and taking orders until the new one has been tested end to end. Some ranking volatility for a few weeks is normal; permanent loss is a planning failure.",
    ],
    deliverables: [
      {
        title: "Platform recommendation",
        body: "A written comparison against your catalogue, order volume, integrations and growth plan, with trade-offs and running costs stated plainly.",
      },
      {
        title: "Theme or headless storefront",
        body: "Custom theme development or a headless front end, built against a performance budget and load-tested for the peaks you actually expect.",
      },
      {
        title: "Checkout and payments",
        body: "Payment providers, currency handling and checkout logic on PCI-compliant platforms, so card data never touches your servers.",
      },
      {
        title: "ERP, PIM, OMS and fulfilment integrations",
        body: "Inventory, pricing, orders and fulfilment status kept in sync, with middleware built where no native connector exists.",
      },
      {
        title: "Migration with rank preservation",
        body: "Products, customers and order history mapped field by field, every URL redirected, metadata and structured data carried over, and crawls compared before and after.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Catalogue structure, product data quality, current integrations, traffic and rankings, and the platform decision.",
      },
      {
        phase: "Structure",
        duration: "Weeks 2–3",
        body: "Information architecture, integration design, the URL map and a release plan with a launch date you can put in a board deck.",
      },
      {
        phase: "Publish",
        duration: "Weeks 3–16",
        body: "Two-week increments, with the new store built and validated alongside the live one. A focused Shopify build typically launches in 6–10 weeks; headless or Plus builds with deeper integrations run 10–16.",
      },
      {
        phase: "Track",
        duration: "Launch and after",
        body: "Cutover, redirect and crawl checks and conversion-path monitoring, then iteration or a move into Ecommerce Maintenance.",
      },
    ],
    goodFit: [
      "DTC and B2B brands whose catalogue, pricing or integrations have outgrown their current setup",
      "Merchants replatforming who can’t afford to lose rankings, order history or customer accounts",
      "Teams paying for Shopify Plus or Magento and using very little of what they pay for",
      "Brands that want the store, its integrations and the growth marketing around it run by one team",
    ],
    notFit: [
      "Small catalogues that a well-chosen premium theme with light customisation will serve",
      "Projects that want headless because it sounds modern, not because the catalogue or front end needs it",
    ],
    stack: [
      "Shopify Plus",
      "Shopify Hydrogen",
      "WooCommerce",
      "BigCommerce",
      "Adobe Commerce (Magento)",
      "Next.js",
      "TypeScript",
      "Node.js",
    ],
    engagement:
      "Discovery is fixed-price. Migrations and defined integrations with a genuinely fixed scope are quoted fixed; open-ended builds usually run at a monthly squad rate.",
    relatedCases: ["marketplace-mvp-to-production"],
    relatedPosts: ["product-led-seo"],
  },

  "software-development/ecommerce-maintenance": {
    h1: "Ecommerce Maintenance & Support Services",
    tagline: "The store still works in November.",
    intro: [
      "Ecommerce maintenance is the scheduled, ongoing work that keeps a store fast, secure and taking orders: platform and dependency updates, monitoring, bug fixes, and the small improvements that otherwise sit in a backlog for months. It’s unglamorous until checkout breaks on the highest-traffic day of the year. Then it’s the only thing that matters.",
      "We maintain Shopify, WooCommerce and custom-built storefronts, including stores we didn’t build. Those start with an audit, because we need to understand what’s there before taking responsibility for keeping it running, and to flag anything genuinely unsafe, such as stale plugins or carelessly handled credentials. After that, updates run on a schedule, every release gets a regression check on the conversion path, and monitoring covers uptime, errors and Core Web Vitals, with alerts that reach a named person.",
      "Peak season gets planned, not hoped for. Ahead of known spikes we review load, freeze risky changes and agree a rollback plan. Anything bigger than maintenance, like a new module, a redesign or a new integration, gets flagged and quoted separately under Ecommerce Development. That keeps your maintenance hours on upkeep instead of letting the retainer turn into a feature queue.",
    ],
    deliverables: [
      {
        title: "Onboarding audit",
        body: "A review of theme, apps or plugins, custom code, access and backups, with anything unsafe fixed before routine work begins.",
      },
      {
        title: "Scheduled updates",
        body: "Platform, theme and dependency updates on an agreed schedule, with security patches for known exploits moved to the front of the queue.",
      },
      {
        title: "Monitoring and alerting",
        body: "Uptime, error and Core Web Vitals monitoring, with alerts routed to a named owner rather than an unread inbox.",
      },
      {
        title: "Conversion-path regression checks",
        body: "Product page, cart and checkout checked after every release, so a change that breaks buying gets caught before customers notice.",
      },
      {
        title: "Peak-season readiness",
        body: "Load planning, a change freeze window and a written rollback plan ahead of launches, sales and holiday trading.",
      },
      {
        title: "A named lead and a block of hours",
        body: "One person who owns your account, a shared channel for requests, and hours set aside each month for small improvements.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Code, theme, app and plugin review, access and backups confirmed, monitoring installed, and a list of anything to fix before routine work starts.",
      },
      {
        phase: "Structure",
        duration: "Week 2",
        body: "Severity ladder and response times agreed, an update schedule set, and the plan sized to the store’s typical workload.",
      },
      {
        phase: "Publish",
        duration: "Every two weeks",
        body: "Updates, fixes and small improvements shipped in regular increments, with a conversion-path check after each release.",
      },
      {
        phase: "Track",
        duration: "Ongoing",
        body: "Uptime, error and Core Web Vitals reporting, a monthly review, and peak-season planning well ahead of known spikes.",
      },
    ],
    goodFit: [
      "Stores where downtime at checkout costs real money and nobody in-house owns the platform",
      "Merchants who inherited a store from a previous agency or freelancer and aren’t sure what’s in it",
      "Brands with a trading calendar of launches, drops and holiday sales that needs the store to hold up on the day",
    ],
    notFit: [
      "Stores that need a rebuild or a replatform. That’s Ecommerce Development, and maintaining the old store first wastes money",
      "Teams looking for a feature-development queue at a maintenance price",
    ],
    stack: [
      "Shopify",
      "Shopify Plus",
      "WooCommerce",
      "WordPress",
      "GitHub Actions",
      "Sentry",
      "Cloudflare",
      "Lighthouse CI",
    ],
    engagement:
      "A retainer covers scheduled updates, monitoring, bug fixes within agreed response times, and a block of hours for small improvements; larger feature work is quoted separately. There are monthly and ad hoc plans. Checkout-down is treated as a same-hour incident during business hours, and out-of-hours cover is available.",
    relatedCases: [],
    relatedPosts: [],
  },

  "software-development/custom-plugins-app-development": {
    h1: "Custom Plugin & Shopify App Development",
    tagline: "When the platform stops short of what you need.",
    intro: [
      "Custom plugin and app development means building Shopify apps, WordPress and WooCommerce plugins, browser extensions and integrations for the point where a platform stops short of what your business needs. Every mature platform has a wall, and extensions are how you get past it without leaving the ecosystem you rely on. Often a single extension also replaces two or three marketplace apps that each do part of the job and each load their own scripts on your storefront.",
      "The first decision is distribution. Private or custom distribution suits a problem that only your store has; it ships faster and skips marketplace review. A public listing makes sense when the extension is itself a product, and it brings review cycles, support obligations and a longer runway. If a private app might go public later, we design for that from the start so it doesn’t need a rebuild.",
      "An extension runs inside someone else’s platform, so it’s built to that platform’s rules: webhook-driven updates instead of polling, minimal storefront JavaScript, narrowly scoped credentials, and tests against the theme versions and configurations merchants actually run. Platforms deprecate APIs on a published schedule, and under a support arrangement we track those deprecations for the extensions we maintain rather than finding out from a broken store. Inherited plugins get a code audit before any feature work, because credential and webhook handling is where the security debt usually sits.",
    ],
    deliverables: [
      {
        title: "Shopify apps",
        body: "Private, custom-distribution or public apps for operational tooling, integrations and checkout logic, built on Shopify’s current APIs.",
      },
      {
        title: "WordPress and WooCommerce plugins",
        body: "Plugins that respect WordPress coding standards, don’t conflict with the plugins you already run, and keep storefront performance intact.",
      },
      {
        title: "CRM, ERP and internal-tool connections",
        body: "Store data flowing one way into the systems that need it, instead of being kept in three disconnected places and reconciled by hand.",
      },
      {
        title: "Marketplace submission",
        body: "Listing assets, the platform’s technical review checklist, and the back-and-forth with reviewers for public apps.",
      },
      {
        title: "Version support",
        body: "Release-note and API-deprecation tracking, with patches shipped before a breaking change reaches your storefront.",
      },
      {
        title: "Audit of inherited extensions",
        body: "A code and security review of plugins someone else wrote, covering credentials, webhooks and data handling in particular.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Week 1",
        body: "The workflow to solve, the existing apps it would replace, platform constraints, and the private-or-public decision.",
      },
      {
        phase: "Structure",
        duration: "Weeks 1–2",
        body: "Data flow, permissions, webhooks and a test matrix across the theme versions and configurations that matter.",
      },
      {
        phase: "Publish",
        duration: "Weeks 2–6+",
        body: "Two-week increments on a staging install of your actual store. A focused private app usually ships in a few weeks; public apps add the platform’s own review cycle, which can take another one to three weeks outside our control.",
      },
      {
        phase: "Track",
        duration: "Ongoing",
        body: "Error monitoring, platform release tracking and version support for as long as the extension is in use.",
      },
    ],
    goodFit: [
      "Merchants stitching several marketplace apps together to approximate one feature",
      "Businesses whose store has to exchange data with a CRM, ERP or internal system no connector handles well",
      "Software companies building a Shopify or WordPress integration as a distribution channel",
      "Teams that inherited a plugin and need someone to assess it and take ownership",
    ],
    notFit: [
      "Needs an existing marketplace app already covers, with acceptable trade-offs. Buy it instead",
      "Public apps that nobody is prepared to support after launch",
    ],
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "Shopify Admin API",
      "Shopify Functions",
      "PHP",
      "WordPress",
      "WooCommerce",
    ],
    engagement:
      "Discovery is fixed-price, and a defined integration with a genuinely fixed scope is quoted fixed. You own the source code and IP for every extension we build.",
    relatedCases: [],
    relatedPosts: [],
  },

  "software-development/ui-ux-design": {
    h1: "UI/UX Product Design Services",
    tagline: "Design that gets built the way it was drawn.",
    intro: [
      "UI/UX design at Motion 8 Agency is product and interface design for web apps, mobile apps and internal tools. It’s grounded in user research and delivered as a design system engineering can build from without reinterpreting it. Designers and engineers sit on the same team, so the handoff is a conversation instead of a specification thrown over a wall.",
      "Research is sized to stop the team designing for itself. That’s typically five to eight user interviews, a review of your analytics and a usability pass on the current product, with more where the domain is unfamiliar. From there the work moves through journeys and wireframes to interface design and clickable prototypes. Key flows go through moderated usability sessions before anything is called final, so friction is caught before engineers spend time building it.",
      "The deliverable is meant to be built. That means design tokens, documented components, every state including empty, loading, error and overflowing, and the edge cases that show up with the first real dataset rather than the tidy one in the mockup. WCAG 2.2 AA is the default standard and is designed in from the start; retrofitting accessibility after launch costs several times more and usually turns out worse. Our engineers can take the design straight into build, or we hand a dev-ready package to yours.",
    ],
    deliverables: [
      {
        title: "Research and journey maps",
        body: "User interviews, analytics review and a usability pass on the current product, turned into journeys that show where people actually get stuck.",
      },
      {
        title: "Wireframes and prototypes",
        body: "Low-fidelity layouts to settle flow and structure, then clickable prototypes you can test with users before any code exists.",
      },
      {
        title: "Interface design",
        body: "High-fidelity screens across web, mobile and internal tooling, designed together so patterns stay consistent across platforms.",
      },
      {
        title: "Design system",
        body: "Tokens, documented components and their states, built so engineering implements them once and reuses them everywhere.",
      },
      {
        title: "Accessibility built in",
        body: "WCAG 2.2 AA covering contrast, focus order, keyboard paths and screen-reader labelling, decided at design time rather than patched later.",
      },
      {
        title: "Developer handoff",
        body: "Figma in dev mode with inspectable specs and annotated edge cases, plus a designer available through the first implementation sprint.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "User interviews, analytics review, a usability pass on the current product, and a heuristic review of the main flows.",
      },
      {
        phase: "Structure",
        duration: "Weeks 2–3",
        body: "Journeys, information architecture and wireframes, plus two directional concepts for the key screens so a visual language is chosen early.",
      },
      {
        phase: "Publish",
        duration: "Weeks 3–8",
        body: "UI and prototypes in two-week increments, with usability sessions on key flows and a revision pass. A focused MVP flow takes about 3–4 weeks overall; a full product with a design system and testing runs 6–8.",
      },
      {
        phase: "Track",
        duration: "Through build",
        body: "Design QA against the built screens, answers to engineering questions during implementation, and a look at analytics after release.",
      },
    ],
    goodFit: [
      "Products whose interface has grown feature by feature and no longer hangs together",
      "Startups preparing an MVP or a major release who want research behind the flows",
      "Engineering teams that need a real design system rather than a folder of screens",
      "Products with accessibility obligations to enterprise, public-sector or regulated buyers",
    ],
    notFit: [
      "Teams that want visual polish on flows they aren’t willing to question",
      "Projects with no access to users or stakeholders at all, because research is what keeps the design honest",
    ],
    stack: ["Figma", "FigJam", "Storybook", "Tokens Studio", "Maze", "axe DevTools", "React"],
    engagement:
      "Available as design only or together with the build. Design files, component libraries and assets are yours to keep.",
    relatedCases: [],
    relatedPosts: [],
  },

  "software-development/devops-cloud-services": {
    h1: "DevOps & Cloud Infrastructure Services",
    tagline: "Deploys that stop being events.",
    intro: [
      "DevOps and cloud services cover the pipelines, infrastructure and observability that let a team ship every week without holding its breath. That means CI/CD with automated tests and safe rollback, infrastructure as code in Terraform, and logging, tracing and alerting that tell you about an incident before a customer does. Shipping weekly is an infrastructure decision before it’s a cultural one.",
      "We work in whichever cloud you’ve already committed to: AWS most often, then GCP and Azure, plus Vercel and Fly for application hosting. Moving clouds is rarely the highest-value thing available. We also build around your existing git workflow, so engineers keep pushing code the way they do now and only what happens after the push changes. Docker is our default for portable, predictable environments, and Kubernetes comes in only when your scale or team size justifies the operational overhead.",
      "Cost is part of the job. A first review usually turns up idle resources, oversized instances, forgotten environments and data transfer nobody has looked at, and we put a number on it before recommending any architectural change. Security is part of the base setup, not an add-on: least-privilege access, secrets management, network segmentation and automated vulnerability scanning, structured so a later SOC 2 audit is straightforward instead of a retrofit.",
    ],
    deliverables: [
      {
        title: "CI/CD pipelines",
        body: "Automated build, test and deploy on every merge, with preview environments where they help and a rollback that has actually been rehearsed.",
      },
      {
        title: "Infrastructure as code",
        body: "Terraform for every environment, reviewed like application code, so infrastructure changes are visible, repeatable and reversible.",
      },
      {
        title: "Observability and runbooks",
        body: "Logging, tracing, alerting with a named owner, and on-call runbooks, because alerting that pages nobody is worse than no alerting.",
      },
      {
        title: "Cloud cost review and rightsizing",
        body: "Waste found and quantified, billing alerts set, and a monthly review so spend stays explainable as you grow.",
      },
      {
        title: "Security baseline",
        body: "Least-privilege IAM, secrets management, network segmentation and vulnerability scanning, built into the foundation.",
      },
      {
        title: "Staged migrations",
        body: "Moves off a current host run behind parallel environments with a tested rollback path, so cutover is a short window rather than a weekend.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Current deploy process, environments, recent incidents, access, and a line-by-line read of the cloud bill.",
      },
      {
        phase: "Structure",
        duration: "Weeks 2–3",
        body: "Target architecture, environment strategy, a plan for codifying infrastructure, and who owns which alerts.",
      },
      {
        phase: "Publish",
        duration: "Weeks 3–8",
        body: "Pipelines, infrastructure as code and observability shipped in two-week increments. Initial setup typically runs four to eight weeks, depending on how much has to be migrated versus built fresh.",
      },
      {
        phase: "Track",
        duration: "Ongoing",
        body: "Monthly cost review, alert tuning, written postmortems after incidents, and on-call cover if you want it.",
      },
    ],
    goodFit: [
      "Teams whose deploys are manual, need a quiet evening, or depend on one person remembering the steps",
      "Startups heading into a post-raise growth spike that want the infrastructure ready before it arrives",
      "Companies whose cloud bill rises every month without anyone being able to explain why",
      "Teams preparing for SOC 2 or enterprise security reviews",
    ],
    notFit: [
      "Cloud-to-cloud migrations for their own sake, with no cost, compliance or capability reason behind them",
      "Very early products where a managed platform already covers deploys and nothing is yet straining",
    ],
    stack: ["AWS", "GCP", "Azure", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "OpenTelemetry"],
    engagement:
      "We can provide on-call cover under an agreed SLA, or set up the rotation, runbooks and alerting for your team to run. A defined migration with a fixed scope is quoted fixed.",
    relatedCases: ["marketplace-mvp-to-production"],
    relatedPosts: [],
  },

  "software-development/blockchain-smart-contracts": {
    h1: "Smart Contract Development & Audit Preparation",
    tagline: "Contracts written to be audited.",
    intro: [
      "Smart contract development is designing, writing, testing and deploying on-chain code that holds value in public and can’t be quietly patched. We work on Ethereum, EVM L2s such as Base, Arbitrum and Optimism, and Solana. Because the code is public, immutable and holds money, it has to be written, tested and reviewed differently, not just do something different. We write contracts to be audited, not merely to compile.",
      "Work starts at architecture: contract boundaries, admin roles, upgradeability and the token model, reviewed against your product and fundraising goals before any code is written. Upgradeability is as much a governance decision as a technical one. Immutable contracts maximise trust; proxy patterns, timelocks and clear admin boundaries let you fix logic later, at the cost of extra trust assumptions and a wider audit scope. So we make that choice explicitly instead of leaving it to a default. Chain choice should follow where your users and liquidity are.",
      "We develop in Solidity and Rust with adversarial test coverage: unit tests on every function, fuzz and invariant tests on critical paths, integration tests against a forked mainnet, static analysis, and testnet deployments your team can use before launch. We don’t audit our own contracts, and you should be wary of anyone who builds and audits the same code. We prepare the codebase for independent auditors, coordinate the review, and fix what they find before anything reaches mainnet.",
    ],
    deliverables: [
      {
        title: "Architecture and tokenomics review",
        body: "Contract boundaries, roles, supply, distribution and vesting, modelled against how the product and the raise are meant to work.",
      },
      {
        title: "Contracts with adversarial tests",
        body: "Solidity or Rust with unit, fuzz, invariant and forked-mainnet tests aimed at reentrancy, access control and oracle manipulation.",
      },
      {
        title: "Audit preparation and remediation",
        body: "A written specification, documented invariants and a clean codebase handed to independent auditors, then fixes for every finding.",
      },
      {
        title: "Gas profiling",
        body: "Storage layout and state writes measured and tuned during development, then checked again after audit fixes change the code.",
      },
      {
        title: "Deployment and upgrade strategy",
        body: "Scripted deployment, source verification, multisig or timelock admin, and a documented upgrade or pause path where the design allows one.",
      },
      {
        title: "Post-launch monitoring",
        body: "Alerting on unusual contract activity and an incident path agreed in advance, because a deployment isn’t finished until someone is watching it.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Requirements, threat model, chain choice and the token model, with regulatory structure taken from your counsel.",
      },
      {
        phase: "Structure",
        duration: "Weeks 2–3",
        body: "Contract architecture, admin and upgrade design, and the specification and invariants written down before code.",
      },
      {
        phase: "Publish",
        duration: "Weeks 3–12",
        body: "Contracts and tests in two-week increments, then audit preparation, independent review and remediation. A single contract typically takes 3–5 weeks; multi-contract protocols with external audits usually run 8–12, since auditors have their own queues.",
      },
      {
        phase: "Track",
        duration: "Mainnet and after",
        body: "Deployment, verification, monitoring and alerting, and an incident response path for anything unexpected.",
      },
    ],
    goodFit: [
      "Teams launching a token, protocol or on-chain product that will hold real value",
      "Projects that want the contracts, audit preparation and product layer owned by one team",
      "Founders who want tokenomics and upgradeability decided deliberately, not inherited from a template",
    ],
    notFit: [
      "Teams looking for one firm to both build and audit the same contract",
      "Launch dates that leave no room for an independent audit and remediation",
      "Anyone expecting legal or securities advice. We build to the structure your counsel specifies",
    ],
    stack: [
      "Solidity",
      "Foundry",
      "Hardhat",
      "OpenZeppelin Contracts",
      "Slither",
      "Rust",
      "Anchor",
      "Safe",
    ],
    relatedCases: [],
    relatedPosts: [],
  },

  "software-development/web3-development": {
    h1: "Web3 & dApp Development Services",
    tagline: "On-chain products people can actually use.",
    intro: [
      "Web3 development is building the product layer around the chain: dApp front ends, wallet flows, indexing, fiat on-ramps, and the transaction states users actually see. The contract is the easy half. Making an on-chain product make sense to someone who has never signed a transaction is the real work.",
      "Onboarding is the first design decision. Embedded wallets and account abstraction let people sign in with email and never see a seed phrase, with self-custody still available to those who want it. MetaMask, WalletConnect and Coinbase Wallet cover people who already hold crypto. Gas follows the same reasoning: sponsored transactions and account-abstraction flows where friction would lose the user, user-paid gas where the audience expects it. Which model fits depends on who you’re building for.",
      "We treat failure as a first-class design problem. Pending, failed, reverted and replaced transactions all get designed and copywritten, because a silent failure while someone’s money is in flight is the fastest way to lose them for good. Prompts say plainly what’s being signed, approvals stay narrow, and transactions are simulated before submission. Reads go through indexers and caches instead of hitting the chain directly, so the interface stays fast as usage grows. If the contracts don’t exist yet, we scope them alongside Blockchain & Smart Contracts so both halves are designed together.",
    ],
    deliverables: [
      {
        title: "dApp front end",
        body: "A web app with wallet connection, network handling and every transaction state designed, not just the happy path.",
      },
      {
        title: "Wallet and onboarding flows",
        body: "Embedded or social-login wallets for newcomers and standard wallet support for crypto-native users, with plain-language explanations at each step.",
      },
      {
        title: "Indexing and subgraphs",
        body: "On-chain data indexed and cached, so balances, history and listings load quickly and reliably.",
      },
      {
        title: "Fiat on-ramp and custody integrations",
        body: "Card and bank on-ramps and custody providers wired in, so users can get started without first buying crypto somewhere else.",
      },
      {
        title: "Gas strategy",
        body: "Sponsored transactions, account-abstraction flows or user-paid gas, chosen for your audience and costed before launch.",
      },
      {
        title: "Transaction safety",
        body: "Simulation before submission, clear signing prompts, narrow approvals and cues that help users tell your dApp from a lookalike.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Users, chain choice, existing contracts, the wallet model, and the regulatory structure set by your counsel.",
      },
      {
        phase: "Structure",
        duration: "Weeks 2–3",
        body: "Flows including every failure state, indexing design, and the on-ramp, custody and gas decisions.",
      },
      {
        phase: "Publish",
        duration: "Weeks 3–10",
        body: "Two-week increments on testnet, then mainnet. A focused dApp with wallet integration and a handful of on-chain interactions typically runs 6–10 weeks; multi-chain products or new contracts take longer.",
      },
      {
        phase: "Track",
        duration: "Ongoing",
        body: "Transaction success and failure rates, indexer health and onboarding drop-off, monitored and acted on after launch.",
      },
    ],
    goodFit: [
      "Teams whose contracts already work but whose front end only crypto-native users can get through",
      "Products for mainstream users who should never need to understand gas or seed phrases",
      "Fintech and consumer apps adding on-chain features behind a familiar interface",
    ],
    notFit: [
      "Projects where the chain is a marketing angle and an ordinary database would serve users better",
      "Teams expecting their developers to settle regulatory questions. We build to what your counsel specifies",
    ],
    stack: ["TypeScript", "React", "Next.js", "viem", "wagmi", "WalletConnect", "The Graph", "Solidity"],
    relatedCases: [],
    relatedPosts: [],
  },

  "software-development/dedicated-teams": {
    h1: "Dedicated Development Teams for Startups & Scale-ups",
    tagline: "The same people, long enough to matter.",
    intro: [
      "A dedicated development team is a named squad of engineers, designers and a delivery lead assigned to your product for months rather than weeks, drawn from our teams across the USA, the UAE and India. Most outsourcing fails on continuity: people rotate off, context leaves with them, and every quarter starts from scratch. A dedicated squad keeps the context that makes the second quarter faster than the first.",
      "This isn’t staff augmentation. Augmentation gives you individuals to manage yourself. A dedicated team comes with its own delivery lead who is accountable for output, and it still works inside your rituals, on your board and to your definition of done. You talk directly to the people writing the code rather than through an account manager, and you review their pull requests the same way you’d review an in-house engineer’s.",
      "Roles cover front-end, back-end and full-stack engineering, mobile, blockchain and smart contracts, QA, DevOps, and product or project management, assembled into a small pod around your roadmap. Time-zone overlap with US, UK, European and APAC hours is agreed in the contract rather than assumed. The team scales up or down on a notice period agreed in advance, so a funding-driven push or a quieter quarter doesn’t mean a hiring or layoff cycle on your side.",
    ],
    deliverables: [
      {
        title: "A named team and delivery lead",
        body: "Specific engineers, designers and a lead assigned to you for the engagement, not a rotating bench reassigned between clients.",
      },
      {
        title: "Structured onboarding",
        body: "Codebase walkthroughs, access provisioning and paired tasks in the first two weeks, so real work is being committed early.",
      },
      {
        title: "Your tools and process",
        body: "Your repository, project board, chat and ceremonies. The team adapts to how you work instead of asking you to adopt its process.",
      },
      {
        title: "An agreed overlap window",
        body: "Hours of live overlap for stand-ups, pairing and quick decisions, written into the contract.",
      },
      {
        title: "Continuity and documentation",
        body: "Decisions and context written down as the work happens, so knowledge stays with the codebase rather than with one person.",
      },
      {
        title: "Flexible capacity",
        body: "Seats added ahead of a push or wound down between milestones, on a notice period you know from day one.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Week 1",
        body: "Roadmap, codebase, team gaps and working hours, turned into the roles, seniority and overlap window you need.",
      },
      {
        phase: "Structure",
        duration: "Weeks 1–2",
        body: "Team shortlist and interviews, NDA and IP assignment signed, access set up, and the definition of done agreed.",
      },
      {
        phase: "Publish",
        duration: "Weeks 2–4 onward",
        body: "Structured onboarding, then two-week sprints inside your process, with the delivery lead accountable for what ships.",
      },
      {
        phase: "Track",
        duration: "Ongoing",
        body: "Regular reviews of delivery against the roadmap, with team shape adjusted on the agreed notice period.",
      },
    ],
    goodFit: [
      "Funded teams with a roadmap longer than any single project and not enough engineers to ship it",
      "CTOs who want extra capacity working inside their process, not alongside it",
      "Companies that tried rotating contractors and lost context every time someone left",
    ],
    notFit: [
      "Work shorter than three months, where ramp-up costs make it bad value for both sides",
      "A single fixed-scope deliverable, which is better run as a project",
    ],
    stack: ["TypeScript", "React", "Next.js", "Node.js", "React Native", "Python", "Solidity", "AWS"],
    engagement:
      "Three-month minimum, because ramp-up costs make anything shorter bad value for both sides; most engagements run considerably longer. The team scales up or down on a notice period agreed in advance, and time-zone overlap is agreed in the contract.",
    relatedCases: ["marketplace-mvp-to-production"],
    relatedPosts: [],
  },
};
