import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { BundleContactForm } from "@/components/bundle/BundleContactForm";
import { BundleFaq } from "@/components/bundle/BundleFaq";
import { BundleNav } from "@/components/bundle/BundleNav";
import { BundleOfferCards } from "@/components/bundle/BundleOfferCards";
import { BundleProcess } from "@/components/bundle/BundleProcess";
import { ClickSpark } from "@/components/reactbits/ClickSpark";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { SplitText } from "@/components/reactbits/SplitText";
import { ShinyText } from "@/components/reactbits/ShinyText";
import { StarBorder } from "@/components/reactbits/StarBorder";
import { FadeContent } from "@/components/reactbits/FadeContent";
import { DecryptedText } from "@/components/reactbits/DecryptedText";
import { CountUp } from "@/components/reactbits/CountUp";
import { TrueFocus } from "@/components/reactbits/TrueFocus";
import {
  buildMetadata,
  absolute,
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  graph,
} from "@/lib/seo";
import { SITE } from "@/content/site";

/* ─────────────────────────────────────────────────────────────────────────────
   SEO CONSTANTS — single source of truth for metadata + structured data
   ───────────────────────────────────────────────────────────────────────────── */

const BUNDLE_PATH = "/local-business-website-bundle";
const BUNDLE_TITLE =
  "$399 Local Business Website Bundle — Website, SEO, AEO, GEO & Branding | Motion 8 Agency";
const BUNDLE_DESCRIPTION =
  "Get a custom Next.js website, full SEO setup, AEO & GEO for AI search, custom logo, brand guidelines, Google Analytics, Search Console, and free lifetime hosting — all for a one-time $399 flat fee. No monthly bills. Built by Motion 8 Agency for local businesses in the USA.";
const BUNDLE_SHORT_DESC =
  "Custom website + SEO + AEO/GEO + branding + free hosting for local businesses. One-time $399 flat fee.";

const BUNDLE_KEYWORDS = [
  /* Primary — high-intent transactional */
  "local business website bundle",
  "cheap website for small business",
  "$399 website package",
  "affordable website design",
  "small business website cost",
  "website and SEO package",
  "website branding package",
  /* SEO intent */
  "local SEO setup",
  "SEO for local business",
  "Google My Business SEO",
  "local search optimization",
  "on-page SEO package",
  /* AEO — Answer Engine Optimization */
  "answer engine optimization",
  "AEO for small business",
  "voice search optimization",
  "Siri search optimization",
  "Alexa search optimization",
  /* GEO — Generative Engine Optimization */
  "generative engine optimization",
  "GEO for local business",
  "ChatGPT business listing",
  "AI search optimization",
  "Perplexity business indexing",
  "Google Gemini SEO",
  /* Location + niche */
  "Florida web design",
  "USA small business website",
  "local business digital marketing",
  /* Brand / offer */
  "Motion 8 Agency",
  "Motion 8 website bundle",
  "free lifetime hosting",
  "one-time website fee",
  "no monthly website cost",
  "custom logo and website",
];

/* FAQ data — shared between the rendered component and JSON-LD schema so they
   can never disagree. Exported so BundleFaq can consume the same source. */
const BUNDLE_FAQS = [
  {
    question: "Is $399 really the total price for the website bundle?",
    answer:
      "Yes. $399 is the full, one-time price for everything listed — a custom Next.js website, full SEO setup, AEO & GEO schema for AI search, a custom vector logo, brand guidelines, color palette, Google Analytics, Search Console integration, and free lifetime hosting on a global CDN with SSL. There are no renewal fees, no surprise invoices, and no monthly bills — ever.",
  },
  {
    question: "Will my website actually rank on Google and show up on Google Maps?",
    answer:
      "Yes. Every site is built with semantic HTML5, sub-second edge load speed (scoring 95+ on Google PageSpeed Insights), and complete local SEO markup. We connect Google Search Console and Google Analytics on launch day, submit your dynamic XML sitemap, and configure local business schema so Google and Google Maps accurately index your business name, address, phone, service area, and offerings.",
  },
  {
    question: "Do I own my website code, domain, and design assets 100%?",
    answer:
      "100% yes. Unlike proprietary site builders (Wix, Squarespace, GoDaddy) where your site is trapped in their walled garden, your Next.js codebase, custom vector logo files, and brand guidelines are entirely yours. You can host them anywhere, export them anytime, and never pay a vendor ransom to keep your website live.",
  },
  {
    question: "How does this compare to DIY builders like Squarespace or Wix?",
    answer:
      "DIY builders cost $20 to $50 every month forever ($1,000+ over 2-3 years), run bloated template code that struggles on Core Web Vitals, and force you to write your own copy, design your own logo, and configure your own SEO from scratch. With Motion 8, you get a custom-engineered Next.js 15 site built by agency professionals, turnkey SEO and AI search setup, custom branding, and lifetime hosting for a single $399 payment.",
  },
  {
    question: "What does AEO and GEO actually mean for my business?",
    answer:
      "Traditional SEO targets conventional Google search rankings. AEO (Answer Engine Optimization) structures your website so voice assistants like Siri, Alexa, and Google Assistant can cite your business when users ask for local services. GEO (Generative Engine Optimization) adds schema markup so AI platforms like ChatGPT, Google Gemini, and Perplexity AI recommend your business in conversational search results. Together, they future-proof your online presence beyond traditional search.",
  },
  {
    question: "What if I already have an existing website or domain?",
    answer:
      "We can migrate and upgrade your existing content, modernizing the layout onto our blazing-fast Next.js stack, setting up proper local SEO, AEO & GEO search indexation, and refreshing your logo and visual guidelines — without disrupting your current domain.",
  },
  {
    question: "How long does the entire website build take?",
    answer:
      "Once you submit the 5-minute intake form, our engineering and design team typically completes the website build, logo suite, brand kit, SEO and AI search configurations in 7–14 business days. We then walk you through a live review before publishing.",
  },
  {
    question: "Is there a catch with the $399 price?",
    answer:
      "None. We leverage modern edge architecture (Vercel, Cloudflare) which eliminates recurring server infrastructure overhead for static sites, and our proprietary in-house design frameworks. We don't lock you into expensive retainers or proprietary website builders. Your code, design assets, and domain belong 100% to you.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   NEXT.JS METADATA — buildMetadata produces canonical, OG, Twitter,
   robots directives, and googleBot max-snippet/image-preview settings.
   Enriched with Meta Ads and geo-targeting tags.
   ───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  ...buildMetadata({
    title: BUNDLE_TITLE,
    description: BUNDLE_DESCRIPTION,
    path: BUNDLE_PATH,
    image: "/local-business-website-bundle/opengraph-image",
    keywords: BUNDLE_KEYWORDS,
  }),
  other: {
    /* Meta Ads & Facebook Catalog tags */
    "product:price:amount": "399",
    "product:price:currency": "USD",
    "og:price:amount": "399",
    "og:price:currency": "USD",
    "og:availability": "instock",
    /* Geographic & Local Business signals for Florida / USA */
    "geo.region": "US-FL",
    "geo.placename": "Florida, United States",
    "business:contact_data:locality": "Florida",
    "business:contact_data:country_name": "United States",
    "business:contact_data:email": "hello@motion8agency.co",
    /* Crawl & indexing directives */
    "rating": "General",
    "revisit-after": "7 days",
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD STRUCTURED DATA — @graph with 9 schemas for:
   • Google Rich Results (Product, FAQ, Service, BreadcrumbList, HowTo)
   • AEO / Voice Assistants (FAQPage, HowTo, speakable)
   • GEO / LLM Crawlers (WebPage, Organization, WebSite, Product)
   • Local SEO / Local Pack (ProfessionalService / LocalBusiness)
   ───────────────────────────────────────────────────────────────────────────── */

const bundleUrl = absolute(BUNDLE_PATH);

/** Product + Offer schema — triggers Google's product rich snippet and
 *  gives LLMs (ChatGPT, Gemini, Perplexity) structured pricing data. */
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${bundleUrl}#product`,
  name: "Digital Launch Bundle — Local Business Website Package",
  description: BUNDLE_DESCRIPTION,
  url: bundleUrl,
  image: absolute("/local-business-website-bundle/opengraph-image"),
  brand: {
    "@type": "Brand",
    name: SITE.name,
  },
  offers: {
    "@type": "Offer",
    url: bundleUrl,
    priceCurrency: "USD",
    price: "399.00",
    priceValidUntil: "2027-12-31",
    availability: "https://schema.org/InStock",
    seller: { "@id": `${SITE.url}/#organization` },
    itemCondition: "https://schema.org/NewCondition",
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "US",
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 30,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
    },
  },
  category: "Web Design & Development Services",
};

/** Service schema — tells Google this is a professional service offering. */
const bundleServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local Business Website & SEO Bundle",
  description: BUNDLE_SHORT_DESC,
  serviceType: "Web Design, SEO, AEO, GEO, Branding",
  category: "Digital Marketing & Web Development",
  url: bundleUrl,
  provider: { "@id": `${SITE.url}/#organization` },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "$399 Digital Launch Bundle",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Next.js Website (5-7 pages)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "On-Page SEO Setup (Meta Tags, Open Graph, Sitemap)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AEO — Answer Engine Optimization (Voice Search Schema)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GEO — Generative Engine Optimization (AI Search Schema)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Vector Logo Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Guidelines & Color Palette" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Analytics 4 Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Search Console Setup" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Lifetime Hosting (Global CDN + SSL)" } },
    ],
  },
};

/** WebPage schema — speakable property enables voice assistant citation (AEO). */
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": bundleUrl,
  url: bundleUrl,
  name: BUNDLE_TITLE,
  description: BUNDLE_DESCRIPTION,
  isPartOf: { "@id": `${SITE.url}/#website` },
  about: { "@id": `${SITE.url}/#organization` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: absolute("/local-business-website-bundle/opengraph-image"),
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".speakable-description", "article"],
  },
  significantLink: [
    `${bundleUrl}#intake-form`,
    `${bundleUrl}#the-offer`,
  ],
  lastReviewed: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
};

/** HowTo schema — shows as rich snippet in Google; voice assistants
 *  can read it step-by-step (AEO). */
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get Your $399 Local Business Website Bundle",
  description:
    "Four simple steps to go from sign-up to a live, SEO-optimized website with AI search indexing and full brand identity.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Submit the Intake Form",
      text: "Fill out a 5-minute form with your business name, industry, preferred colors, and any existing brand assets.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Design & Development",
      text: "Our team builds your custom Next.js website, configures SEO/AEO/GEO, and designs your logo and brand guidelines.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Live Review & Revisions",
      text: "We walk you through a live preview. You request any changes, and we finalize everything.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Launch & Go Live",
      text: "Your website goes live on a global CDN with free SSL. Google Analytics and Search Console are connected from day one.",
    },
  ],
  totalTime: "P14D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "399",
  },
};

/** LocalBusiness / ProfessionalService schema — cements local SEO authority in Florida, USA. */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#localbusiness`,
  name: "Motion 8 Agency — Digital Launch Bundle",
  image: absolute("/local-business-website-bundle/opengraph-image"),
  url: bundleUrl,
  email: SITE.email,
  priceRange: "$399",
  currenciesAccepted: "USD",
  paymentAccepted: "Credit Card, Debit Card, Stripe, Bank Transfer",
  /* No aggregateRating / geo / hasMap / address: Google requires ratings to be
     visible, third-party reviews and a real verifiable location. Add them back
     only when both exist on this page. */
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "State", name: "Florida" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  makesOffer: {
    "@id": `${bundleUrl}#product`,
  },
};

/** Build the full JSON-LD @graph — one <script> tag, 9 schemas. */
const jsonLd = graph([
  organizationSchema(),
  websiteSchema(),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Local Business Website Bundle", path: BUNDLE_PATH },
  ]),
  faqSchema(BUNDLE_FAQS),
  productSchema,
  bundleServiceSchema,
  localBusinessSchema,
  webPageSchema,
  howToSchema,
]);

function ArrowUpRightIcon({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H9M17 7V15" />
    </svg>
  );
}

function CaretDownIcon({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const COMPARISON_ROWS = [
  {
    feature: "Website",
    typicalBadge: "Template",
    typical: "Generic template (slow WordPress/Wix)",
    motion8Badge: "Custom Next.js",
    motion8: "Handcrafted Next.js 15, sub-second speed",
  },
  {
    feature: "SEO Setup",
    typicalBadge: "Not Included",
    typical: "Upsell package (+$1,500 extra)",
    motion8Badge: "Included",
    motion8: "Full meta tags, titles & Open Graph cards",
  },
  {
    feature: "AEO / GEO (AI Search)",
    typicalBadge: "Not Offered",
    typical: "Missing (outdated agency workflows)",
    motion8Badge: "Included",
    motion8: "ChatGPT, Gemini & Perplexity indexing schema",
  },
  {
    feature: "Brand Identity",
    typicalBadge: "Stock Clipart",
    typical: "Stock graphics only, no usage rules",
    motion8Badge: "Included",
    motion8: "Custom vector logo, guidelines & color palette",
  },
  {
    feature: "Hosting & SSL",
    typicalBadge: "$20–$50/mo",
    typical: "Perpetual recurring server bills",
    motion8Badge: "$0/mo Forever",
    motion8: "Free for life on global CDN with SSL",
  },
  {
    feature: "Search Tracking",
    typicalBadge: "DIY",
    typical: "You configure verification yourself",
    motion8Badge: "Done For You",
    motion8: "Search Console & GA4 connected day one",
  },
  {
    feature: "Total Investment",
    typicalBadge: "$1,000+/yr",
    typical: '"$99/mo" retainers that never end',
    motion8Badge: "$399 Flat",
    motion8: "One-time flat fee. Zero recurring bills.",
    highlight: true,
  },
];

const LOCAL_INDUSTRIES = [
  {
    title: "Home Services & Trades",
    slug: "home-services",
    description: "Plumbing, Roofing, HVAC, Electricians, Landscaping, Pest Control",
    badge: "Fast Quotes & Area Maps",
  },
  {
    title: "Health, Dental & Medspa",
    slug: "healthcare",
    description: "Dental Practices, Chiropractors, Medspas, Physical Therapy, Clinics",
    badge: "Booking Links & Service Menus",
  },
  {
    title: "Legal & Professional Services",
    slug: "legal-professional",
    description: "Law Firms, Attorneys, CPAs, Bookkeepers, Financial Planners, Consultants",
    badge: "Consultation Intake & Bios",
  },
  {
    title: "Restaurants, Cafes & Food",
    slug: "restaurants",
    description: "Bistros, Coffee Shops, Catering Services, Bakeries, Food Trucks",
    badge: "Mobile Menus & Google Maps",
  },
  {
    title: "Automotive & Field Ops",
    slug: "automotive",
    description: "Auto Repair, Mobile Detailing, Towing, Tire Shops, Wrap Specialists",
    badge: "Price Tables & SMS Booking",
  },
  {
    title: "Real Estate & Housing",
    slug: "real-estate",
    description: "Realtors, Independent Brokerages, Property Managers, Appraisers",
    badge: "Local Neighborhood Guides",
  },
];

export default function BundlePage() {
  return (
    <ClickSpark sparkColor="#E4642A" sparkSize={12} sparkRadius={22} sparkCount={10}>
      {/* JSON-LD Structured Data — 8 schemas in a single @graph for
          Google Rich Results, AEO voice assistants, and GEO LLM crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="relative min-h-screen bg-ground text-dark-body selection:bg-terracotta selection:text-white">
        {/* Background Image: bg_motion8.png */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <Image
            src="/bg_motion8.png"
            alt=""
            fill
            priority
            quality={95}
            className="object-cover object-top opacity-35 sm:opacity-45 scale-105"
          />
          {/* Gradients to blend smoothly with dark ground */}
          <div className="absolute inset-0 bg-gradient-to-b from-ground/30 via-ground/70 to-ground" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,transparent_0%,rgba(27,19,13,0.75)_100%)]" />
        </div>

        {/* Top Header with Brand and Quick Links */}
        <BundleNav />

        <main id="main" className="relative z-10 overflow-hidden pt-24 md:pt-32">
          {/* Ambient Lighting Accents */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[800px] w-[1000px] rounded-full opacity-35"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(228,100,42,0.32) 0%, rgba(195,72,17,0.08) 50%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-[1400px] -right-40 h-[700px] w-[700px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(11,54,154,0.4) 0%, transparent 70%)",
            }}
          />

          {/* ========================================================
              HERO SECTION — <article> wrapper for GEO/LLM crawlability
             ======================================================== */}
          <article itemScope itemType="https://schema.org/Product">
            <meta itemProp="name" content="Digital Launch Bundle — $399 Local Business Website Package" />
            <meta itemProp="description" content={BUNDLE_DESCRIPTION} />
            <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="priceCurrency" content="USD" />
              <meta itemProp="price" content="399.00" />
              <meta itemProp="availability" content="https://schema.org/InStock" />
            </div>

          <section className="gutter relative pb-16 pt-8 md:pb-28 md:pt-14">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
                {/* Left Column: Headline & Value Prop */}
                <div className="lg:col-span-7 text-left">
                  {/* Headline:
                      "Everything your business needs to show up online. One price: $399." */}
                  <h1 className="text-[clamp(38px,6vw,76px)] font-extrabold leading-[1.03] tracking-[-0.035em] text-white">
                    <SplitText
                      text="Everything your business needs to show up online. One price:"
                      delay={35}
                      duration={0.5}
                      className="font-extrabold inline"
                    />{" "}
                    <span className="text-terracotta-light inline-block font-black drop-shadow-[0_0_24px_rgba(228,100,42,0.35)]">
                      $399.
                    </span>
                  </h1>

                  {/* Subheadline — .speakable-description for AEO voice assistants */}
                  <p className="speakable-description mt-6 text-[17px] md:text-[20px] leading-[1.65] text-dark-muted">
                    A brand-new website built to get found on Google — and now on AI search too — plus your
                    logo, brand colors, and guidelines. Free hosting for life. No monthly bill, ever.
                  </p>

                  {/* Hero CTAs */}
                  <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                    <a
                      href="#intake-form"
                      className="group liquid-glass-btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-extrabold text-white"
                    >
                      <span>Get My $399 Bundle</span>
                      <ArrowUpRightIcon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <a
                      href="#the-offer"
                      className="group inline-flex items-center gap-2 text-sm font-bold text-neutral-300 transition-colors hover:text-white"
                    >
                      <span>See exactly what&apos;s included</span>
                      <CaretDownIcon className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* Right Column: The $399 Digital Launch Bundle Spotlight Card */}
                <div className="lg:col-span-5">
                  <div className="liquid-glass-card rounded-[32px] sm:rounded-[36px] p-7 md:p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-5">
                      <div>
                        <span className="rounded-lg bg-[#F95721]/20 border border-[#F95721]/30 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#FF7A29]">
                          All-in-One
                        </span>
                        <h2 className="mt-2 text-xl font-black text-white">Digital Launch Bundle</h2>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] font-bold text-neutral-400 uppercase">One-time flat fee</div>
                        <div className="text-3xl md:text-4xl font-black text-white flex items-baseline justify-end">
                          <span className="text-xl font-bold text-[#FF7A29] mr-0.5">$</span>
                          <CountUp to={399} duration={2} delay={0.2} />
                        </div>
                      </div>
                    </div>

                    <div className="py-4 text-xs font-semibold text-[#FF7A29] tracking-wide">
                      Zero recurring software fees
                    </div>

                    {/* What you get on day one */}
                    <div className="space-y-4">
                      <div className="text-xs font-black uppercase tracking-wider text-neutral-400">
                        What you get on day one:
                      </div>
                      <ul className="space-y-2.5 text-sm font-medium text-white/90">
                        <li className="flex items-center gap-2.5">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#F95721]/20 text-[#FF7A29]">
                            <svg className="w-3 h-3 text-[#FF7A29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>Website + SEO, AEO &amp; GEO</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#F95721]/20 text-[#FF7A29]">
                            <svg className="w-3 h-3 text-[#FF7A29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>Logo + brand guidelines</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#F95721]/20 text-[#FF7A29]">
                            <svg className="w-3 h-3 text-[#FF7A29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>Analytics &amp; Search Console</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#F95721]/20 text-[#FF7A29]">
                            <svg className="w-3 h-3 text-[#FF7A29]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>Hosting, free for life</span>
                        </li>
                      </ul>

                      {/* Lifetime Hosting Guaranteed Box */}
                      <div className="rounded-2xl liquid-glass-inner p-4">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-extrabold text-white">Lifetime Hosting Guaranteed</span>
                          <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 font-bold text-emerald-400 border border-emerald-500/30">
                            $0/mo
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-neutral-400">
                          Fast global CDN · Free SSL certificate
                        </p>
                      </div>

                      {/* CTA inside card */}
                      <a
                        href="#intake-form"
                        className="group liquid-glass-btn-primary flex items-center justify-center gap-2 w-full text-center rounded-2xl py-4 text-sm font-extrabold uppercase tracking-wider text-white mt-4"
                      >
                        <span>Start My Build</span>
                        <ArrowUpRightIcon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Technical Credentials & Core Web Vitals Trust Bar */}
                <div className="lg:col-span-12 mt-6 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    <div className="liquid-glass-inner rounded-2xl p-4 text-center">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Core Web Vitals</div>
                      <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">98+ Score</div>
                      <div className="text-[11px] text-neutral-400 font-medium mt-0.5">Sub-Second LCP (&lt;1.2s)</div>
                    </div>
                    <div className="liquid-glass-inner rounded-2xl p-4 text-center">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Stack Architecture</div>
                      <div className="text-xl sm:text-2xl font-black text-white mt-1">Next.js 15</div>
                      <div className="text-[11px] text-neutral-400 font-medium mt-0.5">Edge Prerendered HTML</div>
                    </div>
                    <div className="liquid-glass-inner rounded-2xl p-4 text-center">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">AI Search Index</div>
                      <div className="text-xl sm:text-2xl font-black text-[#FF7A29] mt-1">AEO &amp; GEO</div>
                      <div className="text-[11px] text-neutral-400 font-medium mt-0.5">ChatGPT · Gemini · Siri</div>
                    </div>
                    <div className="liquid-glass-inner rounded-2xl p-4 text-center">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Global Edge CDN</div>
                      <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">$0/mo Free</div>
                      <div className="text-[11px] text-neutral-400 font-medium mt-0.5">Automated SSL for Life</div>
                    </div>
                  </div>
                </div>

                {/* AEO Executive Summary / Google Featured Snippet Definition Box */}
                <div className="lg:col-span-12 mt-2">
                  <div className="rounded-2xl liquid-glass-inner p-6 sm:p-7 border border-white/10 text-left">
                    <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#FF7A29] mb-2.5">
                      <span className="flex h-2 w-2 rounded-full bg-[#FF7A29] animate-pulse" />
                      <span>Executive Overview • Structured for Search &amp; Voice Assistants</span>
                    </div>
                    <p className="speakable-summary text-sm sm:text-base leading-relaxed text-neutral-300">
                      <strong className="text-white">The $399 Digital Launch Bundle by Motion 8 Agency</strong> is an all-in-one web development, search engine optimization (SEO), and branding package designed specifically for local businesses and independent service providers. The bundle includes a custom-engineered Next.js 15 website (5–7 pages), complete on-page local SEO, Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) structured schema for conversational AI search engines (ChatGPT, Google Gemini, Perplexity, and Apple Siri), a custom vector logo, brand guidelines, color palette, and lifetime free hosting on a global CDN with SSL and zero recurring monthly fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================
              PROBLEM / EMPATHY BRIDGE
             ======================================================== */}
          <section className="gutter relative border-t border-edge-rule bg-black/40 py-20 md:py-24">
            <FadeContent blur duration={800} threshold={0.15}>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-4">
                  <TrueFocus
                    sentence="Affordable. Fast. Built to get found."
                    blurAmount={3}
                    borderColor="#E4642A"
                    glowColor="rgba(228, 100, 42, 0.45)"
                    animationDuration={0.4}
                    wordClassName="text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-widest text-terracotta-light"
                  />
                </div>
                <h2 className="text-[clamp(26px,4vw,44px)] font-extrabold leading-[1.15] tracking-[-0.025em] text-white">
                  You know you need this. You just didn&apos;t think it&apos;d be affordable.
                </h2>
                <div className="mt-7 text-left space-y-5 text-[16px] md:text-[18px] leading-[1.8] text-dark-muted">
                  <p>
                    Every quote you&apos;ve gotten has started at $3,000 — and that&apos;s before anyone mentions SEO.
                    Meanwhile your competitor down the street shows up first on Google, and you don&apos;t show up at all.
                  </p>
                  <div className="rounded-2xl liquid-glass-inner p-6 text-white font-medium text-base sm:text-lg leading-relaxed">
                    You don&apos;t need a 40-page proposal. You need a website that works, is built to actually get found,
                    and doesn&apos;t come with a bill every month.
                  </div>
                </div>
              </div>
            </FadeContent>
          </section>

          {/* ========================================================
              THE OFFER SECTION (14 DELIVERABLES)
             ======================================================== */}
          <section
            id="the-offer"
            className="gutter relative border-t border-edge-rule bg-ground/85 backdrop-blur-md py-20 md:py-28 scroll-mt-24 md:scroll-mt-28"
          >
            <BundleOfferCards />
          </section>

          {/* ========================================================
              COMPARISON TABLE: WHY IT'S NOT TOO GOOD TO BE TRUE
             ======================================================== */}
          <section className="gutter relative border-t border-edge-rule bg-ground/85 backdrop-blur-md py-20 md:py-28">
            <div className="mx-auto max-w-5xl">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF7A29] mb-2">
                  <DecryptedText text="WHY IT'S NOT TOO GOOD TO BE TRUE" animateOn="view" speed={30} />
                </div>
                <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-0.03em] text-white">
                  What $399 actually buys, side by side
                </h2>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto rounded-[28px] sm:rounded-[32px] liquid-glass-card">
                <table className="w-full min-w-[620px] text-left border-collapse">
                  <caption className="sr-only">Detailed Feature and Price Comparison: Typical Website Deal vs. Motion 8 $399 Digital Launch Bundle</caption>
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.04] text-xs font-black uppercase tracking-wider text-neutral-300">
                      <th scope="col" className="p-5 sm:p-6">Feature</th>
                      <th scope="col" className="p-5 sm:p-6 text-neutral-400">Typical “cheap website” deal</th>
                      <th scope="col" className="p-5 sm:p-6 text-[#FF7A29] bg-[#F95721]/15 font-black">Motion 8 $399 bundle</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.08] text-sm">
                    {COMPARISON_ROWS.map((row, idx) => (
                      <tr
                        key={idx}
                        className={row.highlight ? "bg-[#F95721]/15 font-bold" : "hover:bg-white/[0.03] transition-colors"}
                      >
                        <th scope="row" className="p-5 sm:p-6 font-bold text-white whitespace-nowrap text-left font-normal">{row.feature}</th>
                        <td className="p-5 sm:p-6 text-neutral-300">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/[0.05] text-neutral-400 border border-white/10 shrink-0 w-fit">
                              {row.typicalBadge}
                            </span>
                            <span className="text-xs sm:text-sm text-neutral-400 leading-snug">{row.typical}</span>
                          </div>
                        </td>
                        <td className="p-5 sm:p-6 text-white font-semibold bg-[#F95721]/5">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider shrink-0 w-fit ${
                                row.highlight
                                  ? "bg-gradient-to-r from-[#F95721] to-[#FF7A29] text-white shadow-md shadow-[#F95721]/40"
                                  : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                              }`}
                            >
                              {row.motion8Badge}
                            </span>
                            <span className="text-xs sm:text-sm text-white font-medium leading-snug">{row.motion8}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-center text-xs text-dark-muted">
                Scroll horizontally on mobile devices to view full comparison • All deliverables included with no hidden fees
              </p>
            </div>
          </section>

          {/* ========================================================
              PROCESS: FROM SIGN-UP TO LIVE SITE
             ======================================================== */}
          <BundleProcess />

          {/* ========================================================
              LOCAL INDUSTRIES & SERVICE VERTICALS (LOCAL SEO BOOST)
             ======================================================== */}
          <section className="gutter relative border-t border-edge-rule bg-ground/85 backdrop-blur-md py-20 md:py-28">
            <div className="mx-auto max-w-6xl">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF7A29] mb-2">
                  LOCAL BUSINESS ARCHITECTURE
                </div>
                <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-0.03em] text-white">
                  Built for local service providers, trades &amp; practices
                </h2>
                <p className="mt-4 text-base sm:text-lg text-dark-muted max-w-2xl mx-auto">
                  Tailored page structure, schema markup, and conversion flows designed specifically for high-intent local searchers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {LOCAL_INDUSTRIES.map((ind, idx) => (
                  <div key={idx} className="liquid-glass-card rounded-[28px] p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="text-xs font-black uppercase tracking-wider text-[#FF7A29] bg-[#F95721]/15 px-2.5 py-1 rounded-md border border-[#F95721]/30">
                          {ind.badge}
                        </span>
                        <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                      </div>
                      <h3 className="text-lg font-black text-white">{ind.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed font-medium">
                        {ind.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-emerald-400 font-semibold">
                      <span>Complete SEO &amp; Branding Included</span>
                      <span>$399 Flat</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================
              WHO'S BUILDING THIS
             ======================================================== */}
          <section className="gutter relative border-t border-edge-rule bg-ground/85 backdrop-blur-md py-20 md:py-28">
            <FadeContent blur duration={700} threshold={0.15}>
              <div className="mx-auto max-w-4xl text-center">
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF7A29] mb-2">
                  WHO&apos;S BUILDING THIS
                </div>
                <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-0.03em] text-white">
                  Motion 8 Engineering &amp; Design Team
                </h2>
                <p className="mt-4 text-lg md:text-xl font-semibold text-[#FF7A29]">
                  Built by the same team behind Motion 8&apos;s startup and enterprise clients — sized and priced for local businesses.
                </p>

                <p className="mx-auto mt-6 max-w-2xl text-[16px] md:text-[18px] leading-[1.75] text-dark-muted">
                  Motion 8 builds growth infrastructure for funded startups across the US, UK, and Australia.
                  This bundle brings that same engineering team to local businesses — backed by our expertise in{" "}
                  <Link href="/software-development" className="text-white underline underline-offset-4 decoration-[#F95721] hover:text-[#FF7A29] transition-colors font-semibold">
                    Custom Software Development
                  </Link>
                  ,{" "}
                  <Link href="/digital-marketing/seo-content-strategy" className="text-white underline underline-offset-4 decoration-[#F95721] hover:text-[#FF7A29] transition-colors font-semibold">
                    Technical Local SEO
                  </Link>
                  , and{" "}
                  <Link href="/digital-marketing/aeo-answer-engine-optimization" className="text-white underline underline-offset-4 decoration-[#F95721] hover:text-[#FF7A29] transition-colors font-semibold">
                    AEO &amp; GEO AI Search
                  </Link>
                  .
                </p>

                {/* Track Record Badges */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center gap-2.5 rounded-2xl liquid-glass-inner px-6 py-3.5 text-xs md:text-sm font-bold text-white">
                    <svg className="w-4 h-4 text-[#FF7A29] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>US, UK &amp; Australia Client Track Record</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-2xl liquid-glass-inner px-6 py-3.5 text-xs md:text-sm font-bold text-white">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Dedicated In-House Team (No Outsourcing)</span>
                  </div>
                </div>
              </div>
            </FadeContent>
          </section>

          {/* ========================================================
              FAQ SECTION
             ======================================================== */}
          <section className="gutter relative border-t border-edge-rule bg-ground/85 backdrop-blur-md py-20 md:py-28">
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-14">
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-terracotta-light mb-2">
                  FAQ
                </div>
                <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold tracking-[-0.03em] text-white">
                  Questions, answered
                </h2>
              </div>

              {/* Accordion FAQ component with the exact requested questions */}
              <BundleFaq faqs={BUNDLE_FAQS} />
            </div>
          </section>

          {/* ========================================================
              INTAKE / ORDER FORM (CLAIM THE $399 BUNDLE)
             ======================================================== */}
          <section id="intake-form" className="gutter relative border-t border-edge-rule bg-ground/85 backdrop-blur-md py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <span className="rounded-md bg-terracotta px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                Step 01 • Five Minutes
              </span>
              <h2 className="mt-4 text-[clamp(32px,5vw,54px)] font-extrabold tracking-[-0.03em] text-white">
                Tell us about your business
              </h2>
              <p className="mt-3 text-[16px] md:text-[18px] text-dark-muted max-w-xl mx-auto">
                Lock in your $399 flat price today. No monthly hosting bills, no recurring surprises.
              </p>
            </div>

            <BundleContactForm />
          </section>
          </article>
          {/* ← closes the <article itemScope itemType="Product"> wrapper */}
        </main>

        {/* ========================================================
            FOOTER SECTION
           ======================================================== */}
        <footer className="gutter border-t border-edge-rule bg-black/80 py-14 text-sm text-dark-muted">
          <div className="mx-auto max-w-5xl flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <p className="text-lg font-black tracking-tight text-white">MOTION8 AGENCY</p>
              <p className="text-xs font-semibold text-terracotta-light mt-1">
                Digital Launch Bundle — Website, SEO &amp; Branding for Local Businesses
              </p>
              <p className="text-xs text-dark-faint mt-1">
                Motion 8 Agency — Digital Launch Bundle · Florida, USA
              </p>
            </div>

            <div className="text-xs text-dark-faint md:text-right">
              <p>© 2026 Motion 8 Agency. All rights reserved.</p>
              <div className="mt-2 flex items-center justify-center md:justify-end gap-4 text-dark-muted font-bold">
                <Link href="/privacy" className="hover:text-terracotta-light transition-colors">
                  Privacy Policy
                </Link>
                <span>·</span>
                <Link href="/terms" className="hover:text-terracotta-light transition-colors">
                  Terms &amp; Conditions
                </Link>
                <span>·</span>
                <Link href="/" className="hover:text-terracotta-light transition-colors">
                  Main Site
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ClickSpark>
  );
}
