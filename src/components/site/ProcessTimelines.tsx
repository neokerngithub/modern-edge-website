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
            <ol className={`grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 ${p.steps.length === 5 ? "lg:grid-cols-5" : p.steps.length === 7 ? "lg:grid-cols-7" : "lg:grid-cols-9"}`}>
              {p.steps.map((step, idx) => (
                <li
                  key={step}
                  className="group min-w-0"
                >
                  <div className="flex h-5 items-center gap-3">
                    <span className="shrink-0 font-display text-xs text-ink-muted tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {idx < p.steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className={`relative -mr-4 h-px flex-1 bg-hairline ${idx % 2 === 1 ? "hidden" : "block"} ${idx % 3 === 2 ? "sm:hidden" : "sm:block"} lg:block`}
                      >
                        <span className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-x-100 motion-reduce:transition-none" />
                      </span>
                    )}
                  </div>
                  <span className="mt-2 block font-display text-base leading-snug text-ink transition-colors duration-500 group-hover:text-primary motion-reduce:transition-none">
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
