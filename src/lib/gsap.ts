"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export { gsap, ScrollTrigger, SplitText, useGSAP };

export const EASE = "power3.out";
export const EASE_OUT = "expo.out";

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** SplitText measures line breaks, so it has to wait for the real fonts. */
export async function fontsReady() {
  if (typeof document === "undefined") return;
  try {
    await document.fonts.ready;
  } catch {
    /* fonts API unavailable — split against the fallback face */
  }
}
