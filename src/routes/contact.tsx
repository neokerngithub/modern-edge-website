import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ContactBlock } from "@/components/site/ContactBlock";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Modern Edge Architects & Engineers" },
      {
        name: "description",
        content:
          "Get in touch with Modern Edge. Offices in Duhabi and Biratnagar, Nepal. Consultations, valuations and project inquiries welcome.",
      },
      { property: "og:title", content: "Contact — Modern Edge" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 border-b border-hairline">
        <div className="container-x max-w-4xl">
          <div className="eyebrow">Contact</div>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em] text-ink">
            Let's build something
            <span className="block text-ink-muted italic font-normal">extraordinary.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Reach out for consultations, valuations or project inquiries. Our team responds
            within one business day.
          </p>
        </div>
      </section>

      <Section className="pt-24">
        <ContactBlock />
      </Section>
    </>
  );
}
