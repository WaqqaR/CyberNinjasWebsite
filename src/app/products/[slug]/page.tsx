import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { productDetails } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(productDetails).map((slug) => ({
    slug,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = productDetails[slug];

  if (!product) {
    notFound();
  }

  return (
    <div className="theme-bg-primary transition-colors duration-[1000ms]">
      {/* Hero */}
      <PageHero
        label={product.subtitle}
        title={<>{product.title}</>}
        description={product.longDescription}
      >
        <Link
          href="/products"
          className="inline-flex items-center text-sm theme-text-subtle hover:theme-text-primary mb-8 transition-colors"
        >
          <svg
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Products
        </Link>
      </PageHero>

      {/* Coming Soon Banner */}
      {product.comingSoon && (
        <section className="py-12 theme-bg-secondary border-b theme-border transition-colors duration-[1000ms]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-[var(--accent)]/10 text-[var(--accent)] dark:bg-red-500/10 dark:text-red-400 border border-[var(--accent)]/20 dark:border-red-500/20 mb-4">
              Coming Soon
            </span>
            <p className="text-lg theme-text-muted max-w-2xl mx-auto">
              {product.title} is currently in development. Here&apos;s a preview
              of what we&apos;re building.
            </p>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-24 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light theme-text-primary mb-12">
            Planned{" "}
            <span className="font-semibold dark:text-red-500">Features</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {product.features.map((feature) => (
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

      {/* CTA */}
      <CTASection
        heading="Interested? Get in Touch"
        description={`${product.title} is coming soon. Reach out to learn more or request early access.`}
        buttonText="Contact Us"
      />
    </div>
  );
}
