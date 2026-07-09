import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Founders } from "@/components/site/Founders";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { PageHeader } from "@/components/site/PageHeader";


const ABOUT_TITLE = "About — Modern Edge Engineering Consultancy | Nepal";
const ABOUT_DESC =
  "Modern Edge Architects & Engineers Pvt. Ltd. is a multidisciplinary engineering consultancy in Nepal — architecture, civil engineering, construction, valuation and interior & landscape design under one team.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: ABOUT_TITLE },
      { name: "description", content: ABOUT_DESC },
      { property: "og:title", content: ABOUT_TITLE },
      { property: "og:description", content: ABOUT_DESC },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: ABOUT_TITLE },
      { name: "twitter:description", content: ABOUT_DESC },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHeader
        index="01 / About"
        breadcrumb="About"
        eyebrow="The practice"
        title={
          <>
            Engineering the future of
            <span className="block text-ink-muted italic font-normal">
              Nepal's built environment.
            </span>
          </>
        }
        intro="Founded by seasoned professionals, Modern Edge is a multidisciplinary engineering consultancy delivering architecture, civil engineering, construction and bank-grade property valuation from studios in Duhabi and Biratnagar."
        meta={
          <div className="text-[11px] uppercase tracking-[0.24em] text-ink-muted space-y-2">
            <div>Duhabi · Sunsari</div>
            <div>Biratnagar · Morang</div>
            <div className="text-primary">Nepal</div>
          </div>
        }
      />

      <Section className="pt-24 md:pt-32">
        <div className="grid gap-16 lg:gap-24 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-[20px] border border-hairline bg-surface p-10 md:p-14">
              <div className="eyebrow">Established in Nepal</div>
              <div className="mt-6 font-serif text-[64px] md:text-[88px] leading-[0.95] tracking-[-0.02em] text-brand">
                19<span className="text-ink">+</span>
              </div>
              <div className="mt-3 text-[13px] uppercase tracking-[0.24em] text-ink-muted">
                Years combined experience
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-hairline pt-8">
                <div>
                  <div className="font-serif text-3xl tracking-[-0.01em] text-ink">09</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink-muted">Core disciplines</div>
                </div>
                <div>
                  <div className="font-serif text-3xl tracking-[-0.01em] text-ink">02</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink-muted">Offices in Nepal</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg md:text-xl leading-[1.55] tracking-[-0.005em] text-ink">
              We design, engineer and build structures that stand the test of
              time — with services spanning architectural design, civil and
              earthquake engineering, construction, municipal drawings, DPR
              preparation, property valuation, interior and landscape design and
              real estate consultancy.
            </p>
            <p className="mt-6 text-[15px] leading-[1.75] text-ink-muted">
              Driven by precision, technical expertise and a client-focused
              approach, we serve residential, commercial, industrial,
              institutional and government clients across Nepal — with a strong
              record of long-term relationships and accurate documentation.
            </p>
          </div>
        </div>


        <div className="mt-28 grid gap-6 md:grid-cols-2">
          <div className="rounded-[20px] border border-hairline p-10 md:p-12">
            <div className="eyebrow">Vision</div>
            <h3 className="mt-6 font-display font-light text-3xl md:text-4xl leading-[1.05] tracking-[-0.02em] text-ink">
              Nepal's leading multidisciplinary engineering firm.
            </h3>
            <p className="mt-6 text-[14.5px] leading-[1.7] text-ink-muted">
              Delivering innovative, sustainable and high-quality engineering,
              architectural, valuation and construction solutions that shape
              modern living and inspire progress.
            </p>
          </div>
          <div className="rounded-[20px] bg-ink text-white p-10 md:p-12 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_85%_100%,oklch(0.45_0.19_262/0.4),transparent_55%)]"
            />
            <div className="relative">
              <div className="eyebrow text-white/70">Mission</div>
              <h3 className="mt-6 font-display font-light text-3xl md:text-4xl leading-[1.05] tracking-[-0.02em] text-white">
                Precision, functionality and aesthetics — in every project.
              </h3>
              <p className="mt-6 text-[14.5px] leading-[1.7] text-white/70">
                To deliver design, engineering and valuation services through
                collaboration, creativity and technical excellence — combining
                innovation, sustainability and efficiency to create lasting
                value.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="bg-surface"
        index="02 / Why Modern Edge"
        eyebrow="Our approach"
        title="What sets our practice apart."
        intro="Six principles that shape every engagement — from a residential valuation to a multi-crore industrial build."
      >
        <WhyChooseUs />
      </Section>

      <Section
        index="03 / Leadership"
        eyebrow="Meet our founders"
        title="Two directors. One accountable team."
        intro="Every project is led personally by a founder — ensuring continuity, technical accountability and long-term client relationships."
      >
        <Founders />
      </Section>

      <Section className="bg-ink text-white" align="center">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow text-white/70">Start a project</div>
          <h2 className="mt-6 font-display font-light text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-white">
            Ready to work with a team that
            <span className="block italic text-white/70">
              treats your project as its own?
            </span>
          </h2>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white pl-6 pr-2 py-2 text-[13px] font-medium text-ink hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
            >
              Request Consultation
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
                →
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
