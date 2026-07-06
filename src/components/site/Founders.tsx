import kiran from "@/assets/founder-kiran.jpg";
import samir from "@/assets/founder-samir.jpg";

const FOUNDERS = [
  {
    name: "Kiran Neupane",
    role: "Director & Co-Founder",
    img: kiran,
    experience: "10+ years",
    bio: "Mr. Kiran Neupane brings over a decade of experience in property valuation, design and construction supervision. He has collaborated with major banks and financial institutions across Nepal and contributed to notable projects including City Cinema, Centurion Mall, St. Mary's School and several residential developments across Morang and Sunsari.",
    highlights: [
      "City Cinema",
      "Centurion Mall",
      "St. Mary's School",
      "Residential developments — Morang & Sunsari",
    ],
    discipline: "Civil Engineering · Valuation",
  },
  {
    name: "Md. Samir Hussain",
    role: "Director & Co-Founder",
    img: samir,
    experience: "5+ years",
    bio: "Mr. Md. Samir Hussain has led major industrial, commercial and residential projects with a focus on quality, innovation and structural excellence. His expertise spans civil and earthquake engineering, construction supervision and property valuation.",
    highlights: [
      "Swastik Oil Industries",
      "OCB Processing Industries",
      "Global Plastic Industries",
      "Ruchi Khadya Udhyog",
      "Itahari Stadium",
    ],
    discipline: "Civil & Earthquake Engineering",
  },
];

export function Founders() {
  return (
    <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
      {FOUNDERS.map((f) => (
        <article
          key={f.name}
          className="group grid grid-cols-5 gap-6 md:gap-8 rounded-2xl border border-hairline bg-white p-6 md:p-8 card-lift"
        >
          <div className="col-span-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface">
              <img
                src={f.img}
                alt={`Portrait of ${f.name}, ${f.role}`}
                width={800}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div className="col-span-3 flex flex-col">
            <div className="eyebrow">{f.discipline}</div>
            <h3 className="mt-2 text-2xl md:text-3xl text-ink">{f.name}</h3>
            <div className="mt-1 text-sm text-ink-muted">{f.role} · {f.experience}</div>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              {f.bio}
            </p>
            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.2em] text-ink-muted mb-3">
                Notable projects
              </div>
              <ul className="flex flex-wrap gap-2">
                {f.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-xs rounded-full border border-hairline bg-surface px-3 py-1.5 text-ink/80"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
