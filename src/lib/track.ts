/* GA4 conversion helper. Safe to call when gtag hasn't loaded (ad blockers, SSR). */
type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

export function trackLead(formId: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", "generate_lead", { form_id: formId, ...params });
}
