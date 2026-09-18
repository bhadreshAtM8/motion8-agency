"use client";

import { useRef, useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type Status = "idle" | "sending" | "sent" | "error";

const FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "budget", label: "Budget range", type: "text", autoComplete: "off" },
] as const;

export function ContactForm() {
  const root = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      gsap.set(el.querySelectorAll(".js-anim"), { visibility: "visible" });
      if (prefersReducedMotion()) return;

      el.querySelectorAll<HTMLElement>("[data-field]").forEach((field, i) => {
        gsap.from(field, {
          opacity: 0,
          y: 22,
          duration: 0.7,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });

        const input = field.querySelector<HTMLElement>("input, textarea");
        const rule = field.querySelector<HTMLElement>("[data-rule]");
        if (!input || !rule) return;
        input.addEventListener("focus", () =>
          gsap.to(rule, {
            scaleX: 1,
            duration: 0.6,
            ease: "power4.out",
            transformOrigin: "left center",
          }),
        );
        input.addEventListener("blur", () => {
          if ((input as HTMLInputElement).value) return;
          gsap.to(rule, {
            scaleX: 0,
            duration: 0.4,
            ease: "power3.inOut",
            transformOrigin: "right center",
          });
        });
      });
    },
    { scope: root },
  );

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setErrors({});

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        if (result.errors) setErrors(result.errors);
        setMessage(result.error ?? "Please check the highlighted fields.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      root.current?.reset();
    } catch {
      setMessage("Network error — please email hello@motion8agency.co instead.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-card border border-edge-rule bg-[rgba(240,233,223,.04)] p-8">
        <h3 className="text-[22px] text-white">Thanks — that reached us.</h3>
        <p className="m-0 mt-3 text-[14px] leading-[1.8] text-dark-muted">
          We reply within 24 hours, usually with a first read on what we would fix rather than a
          calendar link.
        </p>
      </div>
    );
  }

  return (
    <form ref={root} onSubmit={submit} noValidate className="max-w-[600px]">
      <div className="grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.name} data-field className="js-anim relative">
            <label htmlFor={field.name} className="sr-only">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              placeholder={field.label}
              aria-invalid={Boolean(errors[field.name])}
              className="w-full border-0 border-b-[1.5px] border-edge-rule bg-transparent py-3 text-[16px] text-white outline-none placeholder:text-dark-faint focus:ring-0 md:text-[14px]"
            />
            <span data-rule className="absolute bottom-0 left-0 h-[1.5px] w-full scale-x-0 bg-terracotta" />
            {errors[field.name] && (
              <span className="mt-2 block text-[12px] text-terracotta-light">
                {errors[field.name]}
              </span>
            )}
          </div>
        ))}

        <div data-field className="js-anim relative sm:col-span-2">
          <label htmlFor="message" className="sr-only">
            What do you need help with?
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="What do you need help with?"
            aria-invalid={Boolean(errors.message)}
            className="w-full resize-none border-0 border-b-[1.5px] border-edge-rule bg-transparent py-3 text-[16px] text-white outline-none placeholder:text-dark-faint focus:ring-0 md:text-[14px]"
          />
          <span data-rule className="absolute bottom-0 left-0 h-[1.5px] w-full scale-x-0 bg-terracotta" />
          {errors.message && (
            <span className="mt-2 block text-[12px] text-terracotta-light">{errors.message}</span>
          )}
        </div>
      </div>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <MagneticButton type="submit" variant="primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Start a Project"}
        </MagneticButton>
        {status === "error" && (
          <span role="alert" className="text-[13px] text-terracotta-light">
            {message}
          </span>
        )}
      </div>
    </form>
  );
}
