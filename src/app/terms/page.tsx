import { StubPage } from "@/components/StubPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions | Motion 8 Agency",
  description: "The terms governing use of the Motion 8 Agency website and services.",
  path: "/terms",
  noindex: true,
});

export default function TermsPage() {
  return (
    <StubPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Terms & Conditions", path: "/terms" },
      ]}
      eyebrow="Legal"
      heading="Terms & conditions."
      lede="The terms governing use of this site and the services described on it."
      body="This page needs its final wording from your counsel before launch — it is deliberately left unwritten rather than filled with boilerplate. It is set to noindex until then."
    />
  );
}
