import { graph } from "@/lib/seo";

export function JsonLd({ schemas }: { schemas: Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: graph(schemas) }}
    />
  );
}
