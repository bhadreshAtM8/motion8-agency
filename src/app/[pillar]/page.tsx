import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { ServiceGrid } from "@/components/ServiceGrid";
import { StatBand } from "@/components/StatBand";
import { getFaqs } from "@/content/faqs";
import { getPillar, PILLARS } from "@/content/pillars";
import { CTA_BAND } from "@/content/site";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";

type Params = { params: Promise<{ pillar: string }> };

export function generateStaticParams() {
  return PILLARS.map((pillar) => ({ pillar: pillar.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { pillar: slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) return {};
  return buildMetadata({
    title: pillar.metaTitle,
    description: pillar.metaDescription,
    path: `/${pillar.slug}`,
  });
}

export default async function PillarPage({ params }: Params) {
  const { pillar: slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: pillar.shortName, path: `/${pillar.slug}` },
  ];

  /* Full approved set from the artboards; the inline copy is the fallback. */
  const ported = getFaqs(`pillar:${pillar.slug}`);
  const faqs = ported.length ? ported : pillar.faqs;

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
          serviceSchema({
            name: pillar.name,
            description: pillar.metaDescription,
            path: `/${pillar.slug}`,
            category: pillar.name,
          }),
        ]}
      />

      <Nav solid />

      <main id="main">
        <PageHero
          crumbs={crumbs}
          eyebrow={`Pillar ${pillar.index} — ${pillar.services.length} services`}
          heading={pillar.h1}
          lede={pillar.lede}
        />

        <section className="gutter bg-ground pb-16 md:pb-24">
          <StatBand
            stats={pillar.stats}
            columns="md:grid-cols-4"
            className="border-l border-t border-edge-nav [&>*]:border-b [&>*]:border-r [&>*]:border-edge-nav [&>*]:py-8"
          />
        </section>

        <ServiceGrid
          pillarSlug={pillar.slug}
          services={pillar.services}
          eyebrow={`The ${pillar.services.length} services`}
          heading={
            pillar.slug === "digital-marketing"
              ? "Everything demand needs, in one place"
              : `Everything ${pillar.shortName.toLowerCase()} needs, in one place`
          }
          note="Most engagements start with three or four of these and widen as the data comes in. You are not buying the whole list on day one."
        />

        <Process eyebrow="How we work" heading="Audit, structure, publish, track" steps={pillar.process} />

        <FaqSection
          heading="Questions we get about this pillar"
          faqs={faqs}
          tone="stone"
        />

        <CtaBand
          heading="Want the audit before the pitch?"
          body="Tell us where growth is stuck. We come back in 24 hours with what we would fix first."
          ctaLabel={CTA_BAND.cta.label}
          ctaHref={CTA_BAND.cta.href}
        />
      </main>

      <Footer />
    </>
  );
}
