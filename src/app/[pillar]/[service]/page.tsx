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
const H2 = "mt-3 text-[clamp(24px,3.4vw,34px)] tracking-[-0.025em]";

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
  const hasRelated = relatedCases.length + relatedPosts.length > 0;

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

      <main>
        <PageHero
          crumbs={crumbs}
          eyebrow={`Pillar ${pillar.index} — ${pillar.shortName}`}
          heading={detail?.h1 ?? service.h1}
          subheading={detail?.tagline}
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

        {detail && (
          <>
            {/* Overview */}
            <section className="gutter bg-stone py-16 text-light-body md:py-24">
              <div className="grid gap-10 md:grid-cols-[380px_1fr] md:gap-14">
                <div>
                  <div className={`${EYEBROW} text-terracotta`}>Overview</div>
                  <SplitReveal as="h2" className={H2}>
                    {`How Motion 8 Agency approaches ${service.name}`}
                  </SplitReveal>
                </div>
                <div className="max-w-[70ch] space-y-5">
                  {detail.intro.map((para) => (
                    <p key={para} className="m-0 text-[16px] leading-[1.75] md:text-[17px]">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            {/* Deliverables */}
            <section className="gutter bg-cream py-16 text-light-body md:py-24">
              <div className={`${EYEBROW} text-terracotta`}>Deliverables</div>
              <SplitReveal as="h2" className={H2}>
                What you get
              </SplitReveal>
              <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {detail.deliverables.map((item, i) => (
                  <div
                    key={item.title}
                    className="rounded-card border border-edge-card bg-white/60 p-6 md:p-7"
                  >
                    <span className="text-[12px] font-extrabold tracking-[.14em] text-terracotta">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-[18px] font-bold leading-[1.3] tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="m-0 mt-3 text-[15px] leading-[1.7] text-light-muted">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Timeline */}
            <section className="gutter bg-ground py-16 text-dark-body md:py-24">
              <div className="grid gap-10 md:grid-cols-[380px_1fr] md:gap-14">
                <div>
                  <div className={`${EYEBROW} text-terracotta-light`}>Timeline</div>
                  <SplitReveal as="h2" className={`${H2} text-white`}>
                    How an engagement runs
                  </SplitReveal>
                </div>
                <ol className="m-0 list-none p-0">
                  {detail.timeline.map((step, i) => (
                    <li
                      key={step.phase}
                      className={`grid grid-cols-[48px_1fr] items-start gap-5 border-t border-edge-rule py-6 md:grid-cols-[64px_1fr] ${
                        i === detail.timeline.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <span className="pt-1 text-[12px] font-extrabold tracking-[.14em] text-terracotta-light">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          <h3 className="m-0 text-[17px] font-bold text-white md:text-[19px]">
                            {step.phase}
                          </h3>
                          <span className="rounded-pill border border-edge-rule px-3 py-1 text-[11.5px] font-bold uppercase tracking-[.1em] text-terracotta-light">
                            {step.duration}
                          </span>
                        </div>
                        <p className="m-0 mt-3 max-w-[70ch] text-[15px] leading-[1.75] text-dark-muted">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Fit */}
            <section className="gutter bg-stone py-16 text-light-body md:py-24">
              <div className={`${EYEBROW} text-terracotta`}>Fit</div>
              <SplitReveal as="h2" className={H2}>
                Is this right for you?
              </SplitReveal>
              <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
                {[
                  { title: "A good fit if", items: detail.goodFit, mark: "+" },
                  { title: "Probably not a fit if", items: detail.notFit, mark: "–" },
                ].map((col) => (
                  <div key={col.title}>
                    <h3 className="m-0 text-[18px] font-bold">{col.title}</h3>
                    <ul className="m-0 mt-5 list-none p-0">
                      {col.items.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[28px_1fr] items-start gap-3 border-t border-edge-stone py-4 text-[15.5px] leading-[1.65]"
                        >
                          <span aria-hidden className="font-extrabold text-terracotta">
                            {col.mark}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Stack */}
            <section className="gutter bg-cream py-16 text-light-body md:py-24">
              <div className={`${EYEBROW} text-terracotta`}>Stack</div>
              <SplitReveal as="h2" className={H2}>
                Tools we use
              </SplitReveal>
              <ul className="m-0 mt-8 flex list-none flex-wrap gap-2.5 p-0">
                {detail.stack.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-pill border border-edge-card bg-white/70 px-4 py-2 text-[14px] font-bold"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
              {detail.engagement && (
                <p className="m-0 mt-8 max-w-[70ch] text-[14px] leading-[1.7] text-light-muted">
                  <span className="font-bold text-light-body">Engagement: </span>
                  {detail.engagement}
                </p>
              )}
            </section>

            {/* Related */}
            {hasRelated && (
              <section className="gutter bg-stone py-16 text-light-body md:py-24">
                <div className={`${EYEBROW} text-terracotta`}>Further reading</div>
                <SplitReveal as="h2" className={H2}>
                  Related work &amp; reading
                </SplitReveal>
                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    ...relatedCases.map((c) => ({
                      key: `case-${c.slug}`,
                      href: `/case-studies/${c.slug}`,
                      label: "Case study",
                      title: c.title,
                      body: c.summary,
                    })),
                    ...relatedPosts.map((p) => ({
                      key: `post-${p.slug}`,
                      href: `/blog/${p.slug}`,
                      label: "Article",
                      title: p.title,
                      body: p.excerpt,
                    })),
                  ].map((card) => (
                    <Link
                      key={card.key}
                      href={card.href}
                      className="group flex flex-col rounded-card border border-edge-stone bg-cream p-6 transition-shadow duration-300 hover:shadow-caseLight md:p-7"
                    >
                      <span className="text-[11px] font-extrabold uppercase tracking-[.16em] text-terracotta">
                        {card.label}
                      </span>
                      <h3 className="mt-3 text-[18px] font-bold leading-[1.3] tracking-[-0.01em] transition-colors group-hover:text-terracotta">
                        {card.title}
                      </h3>
                      <p className="m-0 mt-3 flex-1 text-[14.5px] leading-[1.7] text-light-muted">{card.body}</p>
                      <span className="mt-5 text-[13px] font-bold text-terracotta">
                        Read <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* Pages with a per-service timeline already show how we work. */}
        {!detail && (
          <Process
            eyebrow="How we work"
            heading="Audit, structure, publish, track"
            steps={pillar.process}
          />
        )}

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
