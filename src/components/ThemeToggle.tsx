"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-11 h-5" />;
  }

  const handleToggle = () => {
    if (transitioning) return;
    setTransitioning(true);

    if (theme === "light") {
      window.dispatchEvent(new CustomEvent("themeTransitionStart", { detail: "dark" }));
      setTimeout(() => {
        setTheme("dark");
        setTransitioning(false);
      }, 4000);
    } else {
      window.dispatchEvent(new CustomEvent("themeTransitionStart", { detail: "light" }));
      setTimeout(() => {
        setTheme("light");
        setTransitioning(false);
      }, 4000);
    }
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={handleToggle}
      className={`relative w-11 h-5 rounded-full focus:outline-none transition-all duration-[1000ms] ${transitioning ? "pointer-events-none" : ""}`}
      style={{
        background: isDark
          ? "linear-gradient(to right, #9e30a9, #4090b5)"
          : "linear-gradient(to right, rgba(158,48,169,0.25), rgba(64,144,181,0.35))",
        boxShadow: isDark
          ? "0 0 8px rgba(158,48,169,0.45), 0 0 18px rgba(64,144,181,0.25)"
          : "inset 0 0 0 1px rgba(158,48,169,0.3)",
      }}
      aria-label="Toggle theme"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-all duration-500 flex items-center justify-center ${
          isDark ? "translate-x-6 bg-white/90" : "translate-x-0 bg-white"
        } ${transitioning ? "animate-theme-toggle-pulse" : ""}`}
        style={{
          boxShadow: isDark
            ? "0 0 6px rgba(64,144,181,0.5)"
            : "0 1px 3px rgba(0,0,0,0.15)",
        }}
      >
        {isDark ? (
          <svg
            className={`w-2.5 h-2.5 text-[#4090b5] ${transitioning ? "animate-spin" : ""}`}
            style={transitioning ? { animationDuration: "2s" } : {}}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg
            className={`w-2.5 h-2.5 text-[#9e30a9] ${transitioning ? "animate-spin" : ""}`}
            style={transitioning ? { animationDuration: "2s" } : {}}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        )}
      </span>
    </button>
  );
}
