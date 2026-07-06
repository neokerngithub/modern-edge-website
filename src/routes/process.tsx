import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ProcessTimelines } from "@/components/site/ProcessTimelines";
import { PageHeader } from "@/components/site/PageHeader";

const PROCESS_TITLE = "Our Process — How Modern Edge Delivers | Nepal";
const PROCESS_DESC =
  "Three structured workflows — Construction, Valuation and Interior & Exterior — designed for transparency, precision and disciplined delivery from consultation to handover.";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: PROCESS_TITLE },
      { name: "description", content: PROCESS_DESC },
      { property: "og:title", content: PROCESS_TITLE },
      { property: "og:description", content: PROCESS_DESC },
      { property: "og:url", content: "/process" },
      { name: "twitter:title", content: PROCESS_TITLE },
      { name: "twitter:description", content: PROCESS_DESC },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
});

function ProcessPage() {
  return (
    <>
      <PageHeader
        index="03 / Process"
        breadcrumb="Process"
        eyebrow="How we work"
        title={
          <>
            Three workflows.
            <span className="block text-ink-muted italic font-normal">
              One standard of excellence.
            </span>
          </>
        }
        intro="Every engagement follows a structured, client-centered workflow — designed for transparency, precision and disciplined delivery from consultation to handover."
        meta={
          <div className="text-[11px] uppercase tracking-[0.24em] text-ink-muted space-y-2">
            <div>Consultation</div>
            <div>Delivery</div>
            <div className="text-primary">Handover</div>
          </div>
        }
      />

      <Section className="pt-20 md:pt-28">
        <ProcessTimelines />
      </Section>
    </>
  );
}
