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
    <div className="grid gap-6 md:grid-cols-3">
      {ITEMS.map((t, i) => (
        <figure
          key={i}
          className="relative rounded-2xl border border-hairline bg-white p-8 card-lift"
        >
          <div
            aria-hidden
            className="font-display text-6xl leading-none text-primary/20 select-none"
          >
            &ldquo;
          </div>
          <blockquote className="mt-2 text-base leading-relaxed text-ink">
            {t.quote}
          </blockquote>
          <figcaption className="mt-8 pt-6 border-t border-hairline">
            <div className="text-sm font-medium text-ink">{t.name}</div>
            <div className="text-xs text-ink-muted mt-0.5">{t.org}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
