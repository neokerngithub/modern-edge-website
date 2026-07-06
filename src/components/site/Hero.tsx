import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-architecture.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      <img
        src={hero}
        alt="Modern architectural building at dusk"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/85"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.45_0.19_262/0.35),transparent_60%)]"
      />

      <div className="relative z-10 container-x flex min-h-[100svh] flex-col justify-end pb-20 pt-40">
        <div className="max-w-4xl animate-rise">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary animate-line" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-white/80">
              Modern Edge · Architects &amp; Engineers Pvt. Ltd.
            </span>
          </div>

          <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.03em] text-white">
            Engineering Excellence.
            <span className="block text-white/80 italic font-normal">Designing Tomorrow.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-white/75">
            A multidisciplinary consultancy delivering architecture, civil engineering,
            property valuation, construction, interior and landscape solutions across Nepal —
            for homeowners, businesses, banks, industries and government agencies.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Request Consultation <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/15 pt-8 text-white/80">
          {[
            { k: "10", v: "Practice areas" },
            { k: "2", v: "Offices in Nepal" },
            { k: "15+", v: "Years combined experience" },
            { k: "Bank-grade", v: "Valuation reporting" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl md:text-4xl text-white">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/60">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
