import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ServicesGrid } from "@/components/site/ServicesGrid";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Modern Edge Architects & Engineers" },
      {
        name: "description",
        content:
          "Architecture, civil engineering, property valuation, construction, interior & landscape design, municipal drawings, DPR, real estate consultancy and CAD training.",
      },
      { property: "og:title", content: "Services — Modern Edge" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 border-b border-hairline">
        <div className="container-x max-w-4xl">
          <div className="eyebrow">Our services</div>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em] text-ink">
            Ten disciplines.
            <span className="block text-ink-muted italic font-normal">
              One accountable team.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">
            From concept design and municipal approval through construction, finishing and
            handover — every service is delivered in-house, with property valuation as our
            signature institutional practice.
          </p>
        </div>
      </section>

      <Section className="pt-24">
        <ServicesGrid />
      </Section>
    </>
  );
}
