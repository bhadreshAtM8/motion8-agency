import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/content/cases";
import { PILLARS, PLATFORMS } from "@/content/pillars";
import { POSTS } from "@/content/posts";
import { SITE_CONTENT_UPDATED } from "@/lib/content-dates";
import { absolute } from "@/lib/seo";

/* Generated from the same content modules the pages render from, so a new
   service can never ship without its sitemap entry.
   lastModified uses real content dates (never "now"), so search engines can
   trust it: posts use updated ?? published, case studies their optional
   `updated`, everything else SITE_CONTENT_UPDATED. */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdated = new Date(SITE_CONTENT_UPDATED);

  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
    lastModified: Date = siteUpdated,
  ) => ({ url: absolute(path), lastModified, changeFrequency, priority });

  const pillarPages = PILLARS.map((p) => entry(`/${p.slug}`, 0.9, "weekly"));

  const servicePages = PILLARS.flatMap((p) =>
    p.services.map((s) => entry(`/${p.slug}/${s.slug}`, 0.8)),
  );

  const platformPages = PLATFORMS.map((p) => entry(`/platforms/${p.slug}`, 0.7));

  const casePages = CASE_STUDIES.map((c) =>
    entry(
      `/case-studies/${c.slug}`,
      0.7,
      "monthly",
      c.updated ? new Date(c.updated) : siteUpdated,
    ),
  );

  const postPages = POSTS.map((p) => ({
    url: absolute(`/blog/${p.slug}`),
    lastModified: new Date(p.updated ?? p.published),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    entry("/", 1, "weekly"),
    ...pillarPages,
    ...servicePages,
    ...platformPages,
    entry("/our-work", 0.8, "weekly"),
    entry("/case-studies", 0.8, "weekly"),
    ...casePages,
    entry("/blog", 0.7, "weekly"),
    ...postPages,
    entry("/about", 0.7),
    entry("/contact", 0.8),
    /* Landing pages — high-priority ad destinations */
    entry("/local-business-website-bundle", 0.9, "weekly"),
    /* /privacy, /terms and /thank-you stay out on purpose: they are
       noindex until they carry final signed counsel wording. */
  ];
}
