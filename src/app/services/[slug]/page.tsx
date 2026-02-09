import Link from "next/link";
import { notFound } from "next/navigation";

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: { title: string; description: string }[];
  benefits: string[];
}> = {
  "copilot-studio": {
    title: "Copilot Studio",
    subtitle: "AI Assistants Built for Your Business",
    description: "Custom conversational AI solutions powered by Microsoft Copilot Studio.",
    longDescription: "Transform how your team and customers interact with your business through intelligent AI assistants. We design and implement Copilot Studio solutions that understand your processes, speak your language, and integrate seamlessly with your existing systems.",
    features: [
      {
        title: "Custom Knowledge Integration",
        description: "Connect your documents, databases, and knowledge bases to create AI assistants that truly understand your business.",
      },
      {
        title: "Multi-Channel Deployment",
        description: "Deploy your AI assistants across Teams, web, mobile, and other channels your users prefer.",
      },
      {
        title: "Workflow Automation",
        description: "Trigger automated processes and workflows directly from conversational interactions.",
      },
      {
        title: "Analytics & Insights",
        description: "Gain visibility into how users interact with your AI assistants and continuously improve their effectiveness.",
      },
    ],
    benefits: [
      "24/7 availability for customer and employee queries",
      "Reduced workload on support teams",
      "Consistent, accurate responses every time",
      "Seamless Microsoft 365 integration",
    ],
  },
  "power-platform": {
    title: "Power Platform",
    subtitle: "Low-Code, High Impact",
    description: "Accelerate digital transformation with Microsoft Power Platform solutions.",
    longDescription: "Empower your teams to build solutions that solve real business problems. Our Power Platform expertise helps you create custom apps, automate workflows, and gain insights from your data—all without extensive coding knowledge.",
    features: [
      {
        title: "Power Apps Development",
        description: "Custom business applications built rapidly to address your specific operational needs.",
      },
      {
        title: "Power Automate Workflows",
        description: "Streamline processes with intelligent automation that connects your apps and services.",
      },
      {
        title: "Power BI Analytics",
        description: "Transform your data into actionable insights with stunning visualizations and reports.",
      },
      {
        title: "Custom Connectors",
        description: "Connect any system or service to the Power Platform ecosystem.",
      },
    ],
    benefits: [
      "Rapid application development",
      "Reduced IT backlog",
      "Empowered citizen developers",
      "Unified data and processes",
    ],
  },
  "dynamics-ce": {
    title: "Dynamics CE",
    subtitle: "Customer Engagement Excellence",
    description: "Build lasting customer relationships with Dynamics 365 Customer Engagement.",
    longDescription: "Your customers deserve exceptional experiences at every touchpoint. We implement Dynamics CE solutions that unify your sales, service, and marketing efforts into a cohesive strategy for customer success.",
    features: [
      {
        title: "Sales Automation",
        description: "Streamline your sales process from lead to close with intelligent tools and insights.",
      },
      {
        title: "Customer Service Hub",
        description: "Deliver exceptional support experiences with unified case management and AI-assisted resolution.",
      },
      {
        title: "Marketing Automation",
        description: "Create personalized customer journeys that drive engagement and conversion.",
      },
      {
        title: "Field Service",
        description: "Optimize field operations with intelligent scheduling and mobile-first solutions.",
      },
    ],
    benefits: [
      "360-degree customer view",
      "Improved sales productivity",
      "Higher customer satisfaction",
      "Data-driven decision making",
    ],
  },
  "ai-automation": {
    title: "AI Agent Automation",
    subtitle: "Intelligent Workflows, Effortless Execution",
    description: "Harness the power of AI agents with Copilot and n8n automation.",
    longDescription: "The future of work is autonomous. We design and implement AI agent systems that can reason, plan, and execute complex tasks on your behalf. Using Microsoft Copilot and n8n, we create intelligent automation that goes beyond simple rule-based workflows.",
    features: [
      {
        title: "AI Agent Design",
        description: "Purpose-built AI agents that understand context and make intelligent decisions.",
      },
      {
        title: "n8n Workflow Automation",
        description: "Powerful, flexible automation that connects hundreds of apps and services.",
      },
      {
        title: "Process Intelligence",
        description: "Analyze and optimize your processes with AI-driven insights and recommendations.",
      },
      {
        title: "Human-in-the-Loop",
        description: "Maintain oversight with intelligent escalation and approval workflows.",
      },
    ],
    benefits: [
      "Reduced manual work",
      "Faster process execution",
      "Improved accuracy",
      "Scalable operations",
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="theme-bg-primary transition-colors duration-[1000ms]">
      {/* Hero */}
      <section className="py-24 theme-bg-secondary transition-colors duration-[1000ms]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm theme-text-subtle hover:theme-text-primary mb-8 transition-colors"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>

          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              {service.subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl font-light theme-text-primary mb-6">
              {service.title}
            </h1>
            <p className="text-lg theme-text-muted leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

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
                    <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 dark:text-red-500" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-24 theme-bg-dark transition-colors duration-[1000ms]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light theme-text-on-dark mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg theme-text-on-dark opacity-70 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how {service.title} can transform your business operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide theme-bg-secondary theme-text-primary dark:bg-red-600 dark:text-white rounded hover:opacity-90 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
