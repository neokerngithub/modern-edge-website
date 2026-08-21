import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { ProcessTimelines } from "@/components/site/ProcessTimelines";
import { Founders } from "@/components/site/Founders";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactBlock } from "@/components/site/ContactBlock";
import { TrustStrip } from "@/components/site/TrustStrip";


const HOME_TITLE =
  "Modern Edge — Multidisciplinary Engineering Consultancy in Nepal";
const HOME_DESC =
  "Modern Edge Architects & Engineers Pvt. Ltd. — architecture, civil engineering, construction and bank-grade property valuation for homeowners, businesses, banks, industries and government across Nepal.";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      {/* About preview */}
      <Section
        id="about"
        index="01 — About"
        eyebrow="The practice"
        title={
          <>
            A multidisciplinary engineering
            <span className="block text-ink-muted italic font-normal">
              consultancy for Nepal.
            </span>
          </>
        }
      >
        <div className="grid gap-16 lg:gap-x-8 lg:gap-y-0 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 min-w-0">
            <div className="relative rounded-[20px] border border-hairline bg-surface p-10 md:p-14">
              <div className="eyebrow">Est. Nepal</div>
              <div className="mt-6 font-serif text-[64px] md:text-[88px] leading-[0.95] tracking-[-0.02em] text-primary">
                19<span className="text-ink">+</span>
              </div>
              <div className="mt-3 text-[13px] uppercase tracking-[0.24em] text-ink-muted">
                Years combined experience
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-hairline pt-8">
                <div>
                  <div className="font-serif text-3xl tracking-[-0.01em] text-ink">
                    09
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                    Core disciplines
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl tracking-[-0.01em] text-ink">
                    02
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                    Offices in Nepal
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-ink-muted">
                <span>Studio · Duhabi</span>
                <span className="h-px flex-1 mx-6 bg-hairline" />
                <span>Branch · Biratnagar</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 min-w-0 lg:pl-8">
            <p className="max-w-prose text-lg md:text-xl leading-[1.55] tracking-[-0.005em] text-ink">
              Modern Edge Architects &amp; Engineers Pvt. Ltd. is a
              multidisciplinary engineering consultancy delivering construction,
              property valuation, architecture, civil engineering and interior
              &amp; landscape design under one accountable team.
            </p>
            <p className="mt-6 max-w-prose text-[15px] leading-[1.75] text-ink-muted">
              Founded by experienced civil engineers with nearly two decades of
              combined professional experience, the practice serves homeowners,
              businesses, banks, industries and government agencies across
              Nepal.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-hairline pt-8">
              <div>
                <div className="eyebrow">Vision</div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-muted">
                  To become Nepal's leading multidisciplinary engineering firm —
                  delivering innovative and sustainable solutions that shape
                  modern living.
                </p>
              </div>
              <div>
                <div className="eyebrow">Mission</div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-muted">
                  End-to-end design, engineering and valuation delivered through
                  collaboration and technical excellence.
                </p>
              </div>
            </div>

            <Link to="/about" className="link-underline mt-12">
              Read the full story <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>

      </Section>

      {/* Services */}
      <Section
        id="services"
        className="bg-surface"
        index="02 — Services"
        eyebrow="What we do"
        title={
          <>
            Nine core disciplines.
            <span className="block text-ink-muted italic font-normal">
              Two signature practices.
            </span>
          </>
        }
        intro="Construction Services and Property Valuation anchor the practice — supported by architecture, civil engineering, municipal drawings, DPR preparation, interiors, landscape and real estate consultancy. Every service is delivered in-house."
      >
        <ServicesGrid />
      </Section>

      {/* Why choose us */}
      <Section
        id="why"
        index="03 — Why Modern Edge"
        eyebrow="Our approach"
        title="Precision, trust and disciplined delivery."
        intro="What sets our practice apart in Nepal's architecture and engineering landscape — built on technical expertise, accurate documentation and long-term client relationships."
      >
        <WhyChooseUs />
      </Section>

      {/* Process */}
      <Section
        id="process"
        className="bg-surface"
        index="04 — Process"
        eyebrow="How we work"
        title="Three workflows. One standard of excellence."
        intro="Every engagement — construction, valuation, or interior & exterior — follows a structured, transparent workflow from consultation to handover."
      >
        <ProcessTimelines />
      </Section>

      {/* Founders */}
      <Section
        id="founders"
        index="05 — Leadership"
        eyebrow="Meet our founders"
        title="The directors behind Modern Edge."
        intro="Founded by experienced civil engineers with nearly two decades of combined professional experience, Modern Edge Architects & Engineers Pvt. Ltd. is built on technical excellence, integrity and a commitment to delivering high-quality engineering solutions."
      >
        <Founders />
      </Section>

      {/* Google Reviews */}
      <Section
        id="reviews"
        className="bg-surface"
        index="06 — What our clients say"
        eyebrow="Google reviews"
        title="Trusted by institutions and homeowners across Nepal."
        intro="Every review on our profile comes from a verified client on our Google Business Profile."
      >
        <Testimonials />
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        index="07 — Contact"
        eyebrow="Get in touch"
        title="Start a conversation."
        intro="Consultations, valuations and project inquiries — we respond within one business day."
      >
        <ContactBlock />
      </Section>
    </>
  );
}

