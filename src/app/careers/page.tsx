import { StubPage } from "@/components/StubPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers | Motion 8 Agency",
  description: "Open roles across engineering, design, marketing and AI at Motion 8.",
  path: "/careers",
  noindex: true,
});

export default function CareersPage() {
  return (
    <StubPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Careers", path: "/careers" },
      ]}
      eyebrow="Careers"
      heading="Operators, not seat-fillers."
      lede="We hire people who want to own an outcome rather than a ticket queue, across India, the USA and the UAE."
      body="No roles are posted right now. If you'd back yourself on any of the three pillars anyway, email hello@motion8agency.co with what you'd want to own."
    />
  );
}
