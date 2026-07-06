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
import aboutImg from "@/assets/about-work.jpg";

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
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[20px] bg-surface">
              <img
                src={aboutImg}
                alt="Modern Edge engineers reviewing project drawings"
                width={1400}
                height={1000}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-ink-muted">
              <span>Studio · Duhabi</span>
              <span className="h-px flex-1 mx-6 bg-hairline" />
              <span>Branch · Biratnagar</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg md:text-xl leading-[1.55] tracking-[-0.005em] text-ink">
              Modern Edge Architects &amp; Engineers Pvt. Ltd. is a
              multidisciplinary consultancy delivering architecture, civil
              engineering, construction, property valuation and interior &amp;
              landscape design under one accountable team.
            </p>
            <p className="mt-6 text-[15px] leading-[1.75] text-ink-muted">
              Founded by seasoned professionals with combined experience across
              banking valuation, industrial construction and residential design,
              the practice serves homeowners, businesses, banks, industries and
              government agencies across Nepal.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-10 border-t border-hairline pt-8">
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
        intro="Property Valuation and Construction Services anchor the practice — supported by architecture, civil engineering, municipal drawings, DPR preparation, interiors, landscape and real estate consultancy. Every service is delivered in-house."
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
        intro="Two directors leading every project personally — with combined experience across banking valuation, industrial construction and earthquake-resistant civil engineering."
      >
        <Founders />
      </Section>

      {/* Testimonials */}
      <Section
        id="testimonials"
        className="bg-surface"
        index="06 — Client voices"
        eyebrow="Trusted"
        title="Trusted by institutions and homeowners alike."
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

