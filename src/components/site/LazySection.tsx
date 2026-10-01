import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-based lazy mount: children render only once the placeholder
 * approaches the viewport (or immediately if IntersectionObserver is
 * unavailable, e.g. during SSR prerender).
 */
export function LazySection({
  children,
  rootMargin = "900px 0px",
  className = "",
}: {
  children: ReactNode;
  rootMargin?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    typeof window === "undefined" || !("IntersectionObserver" in window)
  );

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible, rootMargin]);

  // Reserve space until mounted so nothing below jumps; the parent
  // Section handles the single cohesive reveal animation.
  return (
    <div
      ref={ref}
      className={className}
      style={visible ? undefined : { minHeight: 560 }}
    >
      {visible ? children : null}
    </div>
  );
}
