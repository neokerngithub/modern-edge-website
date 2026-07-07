import { Star, ExternalLink } from "lucide-react";

const REVIEWS_URL =
  "https://www.google.com/maps/place/Modern+Edge+Architects+And+Engineers+Pvt.+Ltd./@26.5622764,87.2795168,18z/data=!3m1!4b1!4m6!3m5!1s0x39ef73000c701611:0x4933fb4fa8b43ffb!8m2!3d26.562275!4d87.2802605!16s%2Fg%2F11lcttpltj";

export function Testimonials() {
  return (
    <div className="rounded-[24px] border border-hairline bg-white p-10 md:p-16 text-center">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-center gap-1 text-primary" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={18} className="fill-primary text-primary" />
          ))}
        </div>
        <h3 className="mt-6 font-display font-light text-3xl md:text-4xl leading-[1.1] tracking-[-0.02em] text-ink">
          Read what our clients say
          <span className="block italic text-ink-muted">on our verified Google Business Profile.</span>
        </h3>
        <p className="mt-6 text-[15px] leading-[1.75] text-ink-muted">
          Every review on our profile comes from a real client — homeowners, businesses, banks and
          institutions we have served across Nepal. See their words in their own voice.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View all reviews on Google <ExternalLink size={14} />
          </a>
          <a
            href={REVIEWS_URL + "&hl=en"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-medium text-ink hover:border-ink transition-colors"
          >
            Write a review
          </a>
        </div>
      </div>
    </div>
  );
}
