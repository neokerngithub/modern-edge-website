import {
  Compass,
  Ruler,
  Building2,
  Sofa,
  TreePine,
  FileSignature,
  Home,
  ClipboardCheck,
  MonitorPlay,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURED: Service = {
  icon: BadgeCheck,
  title: "Property Valuation",
  description:
    "Accurate, bank-grade property assessments grounded in technical analysis and prevailing market standards — trusted by leading banks and financial institutions across Nepal for residential, commercial, industrial and institutional properties.",
};

export const OTHER_SERVICES: Service[] = [
  { icon: Compass, title: "Architectural Design",
    description: "Innovative, functional designs that balance aesthetics, sustainability and your vision — for residential, commercial and institutional projects." },
  { icon: Ruler, title: "Civil Engineering",
    description: "Reliable, efficient and precise engineering solutions ensuring safety, structural integrity and long-term performance." },
  { icon: Building2, title: "Construction Services",
    description: "Quality-driven construction with disciplined project management, transparent costing and on-time delivery." },
  { icon: Sofa, title: "Interior Design",
    description: "Stylish, functional interiors that reflect modern living and personal identity — executed with precision under one roof." },
  { icon: TreePine, title: "Landscape Design",
    description: "Creative outdoor environments that enhance natural beauty and complement architecture with lasting elegance." },
  { icon: FileSignature, title: "Municipal Drawings",
    description: "Accurate, regulation-compliant drawings prepared for municipal approval and project sanctioning." },
  { icon: ClipboardCheck, title: "Detailed Project Reports (DPR)",
    description: "Comprehensive reports detailing technical, financial and design aspects for effective project execution." },
  { icon: Home, title: "Real Estate Consultancy",
    description: "Expert guidance in property valuation, planning and development to enhance long-term investment value." },
  { icon: MonitorPlay, title: "CAD 2D / 3D Training",
    description: "Professional training in AutoCAD and 3D modeling for advanced drafting and visualization skills." },
];

export function ServicesGrid() {
  const Featured = FEATURED.icon;
  return (
    <div className="space-y-6">
      {/* Featured — Property Valuation */}
      <article className="group relative overflow-hidden rounded-[20px] bg-ink text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_88%_15%,oklch(0.45_0.19_262/0.5),transparent_55%)]"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-px bg-white/10"
        />
        <div className="relative grid gap-10 md:grid-cols-12 items-end p-10 md:p-16">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4">
              <span className="font-display text-xs text-primary-foreground/80 tabular-nums tracking-[0.14em]">
                Signature Practice / 01
              </span>
              <span aria-hidden className="h-px w-10 bg-white/25" />
            </div>
            <h3 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.0] tracking-[-0.028em] text-white">
              {FEATURED.title}
            </h3>
            <p className="mt-6 max-w-2xl text-[15px] md:text-base leading-[1.75] text-white/70">
              {FEATURED.description}
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/[0.02]">
                <Featured size={34} strokeWidth={1.2} className="text-primary-foreground" />
              </div>
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full border border-white/[0.06]"
              />
            </div>
          </div>
        </div>
      </article>

      {/* Rest — grid */}
      <div className="grid gap-px bg-hairline border border-hairline rounded-[20px] overflow-hidden md:grid-cols-2 lg:grid-cols-3">
        {OTHER_SERVICES.map((s, i) => {
          const Icon = s.icon;
          const idx = String(i + 2).padStart(2, "0");
          return (
            <article
              key={s.title}
              className="group relative bg-white p-9 md:p-10 transition-colors duration-500 hover:bg-surface"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-md border border-hairline text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-500">
                  <Icon size={20} strokeWidth={1.5} />
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
                className="mt-8 text-ink/60 transition-all duration-500 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </article>
          );
        })}
      </div>
    </div>
  );
}
