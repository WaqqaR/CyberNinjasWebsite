import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

const serviceIcons = [
  // Power Platform — layers / stack
  <svg key="power" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>,
  // Dynamics CE — users / people
  <svg key="dynamics" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>,
  // Copilot Studio — chat bot
  <svg key="copilot" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>,
  // Bespoke Applications — code brackets
  <svg key="bespoke" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
];

const hoverImages: Record<string, string | undefined> = {
  "power-platform": "/PowerPlatform.webp",
  "dynamics-ce": "/Dynamics365.svg",
  "copilot-studio": "/CopilotStudio.webp",
  "bespoke-applications": undefined,
};

export default function ServicesPage() {
  return (
    <div className="theme-bg-primary">
      <PageHero
        label="Services"
        title={<>Precision <span className="font-semibold dark:text-red-500">Solutions</span></>}
        description="We specialise in Microsoft technologies and AI automation. Each engagement is crafted with care, ensuring solutions that genuinely transform how your business operates."
      />

      <section className="py-24 theme-bg-primary">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                hoverImage={hoverImages[service.slug]}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Not Sure Where to Start?"
        description="Every transformation journey is unique. Let's discuss your challenges and explore how we can help you achieve your goals."
        buttonText="Get in Touch"
      />
    </div>
  );
}
