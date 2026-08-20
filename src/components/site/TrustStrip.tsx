const SECTORS = [
  "Homeowners",
  "Businesses",
  "Banks",
  "Industries",
  "Government",
];

export function TrustStrip() {
  return (
    <section
      aria-label="Sectors we serve"
      className="border-y border-hairline bg-background"
    >
      <div className="container-x py-6 md:py-7">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <div className="text-[10px] uppercase tracking-[0.32em] text-ink-muted whitespace-nowrap">
            Trusted across sectors
          </div>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 md:gap-x-12">
            {SECTORS.map((s) => (
              <li
                key={s}
                className="font-display text-[15px] md:text-[17px] tracking-[-0.005em] text-ink/85"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
