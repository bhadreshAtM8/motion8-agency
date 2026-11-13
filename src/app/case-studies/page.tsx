import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { CASE_STUDIES } from "@/content/cases";
import { CTA_BAND } from "@/content/site";
import { absolute, breadcrumbSchema, buildMetadata } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Case Studies", path: "/case-studies" },
];

export const metadata = buildMetadata({
  title: "Case Studies | Motion 8 Agency",
  description:
    "How Motion 8 engagements run across digital marketing, software development and AI automation — the problem, the approach, and what each one is measured against.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: CASE_STUDIES.map((study, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: study.title,
      url: absolute(`/case-studies/${study.slug}`),
    })),
  };

  return (
    <>
      <JsonLd schemas={[breadcrumbSchema(crumbs), list]} />
      <Nav solid />

      <main id="main">
        <PageHero
          crumbs={crumbs}
          eyebrow="Case studies"
          heading="How the work actually runs."
          lede="Each one walks through the problem as we found it, the sequence we ran, and the numbers it was judged on."
          primary={{ label: "Start a Project", href: "/contact" }}
          secondary={{ label: "See our work", href: "/our-work" }}
        />

        <section className="gutter bg-ground pb-16 md:pb-24">
          <div className="grid gap-5 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col justify-between rounded-card border border-edge-rule bg-[rgba(240,233,223,.03)] p-8 transition-colors hover:border-terracotta-light"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[11.5px] font-extrabold uppercase tracking-[.14em] text-terracotta-light">
                      {study.pillar}
                    </span>
                    <span className="text-[12px] text-dark-faint">{study.region}</span>
                  </div>
                  <h2 className="mt-5 text-[22px] leading-[1.25] tracking-[-0.02em] text-white">
                    {study.title}
                  </h2>
                  <p className="m-0 mt-3.5 text-[13.5px] leading-[1.8] text-dark-muted">
                    {study.summary}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-edge-rule pt-5">
                  <span className="text-[12.5px] text-dark-faint">{study.client}</span>
                  <span className="text-terracotta-light transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CtaBand
          heading={CTA_BAND.heading}
          body={CTA_BAND.body}
          ctaLabel={CTA_BAND.cta.label}
          ctaHref={CTA_BAND.cta.href}
        />
      </main>

      <Footer />
    </>
  );
}
