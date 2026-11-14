import type { Metadata } from "next";
import { SITE, SOCIALS } from "@/content/site";
import { PILLARS } from "@/content/pillars";

export const absolute = (path: string) =>
  path === "/" ? SITE.url : `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * Every page goes through here so canonical, OG and Twitter tags can never
 * drift out of sync with the title and description.
 */
export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
  image = "/og-image.png",
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = absolute(path);
  const imageUrl = absolute(image);
  const defaultKeywords = [
    "Motion 8 Agency",
    "growth infrastructure",
    "digital marketing agency",
    "software development agency",
    "blockchain development",
    "AI automation agency",
    "funded startups",
    "answer engine optimization",
    "generative engine optimization",
    "AEO",
    "GEO",
    "technical SEO",
  ];

  return {
    metadataBase: new URL(SITE.url),
    /* Absolute: these titles already carry the brand, so the layout's
       "%s | Motion 8 Agency" template must not append it again. */
    title: { absolute: title },
    description,
    keywords: keywords ?? defaultKeywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      url,
      siteName: SITE.name,
      locale: "en_US",
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | ${SITE.name}`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      /* No X account yet — add `site`/`creator` handles once one exists. */
    },
  };
}

type Json = Record<string, unknown>;

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

const uniq = (items: string[]) => Array.from(new Set(items));

export const organizationSchema = (): Json => {
  const sameAs = SOCIALS.map((s) => s.href.trim()).filter(Boolean);
  const knowsAbout = uniq([
    "Growth infrastructure",
    ...PILLARS.map((p) => p.name),
    ...PILLARS.flatMap((p) => p.services.map((s) => s.name)),
  ]);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: ["Motion8", "Motion 8", "Motion8 Agency", "motion8agency"],
    legalName: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    slogan: SITE.tagline,
    foundingDate: SITE.founded,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE.url}/#logo`,
      url: absolute("/brand/icon.png"),
      contentUrl: absolute("/brand/icon.png"),
      caption: `${SITE.name} Logo`,
    },
    image: absolute("/og-image.png"),
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: SITE.email,
        contactType: "customer service",
        availableLanguage: ["English"],
      },
    ],
    areaServed: SITE.areaServed,
    knowsAbout,
    ...(sameAs.length ? { sameAs } : {}),
  };
};

export const websiteSchema = (): Json => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: "en",
  publisher: { "@id": ORG_ID },
});

export const breadcrumbSchema = (trail: { name: string; path: string }[]): Json => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.name,
    item: absolute(crumb.path),
  })),
});

/** Built from the same array the page renders, so the two can't disagree. */
export const faqSchema = (faqs: { question: string; answer: string }[]): Json => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

export const serviceSchema = ({
  name,
  description,
  path,
  category,
  audience,
  offers,
}: {
  name: string;
  description: string;
  path: string;
  category: string;
  audience?: string;
  offers?: Json;
}): Json => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absolute(path)}#service`,
  name,
  description,
  serviceType: name,
  category,
  url: absolute(path),
  provider: { "@id": ORG_ID },
  areaServed: SITE.areaServed,
  ...(audience ? { audience: { "@type": "Audience", audienceType: audience } } : {}),
  ...(offers ? { offers } : {}),
});

export const articleSchema = ({
  title,
  description,
  path,
  published,
  updated,
  section,
  author,
  image,
}: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated?: string;
  section: string;
  author?: { name: string; url?: string; jobTitle?: string };
  image?: string;
}): Json => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${absolute(path)}#article`,
  headline: title,
  description,
  url: absolute(path),
  mainEntityOfPage: { "@type": "WebPage", "@id": absolute(path) },
  isPartOf: { "@id": WEBSITE_ID },
  datePublished: published,
  dateModified: updated ?? published,
  articleSection: section,
  inLanguage: "en",
  author: author?.name
    ? {
        "@type": "Person",
        name: author.name,
        ...(author.url ? { url: author.url.startsWith("http") ? author.url : absolute(author.url) } : {}),
        ...(author.jobTitle ? { jobTitle: author.jobTitle } : {}),
        worksFor: { "@id": ORG_ID },
      }
    : { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
  image: absolute(image ?? "/og-image.png"),
});

/** Serialised for a single <script> per page carrying an @graph. "<" is
 *  escaped so no string value can close the script tag. */
export const graph = (schemas: Json[]) =>
  JSON.stringify(
    schemas.length === 1
      ? schemas[0]
      : {
          "@context": "https://schema.org",
          "@graph": schemas.map(({ "@context": _ctx, ...node }) => node),
        },
  )
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
