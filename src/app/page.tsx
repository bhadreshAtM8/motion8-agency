import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { CaseStack } from "@/components/home/CaseStack";
import { Differentiators } from "@/components/home/Differentiators";
import { Hero } from "@/components/home/Hero";
import { PillarStrip } from "@/components/home/PillarStrip";
import { PlatformStrip } from "@/components/home/PlatformStrip";
import { Ticker } from "@/components/home/Ticker";
import { JsonLd } from "@/components/JsonLd";
import { Loader } from "@/components/Loader";
import { Nav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { StatBand } from "@/components/StatBand";
import { Testimonials } from "@/components/Testimonials";
import { CTA_BAND, HOME_FAQS, PROCESS, SITE, STATS } from "@/content/site";
import { buildMetadata, faqSchema, organizationSchema, websiteSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd schemas={[organizationSchema(), websiteSchema(), faqSchema(HOME_FAQS)]} />

      <Loader />
      <Nav />

      <main>
        <Hero />
        <Ticker />
        <PillarStrip />

        <section className="gutter border-t border-edge-rule bg-ground py-16 md:py-20">
          <StatBand stats={STATS} />
        </section>

        <PlatformStrip />
        <Process eyebrow={PROCESS.eyebrow} heading={PROCESS.heading} steps={PROCESS.steps} />
        <CaseStack />
        <Testimonials />
        <Differentiators />
        <FaqSection faqs={HOME_FAQS} />
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
