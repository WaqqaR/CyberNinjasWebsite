"use client";

import { NeonButton } from "./NeonButton";

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
  const isContact = href === "/contact";

  return (
    <section className="py-24 relative z-10 theme-bg-dark">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-light theme-text-on-dark mb-6">
          {heading}
        </h2>
        <p className="text-lg theme-text-on-dark opacity-70 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        {isContact ? (
          <NeonButton
            onClick={() => window.dispatchEvent(new CustomEvent("open-chat-widget"))}
          >
            {buttonText}
          </NeonButton>
        ) : (
          <NeonButton href={href}>
            {buttonText}
          </NeonButton>
        )}
      </div>
    </section>
  );
}
