"use client";

/**
 * The hero entrance has to start when the preloader curtain clears, not on
 * mount — otherwise it plays behind the curtain and the page looks static
 * the moment it becomes visible.
 */

let done = false;
const waiting = new Set<() => void>();

export function markIntroDone() {
  if (done) return;
  done = true;
  waiting.forEach((fn) => fn());
  waiting.clear();
}

export function onIntroDone(fn: () => void) {
  if (done) {
    fn();
    return () => {};
  }
  waiting.add(fn);
  return () => {
    waiting.delete(fn);
  };
}

export function isIntroDone() {
  return done;
}

/**
 * True when the loader must not play: the boot script already flagged the
 * visit (repeat in session, paid traffic, reduced motion, no JS), or the
 * loader is mounting long after first paint (a client-side navigation back
 * to /, or a hydration so slow the CSS overlay has already lifted).
 */
export function shouldSkipIntro() {
  if (typeof window === "undefined") return false;
  const html = document.documentElement.classList;
  return (
    html.contains("skip-intro") ||
    html.contains("reduced-motion") ||
    introAlreadyPlayed() ||
    performance.now() > 1200
  );
}

export function introAlreadyPlayed() {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem("m8:intro") === "1";
  } catch {
    return false;
  }
}

export function rememberIntroPlayed() {
  try {
    window.sessionStorage.setItem("m8:intro", "1");
  } catch {
    /* private mode — replay the intro, harmless */
  }
}
