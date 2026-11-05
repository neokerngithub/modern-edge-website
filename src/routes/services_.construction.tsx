import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { ProcessSteps } from "@/components/site/ProcessTimelines";

const TITLE = "Construction Services — End-to-End Delivery | Modern Edge";
const DESC =
  "Turnkey construction in Koshi Province, Nepal — consultation, site analysis, design, transparent estimation, quality-controlled execution, finishing and handover.";
const URL = "https://modernedge.com.np/services/construction";

export const Route = createFileRoute("/services_/construction")({
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

const SCOPE = ["Residential buildings", "Commercial buildings", "Institutional projects", "Renovation & extension", "Structural works", "Finishing works"];

function Page() {
  return (
    <>
      <PageHeader
        index="01 / Services"
        breadcrumb="Construction Services"
        eyebrow="Signature Practice · 01"
        title={
          <>
            Construction Services.
            <span className="block text-ink-muted italic font-normal">Built with engineering discipline.</span>
          </>
        }
        intro="Structured, client-centered construction delivery — from the first consultation and site analysis to precise execution, refined finishing and a clean handover."
        meta={
          <div className="text-[11px] uppercase tracking-[0.24em] text-ink-muted space-y-2">
            <div>Consultation</div>
            <div>Execution</div>
            <div className="text-primary">Handover</div>
          </div>
        }
      />

      <Section id="process" className="pt-10 md:pt-14" eyebrow="Construction process" title="Seven steps from brief to handover.">
        <ProcessSteps process="construction" />
      </Section>

      <Section className="bg-surface" eyebrow="Scope" title="What we build">
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
