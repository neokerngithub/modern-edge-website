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
import aboutImg from "@/assets/about-work.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Modern Edge — Engineering Excellence. Designing Tomorrow." },
      {
        name: "description",
        content:
          "Multidisciplinary architecture, civil engineering, valuation, construction, interior & landscape services from Modern Edge — Duhabi & Biratnagar, Nepal.",
      },
      {
        property: "og:title",
        content: "Modern Edge — Engineering Excellence. Designing Tomorrow.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  return (
    <>
      <Hero />

      {/* About preview */}
      <Section
        id="about"
        index="01 — About"
        eyebrow="The practice"
        title={
          <>
            A multidisciplinary practice
            <span className="block text-ink-muted italic font-normal">
              shaping Nepal's built environment.
            </span>
          </>
        }
      >
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[20px] bg-surface">
              <img
                src={aboutImg}
                alt="Architects reviewing blueprints"
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-ink-muted">
              <span>Studio · Duhabi</span>
              <span className="h-px flex-1 mx-6 bg-hairline" />
              <span>Established Nepal</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg md:text-xl leading-[1.55] tracking-[-0.005em] text-ink">
              Founded by a team of seasoned professionals, Modern Edge was created with a
              vision to become a leading force in Nepal's engineering and architectural
              landscape.
            </p>
            <p className="mt-6 text-[15px] leading-[1.75] text-ink-muted">
              We offer a comprehensive range of services — architectural design, planning,
              estimation, interiors and landscape, property valuation and construction
              management — for residential, commercial and government clients alike.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-10 border-t border-hairline pt-8">
              <div>
                <div className="eyebrow">Vision</div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-muted">
                  To become Nepal's leading multidisciplinary firm — delivering innovative
                  and sustainable solutions that shape modern living.
                </p>
              </div>
              <div>
                <div className="eyebrow">Mission</div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-muted">
                  End-to-end design and engineering delivered through collaboration and
                  technical excellence.
                </p>
              </div>
            </div>

            <Link to="/about" className="link-underline mt-12">
              Read the full story <ArrowRight size={14} />
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
        title={<>Ten disciplines. One accountable team.</>}
        intro="Every service is delivered in-house — from concept and drawings through construction, finishing and handover — with property valuation as our signature institutional practice."
      >
        <ServicesGrid />
      </Section>

      {/* Why choose us */}
      <Section
        id="why"
        index="03 — Why Modern Edge"
        eyebrow="Our approach"
        title="Precision, trust and disciplined delivery."
        intro="What sets our practice apart in Nepal's architecture and engineering landscape."
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
        intro="Every engagement — whether construction, valuation, or interior & exterior — follows a structured, transparent workflow."
      >
        <ProcessTimelines />
      </Section>

      {/* Founders */}
      <Section
        id="founders"
        index="05 — Leadership"
        eyebrow="Meet our founders"
        title="The directors behind Modern Edge."
        intro="Decades of combined experience across valuation, construction and design — leading every project with precision and accountability."
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
