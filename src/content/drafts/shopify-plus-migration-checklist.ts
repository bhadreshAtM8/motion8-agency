import type { Post } from "@/content/posts";

export const post: Post = {
  slug: "shopify-plus-migration-checklist",
  title: "Shopify Plus migration checklist: protect your SEO",
  metaTitle: "Shopify Plus Migration Checklist | Motion 8 Agency",
  metaDescription:
    "A Shopify Plus migration checklist for upgrades and replatforms: checkout extensibility, app audit, redirects, metafields, tracking and a launch-day runbook.",
  excerpt:
    "Upgrading to Shopify Plus rarely hurts rankings on its own. What hurts them is everything teams change at the same time without a map.",
  published: "2026-11-14",
  readingMinutes: 7,
  category: "Ecommerce",
  intro: [
    "To migrate to Shopify Plus without losing SEO, treat it as two projects: the plan upgrade, which keeps your store, URLs and data in place, and everything you change alongside it — checkout, apps, theme, markets, B2B. Most ranking losses come from the second, so audit, map redirects, protect tracking and run a scripted launch.",
    "Replatforming to Plus from Magento or WooCommerce is a different and riskier job, because nearly every URL changes; it gets its own section at the end. Everything else is written as a checklist you can work through in order.",
  ],
  sections: [
    {
      heading: "When is Shopify Plus actually worth it?",
      body: [
        "Plus is worth it when a specific limitation is costing you revenue or operational hours: checkout logic you cannot express, wholesale buyers you cannot serve properly, or several stores and regions you are running by hand. If none of those apply, standard Shopify with well-chosen apps is usually the honest answer.",
        "The common triggers are custom discount, shipping or payment rules at checkout; B2B selling that needs company accounts, catalogues and price lists; multiple storefronts for regions or brands; higher API limits for ERP and warehouse integrations; and scheduled launches and sales events. The plan economics at your volume matter too, but model them with your own numbers rather than someone else’s.",
        "One useful test: write down which Plus capabilities you will actually use in the first two quarters. Plus earns its cost through checkout control, B2B and multi-store operations, and many merchants pay for it while using almost none of that. If your list is short, wait.",
      ],
    },
    {
      heading: "What happens to your checkout, apps and scripts?",
      body: [
        "Checkout customisation on Plus runs through checkout extensibility — checkout UI extensions, Shopify Functions, web pixels and branding settings. Legacy checkout.liquid edits and Shopify Scripts have been deprecated, so anything built on them must be rebuilt rather than carried over.",
        "Checklist: inventory every checkout customisation you have or want — trust messaging, custom fields, upsells, delivery-date pickers, discount logic, hidden payment or shipping methods. Map each one to a native setting, an app that ships a checkout extension, a Shopify Function, or a custom UI extension. Functions are the replacement for Scripts across discounts, payment and delivery customisation, and cart and checkout validation.",
        "Then audit every installed app, theme script and third-party tag: what it does, who owns it, and whether Plus makes it redundant, it needs a checkout-compatible version, or it should go. Wholesale apps may be replaced by native B2B; discount apps by Functions.",
        "Pay special attention to apps that touch SEO — review apps that output schema, SEO apps that write meta tags, translation apps that create URLs, redirect apps. Removing one can silently change what crawlers see, and uninstalled apps often leave code behind in the theme. Crawl before and after any app change.",
      ],
    },
    {
      heading: "How should you set up B2B and international markets?",
      body: [
        "Decide your B2B and Markets structure before launch, because both can create new URLs and duplicate content. B2B on Plus runs inside the same store with company accounts, catalogues and price lists; international selling runs through Shopify Markets on subfolders, subdomains or separate domains.",
        "Checklist for B2B: if you currently run a separate wholesale store, decide whether to consolidate it into one store with B2B. If you do, its URLs need redirects, and its customer and company records need migrating with payment terms intact. Login-gated wholesale pages should not be competing with your retail pages in search.",
        "Checklist for markets: subfolders keep authority on a single domain and are the simplest choice for most brands. Shopify generates hreflang for the market URLs it manages, but only translated content is worth publishing — an untranslated copy is a duplicate. If you run separate expansion stores instead, you’ll need to configure hreflang across stores yourself.",
        "Avoid forced geolocation redirects. Crawlers mostly request pages from one location, and an automatic redirect can stop them from ever seeing your other markets. A country-selector suggestion is safer.",
      ],
    },
    {
      heading: "How do you map URLs and redirects without losing rankings?",
      body: [
        "Export every URL that has rankings, traffic or backlinks and map each to its exact new equivalent before launch. On a straight plan upgrade most URLs do not change; redirects matter wherever you rename handles, restructure collections, consolidate stores or add markets.",
        "Checklist: build the URL inventory from a full crawl, your XML sitemap, Search Console pages with impressions, analytics landing pages and a backlink export. Map one to one, to the closest relevant page, never to the home page by default. Use permanent 301 redirects and import them in bulk via CSV.",
        "Know the Shopify-specific behaviour: a URL redirect only fires when nothing is live at the old path. If a product or page still exists there, it is served and the redirect is ignored. When you change a handle in the admin, keep the option to create a redirect switched on.",
        "Avoid chains by updating older redirects to point at the final destination, and update internal links, navigation and canonical references so the site does not rely on redirects to reach its own pages.",
      ],
    },
    {
      heading: "What happens to metafields, content and structured data?",
      body: [
        "Metafields and metaobjects stay in place on an in-place upgrade, but anything you restructure — a new theme, new templates, consolidated stores — needs a field-by-field plan. Content that disappears from a template disappears from what search engines see.",
        "Checklist: export your metafield and metaobject definitions, note which templates and sections reference each one, and flag any that are owned by an app you plan to remove, since app-owned data can go with the app. Confirm that size guides, specifications, FAQs and other metafield-driven content still render on the new templates.",
        "Check that SEO titles and meta descriptions still come from the product and collection SEO fields rather than being overridden by the new theme. Validate Product, Offer, review and breadcrumb structured data on every key template, because theme and app changes are the usual cause of schema quietly vanishing.",
      ],
    },
    {
      heading: "How do you keep analytics and tracking continuous?",
      body: [
        "Rebuild tracking on Shopify’s Customer Events and web pixels before launch, run it in parallel with the existing setup, and reconcile it against real orders. Under checkout extensibility, scripts pasted into the old checkout and order-status settings no longer run.",
        "Checklist: move GA4 to the Google channel app or a custom pixel; move ad platforms to their official app pixels and server-side conversion APIs where available; wire consent through Shopify’s customer privacy API so your cookie banner controls what fires. Confirm purchase events fire once, with the right value and currency, in every destination.",
        "Keep Search Console and Bing Webmaster Tools verified. A theme change can drop a meta-tag verification, so DNS verification is safer. Annotate the launch date in analytics and dashboards, and compare tracked conversions with Shopify orders daily for the first few weeks.",
      ],
    },
    {
      heading: "What goes in the QA and launch-day runbook?",
      body: [
        "A written runbook with named owners, a go/no-go check and a rollback path, scheduled for your lowest-traffic window. Motion 8 Agency plans migrations that way, with the rollback path defined before the work starts.",
        "QA checkout: place real orders across every payment method, market, currency, discount type and B2B account, then refund them.",
        "QA SEO: crawl the new theme or preview and compare titles, canonicals, meta robots, hreflang, structured data and internal links against the pre-launch crawl.",
        "QA redirects: test the full map with a crawler rather than spot checks. Every old URL should return a single 301 to a live page.",
        "QA tracking and performance: confirm events in every destination, and check Core Web Vitals on key templates with all apps loaded.",
        "On the day: freeze content and app changes, publish the theme, import redirects, remove any storefront password, check robots.txt, resubmit sitemaps in Search Console and Bing Webmaster Tools, then test top revenue pages and checkout. One named person owns the rollback decision.",
      ],
    },
    {
      heading: "What should you monitor after launch?",
      body: [
        "Watch indexing, organic traffic, conversion and tracking daily for the first fortnight, then weekly for the following months. A short dip while engines reprocess changed URLs is normal; a sustained drop on one template or market points to something broken.",
        "Checklist: review Search Console’s page indexing and not-found reports and add redirects for any old URLs you missed. Compare organic landing-page sessions by template against your pre-launch baseline. Check conversion rate by device, market and payment method, and watch for app conflicts, payment failures and slow templates in field Core Web Vitals data.",
        "Keep the pre-launch crawl and the redirect map. They are the fastest way to diagnose anything that drifts in the months after launch.",
      ],
    },
    {
      heading: "What changes if you are moving from Magento or WooCommerce?",
      body: [
        "Almost every URL changes, so the redirect map becomes the centre of the project rather than one step in it. Shopify uses fixed path patterns — /products/, /collections/, /pages/ and /blogs/ — so Magento and WooCommerce structures cannot be reproduced exactly.",
        "Checklist: map categories to collections, remembering that nested categories become flat collections with hierarchy handled by navigation. Map product attributes to variant options and metafields; Shopify’s option model differs, so configurable products may need restructuring. Decide which layered-navigation and filter URLs earn traffic and deserve a collection; redirect the rest to their parent. Move blog content and redirect every post.",
        "Customer passwords do not carry over. Shopify’s newer customer accounts sign people in with a one-time email code, which sidesteps the problem; on legacy accounts, plan account-invitation emails in batches after launch, with clear messaging. Bring order history across for customer accounts and reporting, and replace extensions and plugins with apps or custom apps.",
        "Motion 8 Agency plans these replatforms with catalogue, customer and order history carried over and a full redirect map built to protect rankings. Magento still earns its keep for genuinely complex catalogues, so make sure the move is driven by fit rather than fatigue.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do we need a new theme to upgrade to Shopify Plus?",
      answer:
        "No. Upgrading the plan keeps your existing theme, products, URLs and data, so the theme can stay exactly as it is. Many teams choose to redesign at the same moment, but combining a rebuild with the upgrade multiplies SEO and tracking risk. If you do both, crawl the site and compare before and after launch.",
    },
    {
      question: "Will upgrading to Shopify Plus affect our SEO?",
      answer:
        "Not by itself. Upgrading the plan keeps your store, domain, URLs and content, so search engines see no change. SEO risk comes from what you change at the same time: theme rebuilds, renamed handles, removed apps that output schema, new markets or consolidated stores. Audit and map those changes before launch.",
    },
    {
      question: "What replaces Shopify Scripts on Plus?",
      answer:
        "Shopify Functions. Scripts handled line-item discounts, shipping and payment customisation, and have been deprecated in favour of Functions, which run inside Shopify’s infrastructure and work with checkout extensibility. Many common cases are covered by apps built on Functions; bespoke business logic usually needs a custom app with its own Function.",
    },
    {
      question: "Can we keep customer passwords when moving from Magento or WooCommerce?",
      answer:
        "No. Shopify does not import password hashes from other platforms, so existing passwords cannot carry over. With Shopify’s newer customer accounts, customers sign in with a one-time code sent to their email, so no reset is needed. On legacy accounts, import the customer records and send account invitations in planned batches once launch is stable.",
    },
    {
      question: "Do Shopify redirects work if the old URL still exists?",
      answer:
        "No. A Shopify URL redirect only triggers when nothing is live at the old path. If a product, collection or page still exists at that URL, Shopify serves it and ignores the redirect. Remove or rename the old resource first, then test the complete redirect map with a crawler rather than spot checks.",
    },
  ],
  related: [
    { name: "Shopify Plus", href: "/platforms/shopify-plus" },
    { name: "Magento / Adobe Commerce", href: "/platforms/magento" },
    { name: "Ecommerce Development", href: "/software-development/ecommerce-development" },
    { name: "Ecommerce Maintenance", href: "/software-development/ecommerce-maintenance" },
  ],
};
