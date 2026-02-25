import Link from "next/link";
import { type ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
  features: string[];
  icon: ReactNode;
  hoverImage?: string;
}

export function ServiceCard({ title, description, href, index, features, icon, hoverImage }: ServiceCardProps) {
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
      {/* Content */}
      <div className="relative p-8 theme-bg-card rounded-[7px] h-full flex flex-col overflow-hidden">

        {/* Service logo reveal — fades in from the right on hover */}
        {hoverImage && (
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-end pr-6"
            aria-hidden="true"
          >
            <img
              src={hoverImage}
              alt=""
              className="h-36 w-auto object-contain"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)",
                opacity: 0.18,
              }}
            />
          </div>
        )}

        {/* Card content — raised above glass layers */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon + Number row */}
          <div className="flex items-start justify-between mb-6">
            <div className="w-10 h-10 rounded-lg theme-bg-secondary flex items-center justify-center theme-text-secondary dark:text-red-500 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <span className="text-4xl font-thin tabular-nums select-none theme-text-subtle opacity-25 leading-none">
              {String(index).padStart(2, "0")}
            </span>
          </div>

          <h3 className="text-xl font-medium theme-text-primary mb-3 group-hover:theme-text-secondary transition-colors">
            {title}
          </h3>
          <p className="theme-text-muted leading-relaxed mb-5">
            {description}
          </p>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="text-xs px-2.5 py-1 rounded-md theme-bg-secondary theme-text-subtle border theme-border truncate max-w-[220px]"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center text-sm font-medium theme-text-subtle group-hover:theme-text-primary transition-colors">
            Learn more
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
