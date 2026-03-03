import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { serviceDetails } from "@/data/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceDetails[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Cyber Ninjas`,
    description: service.longDescription,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) notFound();

  return (
    <div className="theme-bg-primary">

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-28 theme-bg-secondary relative">
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm theme-text-subtle hover:theme-text-primary transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
                {service.subtitle}
              </p>
              <h1 className="text-5xl md:text-6xl font-light theme-text-primary leading-tight mb-6">
                {service.title}
              </h1>
              <p className="text-lg theme-text-muted leading-relaxed mb-10">
                {service.longDescription}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium theme-text-primary dark:text-red-500 hover:opacity-70 transition-opacity"
              >
                Discuss a project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Logo / visual */}
            <div className="flex items-center justify-center">
              {service.logo ? (
                <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-10 dark:opacity-20 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(158,48,169,0.4) 0%, rgba(64,144,181,0.3) 50%, transparent 70%)",
                      filter: "blur(40px)",
                    }}
                  />
                  <img
                    src={service.logo}
                    alt={service.title}
                    className="relative w-48 h-48 object-contain opacity-60 dark:opacity-50"
                    style={{ filter: "drop-shadow(0 0 40px rgba(64,144,181,0.25))" }}
                  />
                </div>
              ) : (
                <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-10 dark:opacity-20 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(158,48,169,0.4) 0%, rgba(64,144,181,0.3) 50%, transparent 70%)",
                      filter: "blur(40px)",
                    }}
                  />
                  <svg
                    className="relative w-32 h-32 theme-text-subtle opacity-30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={0.75}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── How We Work ──────────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-dark relative overflow-hidden">
        {/* Dot grid atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-sm font-medium tracking-[0.3em] text-stone-500 dark:text-red-500/70 uppercase mb-4">
              Engagement Model
            </p>
            <h2 className="text-3xl font-light text-stone-100 mb-2">
              How We <span className="font-semibold text-red-500">Work</span>
            </h2>
            <p className="text-stone-400 text-sm max-w-lg">
              A structured process that gives you visibility and confidence at every stage.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {service.process.map((step, i) => (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-xl bg-stone-800/40 border border-stone-700/50 hover:border-stone-500/70 hover:bg-stone-800/60 transition-all duration-300 p-5 flex flex-col gap-3"
              >
                {/* Gradient top accent — progresses purple → teal across steps */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg,
                      rgba(158,48,169,${Math.max(0.15, 0.75 - i * 0.12)}) 0%,
                      rgba(64,144,181,${Math.min(0.75, 0.15 + i * 0.12)}) 100%)`,
                  }}
                />
                {/* Ghost number */}
                <span
                  className="absolute -bottom-1 right-2 text-8xl font-black select-none pointer-events-none tabular-nums leading-none"
                  style={{ color: "rgba(255,255,255,0.04)" }}
                >
                  {i + 1}
                </span>
                {/* Step badge */}
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-stone-600 bg-stone-800 text-[10px] font-medium text-stone-400 tabular-nums shrink-0 group-hover:border-stone-500 transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-stone-200 leading-snug">{step.title}</p>
                <p className="text-xs text-stone-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What We Deliver ──────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-primary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl font-light theme-text-primary">
              What We <span className="font-semibold dark:text-red-500">Deliver</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, i) => (
              <div key={feature.title} className="group relative rounded-lg p-px">
                <span className="service-card-gradient absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
                <span className="absolute inset-0 rounded-lg border theme-border group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
                <div className="relative theme-bg-card rounded-[7px] p-6 flex gap-5">
                  <span className="text-2xl font-light theme-text-subtle tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-medium theme-text-primary mb-2 group-hover:dark:text-red-500 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm theme-text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits + Audience ──────────────────────────────────────────── */}
      <section className="py-24 theme-bg-primary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Benefits */}
            <div>
              <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
                Outcomes
              </p>
              <h2 className="text-3xl font-light theme-text-primary mb-8">
                The <span className="font-semibold dark:text-red-500">Benefits</span>
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={benefit} className="group relative rounded-lg p-px">
                    <span className="service-card-gradient absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
                    <span className="absolute inset-0 rounded-lg border theme-border group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
                    <div className="relative theme-bg-card rounded-[7px] p-5 flex items-start gap-4">
                      <span className="text-2xl font-light theme-text-subtle tabular-nums shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm theme-text-muted leading-relaxed">{benefit}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audience */}
            <div>
              <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
                Suitability
              </p>
              <h2 className="text-3xl font-light theme-text-primary mb-8">
                Who This Is <span className="font-semibold dark:text-red-500">For</span>
              </h2>
              <ul className="space-y-3">
                {service.audience.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] dark:bg-red-500 shrink-0" />
                    <span className="text-sm theme-text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <CTASection
        heading={`Ready to discuss ${service.title}?`}
        description="Every engagement starts with a conversation. Tell us about your challenge and we will tell you honestly whether and how we can help."
        buttonText="Start the Conversation"
      />
    </div>
  );
}
