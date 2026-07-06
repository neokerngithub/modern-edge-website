const PROCESSES = [
  {
    key: "construction",
    title: "Construction",
    kicker: "End-to-end delivery",
    steps: [
      "Consultation",
      "Site Analysis",
      "Concept Design",
      "Estimation",
      "Construction",
      "Finishing",
      "Handover",
    ],
    description:
      "A structured, client-centered execution — from a detailed consultation and site analysis, through refined concept design and transparent estimation, to precise construction, elegant finishing and a seamless handover.",
  },
  {
    key: "valuation",
    title: "Valuation",
    kicker: "Bank & institutional reporting",
    steps: [
      "Documents Collection",
      "Site Inspection",
      "Verification",
      "Preliminary Report",
      "Final Report",
    ],
    description:
      "Beginning with the assignment from the bank, we collect and verify ownership documents, conduct a thorough site inspection, and deliver a preliminary report followed by an accurate, transparent final valuation.",
  },
  {
    key: "interior",
    title: "Interior & Exterior",
    kicker: "Design to delivery, one roof",
    steps: [
      "3D Approval",
      "Drawings",
      "BOQ",
      "Site Survey",
      "Team Mobilization",
      "Execution",
      "Finishing",
      "Styling",
      "Handover",
    ],
    description:
      "After 3D approval, drawings and the BOQ are prepared in-house. A site survey verifies measurements before our own team executes civil, electrical, carpentry and finishing works — closed by styling, quality checks and handover.",
  },
];

export function ProcessTimelines() {
  return (
    <div className="space-y-16 md:space-y-24">
      {PROCESSES.map((p, i) => (
        <div key={p.key} className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-5xl text-primary">
                0{i + 1}
              </span>
              <div>
                <div className="eyebrow">{p.kicker}</div>
                <h3 className="mt-1 text-3xl md:text-4xl text-ink">{p.title}</h3>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink-muted">
              {p.description}
            </p>
          </div>

          <div className="lg:col-span-8">
            <ol className="relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-hairline" aria-hidden />
              {p.steps.map((step, idx) => (
                <li key={step} className="relative flex items-start gap-5 py-4">
                  <span
                    className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                      idx === 0
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-hairline bg-white text-ink-muted"
                    } text-[10px] font-semibold`}
                  >
                    {idx + 1}
                  </span>
                  <div className="flex-1 pt-0.5">
                    <div className="text-base md:text-lg text-ink">{step}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
}
