import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group p-8 theme-bg-card border theme-border rounded-lg theme-border-hover transition-all duration-300"
    >
      <h3 className="text-xl font-medium theme-text-primary mb-3 group-hover:theme-text-secondary dark:group-hover:text-red-500 transition-colors">
        {title}
      </h3>
      <p className="theme-text-muted leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex items-center text-sm font-medium theme-text-subtle group-hover:theme-text-primary dark:group-hover:text-red-500 transition-colors">
        Learn more
        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
