import { ReactNode } from "react";

interface PageHeroProps {
  label: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export function PageHero({ label, title, description, children }: PageHeroProps) {
  return (
    <section className="py-24 theme-bg-secondary relative">
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
            {label}
          </p>
          <h1 className="text-4xl md:text-5xl font-light theme-text-primary mb-6">
            {title}
          </h1>
          <p className="text-lg theme-text-muted leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
