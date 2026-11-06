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
  { icon: Handshake, title: "Direct technical leadership",
    body: "Clients work directly with our experienced directors, ensuring deep engineering scrutiny, rapid decision-making, and complete accountability across every project phase." },
  { icon: Layers, title: "Multidisciplinary under one roof",
    body: "Architecture, structural & civil engineering, construction, valuation, and interior & landscape delivered by a single coordinated team." },
  { icon: ShieldCheck, title: "Nepal Building Code (NBC) compliant",
    body: "Every structural design and municipal drawing is engineered strictly for seismic safety and local soil conditions." },
  { icon: Landmark, title: "Multi-purpose valuation scope",
    body: "Valuation reporting for bank collateral in Koshi Province, plus student visa & embassy documentation and NFRS industrial reporting nationwide." },
  { icon: Gauge, title: "Transparent BOQs & cost discipline",
    body: "Itemized bills of quantities and realistic material specifications before ground breaks, protecting your investment from unexpected escalations." },
  { icon: Sparkles, title: "Local roots, nationwide delivery",
    body: "Deep on-ground roots in Morang and Sunsari, paired with engineering, construction and valuation services delivered across Nepal." },
] as const;

export function WhyChooseUs() {
  return (
    <StaggerReveal className="grid gap-px bg-hairline border border-hairline rounded-[20px] overflow-hidden md:grid-cols-2 lg:grid-cols-3">
      {REASONS.map((r, i) => {
        const Icon = r.icon;
        return (
          <div
            key={r.title}
            className="group interactive-card relative bg-card p-9 md:p-11"
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
