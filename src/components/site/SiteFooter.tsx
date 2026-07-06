import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-x py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-display text-lg">
                M
              </span>
              <div className="leading-tight">
                <div className="font-display text-white text-lg">Modern Edge</div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-white/50 mt-1">
                  Architects &amp; Engineers Pvt. Ltd.
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              A multidisciplinary consultancy delivering architecture, engineering,
              valuation, construction, interior and landscape solutions across Nepal.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.22em] text-white/40">Navigate</div>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/process", label: "Process" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.22em] text-white/40">Get in touch</div>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-primary" />
                <div>
                  <div className="text-white">Main Office</div>
                  <div className="text-white/60">Duhabi-06, Sunsari, Nepal</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-primary" />
                <div>
                  <div className="text-white">Branch Office</div>
                  <div className="text-white/60">Biratnagar-10, Morang, Nepal</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-primary" />
                <a href="mailto:info@modernedge.com.np" className="text-white/70 hover:text-white">
                  info@modernedge.com.np
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-primary" />
                <div className="text-white/70">
                  Kiran: +977 98520 59599 · Samir: +977 97677 84543
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Modern Edge Architects &amp; Engineers Pvt. Ltd. All rights reserved.</div>
          <div>Duhabi · Biratnagar · Nepal</div>
        </div>
      </div>
    </footer>
  );
}
