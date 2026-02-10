"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-14 h-7" />;
  }

  const handleToggle = () => {
    if (theme === "light") {
      window.dispatchEvent(new CustomEvent("themeTransitionStart", { detail: "dark" }));
      setTimeout(() => {
        setTheme("dark");
      }, 4000);
    } else {
      window.dispatchEvent(new CustomEvent("themeTransitionStart", { detail: "light" }));
      setTimeout(() => {
        setTheme("light");
      }, 4000);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="relative w-14 h-7 rounded-full transition-colors duration-[1000ms] focus:outline-none focus:ring-2 bg-[var(--border-color)]"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-all duration-500 flex items-center justify-center ${
          theme === "dark"
            ? "translate-x-7 bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-500/30"
            : "translate-x-0 bg-gradient-to-br from-amber-50 to-amber-100 shadow-md"
        }`}
      >
        {theme === "dark" ? (
          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        )}
      </span>
    </button>
  );
}
