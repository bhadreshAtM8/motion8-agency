"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Motion for the service timeline. The markup is server-rendered with the
 * rail fully drawn; here the rail is rewound and scrubbed to scroll, each
 * node lights as it crosses 60% of the viewport and each phase fades up.
 */
export function TimelineMotion({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const rail = el.querySelector<HTMLElement>("[data-rail]");
      if (rail) {
        gsap.fromTo(
          rail,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 60%", end: "bottom 60%", scrub: 0.4 },
          },
        );
      }

      gsap.utils.toArray<HTMLElement>("[data-node]", el).forEach((node, i) => {
        if (i === 0) return; // the first node is filled in the HTML
        gsap.to(node, {
          backgroundColor: "#E4642A",
          borderColor: "#E4642A",
          boxShadow: "0 0 0 5px rgba(228,100,42,.16)",
          duration: 0.45,
          ease: "power3.out",
          scrollTrigger: { trigger: node, start: "top 60%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-phase]", el).forEach((phase) => {
        gsap.from(phase, {
          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: phase, start: "top 92%", once: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
