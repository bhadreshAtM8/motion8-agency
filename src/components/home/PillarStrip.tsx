import Link from "next/link";
import { SplitReveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { Reveal } from "@/components/service/Reveal";
import { PILLARS } from "@/content/pillars";

/* Home shows the first six services per pillar; the hub page carries the rest. */
const PREVIEW_COUNT = 6;

/**
 * The three pillars side by side: one column on phones, two on md (the third
 * spans the row), three equal-height cards on lg. No pinning or scrub; the
 * cards stagger in with the service Reveal and the numerals count up.
 */
export function PillarStrip() {
  return (
    <Reveal as="section" className="gutter bg-cream pb-12 pt-16 text-light-body md:pb-16 md:pt-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-dark">
            What we run
          </div>
          <SplitReveal as="h2" className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.025em]">
            Three pillars, one system
          </SplitReveal>
        </div>
      </div>

      <ul className="m-0 mt-10 grid list-none gap-5 p-0 md:grid-cols-2 md:gap-6 lg:grid-cols-3 md:mt-12">
        {PILLARS.map((pillar, index) => {
          const dark = index === 1;
          const last = index === PILLARS.length - 1;
          return (
            <li key={pillar.slug} data-reveal className={`flex ${last ? "md:col-span-2 lg:col-span-1" : ""}`}>
              <article
                className={`relative flex w-full flex-col overflow-hidden rounded-card p-8 md:p-10 ${
                  dark ? "bg-ink text-white shadow-case" : "border border-edge-card bg-white text-light-body"
                }`}
              >
                <Spotlight
                  size="320px"
                  stops={
                    dark ? "rgba(228,100,42,.22),transparent 70%" : "rgba(195,72,17,.1),transparent 70%"
                  }
                />
                <div className="relative flex items-baseline justify-between">
                  <span
                    className={`text-[12px] font-extrabold tracking-[.14em] ${
                      dark ? "text-terracotta-light" : "text-terracotta-dark"
                    }`}
                  >
                    PILLAR <span data-count={Number(pillar.index)}>{pillar.index}</span>
                  </span>
                  <span className={`text-[12.5px] ${dark ? "text-dark-muted" : "text-light-muted"}`}>
                    {pillar.services.length} services
                  </span>
                </div>

                <h3 className="relative mt-4 text-[clamp(24px,2.6vw,32px)] tracking-[-0.025em]">
                  {pillar.name}
                </h3>
                <p
                  className={`relative mb-6 mt-3.5 max-w-[520px] text-[14px] leading-[1.8] ${
                    dark ? "text-dark-muted" : "text-light-muted"
                  }`}
                >
                  {pillar.blurb}
                </p>

                <ul
                  className={`relative m-0 grid flex-1 list-none content-start gap-x-8 p-0 sm:grid-cols-2 md:grid-cols-1 ${
                    last ? "md:grid-cols-2 lg:grid-cols-1" : ""
                  }`}
                >
                  {pillar.services.slice(0, PREVIEW_COUNT).map((service, i) => (
                    <li
                      key={service.slug}
                      className={`grid grid-cols-[34px_1fr] items-center gap-3.5 border-t py-[13px] ${
                        dark ? "border-edge-rule" : "border-edge-card"
                      }`}
                    >
                      <span
                        className={`text-[11.5px] font-extrabold ${
                          service.featured
                            ? dark
                              ? "text-terracotta-light"
                              : "text-blue"
                            : dark
                              ? "text-terracotta-light"
                              : "text-terracotta-dark"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] font-bold">{service.name}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${pillar.slug}`}
                  className={`relative mt-5 inline-flex min-h-11 items-center self-start text-[13px] font-bold ${
                    dark ? "text-terracotta-light" : "text-blue"
                  }`}
                >
                  View all {pillar.services.length} services →
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}
