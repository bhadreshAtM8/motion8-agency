import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { StatBand } from "@/components/StatBand";
import { PillarMotif } from "@/components/motion/PillarMotif";
import { SplitReveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { MidCta } from "@/components/service/MidCta";
import { Reveal } from "@/components/service/Reveal";
import { SectionNav, type SectionLink } from "@/components/service/SectionNav";
import { CASE_STUDIES } from "@/content/cases";
import { getFaqs } from "@/content/faqs";
import { getPillar, PILLARS } from "@/content/pillars";
import { POSTS } from "@/content/posts";
import { getServiceDetail } from "@/content/service-details";
import { CTA_BAND } from "@/content/site";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";

const EYEBROW = "text-[11.5px] font-extrabold uppercase tracking-[.16em]";
/* Same scale as the service template, Process, CaseStack and FAQ. */
const H2 = "mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.025em]";
/* Light surfaces take the darker terracotta so 11.5px text clears AA. */
const EYEBROW_LIGHT = `${EYEBROW} text-terracotta-dark`;
const SECTION = "gutter scroll-mt-36 py-16 md:py-24";

/* Words that make a keyword H1 longer without saying more. */
const FILLER = new Set([
  "services", "service", "agency", "company", "development", "for", "into", "the", "of", "a", "and",
]);

/** Meaningful words: lowercase, punctuation and "(ABBR)" dropped, plurals folded. */
function words(text: string) {
  return text
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9 ]+/g, " ")
    .split(/\s+/)
    .filter((w) => w && !FILLER.has(w))
    .map((w) => (w.length > 3 && w.endsWith("s") ? w.slice(0, -1) : w));
}

/** True when the keyword H1 names something the card title does not
    ("SEO & Content Strategy Services" under "SEO & Content Strategy" does not). */
function addsInformation(keyword: string, title: string) {
  const inTitle = new Set(words(title));
  return words(keyword).some((w) => !inTitle.has(w));
}

type Params = { params: Promise<{ pillar: string }> };

/* Only the three pillars exist; anything else is a real 404, not an on-demand render. */
export const dynamicParams = false;

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

  const path = `/${pillar.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: pillar.shortName, path },
  ];

  /* Full approved set from the artboards; the inline copy is the fallback. */
  const ported = getFaqs(`pillar:${pillar.slug}`);
  const faqs = ported.length ? ported : pillar.faqs;

  /* Count up only the plain integers; "2 wk" stays as written. */
  const stats = pillar.stats.map((stat) =>
    /^\d+$/.test(stat.value) ? { ...stat, countTo: Number(stat.value) } : stat,
  );

  const cases = CASE_STUDIES.filter((study) => study.pillarHref === path);

  /* Posts ranked by how many of their related links point into this pillar,
     newest first among equals. */
  const posts = POSTS.map((post) => ({
    post,
    score: post.related.filter((link) => link.href.startsWith(`${path}/`)).length,
  }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.post.published.localeCompare(a.post.published))
    .slice(0, 3)
    .map((entry) => entry.post);

  const sections: SectionLink[] = [
    { id: "services", label: "Services" },
    ...(cases.length ? [{ id: "case-study", label: "Case study" }] : []),
    { id: "process", label: "How we work" },
    ...(posts.length ? [{ id: "articles", label: "Articles" }] : []),
    { id: "faq", label: "FAQ" },
  ];

  const servicesHeading =
    pillar.slug === "digital-marketing"
      ? "Everything demand needs, in one place"
      : pillar.slug === "ai-automation"
        ? "Everything AI and automation needs, in one place"
        : `Everything ${pillar.shortName.toLowerCase()} needs, in one place`;

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
          serviceSchema({
            name: pillar.name,
            description: pillar.metaDescription,
            path,
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
          motif={<PillarMotif pillar={pillar.slug} />}
        />

        <SectionNav items={sections} />

        <section
          aria-label={`${pillar.shortName} at a glance`}
          className="gutter bg-ground py-12 md:py-16"
        >
          <StatBand
            stats={stats}
            columns="md:grid-cols-4"
            className="border-l border-t border-edge-nav [&>*]:border-b [&>*]:border-r [&>*]:border-edge-nav [&>*]:py-8"
          />
        </section>

        {/* Services — the main event */}
        <Reveal as="section" id="services" className={`${SECTION} bg-cream text-light-body`}>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-12">
            <div>
              <div className={EYEBROW_LIGHT}>The {pillar.services.length} services</div>
              <SplitReveal as="h2" className={H2}>
                {servicesHeading}
              </SplitReveal>
            </div>
            <p className="m-0 max-w-[400px] text-[14.5px] leading-[1.75] text-light-muted">
              Most engagements start with three or four of these and widen as the data comes in.
              You are not buying the whole list on day one.
            </p>
          </div>

          <ul className="m-0 mt-10 grid list-none gap-5 p-0 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {pillar.services.map((service, i) => {
              const keyword = getServiceDetail(pillar.slug, service.slug)?.h1;
              return (
                <li key={service.slug} data-reveal className="flex">
                  <Link
                    href={`/${pillar.slug}/${service.slug}`}
                    className="group relative flex w-full flex-col overflow-hidden rounded-card border border-edge-card bg-white p-7 transition-shadow duration-300 hover:shadow-caseLight md:p-8"
                  >
                    <Spotlight size="300px" stops="rgba(195,72,17,.1),transparent 70%" />
                    <div className="relative flex items-baseline justify-between gap-4">
                      <span
                        aria-hidden
                        data-count={i + 1}
                        className="text-[28px] font-extrabold tabular-nums leading-none tracking-[-0.03em] text-terracotta/60 md:text-[32px]"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {service.featured && <span className={`${EYEBROW} text-blue`}>Featured</span>}
                    </div>
                    <h3 className="relative mt-6 text-[21px] font-extrabold leading-[1.25] tracking-[-0.02em] transition-colors group-hover:text-terracotta-dark">
                      {service.name}
                    </h3>
                    {keyword && addsInformation(keyword, service.name) && (
                      <p className="relative m-0 mt-2 text-[12.5px] font-bold leading-[1.5] text-terracotta-dark">
                        {keyword}
                      </p>
                    )}
                    <p className="relative m-0 mt-3 flex-1 text-[14.5px] leading-[1.7] text-light-muted">
                      {service.blurb}
                    </p>
                    <span className="relative mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-terracotta-dark">
                      Explore the service
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <MidCta text="Not sure which of these you need first? Tell us where growth is stuck and get a first read within 24 hours." />
        </Reveal>

        {/* Featured case study */}
        {cases.length > 0 && (
          <Reveal as="section" id="case-study" className={`${SECTION} bg-stone text-light-body`}>
            <div className={EYEBROW_LIGHT}>Proof</div>
            <SplitReveal as="h2" className={H2}>
              {cases.length > 1 ? "Featured case studies" : "Featured case study"}
            </SplitReveal>
            <div className={`mt-10 grid gap-5 ${cases.length > 1 ? "md:grid-cols-2" : ""}`}>
              {cases.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  data-reveal
                  className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-card bg-ink p-8 text-white shadow-case md:p-12"
                >
                  <Spotlight size="420px" stops="rgba(228,100,42,.24),transparent 70%" />
                  <div className="relative flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="text-[11.5px] font-extrabold uppercase tracking-[.14em] text-terracotta-light">
                      {study.client}
                    </span>
                    <span className="text-[12.5px] text-dark-muted">
                      {study.industry} · {study.region}
                    </span>
                  </div>
                  <div className="relative mt-14 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-14">
                    <div>
                      <h3 className="m-0 max-w-[24ch] text-[clamp(24px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em]">
                        {study.title}
                      </h3>
                      <p className="m-0 mt-4 max-w-[60ch] text-[15px] leading-[1.7] text-dark-muted">
                        {study.summary}
                      </p>
                      <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-bold text-terracotta-light">
                        Read the case study
                        <span
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </div>
                    <div className="border-t border-edge-rule pt-5">
                      <span className={`${EYEBROW} text-dark-muted`}>Engagement</span>
                      <p className="m-0 mt-2 text-[14.5px] font-bold leading-[1.6] text-dark-body">
                        {study.engagement}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        )}

        <div id="process" className="scroll-mt-36">
          <Process
            eyebrow="How we work"
            heading="Audit, structure, publish, track"
            steps={pillar.process}
          />
        </div>

        {/* Related writing */}
        {posts.length > 0 && (
          <Reveal as="section" id="articles" className={`${SECTION} bg-cream text-light-body`}>
            <div className={EYEBROW_LIGHT}>Further reading</div>
            <SplitReveal as="h2" className={H2}>
              {`Writing on ${pillar.shortName}`}
            </SplitReveal>
            <ul
              className={`m-0 mt-10 grid list-none gap-5 p-0 ${
                posts.length > 2
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : posts.length === 2
                    ? "md:grid-cols-2"
                    : ""
              }`}
            >
              {posts.map((post) => (
                <li key={post.slug} data-reveal className="flex">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex w-full flex-col rounded-card border border-edge-card bg-white p-7 transition-shadow duration-300 hover:shadow-caseLight md:p-8"
                  >
                    <span className={EYEBROW_LIGHT}>{post.category}</span>
                    <h3 className="mt-3 text-[20px] font-extrabold leading-[1.3] tracking-[-0.015em] transition-colors group-hover:text-terracotta-dark">
                      {post.title}
                    </h3>
                    <p className="m-0 mt-3 flex-1 text-[15px] leading-[1.7] text-light-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-terracotta-dark">
                      Read the article
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <FaqSection
          id="faq"
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
