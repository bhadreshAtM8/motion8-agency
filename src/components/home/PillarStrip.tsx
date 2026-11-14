"use client";

import Link from "next/link";
import { useRef } from "react";
import { SplitReveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { PILLARS } from "@/content/pillars";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/* Home shows the first six services per pillar; the hub page carries the rest. */
const PREVIEW_COUNT = 6;

/**
 * design.md §3: 2000px pinned section, track scrubbed horizontally, dot fills
 * scale proportionally, `01 / 03` counter updates. Below lg the cards simply
 * stack — a pinned horizontal scrub on a phone fights the native gesture.
 */
export function PillarStrip() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        const track = el.querySelector<HTMLElement>("[data-track]");
        if (!track) return;

        const dots = Array.from(el.querySelectorAll<HTMLElement>("[data-dot-fill]"));
        const counter = el.querySelector<HTMLElement>("[data-counter]");
        const distance = Math.max(0, track.scrollWidth - window.innerWidth + 56);

        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.4,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress * 3;
              dots.forEach((dot, i) =>
                gsap.set(dot, { scaleX: gsap.utils.clamp(0, 1, progress - i) }),
              );
              if (counter) {
                counter.textContent = `0${Math.min(3, Math.floor(progress) + 1)} / 03`;
              }
            },
          },
        });

        el.querySelectorAll<HTMLElement>("[data-card]").forEach((card) => {
          gsap.fromTo(
            card,
            { scale: 0.96 },
            {
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 80%" },
            },
          );
        });
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative bg-cream text-light-body lg:h-[2000px]">
      <div className="flex flex-col justify-center overflow-hidden py-16 lg:sticky lg:top-0 lg:h-screen lg:max-h-[840px] lg:py-0">
        <div className="gutter flex flex-col gap-6 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-dark">
              What we run
            </div>
            <SplitReveal
              as="h2"
              className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.025em]"
            >
              Three pillars, one system
            </SplitReveal>
          </div>
          <div className="hidden items-center gap-3.5 pb-2 lg:flex">
            <span
              data-counter
              className="text-[12px] font-extrabold tracking-[.14em] text-terracotta-dark"
            >
              01 / 03
            </span>
            <div className="flex gap-2">
              {PILLARS.map((pillar) => (
                <span
                  key={pillar.slug}
                  className="relative block h-[3px] w-10 overflow-hidden bg-edge-track"
                >
                  <span
                    data-dot-fill
                    className="absolute inset-0 origin-left scale-x-0 bg-terracotta"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div data-track className="gutter flex flex-col gap-7 will-change-transform lg:flex-row">
          {PILLARS.map((pillar, index) => {
            const dark = index === 1;
            return (
              <article
                key={pillar.slug}
                data-card
                className={`relative overflow-hidden rounded-card p-8 md:p-11 lg:flex-[0_0_780px] ${
                  dark
                    ? "bg-ink text-white"
                    : "border border-edge-card bg-white text-light-body"
                }`}
              >
                <Spotlight
                  size="320px"
                  stops={
                    dark
                      ? "rgba(228,100,42,.22),transparent 70%"
                      : "rgba(195,72,17,.1),transparent 70%"
                  }
                />
                <div className="relative flex items-baseline justify-between">
                  <span
                    className={`text-[12px] font-extrabold tracking-[.14em] ${
                      dark ? "text-terracotta-light" : "text-terracotta-dark"
                    }`}
                  >
                    PILLAR {pillar.index}
                  </span>
                  <span
                    className={`text-[12.5px] ${dark ? "text-dark-muted" : "text-light-muted"}`}
                  >
                    {pillar.services.length} services
                  </span>
                </div>

                <h3 className="relative mt-4 text-[clamp(24px,3vw,34px)] tracking-[-0.025em]">
                  {pillar.name}
                </h3>
                <p
                  className={`relative mb-6 mt-3.5 max-w-[520px] text-[14px] leading-[1.8] ${
                    dark ? "text-dark-muted" : "text-light-muted"
                  }`}
                >
                  {pillar.blurb}
                </p>

                <div className="relative grid gap-x-8 sm:grid-cols-2">
                  {pillar.services.slice(0, PREVIEW_COUNT).map((service) => (
                    <div
                      key={service.slug}
                      className={`grid grid-cols-[34px_1fr] items-center gap-3.5 border-t py-[15px] ${
                        dark ? "border-edge-rule" : "border-edge-card"
                      }`}
                    >
                      <span
                        className={`text-[11.5px] font-extrabold ${
                          service.featured
                            ? "text-blue"
                            : dark
                              ? "text-terracotta-light"
                              : "text-terracotta-dark"
                        }`}
                      >
                        {String(pillar.services.indexOf(service) + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15.5px] font-bold">{service.name}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${pillar.slug}`}
                  className={`relative mt-4 inline-flex min-h-11 items-center text-[13px] font-bold ${
                    dark ? "text-terracotta-light" : "text-blue"
                  }`}
                >
                  View all {pillar.services.length} services →
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
