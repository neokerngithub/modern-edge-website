import { Link } from "@tanstack/react-router";
import { BrandLogo } from "./BrandLogo";
import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Linkedin, Instagram } from "lucide-react";

const SERVICES = [
  "Property Valuation",
  "Construction Services",
  "Architecture",
  "Civil Engineering",
  "Municipal Drawings",
  "DPR Preparation",
  "Interior Design",
  "Landscape Design",
  "Real Estate Consultancy",
];

export function SiteFooter() {
  return (
    <footer className="bg-inverse text-inverse-foreground/80">
      <div className="container-x pt-24 pb-12">
        {/* Top row — brand + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-16 border-b border-white/10">
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
            className="group inline-flex items-center gap-3 rounded-full bg-white pl-6 pr-2 py-2 text-[13px] font-medium text-inverse hover:bg-primary hover:text-primary-foreground transition-colors duration-500 self-start lg:self-auto"
          >
            Start a project
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-inverse text-inverse-foreground transition-transform duration-500 group-hover:translate-x-0.5">
              <ArrowUpRight size={15} aria-hidden />
            </span>
          </Link>
        </div>

        {/* Content grid */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-8 py-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Modern Edge Architects & Engineers logo"
                width={44}
                height={44}
                loading="lazy"
                className="h-11 w-11 rounded-md object-contain"
              />
              <div className="leading-tight">
                <div className="font-display text-white text-lg">Modern Edge</div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-white/50 mt-1">
                  Architects &amp; Engineers Pvt. Ltd.
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-[1.7] text-white/60">
              A multidisciplinary engineering consultancy delivering architecture,
              civil engineering, construction and bank-grade property valuation
              across Nepal.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">
              Navigate
            </div>
            <ul className="mt-6 space-y-3 text-sm">
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
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-xs uppercase tracking-[0.24em] text-white/40">
              Services
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-white/60">
              {SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 min-w-0">
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">
              Get in touch
            </div>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-primary shrink-0" aria-hidden />
                <div>
                  <div className="text-white">Main Office · Duhabi-06</div>
                  <div className="text-white/60">Sunsari, Koshi Province, Nepal</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-primary shrink-0" aria-hidden />
                <div>
                  <div className="text-white">Branch Office · Biratnagar-10</div>
                  <div className="text-white/60">Morang, Koshi Province, Nepal</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-primary shrink-0" aria-hidden />
                <div className="space-y-1">
                  <a
                    href="mailto:info@modernedge.com.np"
                    className="block text-white/85 hover:text-white transition-colors"
                  >
                    info@modernedge.com.np
                  </a>
                  <a
                    href="mailto:meae.np@gmail.com"
                    className="block text-white/60 hover:text-white transition-colors"
                  >
                    meae.np@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-primary shrink-0" aria-hidden />
                <div className="space-y-1 text-white/75">
                  <div>
                    <a href="tel:+9779852059599" className="hover:text-white">
                      Kiran · +977 98520 59599
                    </a>
                  </div>
                  <div>
                    <a href="tel:+9779819015015" className="hover:text-white">
                      Samir · +977 98190 15015
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} Modern Edge Architects &amp; Engineers
            Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white hover:border-primary hover:bg-primary transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <div className="uppercase tracking-[0.22em]">
            Duhabi · Biratnagar · Nepal
          </div>
        </div>
      </div>
    </footer>
  );
}
