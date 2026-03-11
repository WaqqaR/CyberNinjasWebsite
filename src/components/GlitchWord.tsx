"use client";

import { useState, useEffect, useRef } from "react";

export function GlitchWord({ text, className }: { text: string; className?: string }) {
  const [glitch, setGlitch] = useState<null | { x1: number; x2: number; y1: number; y2: number }>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function schedule() {
      timerRef.current = setTimeout(() => {
        let frame = 0;
        const glitchFrames = [
          { x1: -5, x2: 0, y1: 15, y2: 55 },
          { x1: 4,  x2: 0, y1: 55, y2: 20 },
          { x1: -3, x2: 0, y1: 30, y2: 40 },
        ];
        const tick = () => {
          if (frame < glitchFrames.length) {
            setGlitch(glitchFrames[frame]);
            frame++;
            timerRef.current = setTimeout(tick, 80);
          } else {
            setGlitch(null);
            schedule();
          }
        };
        tick();
      }, 2500 + Math.random() * 1500);
    }
    schedule();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const clipBefore = glitch ? `inset(${glitch.y1}% 0 ${glitch.y2}% 0)` : "inset(0 0 100% 0)";
  const clipAfter  = glitch ? `inset(${glitch.y2}% 0 ${glitch.y1}% 0)` : "inset(0 0 100% 0)";

  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      {text}
      <span aria-hidden className="absolute inset-0 pointer-events-none" style={{
        color: "#9e30a9",
        clipPath: clipBefore,
        transform: glitch ? `translate(${glitch.x1}px, 0)` : "none",
        transition: "none",
      }}>{text}</span>
      <span aria-hidden className="absolute inset-0 pointer-events-none" style={{
        color: "#4090b5",
        clipPath: clipAfter,
        transform: glitch ? `translate(${glitch.x2 - glitch.x1}px, 0)` : "none",
        transition: "none",
      }}>{text}</span>
    </span>
  );
}
