"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export type Stat = {
  value: string;
  label: string;
  countTo?: number;
  countFrom?: number;
};

/** Counters tween on `top 88%`; `countFrom` keeps years from counting off zero. */
export function StatBand({
  stats,
  className = "",
  columns,
}: {
  stats: Stat[];
  className?: string;
  columns?: string;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      // The root itself carries .js-anim, so reveal it as well as any children.
      gsap.set([el, ...el.querySelectorAll(".js-anim")], { visibility: "visible" });
      if (prefersReducedMotion()) return;

      el.querySelectorAll<HTMLElement>("[data-stat]").forEach((cell) => {
        gsap.from(cell, {
          opacity: 0,
          y: 34,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: cell, start: "top 92%" },
        });
      });

      el.querySelectorAll<HTMLElement>("[data-count]").forEach((node) => {
        const target = Number(node.dataset.count);
        const from = Number(node.dataset.from ?? 0);
        if (!Number.isFinite(target)) return;
        const counter = { value: from };
        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 88%" },
          onStart: () => {
            node.textContent = String(from);
          },
          onUpdate: () => {
            node.textContent = String(Math.round(counter.value));
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className={`js-anim grid grid-cols-2 gap-y-8 ${columns ?? "md:grid-cols-5"} ${className}`}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          data-stat
          className={`px-3 text-center ${i > 0 ? "md:border-l md:border-edge-rule" : ""}`}
        >
          <div
            className={`font-extrabold tracking-[-0.03em] text-terracotta-light ${
              stat.value.length > 6 ? "text-[24px] md:text-[30px]" : "text-[38px] md:text-[46px]"
            }`}
            data-count={stat.countTo}
            data-from={stat.countFrom}
          >
            {stat.value}
          </div>
          <div className="mt-2.5 text-[11.5px] uppercase tracking-[.08em] text-dark-muted">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
