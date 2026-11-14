"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { markIntroDone, rememberIntroPlayed, shouldSkipIntro } from "@/lib/intro";

/**
 * Brand flash before the home hero: mark + word rise, the terracotta fill
 * wipes down, the overlay lifts. The whole thing is CSS (globals.css,
 * `[data-loader]`) and lasts 0.6s from first paint, so it never waits on
 * hydration. The hero text underneath is painted from the first frame.
 * JS only flags the end of the intro for the nav and eyebrow line.
 */
export function Loader() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const finish = () => {
      rememberIntroPlayed();
      markIntroDone();
    };

    if (shouldSkipIntro()) {
      // Before paint: hides the overlay and zeroes the hero's intro delay.
      document.documentElement.classList.add("skip-intro");
      finish();
      return;
    }

    const onEnd = (event: AnimationEvent) => {
      if (event.target === el && event.animationName === "loader-out") finish();
    };
    el.addEventListener("animationend", onEnd);
    const fallback = window.setTimeout(finish, 800);

    return () => {
      el.removeEventListener("animationend", onEnd);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={root}
      aria-hidden
      data-loader
      className="pointer-events-none fixed inset-0 z-[300] flex items-center justify-center bg-ground"
    >
      <div data-loader-fill className="absolute inset-0 bg-terracotta" />
      <div data-loader-brand className="relative flex items-center gap-3">
        <Image
          src="/brand/icon.png"
          alt=""
          width={350}
          height={350}
          loading="eager"
          className="h-11 w-11"
        />
        <span className="text-[22px] font-extrabold tracking-[-0.02em] text-white">Motion 8</span>
      </div>
    </div>
  );
}
