"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative, pointer-events-free background: a cyber grid plus two neon
 * orbs that drift subtly with scroll. Parent must be `relative overflow-hidden`.
 * No-op transform under prefers-reduced-motion.
 */
export function ParallaxBg({ className = "" }: { className?: string }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const orbARef = useRef<HTMLDivElement>(null);
  const orbBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    let ticking = false;

    const apply = () => {
      const y = window.scrollY;
      if (gridRef.current)
        gridRef.current.style.transform = `translate3d(0, ${y * 0.06}px, 0)`;
      if (orbARef.current)
        orbARef.current.style.transform = `translate3d(0, ${y * -0.05}px, 0)`;
      if (orbBRef.current)
        orbBRef.current.style.transform = `translate3d(0, ${y * 0.08}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div ref={gridRef} className="cn-grid absolute inset-0 will-change-transform" />
      <div
        ref={orbARef}
        className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(158,48,169,0.20) 0%, rgba(158,48,169,0) 70%)",
        }}
      />
      <div
        ref={orbBRef}
        className="absolute top-1/3 -left-32 h-[32rem] w-[32rem] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(64,144,181,0.18) 0%, rgba(64,144,181,0) 70%)",
        }}
      />
    </div>
  );
}
