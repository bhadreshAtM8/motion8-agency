"use client";

import Link from "next/link";
import { useRef } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import { FadeIn, SplitReveal } from "@/components/motion/Reveal";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export type Crumb = { name: string; path: string };

/** Subpage hero: breadcrumb, eyebrow rule, H1, lede and the two CTAs. */
export function PageHero({
  crumbs,
  eyebrow,
  heading,
  subheading,
  lede,
  primary = { label: "Start a Project", href: "/contact" },
  secondary = { label: "See our work", href: "/our-work" },
}: {
  crumbs: Crumb[];
  eyebrow: string;
  heading: string;
  /** Optional sub-heading under the H1 (a <p>, not a heading). */
  subheading?: string;
  lede: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const line = el.querySelector("[data-eyebrow-line]");

      if (prefersReducedMotion()) {
        gsap.set(line, { scaleX: 1 });
        return;
      }

      gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(line, { scaleX: 1, duration: 0.7, ease: "expo.out", delay: 0.15 });

      el.querySelectorAll<HTMLElement>("[data-float]").forEach((node) => {
        gsap.to(node, {
          yPercent: parseFloat(node.dataset.float ?? "0") * 100,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-ground pb-16 pt-[110px] md:pb-24 md:pt-[130px]">
      <div aria-hidden className="decor-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        data-float="0.12"
        className="pointer-events-none absolute -left-[140px] -top-[260px] h-[760px] w-[760px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%,rgba(228,100,42,.26),rgba(195,72,17,0) 66%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[80px] top-[80px] hidden h-[280px] w-[280px] animate-ring rounded-full border border-[rgba(228,100,42,.28)] xl:block"
      >
        <span className="absolute -top-1 left-[calc(50%-4px)] h-2 w-2 rounded-full bg-terracotta-light" />
      </div>

      <div className="gutter relative">
        <nav aria-label="Breadcrumb" className="mb-10 text-[12.5px] text-dark-faint">
          {crumbs.map((crumb, i) => (
            <span key={crumb.path}>
              {i > 0 && <span className="px-1.5">›</span>}
              {i === crumbs.length - 1 ? (
                <span className="text-dark-muted">{crumb.name}</span>
              ) : (
                <Link
                  href={crumb.path}
                  className="inline-block py-2 transition-colors hover:text-terracotta-light"
                >
                  {crumb.name}
                </Link>
              )}
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
          <span data-eyebrow-line aria-hidden className="block h-px w-11 bg-terracotta-light" />
          {eyebrow}
        </div>

        <SplitReveal
          as="h1"
          intro={false}
          className="mt-7 max-w-[1000px] text-[clamp(34px,5.4vw,78px)] leading-[.98] tracking-[-0.04em] text-white"
        >
          {heading}
        </SplitReveal>

        {subheading && (
          <FadeIn
            as="p"
            className="m-0 mt-5 max-w-[800px] text-[clamp(18px,2.2vw,26px)] leading-[1.35] tracking-[-0.015em] text-dark-muted"
          >
            {subheading}
          </FadeIn>
        )}

        <div className="mt-9 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
          <FadeIn as="p" className="m-0 max-w-[520px] text-[15px] leading-[1.8] text-dark-muted">
            {lede}
          </FadeIn>
          <FadeIn delay={0.08} className="flex shrink-0 flex-wrap gap-3.5">
            <MagneticButton href={primary.href} variant="primary">
              {primary.label}
            </MagneticButton>
            <MagneticButton href={secondary.href} variant="outline">
              {secondary.label}
            </MagneticButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
