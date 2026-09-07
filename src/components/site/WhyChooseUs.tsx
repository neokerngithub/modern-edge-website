import {
  ShieldCheck,
  Landmark,
  Layers,
  Handshake,
  Gauge,
  Sparkles,
} from "lucide-react";
import { StaggerReveal } from "./Reveal";

const REASONS = [
  { icon: Landmark, title: "Experienced directors",
    body: "Our directors bring extensive professional experience in property valuation, engineering and consultancy, including previous work involving financial institutions." },
  { icon: Layers, title: "Multidisciplinary under one roof",
    body: "Architecture, civil, valuation, interior and landscape delivered by a single accountable team." },
  { icon: ShieldCheck, title: "Structural integrity first",
    body: "Grounded in civil and earthquake engineering fundamentals — safety and durability are non-negotiable." },
  { icon: Gauge, title: "Cost & timeline discipline",
    body: "Transparent estimation, accurate BOQs and disciplined execution keep projects on track." },
  { icon: Sparkles, title: "Design that endures",
    body: "Considered, timeless aesthetics — refined interiors and landscapes finished with precision." },
  { icon: Handshake, title: "Client-centered execution",
    body: "A structured process built around clear consultation, close collaboration and a seamless handover." },
] as const;

export function WhyChooseUs() {
  return (
    <StaggerReveal className="grid gap-px bg-hairline border border-hairline rounded-[20px] overflow-hidden md:grid-cols-2 lg:grid-cols-3">
      {REASONS.map((r, i) => {
        const Icon = r.icon;
        return (
          <div
            key={r.title}
            className="group interactive-card relative bg-card p-9 md:p-11 hover:bg-surface"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-hairline text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-500">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <span className="font-display text-xs text-ink-muted tabular-nums tracking-[0.14em]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-8 font-display text-xl md:text-[22px] font-medium tracking-[-0.01em] text-ink">
              {r.title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.7] text-ink-muted">{r.body}</p>
          </div>
        );
      })}
    </StaggerReveal>
  );
}
