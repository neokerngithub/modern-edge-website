import { Star, ExternalLink, PenLine } from "lucide-react";

const REVIEWS_URL =
  "https://www.google.com/maps/place/Modern+Edge+Architects+And+Engineers+Pvt.+Ltd./@26.5622764,87.2795168,18z/data=!3m1!4b1!4m6!3m5!1s0x39ef73000c701611:0x4933fb4fa8b43ffb!8m2!3d26.562275!4d87.2802605!16s%2Fg%2F11lcttpltj";
const WRITE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJERFwDABz7zkR-z-0qE_7M0k";

/**
 * Real Google reviews for Modern Edge Architects & Engineers Pvt. Ltd.
 * This section is intentionally free of fabricated / placeholder testimonials.
 * When real reviews are pulled (via Google Places API / Business Profile API /
 * an approved widget), populate the array below and the cards will render.
 */
type Review = {
  author: string;
  rating: number;
  date?: string;
  text: string;
};

const REVIEWS: Review[] = [];

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={16}
          className={i < Math.round(value) ? "fill-[#FBBC04] text-[#FBBC04]" : "text-hairline"}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-x-6 items-start">
      {/* Rating summary card */}
      <div className="lg:col-span-5 min-w-0">
        <div className="rounded-[24px] border border-hairline bg-card p-8 md:p-10 shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_50px_-30px_rgba(0,0,0,0.15)]">
          <div className="flex items-center gap-3">
            <GoogleG className="h-7 w-7" />
            <div className="text-[11px] uppercase tracking-[0.24em] text-ink-muted">
              Google Business Profile
            </div>
          </div>

          <div className="mt-8 flex items-end gap-3">
            <div className="font-serif text-[64px] leading-none tracking-[-0.02em] text-ink">
              5.0
            </div>
            <div className="pb-2">
              <Stars value={5} />
              <div className="mt-1 text-[12px] text-ink-muted">
                Verified client rating
              </div>
            </div>
          </div>

          <p className="mt-8 text-[14px] leading-[1.7] text-ink-muted">
            Every review on our profile comes from a real client — homeowners,
            businesses, banks and institutions we have served across Nepal. Read
            what they say in their own words.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-inverse px-5 py-3 text-[13px] font-medium text-white hover:bg-primary transition-colors duration-300"
            >
              View all reviews on Google <ExternalLink size={13} />
            </a>
            <a
              href={WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline px-5 py-3 text-[13px] font-medium text-ink hover:border-ink transition-colors duration-300"
            >
              <PenLine size={13} /> Write a review
            </a>
          </div>
        </div>
      </div>

      {/* Reviews column */}
      <div className="lg:col-span-7 min-w-0">
        {REVIEWS.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-hairline bg-surface p-8 md:p-10">
            <div className="flex items-center gap-3">
              <GoogleG className="h-6 w-6" />
              <div className="text-[11px] uppercase tracking-[0.24em] text-ink-muted">
                Live reviews
              </div>
            </div>
            <h3 className="mt-6 font-display font-light text-2xl md:text-3xl leading-[1.15] tracking-[-0.02em] text-ink">
              Read our reviews on Google.
            </h3>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-ink-muted">
              We display only verified reviews from our official Google Business
              Profile — never fabricated testimonials. Open our profile to see
              every client review, reply and photo.
            </p>
            <div className="mt-8">
              <a
                href={REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-[13px] font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Open Google Business Profile <ExternalLink size={13} />
              </a>
            </div>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {REVIEWS.map((r, i) => (
              <article
                key={i}
                className="group rounded-[20px] border border-hairline bg-card p-7 shadow-[0_1px_0_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <Stars value={r.rating} />
                  <GoogleG className="h-4 w-4 opacity-80" />
                </div>
                <p className="mt-5 text-[14px] leading-[1.7] text-ink">
                  “{r.text}”
                </p>
                <div className="mt-6 flex items-center justify-between text-[12px] text-ink-muted border-t border-hairline pt-4">
                  <span className="font-medium text-ink">{r.author}</span>
                  {r.date && <span>{r.date}</span>}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
