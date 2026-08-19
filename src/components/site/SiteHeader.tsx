import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  // On non-home routes the top of the page is light, so treat header as "solid"
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/90 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 md:h-24 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Modern Edge — Home">
          <img
            src={logo}
            alt="Modern Edge Architects & Engineers logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-md object-contain"
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-[15px] tracking-tight transition-colors duration-500 ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              Modern Edge
            </span>
            <span
              className={`text-[9.5px] uppercase tracking-[0.28em] mt-1 transition-colors duration-500 ${
                solid ? "text-ink-muted" : "text-white/60"
              }`}
            >
              Architects &amp; Engineers
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative text-[13px] tracking-wide transition-colors ${
                solid ? "text-ink/75 hover:text-primary" : "text-white/80 hover:text-white"
              }`}
              activeProps={{
                className: `relative text-[13px] tracking-wide ${
                  solid ? "text-primary" : "text-white"
                }`,
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <ThemeToggle tone={solid ? "auto" : "invert"} />
          <span
            aria-hidden
            className={`h-6 w-px transition-colors duration-500 ${
              solid ? "bg-hairline" : "bg-white/20"
            }`}
          />
          <Link
            to="/contact"
            className={`group inline-flex items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 text-[12.5px] font-medium transition-colors duration-500 ${
              solid
                ? "bg-inverse text-inverse-foreground hover:bg-primary"
                : "bg-white text-inverse hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            Request Consultation
            <span
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-500 ${
                solid ? "bg-white text-inverse group-hover:bg-white group-hover:text-primary" : "bg-inverse text-inverse-foreground group-hover:bg-background group-hover:text-primary"
              }`}
            >
              →
            </span>
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
        <ThemeToggle tone={solid ? "auto" : "invert"} />
        <button
          type="button"
          className={` -mr-2 p-2 transition-colors ${
            solid ? "text-ink" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-background">
          <nav className="container-x flex flex-col py-6 gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-ink"
                activeProps={{ className: "py-3 text-base text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Request Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
