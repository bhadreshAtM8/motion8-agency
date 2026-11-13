import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { SplitReveal } from "@/components/motion/Reveal";
import { CASE_STUDIES, getCaseStudy } from "@/content/cases";
import { CTA_BAND } from "@/content/site";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return buildMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const path = `/case-studies/${study.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: study.title, path },
  ];
  const others = CASE_STUDIES.filter((item) => item.slug !== study.slug);

  return (
    <>
      <JsonLd schemas={[breadcrumbSchema(crumbs)]} />
      <Nav solid />

      <main id="main">
        <PageHero
          crumbs={crumbs}
          eyebrow={`${study.pillar} — ${study.industry}`}
          heading={study.title}
          lede={study.summary}
          primary={{ label: "Start a Project", href: "/contact" }}
          secondary={{ label: "All case studies", href: "/case-studies" }}
        />

        <section className="gutter bg-ground pb-16 md:pb-20">
          <dl className="grid grid-cols-2 gap-y-8 border-t border-edge-rule pt-8 md:grid-cols-4">
            {[
              { label: "Engagement", value: study.client },
              { label: "Pillar", value: study.pillar },
              { label: "Scope", value: study.engagement },
              { label: "Region", value: study.region },
            ].map((item) => (
              <div key={item.label} className="px-1">
                <dt className="text-[11px] uppercase tracking-[.14em] text-dark-faint">
                  {item.label}
                </dt>
                <dd className="mt-2 text-[14px] font-bold leading-[1.5] text-dark-body">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* The problem */}
        <section className="gutter bg-cream py-16 text-light-body md:py-24">
          <div className="grid gap-12 md:grid-cols-[380px_1fr] md:gap-14">
            <div>
              <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta">
                The problem
              </div>
              <SplitReveal as="h2" className="mt-3 text-[clamp(24px,3.4vw,34px)] tracking-[-0.025em]">
                What we found
              </SplitReveal>
            </div>
            <div className="max-w-[640px]">
              {study.challenge.map((item, i) => (
                <div
                  key={item}
                  className={`grid grid-cols-[48px_1fr] items-start gap-5 border-t border-edge-card py-6 md:grid-cols-[64px_1fr] ${
                    i === study.challenge.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="pt-1 text-[12px] font-extrabold tracking-[.14em] text-terracotta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-[1.75] text-light-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The approach */}
        <section className="gutter bg-ground py-16 md:py-24">
          <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
            The approach
          </div>
          <SplitReveal
            as="h2"
            className="mt-3 max-w-[820px] text-[clamp(26px,4vw,38px)] tracking-[-0.025em] text-white"
          >
            The sequence, in order
          </SplitReveal>

          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {study.approach.map((step, i) => (
              <div key={step.title} className="border-t-2 border-edge-rule pt-6">
                <div className="text-[12px] font-extrabold tracking-[.14em] text-terracotta-light">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2.5 text-[21px] leading-[1.25] text-white">{step.title}</h3>
                <p className="m-0 mt-3 max-w-[520px] text-[14px] leading-[1.8] text-dark-muted">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What it's measured against */}
        <section className="gutter bg-stone py-16 text-light-body md:py-[88px]">
          <div className="grid gap-10 md:grid-cols-[380px_1fr] md:gap-14">
            <div>
              <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta">
                Accountability
              </div>
              <SplitReveal as="h2" className="mt-3 text-[clamp(24px,3.4vw,32px)] leading-[1.25] tracking-[-0.02em]">
                What this is judged on
              </SplitReveal>
            </div>
            <div>
              {study.measures.map((measure, i) => (
                <div
                  key={measure}
                  className={`grid grid-cols-[48px_1fr] items-center gap-5 border-t border-edge-stone py-6 md:grid-cols-[64px_1fr] ${
                    i === study.measures.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="text-[14px] font-extrabold text-terracotta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-bold leading-[1.5] md:text-[18px]">
                    {measure}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services involved + other studies */}
        <section className="gutter bg-ground py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
                Services involved
              </h2>
              <div className="mt-7">
                {study.services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group grid grid-cols-[1fr_auto] items-center gap-4 border-t border-edge-rule py-5 transition-colors hover:border-terracotta-light"
                  >
                    <span className="text-[15px] font-bold text-dark-body transition-colors group-hover:text-terracotta-light">
                      {service.name}
                    </span>
                    <span className="text-dark-faint transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
                Other case studies
              </h2>
              <div className="mt-7">
                {others.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/case-studies/${other.slug}`}
                    className="group block border-t border-edge-rule py-5 transition-colors hover:border-terracotta-light"
                  >
                    <span className="text-[11.5px] uppercase tracking-[.14em] text-dark-faint">
                      {other.pillar}
                    </span>
                    <span className="mt-1.5 block text-[15px] font-bold text-dark-body transition-colors group-hover:text-terracotta-light">
                      {other.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
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
