import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { serviceDetails } from "@/data/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="theme-bg-primary transition-colors duration-[1000ms]">
      {/* Hero */}
      <PageHero
        label={service.subtitle}
        title={<>{service.title}</>}
        description={service.longDescription}
      >
        <Link
          href="/services"
          className="inline-flex items-center text-sm theme-text-subtle hover:theme-text-primary mb-8 transition-colors"
        >
          <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>
      </PageHero>

      {/* Features */}
      <section className="py-24 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light theme-text-primary mb-12">
            What We <span className="font-semibold dark:text-red-500">Deliver</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 theme-bg-card border theme-border rounded-lg"
              >
                <h3 className="text-lg font-medium theme-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="theme-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      {service.useCases && service.useCases.length > 0 && (
        <section className="py-24 theme-bg-secondary transition-colors duration-[1000ms]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-light theme-text-primary mb-3">
              Real-World <span className="font-semibold dark:text-red-500">Examples</span>
            </h2>
            <p className="theme-text-muted mb-12">What this looks like in practice for our clients.</p>

            <div className="grid md:grid-cols-3 gap-6">
              {service.useCases.map((useCase) => (
                <div key={useCase.title} className="relative flex flex-col p-6 theme-bg-card border theme-border rounded-lg overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: useCase.barGradient }} />
                  <span className={`inline-block self-start px-2.5 py-0.5 rounded-full text-xs font-medium mb-4 ${useCase.typeClass}`}>
                    {useCase.type}
                  </span>
                  <h3 className="text-lg font-medium theme-text-primary mb-3">{useCase.title}</h3>
                  <p className="theme-text-muted text-sm leading-relaxed mb-6 flex-1">{useCase.description}</p>
                  <div className="flex items-start gap-2 pt-4 border-t theme-border">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--accent)] dark:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-sm font-medium text-[var(--accent)] dark:text-red-400">{useCase.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="py-24 theme-bg-secondary transition-colors duration-[1000ms]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-light theme-text-primary mb-8">
                The <span className="font-semibold dark:text-red-500">Benefits</span>
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-[var(--accent)] dark:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="theme-text-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video theme-bg-tertiary rounded-lg border theme-border flex items-center justify-center">
              <span className="theme-text-subtle text-sm tracking-wide">
                {service.title}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to Get Started?"
        description={`Let's discuss how ${service.title} can transform your business operations.`}
        buttonText="Contact Us"
      />
    </div>
  );
}
