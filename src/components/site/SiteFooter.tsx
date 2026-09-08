import { Link } from "@tanstack/react-router";
import { BrandLogo } from "./BrandLogo";
import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Linkedin, Instagram } from "lucide-react";

const SERVICES = [
  "Construction Services",
  "Property Valuation",
  "Architecture",
  "Civil Engineering",
  "Municipal Drawings",
  "DPR Preparation",
  "Interior, Exterior & Landscape Design",
  "EIA / IEE",
];

export function SiteFooter() {
  return (
    <footer className="bg-inverse text-inverse-foreground/80">
      <div className="container-x pt-16 pb-10">
        {/* Top row — brand + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-10 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.32em] text-white/45">
              Modern Edge · Architects &amp; Engineers Pvt. Ltd.
            </div>
            <h2 className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.025em] text-white">
              Engineering the future
              <span className="block italic text-white/60">
                of Nepal's built environment.
              </span>
            </h2>
          </div>
          <Link
            to="/contact"
            className="interactive-press group inline-flex items-center gap-3 rounded-full bg-white pl-6 pr-2 py-2 text-[13px] font-medium text-inverse hover:bg-primary hover:text-primary-foreground self-start lg:self-auto"
          >
            Start a project
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-inverse text-inverse-foreground transition-transform duration-500 group-hover:translate-x-0.5">
              <ArrowUpRight size={15} aria-hidden />
            </span>
          </Link>
        </div>

        {/* Content grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8 py-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <BrandLogo forceWhite className="h-11 w-auto" size={44} loading="lazy" />
              <div className="leading-tight">
                <div className="font-display text-white text-lg">Modern Edge</div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-white/50 mt-1">
                  Architects &amp; Engineers
                </div>
                <div className="text-[9.5px] uppercase tracking-[0.22em] text-white/35 mt-1.5">
                  Architecture · Engineering · Valuation · Construction
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-[1.7] text-white/60">
              A multidisciplinary engineering consultancy delivering architecture,
              civil engineering, construction and property valuation across Nepal,
              established in 2024.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">
              Navigate
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/process", label: "Process" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="nav-link text-white/70 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">
              Services
            </div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="nav-link text-white/60 hover:text-white"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 min-w-0">
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">
              Get in touch
            </div>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-primary shrink-0" aria-hidden />
                <div>
                  <div className="text-white">Head Office · Duhabi-06, Sunsari</div>
                  <div className="text-white/60">Koshi Province, Nepal</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-primary shrink-0" aria-hidden />
                <div>
                  <div className="text-white">Branch Office · Biratnagar-10, Morang</div>
                  <div className="text-white/60">Koshi Province, Nepal</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-primary shrink-0" aria-hidden />
                <div className="space-y-1">
                  <a
                    href="mailto:meae.np@gmail.com"
                    className="nav-link block text-white/85 hover:text-white"
                  >
                    meae.np@gmail.com
                  </a>
                  <a
                    href="mailto:info@modernedge.com.np"
                    className="nav-link block text-white/60 hover:text-white"
                  >
                    info@modernedge.com.np
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-primary shrink-0" aria-hidden />
                <div className="space-y-1 text-white/75">
                  <div>
                    <a href="tel:+9779852059599" className="nav-link hover:text-white">
                      Kiran · +977 98520 59599
                    </a>
                  </div>
                  <div>
                    <a href="tel:+9779767784543" className="nav-link hover:text-white">
                      Samir · +977 97677 84543
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-5 border-t border-white/10 pt-7 text-xs text-white/40 md:grid-cols-3 md:items-center">
          <div className="space-y-1">
            <div>© 2026 Modern Edge Architects &amp; Engineers Pvt. Ltd.</div>
            <div>All rights reserved.</div>
          </div>
          <div className="flex items-center gap-3 md:justify-self-center">
            {[
              { href: "https://www.facebook.com/meae.np/", label: "Facebook", Icon: Facebook },
              { href: "https://www.linkedin.com/company/meaenp", label: "LinkedIn", Icon: Linkedin },
              { href: "https://www.instagram.com/meae.np", label: "Instagram", Icon: Instagram },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="interactive-press inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white hover:border-primary hover:bg-primary"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <div className="uppercase tracking-[0.22em] md:justify-self-end">
            Duhabi · Biratnagar · Nepal
          </div>
        </div>
      </div>
    </footer>
  );
}
