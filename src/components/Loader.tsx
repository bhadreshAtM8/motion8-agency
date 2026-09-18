"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { introAlreadyPlayed, markIntroDone, rememberIntroPlayed } from "@/lib/intro";

/** design.md §3: mark + word rise in, terracotta scaleY curtain wipes up. */
export function Loader() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const finish = () => {
        gsap.set(el, { autoAlpha: 0 });
        document.body.style.overflow = "";
        rememberIntroPlayed();
        markIntroDone();
      };

      if (prefersReducedMotion() || introAlreadyPlayed()) {
        finish();
        return;
      }

      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({ onComplete: finish });
      tl.from("[data-mark]", { y: 26, opacity: 0, duration: 0.5, ease: "power3.out" })
        .from("[data-word]", { y: 22, opacity: 0, duration: 0.5, ease: "power3.out" }, "-=.34")
        .to("[data-fill]", { scaleY: 0, duration: 0.9, ease: "expo.inOut" }, "+=.18")
        .to(
          "[data-mark],[data-word]",
          { y: -30, opacity: 0, duration: 0.5, ease: "power2.inOut" },
          "-=.85",
        );

      return () => {
        document.body.style.overflow = "";
      };
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[300] flex items-center justify-center bg-ground"
    >
      <div data-fill className="absolute inset-0 origin-bottom bg-terracotta" />
      <div className="relative flex items-center gap-3">
        <Image
          data-mark
          src="/brand/icon.png"
          alt=""
          width={350}
          height={350}
          priority
          className="h-11 w-11"
        />
        <span data-word className="text-[22px] font-extrabold tracking-[-0.02em] text-white">
          Motion 8
        </span>
      </div>
    </div>
  );
}
