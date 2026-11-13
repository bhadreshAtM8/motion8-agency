"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

/**
 * Decorative, looping hero visual per pillar.
 *
 * The SVG markup is the finished frame, so it reads correctly with no JS and
 * under prefers-reduced-motion. GSAP only takes over after hydration, and the
 * loop is paused whenever the motif is off-screen or the tab is hidden.
 */

const GROUND = "#14110f";
const TERRA = "#c34811";
const TERRA_LIGHT = "#e4642a";
const CREAM = "#f5efe6";

type Selector = (query: string) => SVGGraphicsElement[];

/* ───────────────────────── ai-automation: network ───────────────────────── */

/** x, y, radius */
const NODES: ReadonlyArray<readonly [number, number, number]> = [
  [56, 186, 5],
  [132, 104, 5],
  [140, 262, 5],
  [196, 178, 8], // hub
  [262, 84, 5],
  [284, 236, 5],
  [212, 304, 5],
  [316, 152, 5],
];

const LINKS: ReadonlyArray<readonly [number, number]> = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [1, 4],
  [3, 4],
  [3, 5],
  [2, 6],
  [6, 5],
  [4, 7],
  [5, 7],
  [3, 7],
];

/** Each signal walks a path of node indices, starting at `at` seconds. */
const ROUTES: ReadonlyArray<{
  path: readonly number[];
  at: number;
  rest: readonly [number, number];
}> = [
  { path: [0, 1, 4, 7], at: 0, rest: [197, 94] },
  { path: [0, 2, 3, 5, 7], at: 0.5, rest: [240, 207] },
  { path: [0, 1, 3, 7], at: 2.6, rest: [256, 165] },
  { path: [0, 2, 6, 5], at: 3.2, rest: [176, 283] },
];

const NETWORK_LOOP = 6;
const SIGNAL_SPEED = 150; // px per second

function NetworkMotif() {
  return (
    <>
      <g stroke={CREAM} strokeOpacity={0.13} strokeWidth={1}>
        {LINKS.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
          />
        ))}
      </g>

      {ROUTES.map((route, i) => (
        <g key={i} data-signal transform={`translate(${route.rest[0]} ${route.rest[1]})`}>
          <circle r={7} fill={TERRA} opacity={0.22} />
          <circle r={2.75} fill={TERRA_LIGHT} />
        </g>
      ))}

      {NODES.map(([x, y, r], i) => (
        <g key={i}>
          <circle
            data-halo
            cx={x}
            cy={y}
            r={r + 6}
            fill="none"
            stroke={TERRA_LIGHT}
            strokeWidth={1}
            opacity={i === 3 ? 0.3 : 0}
          />
          <circle
            cx={x}
            cy={y}
            r={r}
            fill={GROUND}
            stroke={CREAM}
            strokeOpacity={i === 3 ? 0.45 : 0.3}
            strokeWidth={1.25}
          />
          <circle data-core cx={x} cy={y} r={i === 3 ? 3 : 2} fill={TERRA_LIGHT} opacity={0.4} />
        </g>
      ))}
    </>
  );
}

function buildNetwork(q: Selector) {
  const halos = q("[data-halo]");
  const cores = q("[data-core]");
  const signals = q("[data-signal]");

  gsap.set(halos, { opacity: 0 });
  gsap.set(signals, { opacity: 0 });

  const tl = gsap.timeline({ repeat: -1, paused: true });

  const pulse = (node: number, t: number) => {
    const r = NODES[node][2];
    tl.fromTo(
      halos[node],
      { attr: { r: r + 1 }, opacity: 0.55 },
      { attr: { r: r + 15 }, opacity: 0, duration: 0.8, ease: "power2.out", immediateRender: false },
      t,
    ).fromTo(
      cores[node],
      { opacity: 1 },
      { opacity: 0.4, duration: 0.8, ease: "power1.out", immediateRender: false },
      t,
    );
  };

  ROUTES.forEach(({ path, at }, i) => {
    const signal = signals[i];
    let t = at;

    tl.to(signal, { opacity: 1, duration: 0.25, ease: "power1.out" }, t);
    pulse(path[0], t);

    for (let k = 1; k < path.length; k++) {
      const [x0, y0] = NODES[path[k - 1]];
      const [x1, y1] = NODES[path[k]];
      const duration = Math.hypot(x1 - x0, y1 - y0) / SIGNAL_SPEED;
      tl.fromTo(
        signal,
        { x: x0, y: y0 },
        { x: x1, y: y1, duration, ease: "sine.inOut", immediateRender: false },
        t,
      );
      t += duration;
      pulse(path[k], t - 0.06);
    }

    tl.to(signal, { opacity: 0, duration: 0.3, ease: "power1.in" }, t - 0.05);
  });

  // Pad the loop to a fixed length so the network rests briefly before restarting.
  tl.add(() => {}, NETWORK_LOOP);
  return tl;
}

/* ─────────────────── software-development: editor / build ─────────────────── */

const LINE_Y0 = 126;
const LINE_GAP = 20;
const BAR_H = 6;

/** Per line: segments of [x, width, accent?] */
const CODE: ReadonlyArray<ReadonlyArray<readonly [number, number, boolean?]>> = [
  [
    [62, 54, true],
    [122, 38],
  ],
  [[78, 92]],
  [
    [78, 40],
    [124, 64, true],
  ],
  [[94, 110]],
  [
    [94, 48],
    [148, 30],
  ],
  [[78, 70, true]],
  [[62, 26]],
];

const SEGMENTS = CODE.flatMap((line, row) =>
  line.map(([x, w, accent], col) => ({
    x,
    w,
    accent: Boolean(accent),
    y: LINE_Y0 + row * LINE_GAP,
    newline: col === 0,
  })),
);

const TYPE_SPEED = 250; // px per second
const RULE = { x: 62, y: 275, w: 200 };
const CHECK = { cx: 294, cy: 276, r: 11 };

function EditorMotif() {
  return (
    <>
      {/* panel chrome */}
      <rect
        x={40}
        y={60}
        width={280}
        height={240}
        rx={14}
        fill={CREAM}
        fillOpacity={0.025}
        stroke={CREAM}
        strokeOpacity={0.16}
        strokeWidth={1}
      />
      <line x1={40} y1={104} x2={320} y2={104} stroke={CREAM} strokeOpacity={0.1} strokeWidth={1} />
      <g fill={CREAM} fillOpacity={0.22}>
        <circle cx={62} cy={82} r={3} />
        <circle cx={76} cy={82} r={3} />
        <circle cx={90} cy={82} r={3} />
      </g>
      <rect x={112} y={79} width={46} height={6} rx={3} fill={CREAM} fillOpacity={0.1} />

      {/* progress track */}
      <rect x={RULE.x} y={RULE.y} width={RULE.w} height={2} rx={1} fill={CREAM} fillOpacity={0.12} />

      <g data-live>
        {SEGMENTS.map((s, i) => (
          <rect
            key={i}
            data-bar
            x={s.x}
            y={s.y}
            width={s.w}
            height={BAR_H}
            rx={BAR_H / 2}
            fill={s.accent ? TERRA_LIGHT : CREAM}
            fillOpacity={s.accent ? 0.85 : 0.24}
          />
        ))}

        <rect data-fill x={RULE.x} y={RULE.y} width={RULE.w} height={2} rx={1} fill={TERRA_LIGHT} />

        <g data-check>
          <circle
            cx={CHECK.cx}
            cy={CHECK.cy}
            r={CHECK.r}
            fill={TERRA}
            fillOpacity={0.16}
            stroke={TERRA_LIGHT}
            strokeWidth={1.25}
          />
          <path
            data-tick
            d="M288.5 276.5l4 4 7-8.5"
            pathLength={1}
            fill="none"
            stroke={TERRA_LIGHT}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      {/* caret: only ever visible while the loop is running */}
      <rect data-caret x={0} y={-3} width={1.5} height={12} fill={TERRA_LIGHT} opacity={0} />
    </>
  );
}

function buildEditor(q: Selector) {
  const live = q("[data-live]");
  const bars = q("[data-bar]");
  const caret = q("[data-caret]");
  const fill = q("[data-fill]");
  const check = q("[data-check]");
  const tick = q("[data-tick]");

  gsap.set(tick, { strokeDasharray: 1 });

  const tl = gsap.timeline({ repeat: -1, paused: true });
  tl.fromTo(live, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "none" }, 0);
  tl.fromTo(caret, { opacity: 0 }, { opacity: 1, duration: 0.15, ease: "none" }, 0.15);

  let t = 0.35;
  SEGMENTS.forEach((s, i) => {
    t += s.newline ? 0.14 : 0.06;
    const duration = s.w / TYPE_SPEED;
    const ease = `steps(${Math.max(2, Math.round(s.w / 9))})`;
    tl.fromTo(
      bars[i],
      { scaleX: 0, transformOrigin: "0% 50%" },
      { scaleX: 1, duration, ease },
      t,
    ).fromTo(
      caret,
      { x: s.x + 2, y: s.y },
      { x: s.x + s.w + 3, duration, ease, immediateRender: false },
      t,
    );
    t += duration;
  });

  tl.to(caret, { opacity: 0, duration: 0.2, ease: "none" }, t + 0.25);
  t += 0.35;

  tl.fromTo(
    fill,
    { scaleX: 0, transformOrigin: "0% 50%" },
    { scaleX: 1, duration: 1.15, ease: "power2.inOut" },
    t,
  );
  t += 1.1;

  tl.fromTo(
    check,
    { opacity: 0, scale: 0.6, transformOrigin: "50% 50%" },
    { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(2)" },
    t,
  ).fromTo(
    tick,
    { strokeDashoffset: 1, opacity: 0 },
    { strokeDashoffset: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
    t + 0.15,
  );
  t += 0.55;

  // hold on the finished build, then clear
  tl.to(live, { opacity: 0, duration: 0.5, ease: "power1.in" }, t + 1.6);
  tl.add(() => {}, t + 2.3);
  return tl;
}

/* ───────────────────────── digital-marketing: chart ───────────────────────── */

const BASELINE = 290;
const GRID_Y = [90, 140, 190, 240];
/** x (left edge), height */
const BARS: ReadonlyArray<readonly [number, number]> = [
  [78, 46],
  [138, 72],
  [198, 104],
  [258, 142],
];
const BAR_W = 28;
const TREND =
  "M50 250C75 240 85 222 104 220S135 236 156 226 190 172 212 168 245 158 262 140 300 96 316 82";
const TREND_END = [316, 82] as const;

function ChartMotif() {
  return (
    <>
      <defs>
        <linearGradient id="pillar-motif-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={TERRA} stopOpacity={0.22} />
          <stop offset="1" stopColor={TERRA} stopOpacity={0} />
        </linearGradient>
      </defs>

      <g stroke={CREAM} strokeWidth={1}>
        {GRID_Y.map((y) => (
          <line key={y} x1={50} y1={y} x2={320} y2={y} strokeOpacity={0.07} strokeDasharray="2 6" />
        ))}
        <line x1={50} y1={BASELINE} x2={320} y2={BASELINE} strokeOpacity={0.2} />
        <line x1={50} y1={70} x2={50} y2={BASELINE} strokeOpacity={0.1} />
      </g>

      <g data-live>
        {BARS.map(([x, h], i) => {
          const last = i === BARS.length - 1;
          return (
            <rect
              key={x}
              data-bar
              x={x}
              y={BASELINE - h}
              width={BAR_W}
              height={h}
              rx={2}
              fill={last ? TERRA : CREAM}
              fillOpacity={last ? 0.22 : 0.06}
              stroke={last ? TERRA_LIGHT : CREAM}
              strokeOpacity={last ? 0.55 : 0.16}
              strokeWidth={1}
            />
          );
        })}

        <path data-area d={`${TREND}V${BASELINE}H50Z`} fill="url(#pillar-motif-area)" />
        <path
          data-trend
          d={TREND}
          fill="none"
          stroke={TERRA_LIGHT}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g data-dot transform={`translate(${TREND_END[0]} ${TREND_END[1]})`}>
          <circle data-ring r={9} fill="none" stroke={TERRA_LIGHT} strokeWidth={1} opacity={0.35} />
          <circle r={3.5} fill={TERRA_LIGHT} />
          <circle r={1.25} fill={CREAM} />
        </g>
      </g>
    </>
  );
}

function buildChart(q: Selector) {
  const live = q("[data-live]");
  const bars = q("[data-bar]");
  const area = q("[data-area]");
  const dot = q("[data-dot]")[0];
  const ring = q("[data-ring]");
  const trend = q("[data-trend]")[0] as unknown as SVGPathElement;
  const length = trend.getTotalLength();

  gsap.set(trend, { strokeDasharray: length });

  const placeDot = () => {
    const offset = Number(gsap.getProperty(trend, "strokeDashoffset")) || 0;
    const p = trend.getPointAtLength(Math.max(0, length - offset));
    dot.setAttribute("transform", `translate(${p.x.toFixed(2)} ${p.y.toFixed(2)})`);
  };

  const tl = gsap.timeline({ repeat: -1, paused: true });
  tl.fromTo(live, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "none" }, 0);
  tl.fromTo(
    bars,
    { scaleY: 0, transformOrigin: "50% 100%" },
    { scaleY: 1, duration: 1, ease: "power3.out", stagger: 0.14 },
    0.05,
  );
  tl.fromTo(
    trend,
    { strokeDashoffset: length },
    { strokeDashoffset: 0, duration: 2.3, ease: "power2.inOut", onUpdate: placeDot },
    0.05,
  );
  tl.fromTo(area, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power1.out" }, 1.7);
  tl.fromTo(
    ring,
    { attr: { r: 4 }, opacity: 0.6 },
    { attr: { r: 15 }, opacity: 0, duration: 1.1, ease: "power2.out", repeat: 1, repeatDelay: 0.15 },
    2.35,
  );
  tl.to(live, { opacity: 0, duration: 0.6, ease: "power1.in" }, 5.3);
  tl.add(() => {}, 6.2);

  placeDot();
  return tl;
}

/* ──────────────────────────────── component ──────────────────────────────── */

const MOTIFS: Record<
  string,
  { Art: () => React.JSX.Element; build: (q: Selector) => gsap.core.Timeline }
> = {
  "ai-automation": { Art: NetworkMotif, build: buildNetwork },
  "software-development": { Art: EditorMotif, build: buildEditor },
  "digital-marketing": { Art: ChartMotif, build: buildChart },
};

export function PillarMotif({ pillar }: { pillar: string }) {
  const root = useRef<HTMLDivElement>(null);
  const motif = Object.prototype.hasOwnProperty.call(MOTIFS, pillar) ? MOTIFS[pillar] : undefined;

  useGSAP(
    () => {
      const el = root.current;
      if (!el || !motif || prefersReducedMotion()) return;

      const tl = motif.build(gsap.utils.selector(el) as Selector);

      let inView = typeof IntersectionObserver === "undefined";
      const sync = () => {
        if (inView && !document.hidden) tl.play();
        else tl.pause();
      };

      const observer =
        typeof IntersectionObserver === "undefined"
          ? null
          : new IntersectionObserver(
              (entries) => {
                inView = entries[entries.length - 1].isIntersecting;
                sync();
              },
              { rootMargin: "80px" },
            );
      observer?.observe(el);
      document.addEventListener("visibilitychange", sync);
      sync();

      return () => {
        observer?.disconnect();
        document.removeEventListener("visibilitychange", sync);
        tl.kill();
      };
    },
    { scope: root, dependencies: [pillar] },
  );

  if (!motif) return null;
  const { Art } = motif;

  return (
    <div
      ref={root}
      aria-hidden
      className="pointer-events-none aspect-square w-full max-w-[360px] select-none"
    >
      <svg
        viewBox="0 0 360 360"
        fill="none"
        focusable="false"
        className="block h-full w-full overflow-visible"
      >
        <Art />
      </svg>
    </div>
  );
}
