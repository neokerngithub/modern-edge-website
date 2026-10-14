import { useState } from "react";
import { StaggerReveal } from "./Reveal";

const PROCESSES = [
  {
    key: "construction",
    title: "Construction",
    kicker: "End-to-end delivery",
    steps: ["Consultation","Site Analysis","Concept Design","Estimation","Construction","Finishing","Handover"],
    description:
      "A structured, client-centered execution — from a detailed consultation and site analysis, through refined concept design and transparent estimation, to precise construction, elegant finishing and a seamless handover.",
  },
  {
    key: "valuation",
    title: "Valuation",
    kicker: "Institutional-standard reporting",
    steps: ["Documents Collection","Site Inspection","Verification","Preliminary Report","Final Report"],
    description:
      "Beginning with the valuation assignment, we collect and verify ownership documents, conduct a thorough site inspection, and deliver a preliminary report followed by an accurate, transparent final valuation.",
  },
  {
    key: "interior",
    title: "Interior & Exterior",
    kicker: "Design to delivery, one roof",
    steps: ["3D Approval","Drawings","BOQ","Site Survey","Team Mobilization","Execution","Finishing","Styling","Handover"],
    description:
      "After 3D approval, drawings and the BOQ are prepared. A site survey verifies measurements before our project team coordinates civil, electrical, carpentry and finishing works — closed by styling, quality checks and handover.",
  },
];

export function ProcessTimelines() {
  const [activeStep, setActiveStep] = useState<{ workflow: string; index: number } | null>(null);

  return (
    <StaggerReveal className="space-y-12 md:space-y-14">
      {PROCESSES.map((p, i) => (
        <div
          key={p.key}
          className="border-t border-hairline pt-8"
        >
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

          <div className="mt-7 min-w-0">
            <ol
              className={`grid grid-cols-2 gap-x-6 gap-y-2 ${p.steps.length === 5 ? "md:grid-cols-3" : p.steps.length === 7 ? "md:grid-cols-4" : "md:grid-cols-5"}`}
              onMouseLeave={() => setActiveStep(null)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setActiveStep(null);
              }}
            >
              {p.steps.map((step, idx) => (
                <li
                  key={step}
                  className="group min-w-0 py-3 outline-none"
                  tabIndex={0}
                  onMouseEnter={() => setActiveStep({ workflow: p.key, index: idx })}
                  onFocus={() => setActiveStep({ workflow: p.key, index: idx })}
                >
                  <div className="flex h-5 items-center gap-3">
                    <span className="shrink-0 font-display text-xs text-ink-muted tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {idx < p.steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className={`relative -mr-6 h-px flex-1 overflow-hidden bg-hairline ${idx % 2 === 1 ? "hidden" : "block"} ${idx % Math.ceil(p.steps.length / 2) === Math.ceil(p.steps.length / 2) - 1 ? "md:hidden" : "md:block"}`}
                      >
                        <span className={`absolute inset-0 origin-left bg-primary transition-transform duration-500 ease-out motion-reduce:transition-none ${activeStep?.workflow === p.key && idx <= activeStep.index ? "scale-x-100" : "scale-x-0"}`} />
                      </span>
                    )}
                  </div>
                  <span className="mt-3 block min-h-12 pr-2 font-display text-base leading-normal text-ink transition-colors duration-500 group-hover:text-primary group-focus:text-primary motion-reduce:transition-none">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </StaggerReveal>
  );
}
