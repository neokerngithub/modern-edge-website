import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

/**
 * Consistent header for inner pages (About, Services, Process, Contact).
 * Provides breadcrumb, index, eyebrow and editorial headline hierarchy.
 */
export function PageHeader({
  index,
  eyebrow,
  breadcrumb,
  title,
  intro,
  meta,
}: {
  index: string;
  eyebrow: string;
  breadcrumb: string;
  title: ReactNode;
  intro?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <section className="pt-36 md:pt-44 pb-16 md:pb-24 border-b border-hairline bg-white">
      <div className="container-x">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-muted"
        >
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight size={12} aria-hidden className="text-ink-muted/60" />
          <span className="text-ink/70">{breadcrumb}</span>
        </nav>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-9">
            <div className="flex items-center gap-4">
              <span className="font-display text-xs text-primary tabular-nums tracking-[0.14em]">
                {index}
              </span>
              <span aria-hidden className="h-px w-10 bg-primary/60" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
            <h1 className="mt-8 font-display font-light text-[10.5vw] sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.03em] text-ink max-w-[16ch]">
              {title}
            </h1>
            {intro && (
              <p className="mt-8 max-w-2xl text-lg md:text-xl leading-[1.55] text-ink-muted">
                {intro}
              </p>
            )}
          </div>
          {meta && (
            <div className="lg:col-span-3 lg:justify-self-end lg:text-right">
              {meta}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
