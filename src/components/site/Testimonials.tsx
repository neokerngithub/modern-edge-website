const ITEMS = [
  {
    quote:
      "Modern Edge delivered our valuation report with exceptional accuracy and clarity. Their documentation stood up to institutional scrutiny without a single revision.",
    name: "Branch Manager",
    org: "Regional Bank, Sunsari",
  },
  {
    quote:
      "From concept to handover, the team maintained absolute discipline on cost, quality and timeline. Rare in this industry.",
    name: "Residential Client",
    org: "Biratnagar",
  },
  {
    quote:
      "Their drawings sailed through municipal approval. Precision and professionalism defined every interaction.",
    name: "Commercial Developer",
    org: "Morang",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-px bg-hairline border border-hairline rounded-[20px] overflow-hidden md:grid-cols-3">
      {ITEMS.map((t, i) => (
        <figure
          key={i}
          className="relative bg-white p-10 md:p-12 flex flex-col"
        >
          <div className="flex items-center gap-3 text-primary">
            <span className="font-display text-xs tabular-nums tracking-[0.14em]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span aria-hidden className="h-px w-8 bg-primary/50" />
          </div>
          <blockquote className="mt-6 font-display text-lg md:text-xl leading-[1.5] tracking-[-0.01em] text-ink">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-auto pt-10">
            <div className="text-[13px] font-medium text-ink">{t.name}</div>
            <div className="text-xs text-ink-muted mt-1">{t.org}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
