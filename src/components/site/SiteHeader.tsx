import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
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
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuShown, setMenuShown] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
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

  // Keep the card mounted through the 200ms close transition, and mount it a
  // frame before it becomes visible so the open transition always plays.
  useEffect(() => {
    if (open) {
      setMenuMounted(true);
      const raf = window.requestAnimationFrame(() =>
        window.requestAnimationFrame(() => setMenuShown(true))
      );
      return () => window.cancelAnimationFrame(raf);
    }
    setMenuShown(false);
    const timer = window.setTimeout(() => setMenuMounted(false), 200);
    return () => window.clearTimeout(timer);
  }, [open]);

  // Clicking anywhere outside the dropdown card closes it.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current?.contains(target) ||
        toggleRef.current?.contains(target)
      )
        return;
      setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/90 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-x relative z-50 flex h-20 md:h-24 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Modern Edge — Home">
          <BrandLogo forceWhite={!solid} className="h-10 w-auto" size={40} />
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
              className={`nav-link relative text-[13px] tracking-wide ${
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
            className={`interactive-press group inline-flex items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 text-[12.5px] font-medium ${
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

        <div ref={toggleRef} className="lg:hidden flex items-center gap-2">
        <ThemeToggle tone={solid ? "auto" : "invert"} />
        <button
          type="button"
          className={`interactive-press -mr-2 p-2 transition-colors ${
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

      {menuMounted && (
        <div className="lg:hidden">
          {/* Full-viewport dimming overlay — portaled to <body> so the header's own
              backdrop-filter can't clip it. Zero blur; tapping anywhere closes the menu. */}
          {createPortal(
            <div
              aria-hidden
              className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 ease-out ${
                menuShown ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setOpen(false)}
            />,
            document.body
          )}
          {/* Compact dropdown card, right-aligned directly under the menu button */}
          <div
            ref={menuRef}
            className={`absolute right-3 md:right-8 xl:right-12 top-full z-50 mt-2 w-72 max-w-[calc(100vw-1.5rem)] origin-top-right overflow-hidden rounded-2xl border border-hairline bg-background shadow-elevated transition-all duration-200 ease-out ${
              menuShown ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <nav className="flex flex-col py-4 px-2 gap-1" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base text-ink transition-colors duration-200 hover:bg-muted hover:text-primary"
                  activeProps={{
                    className:
                      "rounded-xl px-4 py-3 text-base text-primary bg-muted/60 transition-colors duration-200 hover:bg-muted hover:text-primary",
                  }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="interactive-press mt-3 mx-2 mb-1 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Request Consultation
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
