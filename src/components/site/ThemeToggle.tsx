import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const THEME_SCRIPT = `(function(){try{var s=localStorage.getItem('me-theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export function ThemeToggle({ tone = "auto" }: { tone?: "auto" | "invert" }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("me-theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light mode" : "Dark mode"}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-500 ${
        tone === "invert"
          ? "border-white/25 text-white/80 hover:text-white hover:border-white/60"
          : "border-hairline text-ink-muted hover:text-primary hover:border-primary"
      }`}
    >
      {mounted && dark ? <Sun size={15} aria-hidden /> : <Moon size={15} aria-hidden />}
    </button>
  );
}
