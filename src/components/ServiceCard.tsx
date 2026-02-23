import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group relative block rounded-lg p-px">
      {/* Gradient border — fades in on hover */}
      <span
        className="service-card-gradient absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        aria-hidden="true"
      />
      {/* Normal border — fades out on hover */}
      <span
        className="absolute inset-0 rounded-lg border theme-border group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"
        aria-hidden="true"
      />
      {/* Content — solid background covers gradient interior */}
      <div className="relative p-8 theme-bg-card rounded-[7px]">
        <h3 className="text-xl font-medium theme-text-primary mb-3 group-hover:theme-text-secondary transition-colors">
          {title}
        </h3>
        <p className="theme-text-muted leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex items-center text-sm font-medium theme-text-subtle group-hover:theme-text-primary transition-colors">
          Learn more
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
