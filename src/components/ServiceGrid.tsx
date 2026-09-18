"use client";

import Link from "next/link";
import { useRef } from "react";
import { SplitReveal } from "@/components/motion/Reveal";
import type { Service } from "@/content/pillars";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/** Cream section, three-up service cards with a 3px left rule (design.md §2). */
export function ServiceGrid({
  pillarSlug,
  services,
  eyebrow,
  heading,
  note,
}: {
  pillarSlug: string;
  services: Service[];
  eyebrow: string;
  heading: string;
  note: string;
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      gsap.set(el.querySelectorAll(".js-anim"), { visibility: "visible" });
      if (prefersReducedMotion()) return;

      el.querySelectorAll<HTMLElement>("[data-card]").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 92%" },
        });
        const enter = () =>
          gsap.to(card, { y: -8, duration: 0.4, ease: "power3.out" });
        const leave = () => gsap.to(card, { y: 0, duration: 0.4, ease: "power3.out" });
        card.addEventListener("pointerenter", enter);
        card.addEventListener("pointerleave", leave);
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="gutter bg-cream py-16 text-light-body md:py-24">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-12">
        <div>
          <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta">
            {eyebrow}
          </div>
          <SplitReveal as="h2" className="mt-3 text-[clamp(26px,4vw,40px)] tracking-[-0.03em]">
            {heading}
          </SplitReveal>
        </div>
        <p className="m-0 max-w-[380px] text-[13.5px] leading-[1.8] text-light-muted">{note}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Link
            key={service.slug}
            href={`/${pillarSlug}/${service.slug}`}
            data-card
            className="js-anim rounded-card border border-edge-card bg-white p-[30px] transition-shadow hover:shadow-caseLight"
            style={{ borderLeft: `3px solid ${service.featured ? "#0B369A" : "#C34811"}` }}
          >
            <div
              className={`text-[11.5px] font-extrabold tracking-[.14em] ${
                service.featured ? "text-blue" : "text-terracotta"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
              {service.featured && " — Featured"}
            </div>
            <h3 className="mt-3 text-[21px] tracking-[-0.02em]">{service.name}</h3>
            <p className="m-0 mt-2.5 text-[13.5px] leading-[1.75] text-light-muted">
              {service.blurb}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
