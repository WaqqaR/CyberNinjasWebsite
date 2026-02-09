import Link from "next/link";

const services = [
  {
    title: "Copilot Studio",
    slug: "copilot-studio",
    description: "Custom AI assistants tailored to your business processes and workflows.",
    features: [
      "Custom conversational AI",
      "Integration with Microsoft 365",
      "Workflow automation",
      "Knowledge base integration",
    ],
  },
  {
    title: "Power Platform",
    slug: "power-platform",
    description: "Low-code solutions that accelerate digital transformation across your organization.",
    features: [
      "Power Apps development",
      "Power Automate workflows",
      "Power BI dashboards",
      "Custom connectors",
    ],
  },
  {
    title: "Dynamics CE",
    slug: "dynamics-ce",
    description: "Customer engagement solutions that drive meaningful, lasting relationships.",
    features: [
      "Sales automation",
      "Customer service excellence",
      "Marketing automation",
      "Field service management",
    ],
  },
  {
    title: "AI Agent Automation",
    slug: "ai-automation",
    description: "Intelligent automation using Copilot and n8n to transform your operations.",
    features: [
      "AI-powered workflows",
      "n8n automation",
      "Process optimization",
      "Custom AI agents",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="theme-bg-primary transition-colors duration-[1000ms]">
      {/* Hero */}
      <section className="py-24 theme-bg-secondary transition-colors duration-[1000ms]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl font-light theme-text-primary mb-6">
              Precision <span className="font-semibold dark:text-red-500">Solutions</span>
            </h1>
            <p className="text-lg theme-text-muted leading-relaxed">
              We specialize in Microsoft technologies and AI automation. Each engagement
              is crafted with care, ensuring solutions that truly transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-2xl font-medium theme-text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="theme-text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center theme-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full mr-3 dark:bg-red-500" style={{ backgroundColor: 'var(--accent)' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-medium theme-text-primary dark:text-red-500 hover:opacity-70 transition-colors"
                  >
                    Learn more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video theme-bg-tertiary rounded-lg border theme-border flex items-center justify-center">
                    <span className="theme-text-subtle text-sm tracking-wide">
                      {service.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 theme-bg-dark transition-colors duration-[1000ms]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light theme-text-on-dark mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-lg theme-text-on-dark opacity-70 mb-8 max-w-2xl mx-auto">
            Every transformation journey is unique. Let&apos;s discuss your challenges
            and explore how we can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide theme-bg-secondary theme-text-primary dark:bg-red-600 dark:text-white rounded hover:opacity-90 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
