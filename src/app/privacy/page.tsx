import { StubPage } from "@/components/StubPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | Motion 8 Agency",
  description: "How Motion 8 Agency collects, uses and stores personal data.",
  path: "/privacy",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <StubPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: "/privacy" },
      ]}
      eyebrow="Legal"
      heading="Privacy policy."
      lede="How we collect, use and store personal data across this site and our engagements."
      body="This page needs its final wording from your counsel before launch — it is deliberately left unwritten rather than filled with boilerplate that may not match how Motion 8 actually handles data. It is set to noindex until then."
    />
  );
}
