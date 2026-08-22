import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import hero from "@/assets/hero-architecture.jpg";

const INDEX = [
  { k: "09", v: "Core disciplines" },
  { k: "02", v: "Offices in Nepal" },
  { k: "19+", v: "Years of combined professional experience" },
  { k: "2024", v: "Modern Edge established" },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-inverse text-inverse-foreground">
      <img
        src={hero}
        alt="Contemporary architectural facade at dusk"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.55] scale-[1.02]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-inverse/60 via-inverse/50 to-inverse/95"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,oklch(0.45_0.19_262/0.28),transparent_55%)]"
      />

      {/* subtle top-right location index */}
      <div className="pointer-events-none absolute top-24 right-6 md:right-10 hidden md:flex items-center gap-3 text-white/55 text-[10px] uppercase tracking-[0.32em] z-10">
        <span>Est. 2024</span>
        <span aria-hidden className="h-px w-6 bg-white/30" />
        <span>Duhabi · Biratnagar</span>
      </div>

      <div className="relative z-10 container-x flex min-h-[100svh] flex-col justify-end pb-16 md:pb-24 pt-40">
        <div className="max-w-5xl animate-rise">
          <div className="flex items-center gap-4">
            <span className="h-px w-14 bg-primary animate-line" />
            <span className="text-[11px] uppercase tracking-[0.34em] text-white/80">
              Multidisciplinary Engineering Consultancy · Nepal
            </span>
          </div>

          <h1 className="mt-10 font-display font-light text-[13vw] sm:text-[11vw] md:text-[8vw] lg:text-[6.4vw] xl:text-[5.6vw] leading-[0.96] tracking-[-0.035em] text-white max-w-[16ch]">
            <span className="block">Engineering</span>
            <span className="block">
              Excellence<span className="text-primary">.</span>
            </span>
            <span className="block italic font-normal text-white/70">
              Designing Tomorrow<span className="text-primary not-italic">.</span>
            </span>
          </h1>

          <p className="mt-8 text-[10.5px] md:text-[11.5px] uppercase tracking-[0.3em] text-white/65">
            Architecture · Engineering · Valuation · Construction
          </p>

          <p className="mt-7 max-w-2xl text-[15px] md:text-[17px] leading-[1.7] text-white/80">
            Modern Edge Architects &amp; Engineers Pvt. Ltd. delivers architecture, civil
            engineering, construction and property valuation — for homeowners, businesses,
            industries and government agencies across Nepal.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white pl-6 pr-2 py-2 text-[13px] font-medium text-inverse hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
            >
              Request Consultation
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-inverse text-inverse-foreground transition-transform duration-500 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-primary">
                <ArrowRight size={15} aria-hidden />
              </span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[13px] font-medium text-white/90 hover:bg-white/10 hover:border-white/50 transition-colors"
            >
              Explore Services
            </Link>
            <a
              href="tel:+9779852059599"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-3 text-[13px] text-white/70 hover:text-white transition-colors"
              aria-label="Call Modern Edge"
            >
              <Phone size={14} aria-hidden />
              +977 98520 59599
            </a>
          </div>
        </div>

        {/* Editorial index row */}
        <div className="mt-20 md:mt-24 border-t border-white/12 pt-8 grid grid-cols-2 md:grid-cols-4">
          {INDEX.map((s, i) => (
            <div
              key={s.v}
              className={`px-0 md:px-6 py-3 md:py-0 ${
                i > 0 ? "md:border-l border-white/12" : ""
              }`}
            >
              <div className="font-display text-2xl md:text-3xl text-white tracking-tight">
                {s.k}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-white/55">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div
        aria-hidden
        className="hidden md:flex absolute bottom-6 right-8 items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.3em] z-10"
      >
        Scroll
        <span className="block h-6 w-px bg-white/40" />
      </div>
    </section>
  );
}
