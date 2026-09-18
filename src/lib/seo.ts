import type { Metadata } from "next";
import { SITE } from "@/content/site";

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
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = absolute(path);
  return {
    /* Absolute: these titles already carry the brand, so the layout's
       "%s | Motion 8 Agency" template must not append it again. */
    title: { absolute: title },
    description,
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
      title,
      description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

type Json = Record<string, unknown>;

export const organizationSchema = (): Json => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  foundingDate: SITE.founded,
  logo: { "@type": "ImageObject", url: absolute("/brand/icon.png") },
  areaServed: SITE.areaServed,
  knowsAbout: [
    "Digital marketing",
    "Search engine optimization",
    "Answer engine optimization",
    "Generative engine optimization",
    "Custom software development",
    "Blockchain development",
    "Artificial intelligence",
    "Workflow automation",
  ],
  sameAs: [],
});

export const websiteSchema = (): Json => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  publisher: { "@id": `${SITE.url}/#organization` },
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
}: {
  name: string;
  description: string;
  path: string;
  category: string;
}): Json => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType: name,
  category,
  url: absolute(path),
  provider: { "@id": `${SITE.url}/#organization` },
  areaServed: SITE.areaServed,
});

export const articleSchema = ({
  title,
  description,
  path,
  published,
  updated,
  section,
}: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated?: string;
  section: string;
}): Json => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  url: absolute(path),
  mainEntityOfPage: { "@type": "WebPage", "@id": absolute(path) },
  datePublished: published,
  dateModified: updated ?? published,
  articleSection: section,
  author: { "@id": `${SITE.url}/#organization` },
  publisher: { "@id": `${SITE.url}/#organization` },
  image: absolute("/og-image.png"),
});

/** Serialised for a single <script> per page carrying an @graph. */
export const graph = (schemas: Json[]) =>
  JSON.stringify(
    schemas.length === 1
      ? schemas[0]
      : { "@context": "https://schema.org", "@graph": schemas },
  );
