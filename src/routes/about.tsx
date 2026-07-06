import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Founders } from "@/components/site/Founders";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import aboutImg from "@/assets/about-work.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Modern Edge Architects & Engineers" },
      {
        name: "description",
        content:
          "Founded by seasoned professionals, Modern Edge is a multidisciplinary architecture and engineering consultancy shaping Nepal's built environment.",
      },
      { property: "og:title", content: "About — Modern Edge Architects & Engineers" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHead
        eyebrow="About Modern Edge"
        title={<>Engineering the future of Nepal's built environment.</>}
        intro="Founded by a team of seasoned professionals, Modern Edge Architects and Engineers Pvt. Ltd. was created with a vision to become a leading force in Nepal's engineering and architectural landscape."
      />

      <Section className="pt-0">
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
              We design and build structures that define the future. Our team of experts is
              dedicated to bringing your vision to life — with services spanning architectural
              design, planning, estimation, interior and landscape design, property valuation
              and construction management.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Driven by innovation, precision and a passion for excellence, we strive to
              redefine modern infrastructure and design standards for residential, commercial
              and governmental clients across Nepal.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="rounded-2xl border border-hairline p-10">
            <div className="eyebrow">Vision</div>
            <h3 className="mt-4 text-2xl md:text-3xl text-ink">
              Nepal's leading multidisciplinary firm.
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              To become Nepal's leading multidisciplinary firm in architecture, engineering,
              construction, valuation, landscape and interior design — delivering innovative,
              sustainable and high-quality solutions that shape modern living and inspire
              progress.
            </p>
          </div>
          <div className="rounded-2xl border border-hairline bg-ink text-white p-10">
            <div className="eyebrow text-white/70">Mission</div>
            <h3 className="mt-4 text-2xl md:text-3xl text-white">
              Precision, functionality and aesthetics — in every project.
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              To deliver innovative, sustainable and high-quality design and engineering
              solutions through collaboration, creativity and technical excellence — combining
              innovation, sustainability and efficiency to create lasting value.
            </p>
          </div>
        </div>
      </Section>

      <Section
        className="bg-surface"
        eyebrow="Why Modern Edge"
        title="What sets our practice apart."
      >
        <WhyChooseUs />
      </Section>

      <Section eyebrow="Leadership" title="Meet our founders.">
        <Founders />
      </Section>

      <Section className="bg-surface" align="center" title="Ready to start a project?">
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Request Consultation
          </Link>
        </div>
      </Section>
    </>
  );
}

function PageHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="pt-40 pb-16 md:pt-48 md:pb-24 border-b border-hairline">
      <div className="container-x max-w-4xl">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em] text-ink">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">{intro}</p>
        )}
      </div>
    </section>
  );
}
