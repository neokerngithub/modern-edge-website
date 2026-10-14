import { StaggerReveal } from "./Reveal";

type Step = { title: string; description: string };

const PROCESSES: {
  key: string;
  title: string;
  kicker: string;
  description: string;
  steps: Step[];
}[] = [
  {
    key: "construction",
    title: "Construction",
    kicker: "End-to-end delivery",
    description:
      "A structured, client-centered execution — from a detailed consultation and site analysis, through refined concept design and transparent estimation, to precise construction, elegant finishing and a seamless handover.",
    steps: [
      {
        title: "Consultation",
        description:
          "Objectives, site context, budget and timeline are understood and defined together.",
      },
      {
        title: "Site Analysis",
        description:
          "Topography, orientation, access, services and physical constraints are assessed on site.",
      },
      {
        title: "Concept Design",
        description:
          "Design options are drawn and tested against your brief, bylaws and budget.",
      },
      {
        title: "Estimation",
        description:
          "Transparent quantity and cost estimates are prepared before any work begins.",
      },
      {
        title: "Construction",
        description:
          "Structured execution with quality control, safety discipline and scheduled progress updates.",
      },
      {
        title: "Finishing",
        description:
          "Materials, surfaces and detailing are brought to a refined, durable standard.",
      },
      {
        title: "Handover",
        description:
          "Final checks, documentation and a clean, ready-to-use handover of the completed space.",
      },
    ],
  },
  {
    key: "valuation",
    title: "Valuation",
    kicker: "Institutional-standard reporting",
    description:
      "Beginning with the valuation assignment, we collect and verify ownership documents, conduct a thorough site inspection, and deliver a preliminary report followed by an accurate, transparent final valuation.",
    steps: [
      {
        title: "Documents Collection",
        description:
          "Ownership, title and supporting records are gathered and reviewed at the outset.",
      },
      {
        title: "Site Inspection",
        description:
          "The property is examined for condition, use, access and locational factors.",
      },
      {
        title: "Verification",
        description:
          "Documentary and physical findings are cross-checked against market evidence.",
      },
      {
        title: "Preliminary Report",
        description:
          "An indicative assessment is shared for early discussion and informed review.",
      },
      {
        title: "Final Report",
        description:
          "A clear, defensible valuation issued in bank-ready professional documentation.",
      },
    ],
  },
  {
    key: "interior",
    title: "Interior & Exterior",
    kicker: "Design to delivery, one roof",
    description:
      "After 3D approval, drawings and the BOQ are prepared. A site survey verifies measurements before our project team coordinates civil, electrical, carpentry and finishing works — closed by styling, quality checks and handover.",
    steps: [
      {
        title: "3D Approval",
        description:
          "Design direction is confirmed visually before anything moves into delivery.",
      },
      {
        title: "Drawings",
        description:
          "Detailed working drawings translate the approved design into buildable instruction.",
      },
      {
        title: "BOQ",
        description:
          "A bill of quantities sets materials, scope and cost out transparently.",
      },
      {
        title: "Site Survey",
        description:
          "On-site measurements verify the drawings against the real space.",
      },
      {
        title: "Team Mobilization",
        description:
          "Civil, electrical, carpentry and finishing trades are scheduled and coordinated.",
      },
      {
        title: "Execution",
        description:
          "Works proceed under supervision with continuous progress and quality tracking.",
      },
      {
        title: "Finishing",
        description:
          "Surfaces, fixtures and detailing are completed precisely to specification.",
      },
      {
        title: "Styling",
        description:
          "Furnishing, lighting and styling complete the intended character of the space.",
      },
      {
        title: "Handover",
        description:
          "Final quality checks, snag closure and a ready-to-use handover.",
      },
    ],
  },
];

export function ProcessTimelines() {
  return (
    <StaggerReveal className="space-y-12 md:space-y-14">
      {PROCESSES.map((p, i) => (
        <div key={p.key} className="border-t border-hairline pt-8">
          <div className="grid items-start gap-5 lg:grid-cols-12 lg:gap-8">
            <div className="flex min-w-0 items-baseline gap-4 lg:col-span-5">
              <span className="shrink-0 font-display font-light text-5xl md:text-6xl text-ink leading-none">
                0{i + 1}
              </span>
              <div className="min-w-0 pb-1">
                <div className="eyebrow">{p.kicker}</div>
                <h3 className="mt-2 font-display text-3xl md:text-4xl text-ink tracking-[-0.02em]">
                  {p.title}
                </h3>
              </div>
            </div>
            <p className="max-w-prose text-[15px] leading-[1.75] text-ink-muted lg:col-span-7">
              {p.description}
            </p>
          </div>

          <ol className="mt-9 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {p.steps.map((step, idx) => (
              <li
                key={step.title}
                className="group flex min-w-0 flex-col rounded-[16px] border border-hairline bg-card p-6 md:p-7 transition-colors duration-500 hover:border-primary/50 motion-reduce:transition-none"
              >
                <span className="font-display text-sm font-semibold tabular-nums tracking-[0.18em] text-primary">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-5 font-display text-lg md:text-xl font-medium leading-snug tracking-[-0.01em] text-ink">
                  {step.title}
                </h4>
                <p className="mt-2.5 text-[13.5px] leading-[1.7] text-ink-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </StaggerReveal>
  );
}
