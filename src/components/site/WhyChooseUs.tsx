import {
  ShieldCheck,
  Landmark,
  Layers,
  Handshake,
  Gauge,
  Sparkles,
} from "lucide-react";

const REASONS = [
  {
    icon: Landmark,
    title: "Trusted by institutions",
    body:
      "Long-standing valuation and consultancy relationships with major banks and financial institutions across Nepal.",
  },
  {
    icon: Layers,
    title: "Multidisciplinary under one roof",
    body:
      "Architecture, civil, valuation, interior and landscape delivered by a single accountable team.",
  },
  {
    icon: ShieldCheck,
    title: "Structural integrity first",
    body:
      "Grounded in civil and earthquake engineering fundamentals — safety and durability are non-negotiable.",
  },
  {
    icon: Gauge,
    title: "Cost & timeline discipline",
    body:
      "Transparent estimation, accurate BOQs and disciplined execution keep projects on track.",
  },
  {
    icon: Sparkles,
    title: "Design that endures",
    body:
      "Considered, timeless aesthetics — refined interiors and landscapes finished with precision.",
  },
  {
    icon: Handshake,
    title: "Client-centered execution",
    body:
      "A structured process built around clear consultation, close collaboration and a seamless handover.",
  },
] as const;

export function WhyChooseUs() {
  return (
    <div className="grid gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
      {REASONS.map((r) => {
        const Icon = r.icon;
        return (
          <div key={r.title} className="group bg-white p-8 md:p-10 transition-colors hover:bg-surface">
            <div className="flex h-11 w-11 items-center justify-center rounded-md border border-hairline text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
              <Icon size={20} strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 text-xl text-ink">{r.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{r.body}</p>
          </div>
        );
      })}
    </div>
  );
}
