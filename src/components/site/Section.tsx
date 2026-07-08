import type { ReactNode } from "react";

export function Section({
  id,
  index,
  eyebrow,
  title,
  intro,
  align = "left",
  children,
  className = "",
}: {
  id?: string;
  index?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
}) {
  const centered = align === "center";
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || intro) && (
          <header
            className={`mb-14 md:mb-20 ${
              centered ? "mx-auto max-w-3xl text-center" : "max-w-4xl"
            }`}
          >
            {(index || eyebrow) && (
              <div
                className={`flex items-center gap-4 ${
                  centered ? "justify-center" : ""
                }`}
              >
                {index && (
                  <span className="font-display text-xs text-primary tabular-nums tracking-[0.14em]">
                    {index}
                  </span>
                )}
                {index && eyebrow && (
                  <span aria-hidden className="h-px w-8 bg-primary/60" />
                )}
                {eyebrow && <span className="eyebrow">{eyebrow}</span>}
              </div>
            )}
            {title && (
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.022em] text-ink">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-ink-muted">
                {intro}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
