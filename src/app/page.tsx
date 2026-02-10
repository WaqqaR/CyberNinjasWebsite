"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { BilingualHoverText } from "@/components/BilingualHoverText";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { Divider } from "@/components/Divider";
import { services } from "@/data/services";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<"dark" | "light" | null>(null);
  const videoToDarkRef = useRef<HTMLVideoElement>(null);
  const videoToLightRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    if (videoToDarkRef.current) videoToDarkRef.current.load();
    if (videoToLightRef.current) videoToLightRef.current.load();
  }, []);

  useEffect(() => {
    const handleTransitionStart = (e: CustomEvent) => {
      setTransitionDirection(e.detail);
      setIsTransitioning(true);

      if (e.detail === "dark" && videoToDarkRef.current) {
        videoToDarkRef.current.currentTime = 0;
        videoToDarkRef.current.play();
      } else if (e.detail === "light" && videoToLightRef.current) {
        videoToLightRef.current.currentTime = 0;
        videoToLightRef.current.play();
      }
    };

    window.addEventListener("themeTransitionStart", handleTransitionStart as EventListener);
    return () => {
      window.removeEventListener("themeTransitionStart", handleTransitionStart as EventListener);
    };
  }, []);

  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsTransitioning(false);
    setTransitionDirection(null);
    setVideoPlaying(false);
  };

  return (
    <div className="theme-bg-primary transition-colors duration-[1000ms] relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 theme-bg-tertiary" />

        {/* Subtle pattern overlay - light mode */}
        <div
          className="absolute inset-0 opacity-30 dark:opacity-0 transition-opacity duration-500"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--border-color) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Subtle pattern overlay - dark mode */}
        <div
          className="absolute inset-0 opacity-0 dark:opacity-20 transition-opacity duration-500"
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
                  href="/contact"
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

            {/* Hero image/video */}
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="relative aspect-square" style={{ boxShadow: 'inset 0 0 40px 20px var(--bg-primary)' }}>
                {mounted && (
                  <>
                    {/* Transition video - light to dark */}
                    <div className={`absolute inset-0 z-10 transition-opacity duration-100 ${
                      isTransitioning && transitionDirection === "dark" && videoPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}>
                      <video
                        ref={videoToDarkRef}
                        className="w-full h-full object-contain transition-none"
                        muted
                        playsInline
                        preload="auto"
                        onPlay={handleVideoPlay}
                        onEnded={handleVideoEnd}
                      >
                        <source src="/darklighttransition.webm" type="video/webm" />
                        <source src="/darklighttransition.mp4" type="video/mp4" />
                      </video>
                    </div>

                    {/* Transition video - dark to light */}
                    <div className={`absolute inset-0 z-10 transition-opacity duration-100 ${
                      isTransitioning && transitionDirection === "light" && videoPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}>
                      <video
                        ref={videoToLightRef}
                        className="w-full h-full object-contain transition-none"
                        muted
                        playsInline
                        preload="auto"
                        onPlay={handleVideoPlay}
                        onEnded={handleVideoEnd}
                      >
                        <source src="/darklighttransition2.webm" type="video/webm" />
                        <source src="/darklighttransition2.mp4" type="video/mp4" />
                      </video>
                    </div>

                    {/* Static images */}
                    <div className={`relative w-full h-full transition-opacity duration-500 ${
                      isTransitioning ? "opacity-0" : "opacity-100"
                    }`}>
                      <Image
                        src={resolvedTheme === "dark"
                          ? "/cyberninjas-bannerart-light.png"
                          : "/cyberninjas-bannerart-dark.png"
                        }
                        alt="Cyber Ninjas"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </>
                )}
                {!mounted && (
                  <div className="w-full h-full theme-bg-secondary animate-pulse rounded-lg" />
                )}
              </div>

              {/* Japanese proverb */}
              <div className="mt-6 text-center">
                <p className="text-2xl md:text-3xl font-light tracking-wider theme-text-primary dark:text-stone-300 font-serif">
                  石の上にも三年
                </p>
                <p className="mt-2 text-sm font-medium tracking-widest uppercase theme-text-secondary dark:text-red-500/80">
                  Three years on a stone
                </p>
                <p className="mt-1 text-xs theme-text-muted italic max-w-xs mx-auto">
                  Even the most difficult tasks can be conquered with patience and endurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 relative z-10 theme-bg-secondary transition-colors duration-[1000ms]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light theme-text-primary mb-6">
              The Way of the <span className="relative group/ninja inline-block font-semibold theme-text-primary"><span className="underline decoration-dotted underline-offset-4 cursor-x">Ninja</span><span className="absolute bottom-full left-0 mb-1 text-xs font-normal opacity-0 group-hover/ninja:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"><span className="font-semibold theme-text-primary">shinobi 忍び</span><span className="block theme-text-muted mt-0.5">He who runs after two hares will catch neither.</span></span></span>
            </h2>
            <p className="text-lg theme-text-muted leading-relaxed">
              Like the masters of old, we believe in precision over volume. We take on only a
              handful of clients at any time, ensuring each engagement receives our complete
              focus and dedication. Your transformation deserves nothing less.
            </p>
          </div>

          <Divider fixed />
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
