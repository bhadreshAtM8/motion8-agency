"use client";

import React, { useState } from "react";
import { trackLead } from "@/lib/track";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function BundleContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setErrors({});
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      socialOrWebsite: formData.get("socialOrWebsite") as string,
      message: formData.get("message") as string,
      budget: "$399 Bundle",
      website: (formData.get("website") as string) || undefined, // Honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setErrorMessage(data.error || "Please double-check the form details.");
        setStatus("error");
        return;
      }

      if (!data.spam) trackLead("local_business_bundle", { value: 399, currency: "USD" });
      setStatus("sent");
      form.reset();
    } catch {
      setErrorMessage("Network error. Please reach out directly at hello@motion8agency.co");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="liquid-glass-card rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 text-center max-w-xl mx-auto">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F95721]/20 border border-[#F95721]/30 text-[#FF7A29] mb-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-extrabold text-white">We got it.</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-300">
          Thanks for sliding in. We review every brief personally — expect a real reply with our honest take within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="liquid-glass-card rounded-[32px] sm:rounded-[36px] p-7 sm:p-10 max-w-2xl mx-auto w-full">
      <form onSubmit={handleSubmit} noValidate className="w-full">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name */}
          <div className="relative">
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
              Name <span className="text-[#FF7A29]">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className={`w-full rounded-xl bg-white/[0.04] border px-4 py-3.5 text-white placeholder-neutral-500 outline-none transition-all duration-200 focus:border-[#F95721] focus:bg-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] ${
                errors.name ? "border-[#F95721]" : "border-white/15"
              }`}
            />
            {errors.name && <p className="mt-1.5 text-xs text-[#FF7A29]">{errors.name}</p>}
          </div>

          {/* Business Name */}
          <div className="relative">
            <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
              Business Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Your business or brand"
              className="w-full rounded-xl bg-white/[0.04] border border-white/15 px-4 py-3.5 text-white placeholder-neutral-500 outline-none transition-all duration-200 focus:border-[#F95721] focus:bg-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
              Email <span className="text-[#FF7A29]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className={`w-full rounded-xl bg-white/[0.04] border px-4 py-3.5 text-white placeholder-neutral-500 outline-none transition-all duration-200 focus:border-[#F95721] focus:bg-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] ${
                errors.email ? "border-[#F95721]" : "border-white/15"
              }`}
            />
            {errors.email && <p className="mt-1.5 text-xs text-[#FF7A29]">{errors.email}</p>}
          </div>

          {/* Instagram or website */}
          <div className="relative">
            <label htmlFor="socialOrWebsite" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
              Instagram or website
            </label>
            <input
              id="socialOrWebsite"
              name="socialOrWebsite"
              type="text"
              placeholder="@yourbrand or brand.com"
              className="w-full rounded-xl bg-white/[0.04] border border-white/15 px-4 py-3.5 text-white placeholder-neutral-500 outline-none transition-all duration-200 focus:border-[#F95721] focus:bg-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
            />
          </div>

          {/* What's the goal? */}
          <div className="relative sm:col-span-2">
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
              What&apos;s the goal? <span className="text-[#FF7A29]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell us what's not working, what you want to achieve, or what personality your brand is missing..."
              className={`w-full resize-none rounded-xl bg-white/[0.04] border px-4 py-3.5 text-white placeholder-neutral-500 outline-none transition-all duration-200 focus:border-[#F95721] focus:bg-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] ${
                errors.message ? "border-[#F95721]" : "border-white/15"
              }`}
            />
            {errors.message && <p className="mt-1.5 text-xs text-[#FF7A29]">{errors.message}</p>}
          </div>
        </div>

        {/* Honeypot field */}
        <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Submit Button + Micro-line */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center">
          <button
            type="submit"
            disabled={status === "sending"}
            className="group liquid-glass-btn-primary inline-flex items-center justify-center gap-2.5 rounded-2xl px-10 py-4 text-base font-extrabold text-white uppercase tracking-wider disabled:opacity-50"
          >
            <span>{status === "sending" ? "Sending..." : "Send It"}</span>
            {status !== "sending" && (
              <svg className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            )}
          </button>

          <p className="text-xs font-semibold tracking-wide text-neutral-400">
            Real replies within 24-48 hrs.
          </p>

          {status === "error" && (
            <p role="alert" className="text-sm font-medium text-[#FF7A29] mt-2">
              {errorMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
