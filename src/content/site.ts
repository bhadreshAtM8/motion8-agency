import { PILLARS, TOTAL_PILLARS, TOTAL_SERVICES } from "./pillars";

/* Production serves www (the apex 308-redirects to it), so canonicals must use
   www. Normalise the apex in case BASE_URL is still set to it in Vercel. */
const siteUrl = (
  process.env.BASE_URL ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://www.motion8agency.co"
)
  .replace(/\/$/, "")
  .replace(/^https?:\/\/motion8agency\.co$/, "https://www.motion8agency.co");

export const SITE = {
  name: "Motion 8 Agency",
  shortName: "Motion 8",
  url: siteUrl,
  email: "hello@motion8agency.co",
  founded: "2024",
  offices: "USA · UAE · India",
  /* ISO codes for Organization schema areaServed */
  areaServed: ["US", "CA", "GB", "AU", "NZ", "IN", "AE"],
  tagline: "Growth infrastructure — every stage, every size",
  description:
    "Motion 8 builds the software, AI and marketing that moves companies — one accountable team across product, systems and demand, in the USA, the UAE and India.",
};

export const NAV = [
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Software & Blockchain Dev", href: "/software-development" },
  { label: "AI & Automation", href: "/ai-automation" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
];

export const HERO = {
  eyebrow: "Growth infrastructure — every stage, every size",
  /* Three lines, split per design.md; the accent word carries terracotta. */
  lines: [
    [{ text: "We build the software," }],
    [{ text: "AI, and marketing that" }],
    [{ text: "moves", accent: true }, { text: " companies." }],
  ],
  lede: "One accountable team across product, systems, and demand — operating across the USA, the UAE, and India. No handoffs, no three separate briefs.",
  primaryCta: { label: "Start a Project", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/our-work" },
};

/* Hero curtain panels — five, per design.md §4 */
export const CURTAINS = [
  {
    num: "01",
    title: "Digital Marketing",
    meta: `${PILLARS.find((p) => p.slug === "digital-marketing")!.services.length} services`,
    blurb: "Performance, SEO, AEO & GEO, lifecycle, CRO, analytics.",
    href: "/digital-marketing",
  },
  {
    num: "02",
    title: "Software Development",
    meta: `${PILLARS.find((p) => p.slug === "software-development")!.services.length} services`,
    blurb: "Custom software, web & mobile, MVPs, DevOps & cloud.",
    href: "/software-development",
  },
  {
    num: "03",
    title: "Blockchain & Web3",
    meta: "Within pillar 02",
    blurb: "Smart contracts, on-chain products, token infrastructure.",
    href: "/software-development/blockchain-smart-contracts",
  },
  {
    num: "04",
    title: "AI & Automation",
    meta: `${PILLARS.find((p) => p.slug === "ai-automation")!.services.length} services`,
    blurb: "Agents, workflow automation, AI integration, RAG.",
    href: "/ai-automation",
  },
  {
    num: "05",
    title: "Strategy & Analytics",
    meta: "Across all pillars",
    blurb: "One data model behind product, systems, and demand.",
    href: "/digital-marketing/advanced-analytics",
  },
];

export const TICKER = [
  `${TOTAL_SERVICES} services`,
  `${TOTAL_PILLARS} pillars`,
  "7 countries",
  "One accountable team",
  "Since 2024",
];

export const STATS = [
  { value: "2024", label: "Founded", countTo: 2024, countFrom: 2000 },
  { value: "25", label: "Team members", countTo: 25 },
  {
    value: String(TOTAL_SERVICES),
    label: `Services, ${TOTAL_PILLARS} pillars`,
    countTo: TOTAL_SERVICES,
  },
  { value: "7", label: "Countries served", countTo: 7 },
  { value: SITE.offices, label: "Offices" },
];

export const PROCESS = {
  eyebrow: "How we work",
  heading: "Four steps, one accountable team",
  steps: [
    {
      num: "01",
      title: "Audit",
      body: "We map what you have, what leaks, and what's worth building first.",
    },
    {
      num: "02",
      title: "Structure",
      body: "One architecture across product, systems, and demand.",
    },
    {
      num: "03",
      title: "Publish",
      body: "Ship in weeks, not quarters — the same team the whole way.",
    },
    {
      num: "04",
      title: "Track",
      body: "Everything reports into one model, so decisions stop being guesses.",
    },
  ],
};

/* Case studies live in content/cases.ts — one source of truth for the Home
   stack, the list page and each detail page. */

export const DIFFERENTIATORS = [
  { num: "01", text: "One accountable team, start to scale", tone: "terracotta" as const },
  { num: "02", text: "Startup-speed delivery, enterprise discipline", tone: "blue" as const },
  { num: "03", text: "Operators, not vendors", tone: "terracotta" as const },
];

export const HOME_FAQS = [
  {
    question: "What is growth infrastructure?",
    answer:
      "Growth infrastructure is the software, AI systems, and marketing engines a company needs running underneath its growth — the product build, the automation, and the demand-gen channels, working off the same data instead of three disconnected vendors. Most teams patch this together from freelancers and point solutions; Motion 8 runs it as one accountable team from day one, so nothing has to be re-platformed or re-explained every time you switch providers.",
  },
  {
    question: "What does a full-stack agency do?",
    answer:
      "A full-stack agency covers the three things companies usually hire separately for: software and blockchain development (your product itself), AI and automation (the systems that run behind it), and digital marketing (the channels that bring in customers). Motion 8 runs all three as one team with shared context on your product and positioning, instead of a dev shop, an AI consultancy, and a marketing agency each working from a different brief.",
  },
  {
    question: "One agency or multiple vendors?",
    answer:
      "One agency usually wins on speed and cost once you count the hours lost to handoffs between separate vendors — a marketing agency waiting on a dev team's API change, an AI consultancy that doesn't know what the growth team is testing. Multiple specialist vendors can still make sense if you need deep expertise in one narrow area; Motion 8's model is built for teams who'd rather have one strategist accountable for the whole outcome than coordinate three invoices.",
  },
];

export const CTA_BAND = {
  heading: "Ready to build your growth infrastructure?",
  body: "Tell us where you're stuck. We'll come back within 24 hours with a plan, not a pitch deck.",
  cta: { label: "Start a Project", href: "/contact" },
};

/**
 * Social profiles. Only entries with a real `href` render — I won't guess a
 * profile URL, since a wrong one either 404s or points at someone else.
 * Add the handle and the icon appears in the footer automatically, and it
 * should also go into `sameAs` in the Organization schema.
 */
export const SOCIALS: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/motion-8-agency/" },
  { label: "Instagram", href: "https://www.instagram.com/motion8.agency/" },
  { label: "X", href: "" },
  { label: "YouTube", href: "" },
];

/** Leadership shown on /about and emitted as Person schema (founder/member). */
export const TEAM: {
  name: string;
  role: string;
  linkedin: string;
  founder?: boolean;
}[] = [
  {
    name: "Vansh Modi",
    role: "Founder",
    linkedin: "https://www.linkedin.com/in/vansh-modi-motion8/",
    founder: true,
  },
  {
    name: "James deCrescenzo",
    role: "Partner and Consultant",
    linkedin: "https://www.linkedin.com/in/jamesdjr/",
  },
];

export const FOOTER_COLUMNS: { label: string; href: string }[][] = [
  [
    { label: "Home", href: "/" },
    { label: "Our Work", href: "/our-work" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  [
    { label: "Digital Marketing", href: "/digital-marketing" },
    { label: "Software & Dev", href: "/software-development" },
    { label: "AI & Automation", href: "/ai-automation" },
  ],
  [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  [
    { label: SITE.email, href: `mailto:${SITE.email}` },
    { label: SITE.offices, href: "/contact" },
  ],
];
