"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { BilingualHoverText } from "@/components/BilingualHoverText";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/services";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<"dark" | "light" | null>(null);
  const bgVideoDLRef = useRef<HTMLVideoElement>(null);
  const bgVideoLDRef = useRef<HTMLVideoElement>(null);
  const [bgVideoDLVisible, setBgVideoDLVisible] = useState(false);
  const [bgVideoLDVisible, setBgVideoLDVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // On load, show the appropriate video on its last frame
    if (resolvedTheme === "dark") {
      if (bgVideoLDRef.current) {
        bgVideoLDRef.current.load();
        bgVideoLDRef.current.addEventListener("loadedmetadata", () => {
          bgVideoLDRef.current!.currentTime = bgVideoLDRef.current!.duration;
        }, { once: true });
      }
      setBgVideoLDVisible(true);
    } else {
      if (bgVideoDLRef.current) {
        bgVideoDLRef.current.load();
        bgVideoDLRef.current.addEventListener("loadedmetadata", () => {
          bgVideoDLRef.current!.currentTime = bgVideoDLRef.current!.duration;
        }, { once: true });
      }
      setBgVideoDLVisible(true);
    }
  }, []);

  useEffect(() => {
    const handleTransitionStart = (e: CustomEvent) => {
      setTransitionDirection(e.detail);
      setIsTransitioning(true);

      if (e.detail === "dark" && bgVideoLDRef.current) {
        setBgVideoDLVisible(false);
        bgVideoLDRef.current.currentTime = 0;
        bgVideoLDRef.current.play();
        setBgVideoLDVisible(true);
      } else if (e.detail === "light" && bgVideoDLRef.current) {
        setBgVideoLDVisible(false);
        bgVideoDLRef.current.currentTime = 0;
        bgVideoDLRef.current.play();
        setBgVideoDLVisible(true);
      }
    };

    window.addEventListener("themeTransitionStart", handleTransitionStart as EventListener);
    return () => {
      window.removeEventListener("themeTransitionStart", handleTransitionStart as EventListener);
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

        {/* Background video - dark to light */}
        <div className={`absolute inset-0 z-[1] ${bgVideoDLVisible ? 'visible' : 'invisible'}`}>
          <video
            ref={bgVideoDLRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'blur(4px)', transform: 'scale(1.05)' }}
            muted
            playsInline
            preload="auto"
            onEnded={handleBgVideoEnd}
          >
            <source src="/backgrounddl.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Background video - light to dark */}
        <div className={`absolute inset-0 z-[1] ${bgVideoLDVisible ? 'visible' : 'invisible'}`}>
          <video
            ref={bgVideoLDRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'blur(4px)', transform: 'scale(1.05)' }}
            muted
            playsInline
            preload="auto"
            onEnded={handleBgVideoEnd}
          >
            <source src="/backgroundld.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark overlay - dark mode only */}
        <div className={`absolute inset-0 z-[2] bg-black/50 transition-opacity duration-500 ${bgVideoLDVisible ? 'opacity-100' : 'opacity-0'}`} />

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
                <BilingualHoverText
                  english="Begin Your Journey"
                  japanese="旅を始めよう"
                  onClick={() => window.dispatchEvent(new CustomEvent("open-chat-widget"))}
                  className="px-8 py-3 text-sm font-medium tracking-wide theme-btn-primary rounded transition-colors duration-300"
                  height="lg"
                />
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
