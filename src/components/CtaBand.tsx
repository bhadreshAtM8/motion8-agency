"use client";

import { useRef } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import { FadeIn, SplitReveal } from "@/components/motion/Reveal";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/** Terracotta ground with two large low-contrast circles drifting behind. */
export function CtaBand({
  heading,
  body,
  ctaLabel,
  ctaHref,
}: {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      el.querySelectorAll<HTMLElement>("[data-float]").forEach((node) => {
        gsap.to(node, {
          yPercent: parseFloat(node.dataset.float ?? "0") * 100,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-terracotta px-[var(--gutter)] py-20 text-white md:py-[110px]"
    >
      <div
        aria-hidden
        data-float="0.1"
        className="pointer-events-none absolute -right-[120px] -top-[220px] h-[620px] w-[620px] rounded-full bg-[rgba(27,19,13,.18)]"
      />
      <div
        aria-hidden
        data-float="-0.06"
        className="pointer-events-none absolute -bottom-[300px] left-[120px] hidden h-[520px] w-[520px] rounded-full border border-white/20 md:block"
      />

      <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-end md:gap-14">
        <div>
          <SplitReveal
            as="h2"
            className="max-w-[720px] text-[clamp(30px,5vw,52px)] leading-[1.02] tracking-[-0.035em]"
          >
            {heading}
          </SplitReveal>
          <FadeIn as="p" className="m-0 mt-5 max-w-[480px] text-[15px] leading-[1.8] opacity-90">
            {body}
          </FadeIn>
        </div>
        <FadeIn className="shrink-0">
          <MagneticButton href={ctaHref} variant="dark">
            {ctaLabel}
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
}
