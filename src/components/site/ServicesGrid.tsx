import {
  Compass,
  Ruler,
  Building2,
  Sofa,
  TreePine,
  FileSignature,
  
  ClipboardCheck,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { StaggerReveal } from "./Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/**
 * Twin signature practices — equal visual weight.
 * Property Valuation covers residential to institutional assets;
 * Construction Services delivers end-to-end execution.
 */
const SIGNATURE: [Service, Service] = [
  {
    icon: Building2,
    title: "Construction Services",
    description:
      "End-to-end construction with disciplined project management, transparent costing and quality control — from site mobilization and structural works through finishing, styling and handover under one accountable team.",
  },
  {
    icon: BadgeCheck,
    title: "Property Valuation",
    description:
      "Accurate property assessments grounded in technical analysis and prevailing market standards — covering residential, commercial, industrial and institutional properties, land, buildings and land & building valuation, including valuations prepared in accordance with bank and professional valuation reporting standards.",
  },
];

export const CORE_SERVICES: Service[] = [
  { icon: Compass, title: "Architecture",
    description: "Innovative, functional design balancing aesthetics, sustainability and your vision — for residential, commercial and institutional projects." },
  { icon: Ruler, title: "Civil Engineering",
    description: "Reliable and precise engineering grounded in structural integrity, earthquake-resistant design and long-term performance." },
  { icon: FileSignature, title: "Municipal Drawings",
    description: "Regulation-compliant drawings prepared for municipal approval, sanctioning and permit workflows across local authorities." },
  { icon: ClipboardCheck, title: "DPR Preparation",
    description: "Detailed Project Reports covering technical, financial and design aspects — supporting funding decisions and disciplined execution." },
  { icon: Sofa, title: "Interior, Exterior & Landscape Design",
    description: "Integrated interior, exterior, and landscape design, precisely crafted to reflect your lifestyle and elevate your architecture." },
  { icon: TreePine, title: "EIA / IEE",
    description: "Rigorous environmental assessment and compliance. Accurate documentation for seamless approvals. Delivering sustainable outcomes from start to finish." },
];

export function ServicesGrid() {
  return (
    <div className="space-y-6">
      {/* Twin signature practices — equal visual weight */}
      <StaggerReveal className="grid gap-6 md:grid-cols-2">
        {SIGNATURE.map((s, i) => {
          const Icon = s.icon;
          return (
            <article
              key={s.title}
               className="group interactive-card relative overflow-hidden rounded-[20px] bg-inverse text-inverse-foreground"
            >
              <div
                aria-hidden
                className={`absolute inset-0 ${
                  i === 0
                    ? "bg-[radial-gradient(circle_at_88%_15%,oklch(0.45_0.19_262/0.55),transparent_60%)]"
                    : "bg-[radial-gradient(circle_at_12%_100%,oklch(0.45_0.19_262/0.5),transparent_55%)]"
                }`}
              />
              <div className="relative flex flex-col p-10 md:p-12 min-h-[400px] md:min-h-[440px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[11px] text-white/70 tabular-nums tracking-[0.22em] uppercase">
                      Signature Practice · 0{i + 1}
                    </span>
                    <span aria-hidden className="h-px w-8 bg-white/25" />
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white/90">
                    <Icon size={20} strokeWidth={1.4} aria-hidden />
                  </div>
                </div>

                <h3 className="mt-auto pt-16 font-display font-light text-4xl md:text-[44px] leading-[1.02] tracking-[-0.025em] text-white">
                  {s.title}
                </h3>
                <p className="mt-5 max-w-md text-[14.5px] leading-[1.7] text-white/70">
                  {s.description}
                </p>
              </div>
            </article>
          );
        })}
      </StaggerReveal>

      {/* Remaining core services */}
      <StaggerReveal className="grid gap-px bg-hairline border border-hairline rounded-[20px] overflow-hidden md:grid-cols-2 lg:grid-cols-3">
        {CORE_SERVICES.map((s, i) => {
          const Icon = s.icon;
          const idx = String(i + 3).padStart(2, "0");
          return (
            <article
              key={s.title}
               className="group interactive-card relative bg-card p-9 md:p-10 hover:bg-surface"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-md border border-hairline text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-500">
                  <Icon size={20} strokeWidth={1.5} aria-hidden />
                </div>
                <span className="font-display text-xs text-ink-muted tabular-nums tracking-[0.14em]">
                  {idx}
                </span>
              </div>
              <h3 className="mt-8 text-xl md:text-[22px] font-display font-medium tracking-[-0.01em] text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-ink-muted">
                {s.description}
              </p>
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                aria-hidden
                className="mt-8 text-ink/60 transition-all duration-500 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </article>
          );
        })}
      </StaggerReveal>
    </div>
  );
}
