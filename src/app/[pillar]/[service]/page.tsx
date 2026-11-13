import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { MagneticButton } from "@/components/MagneticButton";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { PillarMotif } from "@/components/motion/PillarMotif";
import { SplitReveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { Reveal } from "@/components/service/Reveal";
import { SectionNav, type SectionLink } from "@/components/service/SectionNav";
import { TimelineMotion } from "@/components/service/TimelineMotion";
import { CASE_STUDIES } from "@/content/cases";
import { getFaqs } from "@/content/faqs";
import { ALL_SERVICE_PATHS, getPillar, getService } from "@/content/pillars";
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
/* Same scale as Process, CaseStack and ServiceGrid. */
const H2 = "mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.025em]";
/* Light surfaces take the darker terracotta so 11.5px text clears AA. */
const EYEBROW_LIGHT = `${EYEBROW} text-terracotta-dark`;
const EYEBROW_DARK = `${EYEBROW} text-terracotta-light`;
const SECTION = "gutter scroll-mt-28 py-16 md:py-24";

/** Mid-page prompt: a sentence, the primary CTA and a quieter link. Not a heading. */
function MidCta({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <div
      className={`mt-12 flex flex-col items-start gap-6 border-t pt-8 md:mt-16 md:flex-row md:items-center md:justify-between md:gap-10 ${
        dark ? "border-edge-rule" : "border-edge-stone"
      }`}
    >
      <p
        className={`m-0 max-w-[46ch] text-[17px] font-bold leading-[1.5] md:text-[19px] ${
          dark ? "text-white" : "text-light-body"
        }`}
      >
        {text}
      </p>
      <div className="flex shrink-0 flex-wrap items-center gap-x-7 gap-y-4">
        <MagneticButton href="/contact" variant="primary">
          Start a Project
        </MagneticButton>
        <Link
          href="/our-work"
          className={`group py-2 text-[14px] font-bold underline decoration-1 underline-offset-[6px] transition-colors ${
            dark
              ? "text-dark-body decoration-edge-rule hover:text-terracotta-light"
              : "text-light-body decoration-edge-stone hover:text-terracotta-dark"
          }`}
        >
          See our work{" "}
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

/** Truncate on a word boundary to roughly `max` characters. */
function truncate(text: string, max = 300) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const space = cut.lastIndexOf(" ");
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,;:.\u2014-]+$/, "")}…`;
}

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

  const detail = getServiceDetail(pillar.slug, service.slug);
  const relatedCases = (detail?.relatedCases ?? [])
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter((c): c is (typeof CASE_STUDIES)[number] => Boolean(c));
  const relatedPosts = (detail?.relatedPosts ?? [])
    .map((slug) => POSTS.find((p) => p.slug === slug))
    .filter((p): p is (typeof POSTS)[number] => Boolean(p));

  const sections: SectionLink[] = detail
    ? [
        { id: "fit", label: "Is it a fit?" },
        { id: "includes", label: "What's included" },
        { id: "deliverables", label: "Deliverables" },
        ...(relatedCases.length ? [{ id: "case-studies", label: "Case studies" }] : []),
        { id: "timeline", label: "Timeline" },
        { id: "overview", label: "Our approach" },
        { id: "faq", label: "FAQ" },
      ]
    : [
        { id: "includes", label: "What's included" },
        { id: "process", label: "How we work" },
        { id: "faq", label: "FAQ" },
      ];

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
          serviceSchema({
            name: service.name,
            description: detail?.intro[0] ? truncate(detail.intro[0]) : service.metaDescription,
            path,
            category: pillar.name,
          }),
        ]}
      />

      <Nav solid />

      <main id="main">
        <PageHero
          crumbs={crumbs}
          eyebrow={`Pillar ${pillar.index} — ${pillar.shortName}`}
          heading={detail?.h1 ?? service.h1}
          subheading={detail?.tagline}
          lede={service.lede}
          motif={<PillarMotif pillar={pillar.slug} />}
        />

        <SectionNav items={sections} />

        {/* Fit */}
        {detail && (
          <Reveal
            as="section"
            id="fit"
            className={`${SECTION} overflow-x-clip bg-stone text-light-body`}
          >
            <div className={EYEBROW_LIGHT}>Fit</div>
            <SplitReveal as="h2" className={H2}>
              Is this right for you?
            </SplitReveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
              <div data-reveal-x="-40" className="rounded-card bg-ink p-7 text-dark-body md:p-10">
                <h3 className="m-0 text-[20px] font-extrabold tracking-[-0.015em] text-white md:text-[22px]">
                  A good fit if
                </h3>
                <ul className="m-0 mt-6 list-none p-0">
                  {detail.goodFit.map((item) => (
                    <li
                      key={item}
                      data-reveal
                      className="grid grid-cols-[24px_1fr] items-start gap-3 border-t border-edge-rule py-4 text-[15.5px] leading-[1.65]"
                    >
                      <span aria-hidden className="text-[17px] font-extrabold leading-[1.5] text-terracotta-light">
                        +
                      </span>
                      <span>
                        <span className="sr-only">Yes: </span>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                data-reveal-x="40"
                className="rounded-card border border-edge-stone bg-cream/60 p-7 md:p-10"
              >
                <h3 className="m-0 text-[20px] font-extrabold tracking-[-0.015em] md:text-[22px]">
                  Probably not a fit if
                </h3>
                <ul className="m-0 mt-6 list-none p-0">
                  {detail.notFit.map((item) => (
                    <li
                      key={item}
                      data-reveal
                      className="grid grid-cols-[24px_1fr] items-start gap-3 border-t border-edge-stone py-4 text-[15.5px] leading-[1.65] text-light-muted"
                    >
                      <span aria-hidden className="text-[17px] font-extrabold leading-[1.5]">
                        –
                      </span>
                      <span>
                        <span className="sr-only">No: </span>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <MidCta text="Sounds like you? Tell us what you're building and get a first read within 24 hours." />
          </Reveal>
        )}

        {/* What's included */}
        <section id="includes" className={`${SECTION} bg-cream text-light-body`}>
          <div className="grid gap-12 md:grid-cols-[380px_1fr] md:gap-14">
            <div>
              <div className={EYEBROW_LIGHT}>What this includes</div>
              <SplitReveal as="h2" className={H2}>
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
                  <span className="pt-1 text-[12px] font-extrabold tracking-[.14em] text-terracotta-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-bold leading-[1.6] md:text-[18px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {detail && (
          <>
            {/* Deliverables — same cream ground as the list above, so it drops
                its top padding and reads as the second half of one spread. */}
            <Reveal
              as="section"
              id="deliverables"
              className="gutter scroll-mt-28 bg-cream pb-16 text-light-body md:pb-24"
            >
              <div className={EYEBROW_LIGHT}>Deliverables</div>
              <SplitReveal as="h2" className={H2}>
                What you get
              </SplitReveal>
              <ul className="m-0 mt-10 grid list-none p-0 md:grid-cols-2 md:gap-x-14">
                {detail.deliverables.map((item, i) => {
                  const spans =
                    detail.deliverables.length % 2 === 1 && i === detail.deliverables.length - 1;
                  return (
                    <li
                      key={item.title}
                      data-reveal
                      className={`grid grid-cols-[56px_1fr] gap-5 border-t border-edge-card py-7 ${
                        spans ? "md:col-span-2" : ""
                      }`}
                    >
                      <span
                        aria-hidden
                        data-count={i + 1}
                        className="text-[28px] font-extrabold tabular-nums leading-none tracking-[-0.03em] text-terracotta/30 md:text-[34px]"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="m-0 text-[19px] font-extrabold leading-[1.3] tracking-[-0.015em] md:text-[21px]">
                          {item.title}
                        </h3>
                        <p
                          className={`m-0 mt-2.5 text-[15px] leading-[1.75] text-light-muted ${
                            spans ? "max-w-[70ch]" : ""
                          }`}
                        >
                          {item.body}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            {/* Related case studies */}
            {relatedCases.length > 0 && (
              <Reveal as="section" id="case-studies" className={`${SECTION} bg-stone text-light-body`}>
                <div className={EYEBROW_LIGHT}>Proof</div>
                <SplitReveal as="h2" className={H2}>
                  Related case studies
                </SplitReveal>
                <div
                  className={`mt-10 grid gap-5 ${relatedCases.length > 1 ? "md:grid-cols-2" : ""}`}
                >
                  {relatedCases.map((study) => (
                    <Link
                      key={study.slug}
                      href={`/case-studies/${study.slug}`}
                      data-reveal
                      className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-card bg-ink p-8 text-white shadow-case md:p-11"
                    >
                      <Spotlight size="360px" stops="rgba(228,100,42,.24),transparent 70%" />
                      <div className="relative flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <span className="text-[11.5px] font-extrabold uppercase tracking-[.14em] text-terracotta-light">
                          {study.client}
                        </span>
                        <span className="text-[12.5px] text-dark-muted">{study.pillar}</span>
                      </div>
                      <div className="relative mt-12">
                        <h3 className="m-0 text-[clamp(22px,2.6vw,30px)] font-extrabold leading-[1.15] tracking-[-0.025em]">
                          {study.title}
                        </h3>
                        <p className="m-0 mt-3 max-w-[60ch] text-[14.5px] leading-[1.7] text-dark-muted">
                          {study.summary}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-terracotta-light">
                          Read the case study
                          <span
                            aria-hidden
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Timeline */}
            <section id="timeline" className={`${SECTION} bg-ground text-dark-body`}>
              <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
                <div>
                  <div className={EYEBROW_DARK}>Timeline</div>
                  <SplitReveal as="h2" className={`${H2} text-white`}>
                    How an engagement runs
                  </SplitReveal>
                </div>
                <div className="min-w-0">
                  <TimelineMotion className="relative">
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-[7px] top-2 w-px bg-edge-rule md:left-[151px]"
                    />
                    <span
                      aria-hidden
                      data-rail
                      className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-terracotta-light md:left-[151px]"
                    />
                    <ol className="relative m-0 list-none p-0">
                      {detail.timeline.map((step, i) => (
                        <li
                          key={step.phase}
                          className="grid grid-cols-[16px_1fr] gap-x-5 pb-10 md:grid-cols-[120px_16px_1fr] md:gap-x-6 md:pb-12"
                        >
                          <span
                            className={`${EYEBROW_DARK} col-start-2 row-start-1 md:col-start-1 md:pt-[7px] md:text-right`}
                          >
                            {step.duration}
                          </span>
                          <span
                            aria-hidden
                            data-node
                            className={`col-start-1 row-start-1 mt-px h-[15px] w-[15px] rounded-full border-2 md:col-start-2 md:mt-[8px] ${
                              i === 0
                                ? "border-terracotta-light bg-terracotta-light"
                                : "border-terracotta-light bg-ground"
                            }`}
                          />
                          <div
                            data-phase
                            className="col-start-2 row-start-2 mt-2 min-w-0 md:col-start-3 md:row-start-1 md:mt-0"
                          >
                            <h3 className="m-0 text-[22px] font-extrabold leading-[1.25] tracking-[-0.02em] text-white md:text-[24px]">
                              {step.phase}
                            </h3>
                            <p className="m-0 mt-3 max-w-[64ch] text-[15px] leading-[1.75] text-dark-muted">
                              {step.body}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </TimelineMotion>

                  {detail.engagement && (
                    <div className="border-t border-edge-rule pt-8">
                      <div className={EYEBROW_DARK}>Engagement</div>
                      <p className="m-0 mt-3 max-w-[60ch] text-[17px] font-bold leading-[1.55] text-white md:text-[19px]">
                        {detail.engagement}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <MidCta dark text="Want a scoped timeline for your project?" />
            </section>

            {/* Overview */}
            <section id="overview" className={`${SECTION} bg-stone text-light-body`}>
              <div className="grid gap-10 md:grid-cols-[300px_1fr] md:gap-12 lg:grid-cols-[380px_1fr] lg:gap-14">
                <div className="md:sticky md:top-36 md:self-start">
                  <div className={EYEBROW_LIGHT}>Overview</div>
                  <SplitReveal as="h2" className={H2}>
                    {`How Motion 8 Agency approaches ${service.name}`}
                  </SplitReveal>
                  <p className={`m-0 mt-9 ${EYEBROW} text-light-muted`}>Tools we use</p>
                  <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">
                    {detail.stack.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-pill border border-edge-stone px-3.5 py-1.5 text-[13px] font-bold"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="max-w-[70ch] space-y-5">
                  {detail.intro.map((para, i) => (
                    <p
                      key={para}
                      className={
                        i === 0
                          ? "m-0 text-[19px] font-bold leading-[1.5] tracking-[-0.01em] md:text-[22px]"
                          : "m-0 text-[16px] leading-[1.75] text-light-muted"
                      }
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Pages with a per-service timeline already show how we work. */}
        {!detail && (
          <div id="process" className="scroll-mt-28">
            <Process
              eyebrow="How we work"
              heading="Audit, structure, publish, track"
              steps={pillar.process}
            />
          </div>
        )}

        {/* Sibling links — real internal linking for crawl depth */}
        <section
          id="more"
          className={`${SECTION} bg-ground ${detail ? "" : "border-t border-edge-nav"}`}
        >
          <h2 className={EYEBROW_DARK}>More in {pillar.shortName}</h2>
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
                <span
                  aria-hidden
                  className="text-dark-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-terracotta-light"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <FaqSection id="faq" heading={`${service.name} — questions`} faqs={faqs} tone="stone" />

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <Reveal as="section" id="articles" className={`${SECTION} bg-cream text-light-body`}>
            <div className={EYEBROW_LIGHT}>Further reading</div>
            <SplitReveal as="h2" className={H2}>
              Related articles
            </SplitReveal>
            <div
              className={`mt-10 grid gap-5 ${
                relatedPosts.length > 2
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : relatedPosts.length === 2
                    ? "md:grid-cols-2"
                    : ""
              }`}
            >
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  data-reveal
                  className="group flex flex-col rounded-card border border-edge-card bg-white p-7 transition-shadow duration-300 hover:shadow-caseLight md:p-8"
                >
                  <span className={EYEBROW_LIGHT}>Article</span>
                  <h3 className="mt-3 text-[20px] font-extrabold leading-[1.3] tracking-[-0.015em] transition-colors group-hover:text-terracotta-dark">
                    {post.title}
                  </h3>
                  <p className="m-0 mt-3 max-w-[70ch] flex-1 text-[15px] leading-[1.7] text-light-muted">
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
              ))}
            </div>
          </Reveal>
        )}

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
