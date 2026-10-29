import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Landmark, Building, HandCoins } from "lucide-react";
import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import adbl from "@/assets/bfi/Agricultural_Development.png.asset.json";
import rbb from "@/assets/bfi/Rastriya_Banijya.png.asset.json";
import central from "@/assets/bfi/Central_Finance.png.asset.json";
import chhimek from "@/assets/bfi/Chhimek_Laghubitta.png.asset.json";
import himalayan from "@/assets/bfi/Himalayan_Laghubitta.png.asset.json";
import infinity from "@/assets/bfi/Infinity_Laghubitta.png.asset.json";
import swabalamban from "@/assets/bfi/Swalamban_Laghubitta.png.asset.json";
import nerude from "@/assets/bfi/Nerude_Mirmire_Laghubitta.png.asset.json";

const TITLE = "Property Valuation — Empaneled with 8 Banks & Financial Institutions | Modern Edge";
const DESC =
  "200+ property valuations completed since 2024. Modern Edge is empaneled with commercial banks, finance companies and laghubittas across Nepal for land, building and asset valuation.";
const URL = "https://modernedge.com.np/services/property-valuation";

export const Route = createFileRoute("/services_/property-valuation")({
  component: PropertyValuationPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});

type Bfi = { name: string; logo: { url: string } };

const GROUPS: { label: string; tag: string; icon: typeof Landmark; items: Bfi[] }[] = [
  {
    label: "Commercial Banks",
    tag: "Class A",
    icon: Landmark,
    items: [
      { name: "Agricultural Development Bank Limited", logo: adbl },
      { name: "Rastriya Banijya Bank Limited", logo: rbb },
    ],
  },
  {
    label: "Finance Companies",
    tag: "Class C",
    icon: Building,
    items: [{ name: "Central Finance Limited", logo: central }],
  },
  {
    label: "Microfinance Institutions (Laghubittas)",
    tag: "Class D",
    icon: HandCoins,
    items: [
      { name: "Chhimek Laghubitta", logo: chhimek },
      { name: "Himalayan Laghubitta", logo: himalayan },
      { name: "Infinity Laghubitta", logo: infinity },
      { name: "Swabalamban Laghubitta", logo: swabalamban },
      { name: "Nerude Mirmire Laghubitta", logo: nerude },
    ],
  },
];

const SCOPE = [
  "Residential land & buildings",
  "Commercial & industrial properties",
  "Institutional assets",
  "Bank & financial institution reporting",
];

function PropertyValuationPage() {
  return (
    <>
      <PageHeader
        index="02 / Services"
        breadcrumb="Property Valuation"
        eyebrow="Signature Practice · 02"
        title={
          <>
            Property Valuation.
            <span className="block text-ink-muted italic font-normal">
              Trusted by banks across Nepal.
            </span>
          </>
        }
        intro="Accurate, technically grounded property assessments for residential, commercial, industrial and institutional assets — prepared in accordance with bank and professional valuation reporting standards."
        meta={
          <div className="text-[11px] uppercase tracking-[0.24em] text-ink-muted space-y-2">
            <div>Commercial Banks</div>
            <div>Finance Companies</div>
            <div className="text-primary">Laghubittas</div>
          </div>
        }
      />

      <Section className="pt-10 md:pt-14">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden rounded-[20px] bg-inverse p-10 md:p-12 text-inverse-foreground">
            <div className="flex items-center gap-3 text-white/70 text-[11px] uppercase tracking-[0.24em]">
              <BadgeCheck size={16} aria-hidden className="text-primary" />
              Trust Record
            </div>
            <div className="mt-8 font-display font-light text-6xl md:text-7xl tracking-[-0.03em] text-white">
              200+
            </div>
            <p className="mt-4 text-lg md:text-xl text-white/85 max-w-md">
              Successful Property Valuations Completed Since 2024
            </p>
            <Link
              to="/contact"
              className="interactive-press group mt-10 inline-flex items-center gap-3 rounded-full bg-white pl-6 pr-2 py-2 text-[13px] font-medium text-inverse hover:bg-primary hover:text-primary-foreground"
            >
              Request Valuation Service
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-inverse text-inverse-foreground transition-colors duration-500 group-hover:bg-white group-hover:text-primary">
                →
              </span>
            </Link>
          </div>
          <div className="rounded-[20px] border border-hairline bg-card p-10 md:p-12">
            <div className="text-[11px] uppercase tracking-[0.24em] text-ink-muted">
              Official Empanelment
            </div>
            <ul className="mt-6 space-y-4">
              {GROUPS.map((g) => (
                <li key={g.label} className="flex items-start gap-3 text-ink">
                  <g.icon size={18} className="mt-0.5 text-primary" aria-hidden />
                  <span>
                    {g.label}
                    <span className="ml-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">{g.tag}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-hairline pt-6 text-[11px] uppercase tracking-[0.24em] text-ink-muted">
              Valuation Scope
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SCOPE.map((s) => (
                <li key={s} className="text-xs rounded-full border border-hairline px-3.5 py-1.5 text-ink/80">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        className="bg-surface"
        eyebrow="Empanelment"
        title="Trusted & Empaneled By Leading Financial Institutions"
      >
        <div className="space-y-10">
          {GROUPS.map((g) => (
            <div key={g.label}>
              <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-ink-muted">
                <span className="text-primary">{g.tag}</span>
                <span aria-hidden className="h-px w-8 bg-hairline" />
                {g.label}
              </div>
              <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {g.items.map((b) => (
                  <li
                    key={b.name}
                    className="flex flex-col items-center justify-center gap-3 rounded-[16px] border border-hairline bg-white p-5 text-center"
                  >
                    <img
                      src={b.logo.url}
                      alt={`${b.name} logo`}
                      loading="lazy"
                      decoding="async"
                      className="h-16 w-full object-contain grayscale-0 opacity-100 md:grayscale md:opacity-60 md:hover:grayscale-0 md:hover:opacity-100 transition-all duration-300"
                    />
                    <span className="text-[11px] leading-snug text-neutral-600">{b.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/contact"
            className="interactive-press inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-[13px] font-medium text-primary-foreground hover:bg-inverse"
          >
            Request Valuation Service →
          </Link>
        </div>
      </Section>
    </>
  );
}
