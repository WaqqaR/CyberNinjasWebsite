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

  const serviceIcons = [
    // Copilot Studio — chat bot
    <svg key="copilot" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>,
    // Power Platform — layers / stack
    <svg key="power" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>,
    // Dynamics CE — users / people
    <svg key="dynamics" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
    // Bespoke Applications — code brackets
    <svg key="bespoke" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>,
  ];

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
        {/* Dark mode: atmospheric teal panel that fades in/out at edges */}
        <div
          className="absolute inset-0 hidden dark:block pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(15,70,65,0.13) 12%, rgba(15,70,65,0.13) 88%, transparent 100%)",
          }}
        />
        {/* Dark mode: thin border lines top & bottom */}
        <div className="absolute top-0 inset-x-0 h-px hidden dark:block bg-gradient-to-r from-transparent via-teal-700/30 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px hidden dark:block bg-gradient-to-r from-transparent via-teal-700/30 to-transparent pointer-events-none" />
        {/* Subtle dot-grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Floating service logos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          {/* CopilotStudio — top-left, large */}
          <img src="/CopilotStudio.webp" alt=""
            className="absolute opacity-[0.22] dark:opacity-[0.18]"
            style={{ width: 200, top: '6%', left: '2%', filter: 'blur(3px)', animation: 'float-1 13s ease-in-out infinite' }}
          />
          {/* PowerPlatform — top-right */}
          <img src="/PowerPlatform.webp" alt=""
            className="absolute opacity-[0.25] dark:opacity-[0.20]"
            style={{ width: 150, top: '4%', right: '6%', filter: 'blur(3px)', animation: 'float-2 11s ease-in-out infinite 2s' }}
          />
          {/* Dynamics365 — center-left */}
          <img src="/Dynamics365.svg" alt=""
            className="absolute opacity-[0.22] dark:opacity-[0.18]"
            style={{ width: 130, top: '44%', left: '5%', filter: 'blur(3px)', animation: 'float-3 15s ease-in-out infinite 1s' }}
          />
          {/* Power BI — bottom-right */}
          <img src="/powerbi.webp" alt=""
            className="absolute opacity-[0.18] dark:opacity-[0.14]"
            style={{ width: 110, bottom: '8%', right: '4%', filter: 'blur(4px)', animation: 'float-1 12s ease-in-out infinite 4s' }}
          />
          {/* PowerPlatform — bottom-left */}
          <img src="/PowerPlatform.webp" alt=""
            className="absolute opacity-[0.20] dark:opacity-[0.16]"
            style={{ width: 95, bottom: '12%', left: '10%', filter: 'blur(4px)', animation: 'float-2 14s ease-in-out infinite 6s' }}
          />
          {/* Dynamics365 — upper-center-right */}
          <img src="/Dynamics365.svg" alt=""
            className="absolute opacity-[0.18] dark:opacity-[0.15]"
            style={{ width: 170, top: '18%', left: '52%', filter: 'blur(4px)', animation: 'float-3 16s ease-in-out infinite 3s' }}
          />
          {/* Power Automate — mid-right */}
          <img src="/PALogo.png" alt=""
            className="absolute opacity-[0.22] dark:opacity-[0.18]"
            style={{ width: 120, top: '38%', right: '3%', filter: 'blur(3px)', animation: 'float-1 14s ease-in-out infinite 1.5s' }}
          />
          {/* Power BI — bottom-center */}
          <img src="/powerbi.webp" alt=""
            className="absolute opacity-[0.20] dark:opacity-[0.16]"
            style={{ width: 140, bottom: '5%', left: '42%', filter: 'blur(3px)', animation: 'float-2 12s ease-in-out infinite 5s' }}
          />
          {/* Power Pages — top-center */}
          <img src="/PowerPages.webp" alt=""
            className="absolute opacity-[0.20] dark:opacity-[0.16]"
            style={{ width: 130, top: '2%', left: '28%', filter: 'blur(3px)', animation: 'float-3 13s ease-in-out infinite 2.5s' }}
          />
          {/* Azure — center-right */}
          <img src="/azure logo.svg" alt=""
            className="absolute opacity-[0.18] dark:opacity-[0.15]"
            style={{ width: 115, top: '60%', right: '14%', filter: 'blur(4px)', animation: 'float-1 15s ease-in-out infinite 7s' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
                Expertise
              </p>
              <h2 className="text-3xl font-light theme-text-primary">
                Our Services
              </h2>
            </div>
            <a
              href="/services"
              className="hidden sm:flex items-center gap-2 text-sm theme-text-subtle hover:theme-text-primary transition-colors pb-1"
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
                index={i + 1}
                features={service.features}
                icon={serviceIcons[i]}
                hoverImage={
                  service.slug === "copilot-studio" ? "/CopilotStudio.webp" :
                  service.slug === "power-platform" ? "/PowerPlatform.webp" :
                  service.slug === "dynamics-ce" ? "/Dynamics365.svg" :
                  undefined
                }
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
