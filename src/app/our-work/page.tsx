import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { CaseStack } from "@/components/home/CaseStack";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { StatBand } from "@/components/StatBand";
import { CTA_BAND, STATS } from "@/content/site";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Our Work", path: "/our-work" },
];

export const metadata = buildMetadata({
  title: "Our Work | Motion 8 Agency",
  description:
    "Selected work across digital marketing, software and blockchain development, and AI automation — one accountable team behind each result.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <>
      <JsonLd schemas={[breadcrumbSchema(crumbs)]} />
      <Nav solid />

      <main>
        <PageHero
          crumbs={crumbs}
          eyebrow="Selected work"
          heading="Results, and the team behind them."
          lede="Work across all three pillars — usually the same client, because the product, the systems and the demand engine were built together rather than bought separately."
          secondary={{ label: "Start a Project", href: "/contact" }}
          primary={{ label: "See the services", href: "/digital-marketing" }}
        />

        <section className="gutter border-t border-edge-rule bg-ground py-16 md:py-20">
          <StatBand stats={STATS} />
        </section>

        <CaseStack />

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
