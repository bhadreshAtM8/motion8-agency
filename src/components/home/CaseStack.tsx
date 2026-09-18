"use client";

import Link from "next/link";
import { useRef } from "react";
import { SplitReveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { CASE_STUDIES } from "@/content/cases";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const TONES = {
  ink: {
    shell: "bg-ink text-white shadow-case",
    label: "text-terracotta-light",
    meta: "text-dark-muted",
    body: "text-dark-muted",
    spot: "rgba(228,100,42,.24),transparent 70%",
  },
  terracotta: {
    shell: "bg-terracotta text-white shadow-case",
    label: "text-white/85",
    meta: "text-white/85",
    body: "text-white/85",
    spot: "rgba(255,255,255,.18),transparent 70%",
  },
  light: {
    shell: "border border-edge-card bg-white text-light-body shadow-caseLight",
    label: "text-terracotta",
    meta: "text-light-muted",
    body: "text-light-muted",
    spot: "rgba(195,72,17,.12),transparent 70%",
  },
} as const;

/** Sticky cards; the outgoing card scrubs to scale .94 + brightness .82. */
export function CaseStack() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-stack]"));
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.94,
          filter: "brightness(.82)",
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top 80%",
            end: "top 26%",
            scrub: true,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="work" className="bg-cream text-light-body">
      <div className="gutter pb-10 pt-16 md:pt-24">
        <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta">
          Proof
        </div>
        <SplitReveal as="h2" className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.025em]">
          Real results, one team behind them
        </SplitReveal>
      </div>

      <div ref={root} className="gutter pb-16 md:pb-24">
        {CASE_STUDIES.map((study, i) => {
          const tone = TONES[study.tone];
          return (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              data-stack
              className={`group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-card p-8 md:p-[52px] lg:sticky ${
                i > 0 ? "mt-7" : ""
              } ${tone.shell}`}
              style={{ top: `${120 + i * 30}px` }}
            >
              <Spotlight size="360px" stops={tone.spot} />
              <div className="relative flex items-baseline justify-between gap-4">
                <span
                  className={`text-[11.5px] font-extrabold uppercase tracking-[.14em] ${tone.label}`}
                >
                  {study.client}
                </span>
                <span className={`text-[12.5px] ${tone.meta}`}>{study.pillar}</span>
              </div>
              <div className="relative mt-16">
                <div className="text-[clamp(24px,3.6vw,38px)] font-extrabold leading-[1.15] tracking-[-0.025em]">
                  {study.title}
                </div>
                <div className={`mt-3 max-w-[560px] text-[14px] leading-[1.7] ${tone.body}`}>
                  {study.summary}
                </div>
                <span
                  className={`mt-6 inline-flex items-center gap-2 text-[13px] font-bold ${tone.label}`}
                >
                  Read the walkthrough
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
