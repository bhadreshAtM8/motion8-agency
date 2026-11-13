"use client";

import Image from "next/image";
import Link from "next/link";

export function BundleNav() {

  return (
    <header className="fixed inset-x-0 top-0 z-[200] border-b border-edge-nav bg-[rgba(27,19,13,.94)] backdrop-blur-md transition-colors py-4">
      <div className="gutter mx-auto max-w-6xl flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white transition-opacity hover:opacity-90"
        >
          <Image
            src="/brand/icon.png"
            alt="Motion 8 Logo"
            width={32}
            height={32}
            className="h-7 w-7"
          />
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight leading-none text-white">
              MOTION8
            </span>
            <span className="text-[10px] font-bold tracking-widest text-terracotta-light uppercase leading-tight">
              Agency
            </span>
          </div>
        </Link>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* CTA */}
          <a
            href="#intake-form"
            className="group liquid-glass-btn-primary inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-extrabold text-white transition-all"
          >
            <span>Get $399 Bundle</span>
            <svg className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H9M17 7V15" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
