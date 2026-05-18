"use client";

import { useEffect, useRef } from "react";

/**
 * Screen 3: a site whose hero video is scrubbed frame-by-frame as the page
 * scrolls. In the preview we auto-drive the scroll so the effect plays
 * itself on a loop (like the terminals). Scroll position → video.currentTime
 * + parallaxed text. prefers-reduced-motion shows a single static frame.
 *
 * Video preload is deferred until the frame is on screen (Core Web Vitals).
 */
export function ScrollScrubPreview({
  url = "localhost:3000",
  src = "/cyberninjaparallax.mp4",
}: {
  url?: string;
  src?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video) return;

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let start = 0;
    let running = false;
    let loaded = false;

    const CYCLE = 7000; // ms for a full scroll-through
    const HOLD = 1100; // ms paused at the bottom before looping

    const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

    // Eased mapping so the scrub feels like real momentum scrolling.
    const ease = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    function applyFrame(p: number) {
      const v = videoRef.current;
      if (v && v.duration && Number.isFinite(v.duration)) {
        const target = ease(p) * (v.duration - 0.05);
        // Only seek when the decoder is ready, and only on real change.
        if (v.readyState >= 2 && Math.abs(v.currentTime - target) > 0.01) {
          v.currentTime = target;
        }
      }
      // Parallax: hero rises and fades out; second line eases in.
      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate3d(0, ${(-p * 90).toFixed(2)}px, 0)`;
        layer1Ref.current.style.opacity = String(clamp01(1 - p * 1.7));
      }
      if (layer2Ref.current) {
        const q = clamp01((p - 0.35) / 0.5);
        layer2Ref.current.style.transform = `translate3d(0, ${((1 - q) * 70).toFixed(2)}px, 0)`;
        layer2Ref.current.style.opacity = String(q);
      }
      if (railRef.current) railRef.current.style.height = `${(p * 100).toFixed(1)}%`;
      if (hintRef.current) hintRef.current.style.opacity = String(clamp01(1 - p * 4));
    }

    function tick(now: number) {
      if (!running) return;
      if (!start) start = now;
      const elapsed = (now - start) % (CYCLE + HOLD);
      const p = clamp01(elapsed / CYCLE);
      applyFrame(p);
      raf = requestAnimationFrame(tick);
    }

    function startLoop() {
      if (running || reduced) return;
      running = true;
      start = 0;
      raf = requestAnimationFrame(tick);
    }
    function stopLoop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            if (!loaded) {
              loaded = true;
              video.preload = "auto";
              video.load();
            }
            if (reduced) {
              const setStill = () => applyFrame(0.5);
              if (video.readyState >= 1) setStill();
              else video.addEventListener("loadeddata", setStill, { once: true });
            } else {
              startLoop();
            }
          } else {
            stopLoop();
          }
        }
      },
      { threshold: 0.25 }
    );

    io.observe(root);
    return () => {
      io.disconnect();
      stopLoop();
    };
  }, []);

  return (
    <div className="cn-browser" aria-hidden="true">
      <div className="cn-browser-bar">
        <span className="cn-terminal-dot" style={{ background: "#ff5f57" }} />
        <span className="cn-terminal-dot" style={{ background: "#febc2e" }} />
        <span className="cn-terminal-dot" style={{ background: "#28c840" }} />
        <div className="cn-url">
          <span className="cn-url-dot" />
          http://{url}
        </div>
      </div>

      <div ref={rootRef} className="cn-scrub-body">
        <video
          ref={videoRef}
          className="cn-scrub-video"
          src={src}
          muted
          playsInline
          preload="none"
          disablePictureInPicture
        />
        <div className="cn-scrub-tint" />

        <nav className="cn-scrub-nav">
          <div className="cn-scrub-brand">
            <span>◈</span> CYBERNINJA
          </div>
          <div className="cn-scrub-links">
            <span>Work</span>
            <span>Studio</span>
            <span>Contact</span>
          </div>
        </nav>

        <div ref={layer1Ref} className="cn-scrub-layer cn-scrub-layer-1">
          <div className="cn-scrub-eyebrow">Autonomous · Encrypted</div>
          <div className="cn-scrub-title">CYBER NINJA</div>
        </div>

        <div ref={layer2Ref} className="cn-scrub-layer cn-scrub-layer-2">
          <div className="cn-scrub-sub">Cinematic visuals for cutting-edge web design.</div>
        </div>

        <div className="cn-scrub-rail">
          <div ref={railRef} className="cn-scrub-rail-fill" />
        </div>

        <div ref={hintRef} className="cn-scrub-hint">
          scroll ↓
        </div>

        <div className="cn-terminal-scan" />
      </div>
    </div>
  );
}
