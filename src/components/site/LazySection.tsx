import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-based lazy mount: children render only once the placeholder
 * approaches the viewport (or immediately if IntersectionObserver is
 * unavailable, e.g. during SSR prerender).
 */
export function LazySection({
  children,
  rootMargin = "400px 0px",
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

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-shown" : ""} ${className}`}
    >
      {visible ? children : null}
    </div>
  );
}
