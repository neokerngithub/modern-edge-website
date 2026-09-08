/** Schedules non-critical work after the main thread settles post-mount. */
export function onIdle(cb: () => void, timeout = 300): () => void {
  const w = window as typeof window & {
    requestIdleCallback?: (fn: () => void, opts?: { timeout: number }) => number;
    cancelIdleCallback?: (id: number) => void;
  };
  if (typeof w.requestIdleCallback === "function") {
    const id = w.requestIdleCallback(cb, { timeout });
    return () => w.cancelIdleCallback?.(id);
  }
  const raf = requestAnimationFrame(() => requestAnimationFrame(cb));
  return () => cancelAnimationFrame(raf);
}
