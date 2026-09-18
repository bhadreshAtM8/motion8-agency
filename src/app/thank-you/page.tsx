import { StubPage } from "@/components/StubPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Thank you | Motion 8 Agency",
  description: "Your message reached the Motion 8 team.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <StubPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Thank you", path: "/thank-you" },
      ]}
      eyebrow="Received"
      heading="That reached us."
      lede="We reply within 24 hours, usually with a first read on what we would fix rather than a calendar link."
      body="In the meantime, the three pillar pages cover what we run and how engagements usually start."
    />
  );
}
