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

export const SERVICES = [
  {
    icon: BadgeCheck,
    title: "Property Valuation",
    description:
      "Accurate, bank-grade property assessments grounded in technical analysis and prevailing market standards — trusted by leading banks and financial institutions across Nepal.",
    featured: true,
  },
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
] as const;

export function ServicesGrid() {
  return (
    <div className="grid gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
      {SERVICES.map((s) => {
        const Icon = s.icon;
        return (
          <article
            key={s.title}
            className={`group relative bg-white p-8 md:p-10 transition-colors duration-500 hover:bg-surface ${
              s.featured
                ? "md:col-span-2 lg:col-span-2 md:row-span-1 bg-ink text-white hover:bg-ink"
                : ""
            }`}
            style={{
              gridColumn: s.featured ? undefined : undefined,
            }}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-md ${
                s.featured
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500"
              }`}
            >
              <Icon size={22} strokeWidth={1.5} />
            </div>
            <h3
              className={`mt-6 text-xl md:text-2xl ${
                s.featured ? "text-white" : "text-ink"
              }`}
            >
              {s.title}
              {s.featured && (
                <span className="ml-3 align-middle inline-flex items-center rounded-full bg-primary/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-primary-foreground/90">
                  Signature Practice
                </span>
              )}
            </h3>
            <p
              className={`mt-4 text-sm leading-relaxed ${
                s.featured ? "text-white/70" : "text-ink-muted"
              }`}
            >
              {s.description}
            </p>
            <div
              className={`mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] ${
                s.featured ? "text-white/60" : "text-ink-muted"
              }`}
            >
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
  );
}

/* Layout tweak: make the featured card span two columns on md+ via a wrapper.
   We handle spans with CSS class instead of inline style for clarity. */
