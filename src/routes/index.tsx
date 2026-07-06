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
        eyebrow="About Modern Edge"
        title={
          <>
            A multidisciplinary practice shaping
            <span className="text-primary"> Nepal's built environment.</span>
          </>
        }
      >
        <div className="grid gap-14 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-hairline">
              <img
                src={aboutImg}
                alt="Architects reviewing blueprints"
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-ink">
              Founded by a team of seasoned professionals, Modern Edge was created with a
              vision to become a leading force in Nepal's engineering and architectural
              landscape.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              We offer a comprehensive range of services — architectural design, planning,
              estimation, interiors and landscape, property valuation and construction
              management — for residential, commercial and government clients alike. Driven by
              innovation, precision and a passion for excellence, we strive to redefine
              modern infrastructure and design standards.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <div className="eyebrow">Vision</div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  To become Nepal's leading multidisciplinary firm — delivering innovative,
                  sustainable and high-quality solutions that shape modern living.
                </p>
              </div>
              <div>
                <div className="eyebrow">Mission</div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  To deliver end-to-end design and engineering services through
                  collaboration, creativity and technical excellence.
                </p>
              </div>
            </div>

            <Link to="/about" className="mt-10 link-underline">
              Read the full story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section
        id="services"
        className="bg-surface"
        eyebrow="What we do"
        title={<>Ten disciplines. One accountable team.</>}
        intro="Every service is delivered in-house — from concept and drawings through construction, finishing and handover — with property valuation as our signature institutional practice."
      >
        <ServicesGrid />
      </Section>

      {/* Why choose us */}
      <Section
        id="why"
        eyebrow="Why Modern Edge"
        title="Precision, trust and disciplined delivery."
        intro="What sets our practice apart in Nepal's architecture and engineering landscape."
      >
        <WhyChooseUs />
      </Section>

      {/* Process */}
      <Section
        id="process"
        className="bg-surface"
        eyebrow="How we work"
        title="Three processes. One standard of excellence."
        intro="Every engagement — whether construction, valuation, or interior & exterior — follows a structured, transparent workflow."
      >
        <ProcessTimelines />
      </Section>

      {/* Founders */}
      <Section
        id="founders"
        eyebrow="Leadership"
        title="Meet our founders."
        intro="The engineers and directors leading Modern Edge — with decades of combined experience across valuation, construction and design."
      >
        <Founders />
      </Section>

      {/* Testimonials */}
      <Section
        id="testimonials"
        className="bg-surface"
        eyebrow="Client voices"
        title="Trusted by institutions and homeowners alike."
      >
        <Testimonials />
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        eyebrow="Get in touch"
        title="Start a conversation."
        intro="Consultations, valuations and project inquiries — we respond within one business day."
      >
        <ContactBlock />
      </Section>
    </>
  );
}
