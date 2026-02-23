"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { BilingualHoverText } from "@/components/BilingualHoverText";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { NeonButton } from "@/components/NeonButton";
import { services } from "@/data/services";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<"dark" | "light" | null>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const reverseRafRef = useRef<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dark = resolvedTheme === "dark";
    setIsDarkMode(dark);
    // On load, show the video at the appropriate frame
    const video = bgVideoRef.current;
    if (video) {
      video.load();
      video.addEventListener("loadedmetadata", () => {
        // dark-to-light video: frame 0 = dark, last frame = light
        video.currentTime = dark ? 0 : video.duration;
      }, { once: true });
    }
  }, []);

  useEffect(() => {
    const handleTransitionStart = (e: CustomEvent) => {
      setTransitionDirection(e.detail);
      setIsTransitioning(true);
      const video = bgVideoRef.current;
      if (!video) return;

      // Cancel any ongoing reverse playback
      if (reverseRafRef.current) {
        cancelAnimationFrame(reverseRafRef.current);
        reverseRafRef.current = null;
      }

      if (e.detail === "light") {
        // Light-to-dark → play video forward (dark end to light end)
        // Actually: dark-to-light video forward = dark→light, so for "going light" play forward
        video.currentTime = 0;
        video.playbackRate = 1.5;
        video.play();
        setIsDarkMode(false);
      } else {
        // Going dark → reverse-play the dark-to-light video (light→dark) at 2x
        video.pause();
        setIsDarkMode(true);
        let lastTime = performance.now();
        const step = (now: number) => {
          const delta = (now - lastTime) / 1000;
          lastTime = now;
          video.currentTime = Math.max(0, video.currentTime - delta * 1.5);
          if (video.currentTime > 0) {
            reverseRafRef.current = requestAnimationFrame(step);
          } else {
            setIsTransitioning(false);
            setTransitionDirection(null);
            reverseRafRef.current = null;
          }
        };
        reverseRafRef.current = requestAnimationFrame(step);
      }
    };

    window.addEventListener("themeTransitionStart", handleTransitionStart as EventListener);
    return () => {
      window.removeEventListener("themeTransitionStart", handleTransitionStart as EventListener);
      if (reverseRafRef.current) cancelAnimationFrame(reverseRafRef.current);
    };
  }, []);

  const handleBgVideoEnd = () => {
    setIsTransitioning(false);
    setTransitionDirection(null);
  };

  return (
    <div className="theme-bg-primary transition-colors duration-[1000ms] relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden z-10 -mt-16 pt-16">
        <div className="absolute inset-0 theme-bg-tertiary" />

        {/* Background video - single video, reversed for dark transition */}
        <div className="absolute inset-0 z-[1]">
          <video
            ref={bgVideoRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'blur(4px)' }}
            muted
            playsInline
            preload="auto"
            onEnded={handleBgVideoEnd}
          >
            <source src="/backgrounddl.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark overlay - dark mode only */}
        <div className={`absolute inset-0 z-[2] bg-black/50 transition-opacity duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`} />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-[2] bg-gradient-to-t from-[var(--bg-secondary)] to-transparent" />

        {/* Subtle pattern overlay - dark mode */}
        <div
          className="absolute inset-0 opacity-0 dark:opacity-20 transition-opacity duration-500 z-[3]"
          style={{
            backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="text-center lg:text-left stagger-children">
              <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
                <span className="relative group/tip inline-block">
                  <span className="underline decoration-dotted underline-offset-4 cursor-x">Boutique</span>
                  <span className="absolute bottom-full left-0 mb-1 text-xs normal-case tracking-normal opacity-0 group-hover/tip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    <span className="font-semibold theme-text-primary">rōnin 浪人</span>
                    <span className="block theme-text-muted mt-0.5">We serve the mission, not the machine.</span>
                  </span>
                </span>
                {" "}Consultancy
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light theme-text-primary leading-tight mb-6">
                Digital Mastery,{" "}
                <span className="font-semibold theme-text-secondary dark:text-red-500">
                  Delivered
                </span>
              </h1>
              <p className="text-lg theme-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                We partner with a select few clients to deliver transformative technology solutions.
                AI enablement and digital transformation, crafted with precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NeonButton
                  onClick={() => window.dispatchEvent(new CustomEvent("open-chat-widget"))}
                >
                  Begin Your Journey
                </NeonButton>
                <BilingualHoverText
                  english="Our Services"
                  japanese="サービス"
                  href="/services"
                  className="px-8 py-3 text-sm font-medium tracking-wide border theme-border theme-text-secondary rounded hover:theme-bg-secondary transition-colors duration-300"
                  height="lg"
                />
              </div>
            </div>

            {/* Japanese proverb */}
            <div className="text-center lg:text-left">
              <p className="text-2xl md:text-3xl font-light tracking-wider theme-text-primary dark:text-stone-300 font-serif">
                石の上にも三年
              </p>
              <p className="mt-2 text-sm font-medium tracking-widest uppercase theme-text-secondary dark:text-red-500/80">
                Three years on a stone
              </p>
              <p className="mt-1 text-xs theme-text-muted italic max-w-xs mx-auto lg:mx-0">
                Even the most difficult tasks can be conquered with patience and endurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative z-10 theme-bg-primary transition-colors duration-[1000ms]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Expertise
            </p>
            <h2 className="text-3xl font-light theme-text-primary">
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Ready to Transform?"
        description="We're selective about the partnerships we form. If you're serious about digital transformation, let's explore how we can work together."
        buttonText="Start the Conversation"
      />
    </div>
  );
}
