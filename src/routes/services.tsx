import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { ProcessTimelines } from "@/components/site/ProcessTimelines";
import { PageHeader } from "@/components/site/PageHeader";

const SERVICES_TITLE =
  "Services — Architecture, Engineering, Construction & Valuation | Nepal";
const SERVICES_DESC =
  "Nine core services under one roof: property valuation, construction, architecture, civil engineering, municipal drawings, DPR, interiors, landscape and real estate consultancy — across Nepal.";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: SERVICES_TITLE },
      { name: "description", content: SERVICES_DESC },
      { property: "og:title", content: SERVICES_TITLE },
      { property: "og:description", content: SERVICES_DESC },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: SERVICES_TITLE },
      { name: "twitter:description", content: SERVICES_DESC },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        index="02 / Services"
        breadcrumb="Services"
        eyebrow="What we do"
        title={
          <>
            Nine core disciplines.
            <span className="block text-ink-muted italic font-normal">
              Two signature practices.
            </span>
          </>
        }
        intro="From concept design and municipal approval through structural works, finishing and handover — Our multidisciplinary team brings these services together under one professional practice. Construction Services and Property Valuation anchor the practice."
        meta={
          <div className="text-[11px] uppercase tracking-[0.24em] text-ink-muted space-y-2">
            <div>Residential · Commercial</div>
            <div>Industrial · Institutional</div>
            <div className="text-primary">Nepal-wide</div>
          </div>
        }
      />

      <Section className="pt-20 md:pt-28">
        <ServicesGrid />
      </Section>

      <Section
        className="bg-surface"
        index="03 / Process"
        eyebrow="How we deliver"
        title="Structured workflows for every engagement."
        intro="Three transparent processes tailored to construction, valuation and interior & exterior work — designed for predictable delivery."
      >
        <ProcessTimelines />
      </Section>
    </>
  );
}
