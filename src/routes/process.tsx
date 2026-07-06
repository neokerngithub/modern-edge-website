import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ProcessTimelines } from "@/components/site/ProcessTimelines";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Our Process — Modern Edge Architects & Engineers" },
      {
        name: "description",
        content:
          "Three structured workflows — Construction, Valuation and Interior & Exterior — designed for precision, transparency and disciplined delivery.",
      },
      { property: "og:title", content: "Our Process — Modern Edge" },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
});

function ProcessPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 border-b border-hairline">
        <div className="container-x max-w-4xl">
          <div className="eyebrow">Our process</div>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em] text-ink">
            Three workflows.
            <span className="block text-ink-muted italic font-normal">
              One standard of excellence.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Every engagement follows a structured, client-centered workflow — designed for
            transparency, precision and disciplined delivery from consultation to handover.
          </p>
        </div>
      </section>

      <Section className="pt-24">
        <ProcessTimelines />
      </Section>
    </>
  );
}
