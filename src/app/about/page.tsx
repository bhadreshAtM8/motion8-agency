import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Differentiators } from "@/components/home/Differentiators";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { StatBand } from "@/components/StatBand";
import { TOTAL_SERVICES } from "@/content/pillars";
import { CTA_BAND, PROCESS, SITE, STATS, TEAM } from "@/content/site";
import { breadcrumbSchema, buildMetadata, organizationSchema, teamSchemas } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export const metadata = buildMetadata({
  title: "About Motion 8 Agency | One Accountable Team",
  description: `Motion 8 Agency, founded by Vansh Modi in ${SITE.founded}, runs product, systems and demand as one accountable team across the USA, the UAE and India.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd schemas={[breadcrumbSchema(crumbs), organizationSchema(), ...teamSchemas()]} />
      <Nav solid />

      <main id="main">
        <PageHero
          crumbs={crumbs}
          eyebrow={`Founded ${SITE.founded} — ${SITE.offices}`}
          heading="One team, accountable for the whole outcome."
          lede="Most companies buy growth in pieces: a dev shop, an AI consultancy, a marketing agency. Each does its part well and nobody owns the result. Motion 8 exists because that seam is where the money leaks."
          primary={{ label: "Start a Project", href: "/contact" }}
          secondary={{ label: "See our work", href: "/our-work" }}
        />

        <section className="gutter border-t border-edge-rule bg-ground py-16 md:py-20">
          <StatBand stats={STATS} />
        </section>

        <section className="gutter bg-cream py-16 text-light-body md:py-24">
          <div className="grid gap-12 md:grid-cols-[380px_1fr] md:gap-14">
            <div>
              <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta">
                How we got here
              </div>
              <h2 className="mt-3 text-[clamp(24px,3.4vw,34px)] tracking-[-0.025em]">
                Built by operators, not account managers
              </h2>
            </div>
            <div className="max-w-[640px] space-y-6 text-[15px] leading-[1.8] text-light-muted">
              <p className="m-0">
                Motion 8 started in {SITE.founded} with a straightforward observation: the
                companies growing fastest were not the ones with the best individual vendors. They
                were the ones where the people building the product, the systems behind it and the
                demand engine in front of it were having the same conversation.
              </p>
              <p className="m-0">
                So we built the agency that way round. One strategist stays accountable for the
                outcome. Engineers, designers, marketers and data people sit on the same team with
                shared context on your positioning — which means the funnel and the thing it sells
                stop drifting apart.
              </p>
              <p className="m-0">
                Today that is 25 people across multiple departments, based in the USA and India, running {TOTAL_SERVICES} services in three
                pillars for companies at every stage and size — from a pre-seed MVP to an
                enterprise replatform.
              </p>
            </div>
          </div>
        </section>


        <section
          id="leadership"
          aria-labelledby="leadership-heading"
          className="gutter bg-stone py-16 text-light-body md:py-24"
        >
          <div className="grid gap-12 md:grid-cols-[380px_1fr] md:gap-14">
            <div>
              <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-dark">
                Leadership
              </div>
              <h2
                id="leadership-heading"
                className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.025em]"
              >
                The people accountable for your outcome
              </h2>
            </div>
            <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
              {TEAM.map((member) => (
                <li
                  key={member.name}
                  className="flex flex-col justify-between gap-8 rounded-card border border-edge-card bg-white p-7 md:p-8"
                >
                  <div>
                    <h3 className="m-0 text-[22px] font-extrabold tracking-[-0.02em] text-light-body">
                      {member.name}
                    </h3>
                    <p className="m-0 mt-1.5 text-[15px] text-light-muted">{member.role}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 self-start text-[14px] font-bold text-terracotta-dark transition-colors hover:text-terracotta"
                  >
                    LinkedIn profile
                    <span aria-hidden>→</span>
                    <span className="sr-only">for {member.name} (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Process eyebrow={PROCESS.eyebrow} heading={PROCESS.heading} steps={PROCESS.steps} />
        <Differentiators />

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
