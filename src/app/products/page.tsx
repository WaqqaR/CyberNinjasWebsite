import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="theme-bg-primary transition-colors duration-[1000ms]">
      {/* Hero */}
      <PageHero
        label="Products"
        title={
          <>
            Our{" "}
            <span className="font-semibold dark:text-red-500">Products</span>
          </>
        }
        description="Purpose-built software crafted with the same precision we bring to every engagement. Tools designed to solve real problems for real teams."
      />

      {/* Products Grid */}
      <section className="py-24 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {products.map((product, index) => (
              <div
                key={product.slug}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-2xl font-medium theme-text-primary">
                      {product.title}
                    </h2>
                    {product.comingSoon && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-[var(--accent)]/10 text-[var(--accent)] dark:bg-red-500/10 dark:text-red-400 border border-[var(--accent)]/20 dark:border-red-500/20">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="theme-text-muted leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center theme-text-muted"
                      >
                        <span className="w-1.5 h-1.5 rounded-full mr-3 bg-[var(--accent)] dark:bg-red-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center text-sm font-medium theme-text-primary dark:text-red-500 hover:opacity-70 transition-colors"
                  >
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-video theme-bg-tertiary rounded-lg border theme-border flex items-center justify-center">
                    <span className="theme-text-subtle text-sm tracking-wide">
                      {product.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Interested in Our Products?"
        description="We're building tools to help teams work smarter. Get in touch to learn more or request early access."
        buttonText="Get in Touch"
      />
    </div>
  );
}
