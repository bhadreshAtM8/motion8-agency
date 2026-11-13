"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/* Crisp Brand Icons for Figma, Tailwind, Lighthouse, Web Vitals, Next.js & Google */
function FigmaIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-3.5 h-3.5 shrink-0 ${className}`} viewBox="0 0 38 57" fill="none" aria-hidden="true">
      <path
        d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
        fill="#1ABCFE"
      />
      <path
        d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
        fill="#0ACF83"
      />
      <path
        d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
        fill="#FF7262"
      />
      <path
        d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
        fill="#F24E1E"
      />
      <path
        d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
        fill="#A259FF"
      />
    </svg>
  );
}

function TailwindIcon({ className = "text-[#38BDF8]" }: { className?: string }) {
  return (
    <svg className={`w-3.5 h-3.5 shrink-0 ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  );
}

function LighthouseIcon({ className = "text-[#FF7A29]" }: { className?: string }) {
  return (
    <svg
      className={`w-3.5 h-3.5 shrink-0 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 2h6l1 7H8l1-7Z" />
      <path d="m8 9-2 13h12L16 9" />
      <path d="M4 14h16" />
      <path d="M6 18h12" />
      <path d="M12 2v2" />
    </svg>
  );
}

function CoreWebVitalsIcon({ className = "text-emerald-400" }: { className?: string }) {
  return (
    <svg
      className={`w-3.5 h-3.5 shrink-0 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function NextjsIcon({ className = "text-white" }: { className?: string }) {
  return (
    <svg className={`w-3.5 h-3.5 shrink-0 ${className}`} viewBox="0 0 180 180" fill="currentColor" aria-hidden="true">
      <mask height="180" id="mask0_next" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
        <circle cx="90" cy="90" fill="black" r="90" />
      </mask>
      <g mask="url(#mask0_next)">
        <circle cx="90" cy="90" fill="black" r="90" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="white"
        />
        <rect fill="white" height="72" width="12" x="115" y="54" />
      </g>
    </svg>
  );
}

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-3.5 h-3.5 shrink-0 ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

function ArrowIcon({ className = "text-[#FF7A29]" }: { className?: string }) {
  return (
    <svg className={`w-3 h-3 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

function CheckIcon({ className = "text-white" }: { className?: string }) {
  return (
    <svg className={`w-3.5 h-3.5 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

interface ChapterData {
  id: string;
  pillLabel: string;
  phaseTag: string;
  title: string;
  desc: string;
  techBadges: React.ReactNode;
  notes: {
    iconBadge?: React.ReactNode;
    title: string;
    text: string;
  }[];
}

const CHAPTERS: ChapterData[] = [
  {
    id: "chapter-spark",
    pillLabel: "The Spark",
    phaseTag: "Phase 1 · Intake & Creative Archetype",
    title: "The Spark: Tell us your vision over coffee.",
    desc: "No 40-page briefs, no 90-minute kickoff meetings. Just a distilled, beautiful intake experience tuned for mobile or desktop. You give us the essence; our studio architects the rest.",
    techBadges: (
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] text-xs font-medium text-neutral-300">
          <FigmaIcon /> Figma Canvas
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F95721]/15 text-xs font-medium text-[#FF7A29]">
          Color DNA Tokens
        </span>
      </div>
    ),
    notes: [
      {
        iconBadge: <FigmaIcon />,
        title: "Figma wireframe synthesis:",
        text: "Seven intuitive questions translated immediately into custom Figma artboards.",
      },
      {
        title: "Palette & moodboard DNA:",
        text: "We immediately translate your aesthetic taste into high-converting art direction.",
      },
      {
        title: "Same-day kickoff:",
        text: "Handed directly to dedicated UI designers within hours. Zero lag.",
      },
    ],
  },
  {
    id: "chapter-craft",
    pillLabel: "The Craft",
    phaseTag: "Phase 2 · Engineering & Identity Architecture",
    title: "The Craft: Precision engineering & custom identity.",
    desc: "While generic agencies drag and drop bloated WordPress plugins, we write clean Next.js 15 and handcraft vector marks tailored to your niche. Speed, aesthetics, and high conversion baked into every component.",
    techBadges: (
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] text-xs font-medium text-white">
          <NextjsIcon /> Next.js 15
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] text-xs font-medium text-neutral-200">
          <TailwindIcon /> Tailwind CSS
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F95721]/15 text-xs font-medium text-[#FF7A29]">
          <LighthouseIcon /> 99+ Lighthouse
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] text-xs font-medium text-neutral-300">
          <FigmaIcon /> Figma Tokens
        </span>
      </div>
    ),
    notes: [
      {
        iconBadge: <TailwindIcon />,
        title: "Tailwind CSS architecture:",
        text: "Designed from Figma artboards directly into clean Tailwind micro-tokens without template bloat.",
      },
      {
        iconBadge: <NextjsIcon />,
        title: "Next.js 15 App Router:",
        text: "Sub-second server components engineered for instant phone speeds.",
      },
      {
        iconBadge: <LighthouseIcon />,
        title: "99+ Google Lighthouse score:",
        text: "Verified green performance score on mobile and retina desktop monitors.",
      },
    ],
  },
  {
    id: "chapter-polish",
    pillLabel: "The Polish",
    phaseTag: "Phase 3 · Staging & Private Review",
    title: "The Polish: Live on your pocket screen.",
    desc: "Experience your site exactly as your real customers will: right from your smartphone. We provide a private, lightning-fast staging link with direct designer access to make same-day tweaks.",
    techBadges: (
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] text-xs font-medium text-neutral-300">
          iOS &amp; Android Staging
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F95721]/15 text-xs font-medium text-[#FF7A29]">
          Private Staging Tunnel
        </span>
      </div>
    ),
    notes: [
      {
        title: "Private interactive URL:",
        text: "Tap through navigation, forms, call buttons, and animations on your phone.",
      },
      {
        title: "Direct studio messaging:",
        text: "Talk directly to the actual engineers and designers without relay messengers.",
      },
      {
        title: "One-tap sign-off:",
        text: "Fast revisions until every headline and button meets your absolute satisfaction.",
      },
    ],
  },
  {
    id: "chapter-debut",
    pillLabel: "The Debut",
    phaseTag: "Phase 4 · Global Deployment & Permanence",
    title: "The Debut: Instant speed, zero hosting bills.",
    desc: "Your production build goes live to the world across 275+ edge nodes. Automatically indexed for Google, Google Maps, and AI answer engines with an ironclad zero-cost hosting architecture.",
    techBadges: (
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] text-xs font-medium text-neutral-300">
          <GoogleIcon /> Google Search Console
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 text-xs font-medium text-emerald-400">
          <CoreWebVitalsIcon /> 100 Core Web Vitals
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] text-white">
          275+ Global Edge Nodes
        </span>
      </div>
    ),
    notes: [
      {
        iconBadge: <GoogleIcon />,
        title: "Google Search Console indexed:",
        text: "Optimized sitemap, structured Schema markup, and OpenGraph social previews.",
      },
      {
        title: "Free hosting forever ($0/mo):",
        text: "You pay $0/month in server fees. Zero recurring hosting invoices.",
      },
      {
        title: "100% Code & Asset Ownership:",
        text: "You own every single line of code, your domain, and your vector logo.",
      },
    ],
  },
];

export function BundleProcess() {
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const narrativeColRef = useRef<HTMLDivElement>(null);
  const artifactColRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [selectedVibe, setSelectedVibe] = useState<"refined" | "bold">("refined");

  // Dynamic Mouse Lighting for Liquid Glass Caustic Highlight
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 50, y: 35 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // GSAP Pinned ScrollTrigger for Chapter Transition on Scroll
  useGSAP(
    () => {
      const el = pinContainerRef.current;
      if (!el || prefersReducedMotion()) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const trigger = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            pin: true,
            start: "top 72px",
            end: "+=2600",
            scrub: 0.6,
            onUpdate: (self) => {
              const p = self.progress;
              setScrollProgress(p);
              const idx = Math.min(Math.floor(p * 4), 3);
              setActiveIdx(idx);
            },
          },
        });

        timelineRef.current = trigger;

        return () => {
          trigger.scrollTrigger?.kill();
        };
      });
    },
    { scope: pinContainerRef },
  );

  // Smooth Staggered GSAP Entrance Animation when activeIdx changes
  useEffect(() => {
    if (prefersReducedMotion()) return;

    if (narrativeColRef.current) {
      gsap.fromTo(
        narrativeColRef.current.children,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.04, ease: "power2.out" },
      );
    }

    if (artifactColRef.current) {
      gsap.fromTo(
        artifactColRef.current,
        { opacity: 0.9, scale: 0.99 },
        { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" },
      );
    }
  }, [activeIdx]);

  const cur = CHAPTERS[activeIdx];

  const handlePillClick = (idx: number) => {
    setActiveIdx(idx);
    setScrollProgress(idx / 3.99);

    if (timelineRef.current?.scrollTrigger) {
      const st = timelineRef.current.scrollTrigger;
      const targetScroll = st.start + (st.end - st.start) * (idx / 3.2);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section id="process" className="relative z-10 scroll-mt-20">
      {/* Intro Heading with Motion8 Brand Glow */}
      <div className="pt-16 pb-8 text-center max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F95721]/15 rounded-full blur-[110px]"
        />

        <div className="inline-flex items-center text-[#FF7A29] text-xs font-semibold uppercase tracking-widest mb-3 relative z-10">
          Bespoke Production Cycle · From Intake to Launch
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4 relative z-10">
          The seven-day journey from concept to live production
        </h2>

        <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed relative z-10">
          A transparent, human-led design sprint without committee meetings or agency fluff. Follow the narrative arc of your new digital presence below.
        </p>
      </div>

      {/* Pinned Scroll-Driven Storytelling Stage */}
      <div
        ref={pinContainerRef}
        className="w-full min-h-[640px] md:h-screen max-h-[920px] flex flex-col justify-center relative overflow-hidden"
      >
        {/* Story Spine Navigation (Seamless, No Strip Line) */}
        <div className="w-full z-20 shrink-0 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Stage Eyebrow */}
            <div className="hidden sm:flex items-center gap-2 text-neutral-300 font-medium">
              <span className="text-white font-semibold">Sprint Delivery Specs</span>
              <span className="text-neutral-500">/</span>
              <span className="text-neutral-300">Day 01 to Day 07</span>
            </div>

            {/* Narrative Interactive Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 mx-auto md:mx-0">
              {CHAPTERS.map((chap, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={chap.id}
                    onClick={() => handlePillClick(idx)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "liquid-glass-btn-primary"
                        : "text-neutral-300 hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    <span>{chap.pillLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Real-time Progress Indicator */}
            <div className="hidden lg:flex items-center gap-3 text-xs font-medium text-neutral-300 shrink-0">
              <span className="text-white font-bold">0{activeIdx + 1}/04</span>
              <div className="w-28 h-1 rounded bg-white/20 overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-[#F95721] to-[#FF7A29] transition-all duration-200"
                  style={{ width: `${Math.max(scrollProgress * 100, 15)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* The Storytelling Stage: Left Narrative & Right Liquid Glass Specs */}
        <div className="relative flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full">
            {/* -------------------------------------------------------------
                LEFT COLUMN: STORY COPY WITH BRAND BADGES
               ------------------------------------------------------------- */}
            <div ref={narrativeColRef} className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center text-xs font-semibold text-[#FF7A29] tracking-wider uppercase">
                {cur.phaseTag}
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {cur.title}
              </h3>

              {/* Real Tech Badges Strip with Icons */}
              <div className="pt-0.5">{cur.techBadges}</div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                {cur.desc}
              </p>

              {/* Artifact Bullet Notes with Brand Icons */}
              <div className="pt-2 space-y-2.5">
                {cur.notes.map((note, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <span className="w-5 h-5 rounded-md bg-[#F95721]/15 text-[#F95721] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-sm">
                      {note.iconBadge ? (
                        note.iconBadge
                      ) : (
                        <ArrowIcon className="w-3 h-3 text-[#FF7A29]" />
                      )}
                    </span>
                    <span className="leading-relaxed">
                      <strong className="text-white font-medium">{note.title}</strong>{" "}
                      {note.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="pt-2 flex items-center justify-between text-xs font-medium text-neutral-400">
                <span className="text-white font-bold">Phase 0{activeIdx + 1} of 04</span>
                <span className="text-neutral-400 animate-pulse inline-flex items-center gap-1.5">
                  <span>Scroll down to advance</span>
                  <ArrowIcon className="w-3 h-3 text-neutral-400 inline" />
                </span>
              </div>
            </div>

            {/* -------------------------------------------------------------
                RIGHT COLUMN: BESPOKE LIQUID GLASS CARD (NO OUTER BOX, BRAND COLORS)
               ------------------------------------------------------------- */}
            <div className="lg:col-span-7 relative">
              {/* The Liquid Glass Card Container (Self-contained, NO outer blurry layer) */}
              <div
                ref={artifactColRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="liquid-glass-card relative min-h-[460px] sm:min-h-[500px] rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 overflow-hidden"
                style={{
                  /* More Translucent Liquid Glass Body */
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 45%, rgba(249, 87, 33, 0.04) 100%)",
                  backdropFilter: "blur(36px) saturate(190%) brightness(1.06)",
                  WebkitBackdropFilter: "blur(36px) saturate(190%) brightness(1.06)",
                  /* Convex 3D Glass Bevel & Luminous Brand Terracotta Shadows */
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow:
                    "inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.75), inset 0 -1.5px 2px 0 rgba(0, 0, 0, 0.3), inset 0 0 24px 0 rgba(255, 255, 255, 0.05), 0 30px 70px -15px rgba(0, 0, 0, 0.75), 0 15px 35px -10px rgba(249, 87, 33, 0.2)",
                }}
              >

                {/* Subtle Interactive Specular Light Sheen */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[32px] sm:rounded-[36px] transition-opacity duration-300 z-10"
                  style={{
                    opacity: isHovered ? 1 : 0.5,
                    background: `radial-gradient(450px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.16) 0%, transparent 60%)`,
                  }}
                />

                {/* Top Bar Chrome with Brand Badges Floating on Glass */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-xs font-bold flex items-center gap-2 drop-shadow-sm">
                      {activeIdx === 0 && (
                        <>
                          <FigmaIcon />
                          <span>Figma Studio Canvas · Session #M8-984</span>
                        </>
                      )}
                      {activeIdx === 1 && (
                        <>
                          <NextjsIcon />
                          <span>components/HeroConversion.tsx · Next.js 15</span>
                        </>
                      )}
                      {activeIdx === 2 && (
                        <span>Pocket Device Staging · staging.motion8.agency/live</span>
                      )}
                      {activeIdx === 3 && (
                        <>
                          <GoogleIcon />
                          <span>Global Edge CDN · Google Indexed</span>
                        </>
                      )}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium">
                    {activeIdx === 0 && (
                      <span className="px-3 py-1 rounded-xl bg-white/10 text-white font-bold backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                        Auto-saved
                      </span>
                    )}
                    {activeIdx === 1 && (
                      <>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 text-white font-bold backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                          <TailwindIcon /> Tailwind JIT
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#F95721]/20 text-[#FF7A29] font-bold backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                          <LighthouseIcon /> 99 Perf
                        </span>
                      </>
                    )}
                    {activeIdx === 2 && (
                      <span className="px-3 py-1 rounded-xl bg-white/10 text-white font-bold backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                        Passcode Protected
                      </span>
                    )}
                    {activeIdx === 3 && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                        <CoreWebVitalsIcon className="text-emerald-300" /> 100 Core Web Vitals
                      </span>
                    )}
                  </div>
                </div>

                {/* Dynamic Deliverable Content Floating on Liquid Glass (Brand Palette) */}
                <div className="relative z-10 my-auto py-2">
                  {/* -------------------------------------------------------------
                      PHASE 0: THE SPARK FIGMA INTAKE (BRAND COLORS)
                     ------------------------------------------------------------- */}
                  {activeIdx === 0 && (
                    <div className="space-y-5 text-left">
                      <div>
                        <div className="text-xs font-bold text-[#FF7A29] uppercase tracking-wider mb-1">
                          Step 3 of 7 · Brand Questionnaire
                        </div>
                        <div className="text-xl sm:text-2xl font-extrabold text-white leading-snug drop-shadow-sm">
                          What aesthetic archetype best matches your venture?
                        </div>
                      </div>

                      {/* Interactive Glass Buttons */}
                      <div className="grid grid-cols-2 gap-3.5 max-w-md">
                        <button
                          type="button"
                          onClick={() => setSelectedVibe("refined")}
                          className={`px-4 py-3.5 rounded-2xl text-xs font-bold flex items-center justify-between transition-all duration-200 ${
                            selectedVibe === "refined"
                              ? "liquid-glass-btn-primary scale-[1.02]"
                              : "liquid-glass-btn-glass"
                          }`}
                        >
                          <span>Refined &amp; Modern</span>
                          {selectedVibe === "refined" && (
                            <CheckIcon className="w-4 h-4 text-white" />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedVibe("bold")}
                          className={`px-4 py-3.5 rounded-2xl text-xs font-bold flex items-center justify-between transition-all duration-200 ${
                            selectedVibe === "bold"
                              ? "liquid-glass-btn-primary scale-[1.02]"
                              : "liquid-glass-btn-glass"
                          }`}
                        >
                          <span>Bold &amp; Industrial</span>
                          {selectedVibe === "bold" && (
                            <CheckIcon className="w-4 h-4 text-white" />
                          )}
                        </button>
                      </div>

                      {/* Color Palette + Typography Floating Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pt-2">
                        {/* Swatches (7 cols) */}
                        <div className="sm:col-span-7">
                          <div className="text-xs font-semibold text-white/90 mb-2">
                            Synthesized Color Palette:
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-8 flex-1 rounded-xl bg-[#0B0A09] flex items-center justify-center text-[10px] font-bold text-white shadow-md border border-white/10">
                              #0B0A
                            </div>
                            <div className="h-8 flex-1 rounded-xl bg-[#F95721] flex items-center justify-center text-[10px] font-bold text-white shadow-[0_0_15px_rgba(249,87,33,0.5)]">
                              #F957
                            </div>
                            <div className="h-8 flex-1 rounded-xl bg-[#F5A623] flex items-center justify-center text-[10px] font-bold text-black shadow-md">
                              #F5A6
                            </div>
                            <div className="h-8 flex-1 rounded-xl bg-[#FFFFFF] flex items-center justify-center text-[10px] font-bold text-black shadow-md">
                              #FFFF
                            </div>
                          </div>
                        </div>

                        {/* Typography Preview (5 cols) */}
                        <div className="sm:col-span-5 p-3.5 rounded-2xl liquid-glass-inner">
                          <div className="text-[10px] font-bold text-[#FF7A29] uppercase tracking-wider">
                            Typography System
                          </div>
                          <div className="text-xl font-black text-white leading-tight mt-0.5 drop-shadow-sm">
                            Architect.
                          </div>
                          <div className="text-[11px] text-white/80">
                            Manrope Pairing
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* -------------------------------------------------------------
                      PHASE 1: THE CRAFT NEXT.JS 15 (BRAND COLORS)
                     ------------------------------------------------------------- */}
                  {activeIdx === 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                      {/* Left: Code Snippet floating on Liquid Glass */}
                      <div className="sm:col-span-7 text-left font-mono text-xs leading-relaxed text-white space-y-1 p-4 rounded-2xl liquid-glass-inner overflow-x-auto">
                        <div className="text-[#FF7A29] font-bold mb-1">
                          // Next.js 15 App Router Server Component
                        </div>
                        <div>
                          <span className="text-[#F5A623] font-bold">export async function</span>{" "}
                          <span className="text-white font-bold">HeroConversion</span>() &#123;
                        </div>
                        <div className="pl-4 text-white/90">
                          <span className="text-[#F5A623]">return</span> (
                        </div>
                        <div className="pl-8 text-white/90">
                          &lt;<span className="text-emerald-300 font-bold">section</span> className=
                          <span className="text-amber-200">&quot;relative&quot;</span>&gt;<br />
                          &nbsp;&nbsp;&lt;<span className="text-emerald-300 font-bold">BrandIdentity</span> vector=
                          <span className="text-amber-200">&quot;custom&quot;</span> /&gt;<br />
                          &nbsp;&nbsp;&lt;<span className="text-emerald-300 font-bold">SpeedMetric</span> ttfb=
                          <span className="text-amber-200">&quot;0.28s&quot;</span> /&gt;<br />
                          &lt;/<span className="text-emerald-300 font-bold">section</span>&gt;
                        </div>
                        <div className="pl-4">)</div>
                        <div>&#125;</div>
                      </div>

                      {/* Right: Architecture Metric Specs */}
                      <div className="sm:col-span-5 space-y-3 text-left">
                        <div className="p-3.5 rounded-2xl liquid-glass-inner flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-white flex items-center gap-1.5">
                              <TailwindIcon className="w-4 h-4 text-[#38BDF8]" />
                              <span>Tailwind CSS Purged</span>
                            </div>
                            <div className="text-[11px] text-white/75 mt-0.5">0KB unused CSS</div>
                          </div>
                          <span className="text-xs font-bold text-emerald-400">Optimized</span>
                        </div>

                        <div className="p-3.5 rounded-2xl liquid-glass-inner flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-white flex items-center gap-1.5">
                              <LighthouseIcon className="w-4 h-4 text-[#FF7A29]" />
                              <span>99 Lighthouse Perf</span>
                            </div>
                            <div className="text-[11px] text-white/75 mt-0.5">Sub-second 0.28s TTFB</div>
                          </div>
                          <span className="text-xs font-bold text-[#FF7A29]">Verified</span>
                        </div>

                        <div className="p-3.5 rounded-2xl liquid-glass-inner flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-[#F95721] text-white font-black flex items-center justify-center text-xs shadow-md shrink-0">
                            M8
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Custom Vector Mark</div>
                            <div className="text-[11px] text-white/75">100% bespoke SVG assets</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* -------------------------------------------------------------
                      PHASE 2: THE POLISH SMARTPHONE STAGING (BRAND COLORS)
                     ------------------------------------------------------------- */}
                  {activeIdx === 2 && (
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                      {/* Left: Smartphone Staging Frame */}
                      <div className="sm:col-span-5 flex justify-center">
                        <div className="w-48 rounded-[30px] p-2.5 bg-white/[0.1] backdrop-blur-xl shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.5),0_20px_40px_rgba(0,0,0,0.5)]">
                          {/* Notch */}
                          <div className="w-16 h-3 bg-black/70 rounded-md mx-auto mb-1.5" />
                          {/* Screen */}
                          <div className="bg-black/50 backdrop-blur-md rounded-[22px] p-3 text-center space-y-2">
                            <div className="inline-block px-2 py-0.5 rounded bg-[#F95721]/25 text-[#FF7A29] text-[9px] font-bold tracking-wider uppercase">
                              LIVE STAGING
                            </div>
                            <div className="text-xs font-extrabold text-white leading-tight">
                              Elevate Your Presence.
                            </div>
                            <p className="text-[9px] text-white/80 leading-snug">
                              Ultra-fast Next.js architecture built for conversion.
                            </p>
                            <div className="w-full py-1.5 rounded-lg bg-gradient-to-r from-[#F95721] to-[#FF7A29] text-white font-bold text-[10px] shadow-sm flex items-center justify-center gap-1">
                              <span>Book Consultation</span>
                              <ArrowIcon className="w-2.5 h-2.5 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Studio Direct Feedback Thread (Frosted Glass with Brand Orange) */}
                      <div className="sm:col-span-7 space-y-3 text-left">
                        <div className="p-4 rounded-2xl liquid-glass-inner">
                          <div className="flex items-center justify-between">
                            <div className="text-xs font-bold text-[#FF7A29]">
                              You (via Mobile Preview)
                            </div>
                            <span className="text-[10px] text-white/60">2:14 PM</span>
                          </div>
                          <p className="text-xs text-white mt-1 leading-relaxed">
                            &ldquo;Can we make the primary booking button bolder on mobile?&rdquo;
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl liquid-glass-inner">
                          <div className="flex items-center justify-between">
                            <div className="text-xs font-bold text-emerald-400">
                              Motion8 Studio (Updated in 12m)
                            </div>
                            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
                              <span>Applied</span>
                              <CheckIcon className="w-3 h-3 text-emerald-400" />
                            </span>
                          </div>
                          <p className="text-xs text-white mt-1 leading-relaxed">
                            &ldquo;Done! Font-weight updated to 700 with responsive padding. Refresh your preview link!&rdquo;
                          </p>
                        </div>

                        <div className="text-xs text-white/80 px-3.5 py-2.5 rounded-xl liquid-glass-inner flex items-center justify-between">
                          <span>Direct WhatsApp &amp; Slack tunnel</span>
                          <span className="text-[#FF7A29] font-bold">Unlimited Sprint Tweaks</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* -------------------------------------------------------------
                      PHASE 3: THE DEBUT GLOBAL EDGE DEPLOYMENT (BRAND COLORS)
                     ------------------------------------------------------------- */}
                  {activeIdx === 3 && (
                    <div className="space-y-4 text-left">
                      {/* Top Headline Banner */}
                      <div>
                        <div className="text-xs font-bold text-[#FF7A29] uppercase tracking-wider mb-1">
                          Global Cloud Infrastructure
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-white drop-shadow-sm">
                          Google Search Console Verified · 275+ Global Edge Locations
                        </div>
                        <div className="text-xs text-white/80 mt-0.5">
                          Sub-second 0.28s Average TTFB across all continents
                        </div>
                      </div>

                      {/* 3 Core Value Metric Cards (Floating on Liquid Glass) */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-center pt-1">
                        <div className="p-4 rounded-2xl liquid-glass-inner space-y-1">
                          <div className="text-2xl font-black text-white drop-shadow-sm">100%</div>
                          <div className="text-xs text-white font-bold">Code Ownership</div>
                          <p className="text-[11px] text-white/75 leading-snug">
                            Full GitHub repo + vector source assets
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl liquid-glass-inner space-y-1">
                          <div className="text-2xl font-black text-emerald-400 drop-shadow-sm">Instant</div>
                          <div className="text-xs text-white font-bold">Google Indexing</div>
                          <p className="text-[11px] text-white/75 leading-snug">
                            XML sitemaps &amp; structured Schema markup
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl liquid-glass-inner space-y-1">
                          <div className="text-2xl font-black text-[#FF7A29] drop-shadow-sm">$0/mo</div>
                          <div className="text-xs text-white font-bold">Lifetime Hosting</div>
                          <p className="text-[11px] text-white/75 leading-snug">
                            Zero recurring server invoices forever
                          </p>
                        </div>
                      </div>

                      {/* 4x 100 Lighthouse Audit Scores */}
                      <div className="p-3 rounded-2xl liquid-glass-inner flex items-center justify-around text-xs">
                        <div className="flex items-center gap-1.5 text-white">
                          <span className="text-emerald-400 font-black">100</span> Performance
                        </div>
                        <span className="text-white/20">·</span>
                        <div className="flex items-center gap-1.5 text-white">
                          <span className="text-emerald-400 font-black">100</span> Accessibility
                        </div>
                        <span className="text-white/20">·</span>
                        <div className="flex items-center gap-1.5 text-white">
                          <span className="text-emerald-400 font-black">100</span> Best Practices
                        </div>
                        <span className="text-white/20">·</span>
                        <div className="flex items-center gap-1.5 text-white">
                          <span className="text-emerald-400 font-black">100</span> SEO
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Status Bar with Pure Liquid Glass Typography */}
                <div className="relative z-10 pt-2 flex items-center justify-between text-xs text-white/80 font-medium">
                  <span className="text-white flex items-center gap-2 drop-shadow-sm">
                    {activeIdx === 0 && (
                      <>
                        <FigmaIcon className="w-3.5 h-3.5" />
                        <span>Figma design tokens · Under 5 minutes intake</span>
                      </>
                    )}
                    {activeIdx === 1 && (
                      <>
                        <TailwindIcon className="w-3.5 h-3.5" />
                        <span>Next.js 15 SSR + Tailwind CSS · Zero WordPress plugins</span>
                      </>
                    )}
                    {activeIdx === 2 && (
                      <span>Tested on your pocket device · Direct team access</span>
                    )}
                    {activeIdx === 3 && (
                      <>
                        <GoogleIcon className="w-3.5 h-3.5" />
                        <span>Google Search Console verified · $0/mo hosting forever</span>
                      </>
                    )}
                  </span>
                  <span className="text-[#FF7A29] font-bold drop-shadow-sm">7-Day Delivery Sprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Reassurance Strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
        <div>
          <span className="text-white font-semibold">Average delivery: 5–7 business days</span>
        </div>
        <div>
          Direct communication with the designers &amp; developers building your site. No relay messengers.
        </div>
      </div>
    </section>
  );
}
