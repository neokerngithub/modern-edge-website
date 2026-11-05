import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { ProcessSteps } from "@/components/site/ProcessTimelines";

const TITLE = "Interior, Exterior & Landscape Design | Modern Edge";
const DESC =
  "Interior, exterior and landscape design with 3D visualisation, drawings, BOQ, coordinated site execution, planting, styling and handover in Nepal.";
const URL = "https://modernedge.com.np/services/interior-exterior-landscape";

export const Route = createFileRoute("/services_/interior-exterior-landscape")({
  component: Page,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});

const SCOPE = ["Residential interiors", "Commercial interiors", "Façade & exterior design", "Gardens & courtyards", "Hardscape & softscape", "Outdoor lighting"];

function Page() {
  return (
    <>
      <PageHeader
        index="07 / Services"
        breadcrumb="Interior, Exterior & Landscape"
        eyebrow="Design Practice · 07"
        title={
          <>
            Interior, Exterior & Landscape.
            <span className="block text-ink-muted italic font-normal">Designed and delivered under one roof.</span>
          </>
        }
        intro="Coordinated interior, façade and landscape design — visualised in 3D, documented precisely, and delivered by one accountable project team."
        meta={
          <div className="text-[11px] uppercase tracking-[0.24em] text-ink-muted space-y-2">
            <div>Interior</div>
            <div>Exterior</div>
            <div className="text-primary">Landscape</div>
          </div>
        }
      />

      <Section id="process" className="pt-10 md:pt-14" eyebrow="Design & landscape process" title="Eleven steps from 3D approval to handover.">
        <ProcessSteps process="interior" />
      </Section>

      <Section className="bg-surface" eyebrow="Scope" title="What we design">
        <ul className="flex flex-wrap gap-2.5">
          {SCOPE.map((s) => (
            <li key={s} className="text-sm rounded-full border border-hairline bg-card px-4 py-2 text-ink/80">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            to="/contact"
            className="interactive-press inline-flex items-center gap-3 rounded-full bg-primary pl-6 pr-2 py-2 text-[13px] font-medium text-primary-foreground hover:bg-primary/90"
          >
            Request Consultation
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground text-primary">
              <ArrowUpRight size={15} aria-hidden />
            </span>
          </Link>
        </div>
      </Section>
    </>
  );
}
