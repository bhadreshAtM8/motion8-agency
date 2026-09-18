"use client";

import { useRef } from "react";
import { SplitReveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { TESTIMONIALS, type Testimonial } from "@/content/testimonials";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Bento testimonial grid — backdrop-blur cards over a terracotta/blue gradient
 * wash. Written from scratch against our own tokens rather than pulling a
 * licensed block; the feature card carries the long quote and the rest fill
 * around it.
 */
export function Testimonials({
  eyebrow = "What clients say",
  heading = "The same team, across very different problems",
  items = TESTIMONIALS,
}: {
  eyebrow?: string;
  heading?: string;
  items?: Testimonial[];
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      gsap.set(el.querySelectorAll(".js-anim"), { visibility: "visible" });
      if (prefersReducedMotion()) return;

      gsap.from(el.querySelectorAll("[data-card]"), {
        opacity: 0,
        y: 36,
        scale: 0.97,
        duration: 0.8,
        stagger: { each: 0.06, from: "start" },
        ease: "power3.out",
        scrollTrigger: { trigger: el.querySelector("[data-grid]"), start: "top 85%" },
      });

      // Gradient wash drifts as the section passes.
      el.querySelectorAll<HTMLElement>("[data-float]").forEach((node) => {
        gsap.to(node, {
          yPercent: parseFloat(node.dataset.float ?? "0") * 100,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      const cleanups: (() => void)[] = [];
      el.querySelectorAll<HTMLElement>("[data-card]").forEach((card) => {
        const enter = () => gsap.to(card, { y: -6, duration: 0.4, ease: "power3.out" });
        const leave = () => gsap.to(card, { y: 0, duration: 0.4, ease: "power3.out" });
        card.addEventListener("pointerenter", enter);
        card.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          card.removeEventListener("pointerenter", enter);
          card.removeEventListener("pointerleave", leave);
        });
      });
      return () => cleanups.forEach((fn) => fn());
    },
    { scope: root },
  );

  const feature = items.find((t) => t.feature) ?? items[0];
  const rest = items.filter((t) => t !== feature);

  return (
    <section ref={root} className="relative overflow-hidden bg-ground py-16 md:py-24">
      {/* gradient wash */}
      <div aria-hidden className="decor-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        data-float="0.12"
        className="pointer-events-none absolute -left-[200px] top-[-180px] h-[720px] w-[720px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%,rgba(228,100,42,.22),rgba(195,72,17,0) 68%)",
        }}
      />
      <div
        aria-hidden
        data-float="-0.08"
        className="pointer-events-none absolute -right-[220px] bottom-[-260px] h-[680px] w-[680px] rounded-full"
        style={{
          background: "radial-gradient(circle at 50% 50%,rgba(11,54,154,.28),rgba(11,54,154,0) 68%)",
        }}
      />

      <div className="gutter relative">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
              {eyebrow}
            </div>
            <SplitReveal
              as="h2"
              className="mt-3 max-w-[720px] text-[clamp(26px,4vw,38px)] leading-[1.15] tracking-[-0.025em] text-white"
            >
              {heading}
            </SplitReveal>
          </div>
        </div>

        <div data-grid className="js-anim grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card item={feature} featured />
          {rest.map((item) => (
            <Card key={item.quote} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item, featured = false }: { item: Testimonial; featured?: boolean }) {
  return (
    <figure
      data-card
      className={`relative flex flex-col justify-between overflow-hidden rounded-card border border-[rgba(240,233,223,.12)] bg-[rgba(240,233,223,.045)] p-6 backdrop-blur-xl md:p-7 ${
        featured ? "lg:col-span-2 lg:row-span-2 lg:p-9" : ""
      }`}
    >
      <Spotlight
        size={featured ? "380px" : "260px"}
        stops="rgba(228,100,42,.18),transparent 70%"
      />

      <span
        aria-hidden
        className={`relative block font-extrabold leading-none text-terracotta-light/30 ${
          featured ? "text-[64px]" : "text-[40px]"
        }`}
      >
        &ldquo;
      </span>

      <blockquote
        className={`relative mt-3 flex-1 text-dark-body ${
          featured
            ? "text-[clamp(17px,2vw,22px)] leading-[1.6]"
            : "text-[14px] leading-[1.75]"
        }`}
      >
        {item.quote}
      </blockquote>

      <figcaption className="relative mt-7 border-t border-[rgba(240,233,223,.12)] pt-5">
        <span className="block text-[13px] font-bold text-white">
          {item.name ?? item.role}
        </span>
        <span className="mt-1 block text-[11.5px] uppercase tracking-[.1em] text-dark-faint">
          {item.name ? `${item.role} · ${item.industry}` : item.industry}
        </span>
      </figcaption>
    </figure>
  );
}
