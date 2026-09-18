import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { SplitReveal } from "@/components/motion/Reveal";
import { getFaqs } from "@/content/faqs";
import { ALL_SERVICE_PATHS, getPillar, getService } from "@/content/pillars";
import { CTA_BAND } from "@/content/site";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";

type Params = { params: Promise<{ pillar: string; service: string }> };

export function generateStaticParams() {
  return ALL_SERVICE_PATHS;
}

export async function generateMetadata({ params }: Params) {
  const { pillar: pillarSlug, service: serviceSlug } = await params;
  const service = getService(pillarSlug, serviceSlug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/${pillarSlug}/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { pillar: pillarSlug, service: serviceSlug } = await params;
  const pillar = getPillar(pillarSlug);
  const service = getService(pillarSlug, serviceSlug);
  if (!pillar || !service) notFound();

  const path = `/${pillar.slug}/${service.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: pillar.shortName, path: `/${pillar.slug}` },
    { name: service.name, path },
  ];
  const siblings = pillar.services.filter((s) => s.slug !== service.slug);

  /* Full approved set from the artboards; the inline copy is the fallback. */
  const ported = getFaqs(`${pillar.slug}/${service.slug}`);
  const faqs = ported.length ? ported : service.faqs;

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            path,
            category: pillar.name,
          }),
        ]}
      />

      <Nav solid />

      <main>
        <PageHero
          crumbs={crumbs}
          eyebrow={`Pillar ${pillar.index} — ${pillar.shortName}`}
          heading={service.h1}
          lede={service.lede}
        />

        {/* What's included */}
        <section className="gutter bg-cream py-16 text-light-body md:py-24">
          <div className="grid gap-12 md:grid-cols-[380px_1fr] md:gap-14">
            <div>
              <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta">
                What this includes
              </div>
              <SplitReveal as="h2" className="mt-3 text-[clamp(24px,3.4vw,34px)] tracking-[-0.025em]">
                {service.name}
              </SplitReveal>
            </div>
            <div>
              {service.includes.map((item, i) => (
                <div
                  key={item}
                  className={`grid grid-cols-[48px_1fr] items-start gap-5 border-t border-edge-card py-6 md:grid-cols-[64px_1fr] ${
                    i === service.includes.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="pt-1 text-[12px] font-extrabold tracking-[.14em] text-terracotta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-bold leading-[1.6] md:text-[18px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Process
          eyebrow="How we work"
          heading="Audit, structure, publish, track"
          steps={pillar.process}
        />

        {/* Sibling links — real internal linking for crawl depth */}
        <section className="gutter bg-ground pb-16 md:pb-24">
          <h2 className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
            More in {pillar.shortName}
          </h2>
          <div className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((sibling) => (
              <Link
                key={sibling.slug}
                href={`/${pillar.slug}/${sibling.slug}`}
                className="group grid grid-cols-[1fr_auto] items-center gap-4 border-t border-edge-rule py-5 transition-colors hover:border-terracotta-light"
              >
                <span className="text-[15px] font-bold text-dark-body transition-colors group-hover:text-terracotta-light">
                  {sibling.name}
                </span>
                <span className="text-dark-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-terracotta-light">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <FaqSection heading={`${service.name} — questions`} faqs={faqs} tone="stone" />

        <CtaBand
          heading="Want the audit before the pitch?"
          body={CTA_BAND.body}
          ctaLabel={CTA_BAND.cta.label}
          ctaHref={CTA_BAND.cta.href}
        />
      </main>

      <Footer />
    </>
  );
}
