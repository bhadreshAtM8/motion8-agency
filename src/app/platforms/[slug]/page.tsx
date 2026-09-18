import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { SplitReveal } from "@/components/motion/Reveal";
import { getFaqs } from "@/content/faqs";
import {
  getPillar,
  getPlatform,
  PLATFORM_PARENT,
  PLATFORMS,
} from "@/content/pillars";
import { CTA_BAND } from "@/content/site";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PLATFORMS.map((platform) => ({ slug: platform.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) return {};
  return buildMetadata({
    title: platform.metaTitle,
    description: platform.metaDescription,
    path: `/platforms/${platform.slug}`,
  });
}

export default async function PlatformPage({ params }: Params) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  const pillar = getPillar(PLATFORM_PARENT.pillar);
  if (!platform || !pillar) notFound();

  const parent = pillar.services.find((s) => s.slug === PLATFORM_PARENT.service);
  const path = `/platforms/${platform.slug}`;

  /* Full approved set from the artboards; the inline copy is the fallback. */
  const ported = getFaqs(`platform:${platform.slug}`);
  const faqs = ported.length ? ported : platform.faqs;

  /* Breadcrumb carries the real topical hierarchy even though the URL is flat. */
  const crumbs = [
    { name: "Home", path: "/" },
    { name: pillar.shortName, path: `/${pillar.slug}` },
    ...(parent ? [{ name: parent.name, path: `/${pillar.slug}/${parent.slug}` }] : []),
    { name: platform.name, path },
  ];

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
          serviceSchema({
            name: `${platform.name} Development`,
            description: platform.metaDescription,
            path,
            category: "Ecommerce Development",
          }),
        ]}
      />

      <Nav solid />

      <main>
        <PageHero
          crumbs={crumbs}
          eyebrow={`Platform expertise — ${platform.name}`}
          heading={platform.h1}
          lede={platform.lede}
        />

        <section className="gutter bg-cream py-16 text-light-body md:py-24">
          <div className="grid gap-12 md:grid-cols-[380px_1fr] md:gap-14">
            <div>
              <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta">
                What we do on {platform.name}
              </div>
              <SplitReveal as="h2" className="mt-3 text-[clamp(24px,3.4vw,34px)] tracking-[-0.025em]">
                {platform.blurb}
              </SplitReveal>
            </div>
            <div>
              {platform.includes.map((item, i) => (
                <div
                  key={item}
                  className={`grid grid-cols-[48px_1fr] items-start gap-5 border-t border-edge-card py-6 md:grid-cols-[64px_1fr] ${
                    i === platform.includes.length - 1 ? "border-b" : ""
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

        <section className="gutter bg-ground pb-16 md:pb-24">
          <h2 className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
            Other platforms we work in
          </h2>
          <div className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORMS.filter((p) => p.slug !== platform.slug).map((other) => (
              <Link
                key={other.slug}
                href={`/platforms/${other.slug}`}
                className="group grid grid-cols-[1fr_auto] items-center gap-4 border-t border-edge-rule py-5 transition-colors hover:border-terracotta-light"
              >
                <span className="text-[15px] font-bold text-dark-body transition-colors group-hover:text-terracotta-light">
                  {other.name}
                </span>
                <span className="text-dark-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-terracotta-light">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <FaqSection heading={`${platform.name} — questions`} faqs={faqs} tone="stone" />

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
