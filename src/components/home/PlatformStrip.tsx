"use client";

import { useRef } from "react";
import { PLATFORM_MARKS } from "@/content/platform-icons";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Platforms we actually build on, each named in the service copy. Marks are
 * real brand logos (Simple Icons path data, vendored in content/platform-icons)
 * rendered inline as currentColor, so they pick up the muted and hover states
 * with the label and stay crisp at any size.
 *
 * Two rows travelling in opposite directions, both velocity-reactive like the
 * headline ticker.
 */
export function PlatformStrip() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      gsap.set(el.querySelectorAll(".js-anim"), { visibility: "visible" });
      if (prefersReducedMotion()) return;

      gsap.from(el.querySelector("[data-head]"), {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });

      const loops: gsap.core.Tween[] = [];

      el.querySelectorAll<HTMLElement>("[data-marquee]").forEach((track, row) => {
        const half = track.scrollWidth / 2;
        if (!half) return;
        const dir = row % 2 === 0 ? -1 : 1;

        gsap.set(track, { x: dir === 1 ? -half : 0 });
        loops.push(
          gsap.to(track, {
            x: dir === 1 ? 0 : -half,
            duration: 34 + row * 6,
            ease: "none",
            repeat: -1,
          }),
        );
      });

      let idle: ReturnType<typeof setTimeout>;
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const v = self.getVelocity();
          loops.forEach((loop) =>
            loop.timeScale(gsap.utils.clamp(0.2, 5, 1 + Math.abs(v) / 1200)),
          );
          clearTimeout(idle);
          idle = setTimeout(() => loops.forEach((loop) => loop.timeScale(1)), 140);
        },
      });

      return () => {
        clearTimeout(idle);
        trigger.kill();
        loops.forEach((loop) => loop.kill());
      };
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden border-t border-edge-rule bg-ground py-16 md:py-20"
    >
      <div data-head className="gutter js-anim mb-10 flex flex-col gap-3 md:mb-12">
        <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
          The stack
        </div>
        <h2 className="max-w-[640px] text-[clamp(22px,3.2vw,30px)] leading-[1.25] tracking-[-0.025em] text-white">
          Built on the platforms you already run on
        </h2>
      </div>

      <div className="js-anim flex flex-col gap-5">
        {PLATFORM_MARKS.map((row, i) => (
          <div key={i} className="flex overflow-hidden">
            <div data-marquee className="flex w-max shrink-0 items-center">
              {[...row, ...row].map((mark, j) => (
                <span
                  key={`${mark.slug}-${j}`}
                  className="group flex shrink-0 items-center gap-3 whitespace-nowrap px-7 text-dark-body/40 transition-colors duration-300 hover:text-terracotta-light md:px-9"
                >
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 fill-current md:h-[22px] md:w-[22px]"
                  >
                    <path d={mark.path} />
                  </svg>
                  <span className="text-[16px] font-bold tracking-[-0.015em] md:text-[19px]">
                    {mark.label}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Fade the marquee into the page edges instead of cutting it off. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ground to-transparent md:w-32"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ground to-transparent md:w-32"
      />
    </section>
  );
}
