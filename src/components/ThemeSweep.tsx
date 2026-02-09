"use client";

import { useEffect, useState } from "react";

export function ThemeSweep() {
  const [sweepDirection, setSweepDirection] = useState<"dark" | "light" | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const handleTransitionStart = (e: CustomEvent) => {
      setSweepDirection(e.detail);
      setAnimating(true);
    };

    window.addEventListener("themeTransitionStart", handleTransitionStart as EventListener);
    return () => {
      window.removeEventListener("themeTransitionStart", handleTransitionStart as EventListener);
    };
  }, []);

  // Reset after the theme has actually changed (4s delay + buffer)
  useEffect(() => {
    if (!animating) return;
    const timer = setTimeout(() => {
      setAnimating(false);
      setSweepDirection(null);
    }, 4500);
    return () => clearTimeout(timer);
  }, [animating]);

  if (!sweepDirection) return null;

  const bgColor = sweepDirection === "dark"
    ? "rgb(19, 37, 37)"
    : "#e2d2c5";

  return (
    <div
      className="fixed inset-0 z-[999] pointer-events-none"
      style={{
        backgroundColor: bgColor,
        animation: animating ? "sweepLeftToRight 4s ease-in-out forwards" : "none",
      }}
    />
  );
}
