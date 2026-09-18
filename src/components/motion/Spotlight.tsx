"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Cursor-tracked radial glow (design.md §3, `data-spot`). Drop inside any
 * `position:relative` host; it paints itself into the host's bounds.
 */
export function Spotlight({
  size = "320px",
  stops = "rgba(228,100,42,.22),transparent 70%",
}: {
  size?: string;
  stops?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const spot = ref.current;
      const host = spot?.parentElement;
      if (!spot || !host || prefersReducedMotion()) return;
      if (!window.matchMedia("(pointer: fine)").matches) return;

      const paint = (x: number, y: number) => {
        spot.style.backgroundImage = `radial-gradient(${size} circle at ${x}% ${y}%,${stops})`;
      };
      paint(50, 50);

      const enter = () => gsap.to(spot, { opacity: 1, duration: 0.4 });
      const leave = () => gsap.to(spot, { opacity: 0, duration: 0.4 });
      const move = (event: PointerEvent) => {
        const rect = host.getBoundingClientRect();
        paint(
          ((event.clientX - rect.left) / rect.width) * 100,
          ((event.clientY - rect.top) / rect.height) * 100,
        );
      };

      host.addEventListener("pointerenter", enter);
      host.addEventListener("pointerleave", leave);
      host.addEventListener("pointermove", move);
      return () => {
        host.removeEventListener("pointerenter", enter);
        host.removeEventListener("pointerleave", leave);
        host.removeEventListener("pointermove", move);
      };
    },
    { scope: ref },
  );

  return <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 opacity-0" />;
}
