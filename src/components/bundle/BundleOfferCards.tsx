"use client";

import React from "react";
import { CountUp } from "@/components/reactbits/CountUp";

const PILLAR_1_DELIVERABLES = [
  {
    num: "01",
    name: "Custom site built on Next.js",
    desc: "Fast, modern architecture without template bloat or sluggish plugins.",
  },
  {
    num: "02",
    name: "UI design tailored to your business",
    desc: "Engineered specifically for your industry, target audience, and customers.",
  },
  {
    num: "03",
    name: "Free hosting, for life, no renewals",
    desc: "Backed by global edge CDN with zero maintenance fees. $0/month forever.",
  },
  {
    num: "04",
    name: "Free SSL certificate & domain routing",
    desc: "Bank-grade TLS encryption, automatic renewals, and trusted secure connection.",
  },
];

const PILLAR_2_DELIVERABLES = [
  {
    num: "05",
    name: "SEO setup",
    desc: "On-page technical optimization, semantic structure, and search crawlability.",
  },
  {
    num: "06",
    name: "AEO setup (voice & AI assistants)",
    desc: "Optimized for conversational Siri, Alexa, and Google Voice queries.",
  },
  {
    num: "07",
    name: "GEO setup (ChatGPT, Gemini, AI Overviews)",
    desc: "Structured data and knowledge schema for LLM indexing and citations.",
  },
  {
    num: "08",
    name: "Meta tags, titles & descriptions",
    desc: "Handcrafted search snippets customized for high organic click-through rates.",
  },
  {
    num: "09",
    name: "Open Graph tags & social cards",
    desc: "Stunning link preview cards across iMessage, WhatsApp, Slack, and socials.",
  },
  {
    num: "10",
    name: "Search Console + Google Analytics",
    desc: "Configured, connected, and verified day one for continuous tracking.",
  },
];

const PILLAR_3_DELIVERABLES = [
  {
    num: "11",
    name: "Custom logo design",
    desc: "Vector formats (SVG, PNG, PDF) prepared for digital, print, and physical signage.",
  },
  {
    num: "12",
    name: "Full brand guidelines",
    desc: "Clear usage rules for typography, minimum clear space, lockups, and marks.",
  },
  {
    num: "13",
    name: "Curated color palette",
    desc: "Hex codes, contrast ratios, and secondary accents calibrated for digital legibility.",
  },
  {
    num: "14",
    name: "Favicon & web app icon suite",
    desc: "Pixel-crisp icons for browser tabs, iOS home screen shortcuts, and bookmarks.",
  },
];

export function BundleOfferCards() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Section Header */}
      <div className="max-w-3xl mb-12 md:mb-16">
        <div className="flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[.18em] text-terracotta-light">
          <span className="block h-px w-8 bg-terracotta-light" />
          <span>The Offer · 14 Deliverables</span>
        </div>

        <h2 className="mt-4 text-[clamp(32px,5vw,56px)] font-extrabold tracking-[-0.035em] text-white leading-[1.05]">
          Here&apos;s exactly what{" "}
          <span className="text-terracotta-light">
            $<CountUp to={399} duration={1.5} />
          </span>{" "}
          gets you.
        </h2>

        <p className="mt-4 text-[16px] md:text-[18px] text-dark-muted leading-relaxed">
          All of it. No upsells hiding in the fine print — 14 deliverables most agencies sell
          separately, bundled into one flat price.
        </p>
      </div>

      {/* 3 Standalone Liquid Glass Pillar Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        
        {/* ========================================================
            PILLAR 01: CORE PLATFORM
           ======================================================== */}
        <div className="liquid-glass-card rounded-[32px] sm:rounded-[36px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
          <div>
            {/* Symmetrical Header */}
            <div className="border-b border-white/10 pb-5">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-lg bg-[#F95721]/20 border border-[#F95721]/30 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#FF7A29]">
                  Core Platform
                </span>
                <span className="rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-300">
                  4 Deliverables
                </span>
              </div>

              <h3 className="mt-3 text-xl sm:text-2xl font-black text-white tracking-tight h-8 sm:h-9 flex items-center">
                Your Website
              </h3>

              <div className="mt-1 text-xs font-semibold text-[#FF7A29] tracking-wide min-h-[36px] sm:min-h-[22px] flex items-center">
                Fast Next.js architecture · Zero recurring fees
              </div>
            </div>

            {/* What you get on day one */}
            <div className="space-y-4 pt-5">
              <div className="text-xs font-black uppercase tracking-wider text-neutral-400">
                What you get on day one:
              </div>
              <div className="space-y-3.5">
                {PILLAR_1_DELIVERABLES.map((item) => (
                  <div key={item.num} className="flex items-start gap-2.5 py-0.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#F95721]/15 text-[#FF7A29] font-mono text-[10px] font-black mt-0.5 border border-[#F95721]/30">
                      {item.num}
                    </span>
                    <div>
                      <div className="text-[13.5px] font-bold text-white leading-snug">
                        {item.name}
                      </div>
                      <div className="text-[12px] text-neutral-400 mt-0.5 leading-normal">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            {/* Lifetime Hosting Guaranteed Box */}
            <div className="rounded-2xl liquid-glass-inner p-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-white">Lifetime Hosting Guaranteed</span>
                <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 font-bold text-emerald-400 border border-emerald-500/30">
                  $0/mo
                </span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">
                Fast global CDN · Free SSL certificate
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            PILLAR 02: SEARCH & AI VISIBILITY (FEATURED)
           ======================================================== */}
        <div className="liquid-glass-card rounded-[32px] sm:rounded-[36px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative border-[#F95721]/40 shadow-[0_20px_50px_-10px_rgba(249,87,33,0.3)]">
          {/* Top Featured Pill */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-gradient-to-r from-[#F95721] to-[#FF7A29] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-lg shadow-[#F95721]/40">
              Most Crucial for 2026
            </span>
          </div>

          <div>
            {/* Symmetrical Header */}
            <div className="border-b border-white/10 pb-5">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-lg bg-[#F95721]/20 border border-[#F95721]/30 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#FF7A29]">
                  Search &amp; AI
                </span>
                <span className="rounded-full bg-[#F95721]/20 border border-[#F95721]/30 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#FF7A29]">
                  6 Deliverables
                </span>
              </div>

              <h3 className="mt-3 text-xl sm:text-2xl font-black text-white tracking-tight h-8 sm:h-9 flex items-center">
                Get Found Online
              </h3>

              <div className="mt-1 text-xs font-semibold text-[#FF7A29] tracking-wide min-h-[36px] sm:min-h-[22px] flex items-center">
                Google SEO + ChatGPT, Gemini &amp; Voice assistants
              </div>
            </div>

            {/* What you get on day one */}
            <div className="space-y-4 pt-5">
              <div className="text-xs font-black uppercase tracking-wider text-neutral-400">
                What you get on day one:
              </div>
              <div className="space-y-3">
                {PILLAR_2_DELIVERABLES.map((item) => (
                  <div key={item.num} className="flex items-start gap-2.5 py-0.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#F95721]/15 text-[#FF7A29] font-mono text-[10px] font-black mt-0.5 border border-[#F95721]/30">
                      {item.num}
                    </span>
                    <div>
                      <div className="text-[13.5px] font-bold text-white leading-snug">
                        {item.name}
                      </div>
                      <div className="text-[12px] text-neutral-400 mt-0.5 leading-normal">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            {/* Inner Box */}
            <div className="rounded-2xl liquid-glass-inner p-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-white">Search Console &amp; GA4 Setup</span>
                <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 font-bold text-emerald-400 border border-emerald-500/30">
                  Turnkey
                </span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">
                Connected, verified &amp; indexing on day one
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            PILLAR 03: IDENTITY & ASSETS
           ======================================================== */}
        <div className="liquid-glass-card rounded-[32px] sm:rounded-[36px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
          <div>
            {/* Symmetrical Header */}
            <div className="border-b border-white/10 pb-5">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-lg bg-[#F95721]/20 border border-[#F95721]/30 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#FF7A29]">
                  Brand Identity
                </span>
                <span className="rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-300">
                  4 Deliverables
                </span>
              </div>

              <h3 className="mt-3 text-xl sm:text-2xl font-black text-white tracking-tight h-8 sm:h-9 flex items-center">
                Your Brand Identity
              </h3>

              <div className="mt-1 text-xs font-semibold text-[#FF7A29] tracking-wide min-h-[36px] sm:min-h-[22px] flex items-center">
                Cohesive visual identity · Production-ready vector kit
              </div>
            </div>

            {/* What you get on day one */}
            <div className="space-y-4 pt-5">
              <div className="text-xs font-black uppercase tracking-wider text-neutral-400">
                What you get on day one:
              </div>
              <div className="space-y-3.5">
                {PILLAR_3_DELIVERABLES.map((item) => (
                  <div key={item.num} className="flex items-start gap-2.5 py-0.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#F95721]/15 text-[#FF7A29] font-mono text-[10px] font-black mt-0.5 border border-[#F95721]/30">
                      {item.num}
                    </span>
                    <div>
                      <div className="text-[13.5px] font-bold text-white leading-snug">
                        {item.name}
                      </div>
                      <div className="text-[12px] text-neutral-400 mt-0.5 leading-normal">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            {/* Inner Box */}
            <div className="rounded-2xl liquid-glass-inner p-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-white">100% Vector Rights Included</span>
                <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 font-bold text-emerald-400 border border-emerald-500/30">
                  Full Rights
                </span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">
                SVG, PNG, PDF source files for web &amp; print
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Comparison Callout Bar */}
      <div className="mt-10 liquid-glass-card rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h4 className="text-lg md:text-xl font-extrabold text-white tracking-tight">
            For comparison: a typical agency charges $3,000–$5,000+ for these 14 deliverables separately.
          </h4>
          <p className="mt-1.5 text-sm text-neutral-300">
            You get all of them, once, for $399 — no subscription, zero recurring fees.
          </p>
        </div>
        <a
          href="#intake-form"
          className="group liquid-glass-btn-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-7 py-4 text-sm font-extrabold text-white uppercase tracking-wider whitespace-nowrap"
        >
          <span>Claim These 14 Deliverables</span>
          <svg className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H9M17 7V15" />
          </svg>
        </a>
      </div>
    </div>
  );
}
