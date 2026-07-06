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
    kicker: "Bank & institutional reporting",
    steps: ["Documents Collection","Site Inspection","Verification","Preliminary Report","Final Report"],
    description:
      "Beginning with the assignment from the bank, we collect and verify ownership documents, conduct a thorough site inspection, and deliver a preliminary report followed by an accurate, transparent final valuation.",
  },
  {
    key: "interior",
    title: "Interior & Exterior",
    kicker: "Design to delivery, one roof",
    steps: ["3D Approval","Drawings","BOQ","Site Survey","Team Mobilization","Execution","Finishing","Styling","Handover"],
    description:
      "After 3D approval, drawings and the BOQ are prepared in-house. A site survey verifies measurements before our own team executes civil, electrical, carpentry and finishing works — closed by styling, quality checks and handover.",
  },
];

export function ProcessTimelines() {
  return (
    <div className="space-y-24 md:space-y-32">
      {PROCESSES.map((p, i) => (
        <div
          key={p.key}
          className="grid gap-12 lg:grid-cols-12 lg:gap-20 items-start border-t border-hairline pt-14"
        >
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-6">
              <span className="font-display font-light text-7xl md:text-8xl text-ink leading-none tracking-[-0.04em]">
                0{i + 1}
              </span>
              <div className="pb-1">
                <div className="eyebrow">{p.kicker}</div>
                <h3 className="mt-2 font-display text-3xl md:text-4xl text-ink tracking-[-0.02em]">
                  {p.title}
                </h3>
              </div>
            </div>
            <p className="mt-8 max-w-md text-[15px] leading-[1.75] text-ink-muted">
              {p.description}
            </p>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative divide-y divide-hairline">
              {p.steps.map((step, idx) => (
                <li
                  key={step}
                  className="group flex items-baseline gap-8 py-5 transition-colors hover:text-primary"
                >
                  <span className="font-display text-xs text-ink-muted tabular-nums tracking-[0.14em] w-8">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-lg md:text-xl text-ink tracking-[-0.01em] group-hover:text-primary transition-colors">
                    {step}
                  </span>
                  <span
                    aria-hidden
                    className="hidden md:block h-px w-0 bg-primary transition-all duration-500 group-hover:w-16"
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
}
