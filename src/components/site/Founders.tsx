import kiran from "@/assets/founder-kiran.jpg";
import samir from "@/assets/founder-samir.jpg";
import { StaggerReveal } from "./Reveal";

const FOUNDERS = [
  {
    name: "Kiran Neupane",
    role: "Co-Founder & Director · Property Valuation Professional",
    img: kiran,
    experience: "10+ years",
    bio: "Mr. Kiran Neupane brings over a decade of professional experience in property valuation, design and construction supervision. Prior to the establishment of Modern Edge, he gained individual professional experience in valuation and consultancy work involving banks and financial institutions in Nepal, and contributed to projects including City Cinema, Centurion Mall, St. Mary's School and residential developments across Morang and Sunsari.",
    highlights: [
      "City Cinema",
      "Centurion Mall",
      "St. Mary's School",
      "Residential — Morang & Sunsari",
    ],
    discipline: "Valuation · Construction Supervision",
    initial: "01",
  },
  {
    name: "Md. Samir Hussain",
    role: "Co-Founder & Director · Construction Professional",
    img: samir,
    experience: "9+ years",
    bio: "Mr. Md. Samir Hussain brings over nine years of professional experience across construction, property valuation and project management. Prior to the establishment of Modern Edge, he gained individual professional experience through projects including Swastik Oil Industries, OCB Processing Industries, Global Plastic Industries, Vivek Automobiles and others, alongside experience across commercial and residential projects.",
    highlights: [
      "Swastik Oil Industries",
      "OCB Processing Industries",
      "Global Plastic Industries",
      "Vivek Automobiles",
      "General PET Industries",
      "Laxmi Aluminum Industries",
    ],
    discipline: "Construction · Valuation · Project Management",
    initial: "02",
  },
];

export function Founders() {
  return (
    <StaggerReveal className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      {FOUNDERS.map((f) => (
        <article
          key={f.name}
          className="group flex flex-col rounded-[24px] border border-hairline bg-surface/60 p-6 sm:p-7 lg:p-8"
        >
          <div className="flex items-center gap-3 text-ink-muted">
            <span className="font-display text-xs tabular-nums tracking-[0.14em] text-primary">
              {f.initial}
            </span>
            <span aria-hidden className="h-px w-8 bg-hairline" />
            <span className="text-[10px] uppercase tracking-[0.28em]">
              {f.discipline}
            </span>
          </div>

          <h3 className="mt-4 font-display font-light text-3xl text-ink tracking-[-0.02em]">
            {f.name}
          </h3>
          <div className="mt-2 text-xs text-ink-muted">
            {f.role} · {f.experience}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-[180px_1fr] sm:items-start">
            <div className="relative overflow-hidden rounded-[16px] bg-surface aspect-[4/5] w-full max-w-[220px] sm:max-w-none">
              <img
                src={f.img}
                alt={`Portrait of ${f.name}, ${f.role}`}
                width={800}
                height={1000}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out scale-[1.02] group-hover:scale-100"
              />
            </div>
            <p className="text-[15px] leading-[1.75] text-ink-muted">{f.bio}</p>
          </div>

          <div className="mt-6">
            <div className="text-[10px] uppercase tracking-[0.26em] text-ink-muted mb-4">
              Selected Professional Experience
            </div>
            <ul className="flex flex-wrap gap-2">
              {f.highlights.map((h) => (
                <li
                  key={h}
                  className="text-xs rounded-full border border-hairline px-3.5 py-1.5 text-ink/80"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-auto pt-6 border-t border-hairline mt-6 text-[12px] leading-[1.6] text-ink-muted/80">
            Projects listed reflect the director's individual professional experience gained prior to the establishment of Modern Edge Architects & Engineers Pvt. Ltd. and are not represented as projects executed by Modern Edge.
          </p>
        </article>
      ))}
    </StaggerReveal>
  );
}
