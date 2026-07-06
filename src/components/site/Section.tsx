import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || intro) && (
          <div
            className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-16 md:mb-20`}
          >
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            {title && (
              <h2 className="mt-4 text-4xl md:text-5xl leading-[1.05] text-ink">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">{intro}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
