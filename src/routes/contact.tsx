import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ContactBlock } from "@/components/site/ContactBlock";
import { PageHeader } from "@/components/site/PageHeader";

const CONTACT_TITLE =
  "Contact Modern Edge — Consultations, Valuations & Projects | Nepal";
const CONTACT_DESC =
  "Speak with Modern Edge Architects & Engineers. Offices in Duhabi (Sunsari) and Biratnagar (Morang), Nepal. Consultations, property valuations and project inquiries welcome.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: CONTACT_TITLE },
      { name: "description", content: CONTACT_DESC },
      { property: "og:title", content: CONTACT_TITLE },
      { property: "og:description", content: CONTACT_DESC },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: CONTACT_TITLE },
      { name: "twitter:description", content: CONTACT_DESC },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHeader
        index="04 / Contact"
        breadcrumb="Contact"
        eyebrow="Get in touch"
        title={
          <>
            Let's build something
            <span className="block text-ink-muted italic font-normal">
              extraordinary together.
            </span>
          </>
        }
        intro="Consultations, property valuations and project inquiries — our team responds within one business day."
        meta={
          <div className="text-[11px] uppercase tracking-[0.24em] text-ink-muted space-y-2">
            <div>+977 98520 59599</div>
            <div>+977 98190 15015</div>
            <div className="text-primary">Sun – Fri · 10:00 AM – 5:30 PM</div>
          </div>
        }
      />

      <Section className="pt-20 md:pt-28">
        <ContactBlock />
      </Section>
    </>
  );
}
