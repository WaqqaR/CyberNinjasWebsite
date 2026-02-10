import Link from "next/link";

interface CTASectionProps {
  heading: string;
  description: string;
  buttonText: string;
  href?: string;
}

export function CTASection({
  heading,
  description,
  buttonText,
  href = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-24 relative z-10 theme-bg-dark transition-colors duration-[1000ms]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-light theme-text-on-dark mb-6">
          {heading}
        </h2>
        <p className="text-lg theme-text-on-dark opacity-70 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide theme-bg-secondary theme-text-primary dark:bg-red-600 dark:text-white rounded hover:opacity-90 transition-colors duration-300"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
