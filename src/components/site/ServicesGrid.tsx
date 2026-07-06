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
  {
    icon: Compass,
    title: "Architectural Design",
    description:
      "Innovative, functional designs that balance aesthetics, sustainability and your vision — for residential, commercial and institutional projects.",
  },
  {
    icon: Ruler,
    title: "Civil Engineering",
    description:
      "Reliable, efficient and precise engineering solutions ensuring safety, structural integrity and long-term performance.",
  },
  {
    icon: Building2,
    title: "Construction Services",
    description:
      "Quality-driven construction with disciplined project management, transparent costing and on-time delivery.",
  },
  {
    icon: Sofa,
    title: "Interior Design",
    description:
      "Stylish, functional interiors that reflect modern living and personal identity — executed with precision under one roof.",
  },
  {
    icon: TreePine,
    title: "Landscape Design",
    description:
      "Creative outdoor environments that enhance natural beauty and complement architecture with lasting elegance.",
  },
  {
    icon: FileSignature,
    title: "Municipal Drawings",
    description:
      "Accurate, regulation-compliant drawings prepared for municipal approval and project sanctioning.",
  },
  {
    icon: ClipboardCheck,
    title: "Detailed Project Reports (DPR)",
    description:
      "Comprehensive reports detailing technical, financial and design aspects for effective project execution.",
  },
  {
    icon: Home,
    title: "Real Estate Consultancy",
    description:
      "Expert guidance in property valuation, planning and development to enhance long-term investment value.",
  },
  {
    icon: MonitorPlay,
    title: "CAD 2D / 3D Training",
    description:
      "Professional training in AutoCAD and 3D modeling for advanced drafting and visualization skills.",
  },
];

export function ServicesGrid() {
  const Featured = FEATURED.icon;
  return (
    <div className="space-y-6">
      {/* Featured — Property Valuation */}
      <article className="group relative overflow-hidden rounded-2xl bg-ink text-white p-10 md:p-14">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.45_0.19_262/0.35),transparent_55%)]"
        />
        <div className="relative grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white">
                Signature Practice
              </span>
              <span className="h-px w-10 bg-white/30" />
            </div>
            <h3 className="mt-6 font-display text-3xl md:text-5xl leading-[1.05] text-white">
              {FEATURED.title}
            </h3>
            <p className="mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-white/70">
              {FEATURED.description}
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Featured size={36} strokeWidth={1.4} />
            </div>
          </div>
        </div>
      </article>

      {/* Rest — grid */}
      <div className="grid gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
        {OTHER_SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <article
              key={s.title}
              className="group relative bg-white p-8 md:p-10 transition-colors duration-500 hover:bg-surface"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-surface text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-xl md:text-2xl text-ink">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {s.description}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                Discuss this service
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
