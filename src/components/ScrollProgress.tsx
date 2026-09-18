"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/** 2px gradient rule, scaleX scrubbed to page scroll (design.md §3). */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion() || !bar.current) return;
    gsap.set(bar.current, { scaleX: 0, transformOrigin: "left center" });
    gsap.to(bar.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
      },
    });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[210] h-[2px]">
      <div
        ref={bar}
        className="h-full w-full bg-[linear-gradient(90deg,#C34811,#E4642A,#0B369A)]"
      />
    </div>
  );
}
