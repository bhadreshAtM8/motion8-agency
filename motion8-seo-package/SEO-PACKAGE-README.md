# Motion 8 Agency — SEO Package

Everything SEO-related from the project, in one place.

## What's in this zip

- **SEO-FULL-REFERENCE.md** — the master file. Every page's `<title>`, meta description,
  canonical URL, and structured-data coverage (Organization / BreadcrumbList / FAQPage +
  question count), with character counts against the 50-60 / 150-160 targets. 42 pages
  covered — generic templates (SubService/PlatformExpert scaffolds) and utility pages
  (404, Thank You, form/loading states) are intentionally excluded since they carry no
  meta tags by design (not meant to be indexed).
- **sitemap.xml** — 47 indexable URLs, verified 1:1 against the meta-titles spreadsheet.
- **robots.txt** — crawl rules + sitemap pointer.
- **motion8-meta-titles-descriptions.xlsx** — the working spreadsheet: every page's title
  and description with `=LEN()` formulas verifying length, duplicate-check columns, and a
  Notes sheet. This is the source of truth the `.dc.html` files and the sitemap were both
  checked against.
- **motion8-seo-audit.pdf** — the original SEO audit report for the project.

## Structured data approach

Every page's JSON-LD (Organization, BreadcrumbList, FAQPage) is generated directly from
that same page's visible on-page copy — the FAQ schema is built from the actual rendered
Q&A text, not written separately — so structured data and visible content can never drift
apart. Raw JSON-LD blocks live in the `<head>` of each `.dc.html` file (see the main
mockup canvas / handoff zip for those source files).

## Known gap

The stats-bar "9 Marketing services" text on some older Digital Marketing sub-service
pages (e.g. `PerformanceMarketing.dc.html`) is stale — a leftover from before the AEO/GEO
split brought the count to 10. This doesn't affect meta tags or schema, only visible
stat-bar copy. Flagged, not yet swept across all pages.

## Quick stats

- 47 sitemap URLs
- 42 pages with full meta tag + schema coverage
- 0 duplicate titles, 0 duplicate descriptions (verified via spreadsheet)
- Every FAQ-bearing page has FAQPage schema matching its visible FAQ count exactly
