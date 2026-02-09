"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="theme-bg-primary transition-colors duration-[1000ms]">
      {/* Hero */}
      <section className="py-24 theme-bg-secondary transition-colors duration-[1000ms]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-light theme-text-primary mb-6">
              Let&apos;s <span className="font-semibold dark:text-red-500">Connect</span>
            </h1>
            <p className="text-lg theme-text-muted leading-relaxed">
              Every great partnership starts with a conversation. Tell us about your
              challenges, and let&apos;s explore how we can help you transform.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="p-8 theme-bg-card border theme-border rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center theme-bg-tertiary rounded-full">
                    <svg className="w-8 h-8 dark:text-red-500" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium theme-text-primary mb-3">
                    Message Received
                  </h3>
                  <p className="theme-text-muted">
                    Thank you for reaching out. We&apos;ll be in touch within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium theme-text-secondary mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 theme-bg-card border theme-border rounded theme-text-primary focus:outline-none transition-colors"
                      style={{ backgroundColor: 'var(--bg-card)' }}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium theme-text-secondary mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 theme-bg-card border theme-border rounded theme-text-primary focus:outline-none transition-colors"
                      style={{ backgroundColor: 'var(--bg-card)' }}
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium theme-text-secondary mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-4 py-3 theme-bg-card border theme-border rounded theme-text-primary focus:outline-none transition-colors"
                      style={{ backgroundColor: 'var(--bg-card)' }}
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium theme-text-secondary mb-2"
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 theme-bg-card border theme-border rounded theme-text-primary focus:outline-none transition-colors resize-none"
                      style={{ backgroundColor: 'var(--bg-card)' }}
                      placeholder="Tell us about your project or challenges..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 text-sm font-medium tracking-wide theme-btn-primary rounded transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lg:pl-8">
              <div className="sticky top-24">
                <h2 className="text-xl font-medium theme-text-primary mb-6">
                  What Happens Next?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center theme-bg-tertiary rounded-full text-sm font-medium theme-text-muted mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium theme-text-primary mb-1">
                        We Review Your Message
                      </h3>
                      <p className="text-sm theme-text-muted">
                        Every inquiry is personally reviewed by our team.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center theme-bg-tertiary rounded-full text-sm font-medium theme-text-muted mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium theme-text-primary mb-1">
                        Discovery Call
                      </h3>
                      <p className="text-sm theme-text-muted">
                        We&apos;ll schedule a brief call to understand your needs and determine fit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center theme-bg-tertiary rounded-full text-sm font-medium theme-text-muted mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium theme-text-primary mb-1">
                        Proposal
                      </h3>
                      <p className="text-sm theme-text-muted">
                        If we&apos;re a good match, we&apos;ll craft a tailored proposal for your project.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative divider */}
                <div className="flex items-center my-12">
                  <div className="h-px flex-grow" style={{ backgroundColor: 'var(--border-color)' }} />
                  <div className="mx-4 w-2 h-2 rotate-45 dark:bg-red-500" style={{ backgroundColor: 'var(--accent)' }} />
                  <div className="h-px flex-grow" style={{ backgroundColor: 'var(--border-color)' }} />
                </div>

                <div className="text-center">
                  <p className="text-sm theme-text-subtle mb-2">
                    Prefer email?
                  </p>
                  <a
                    href="mailto:hello@cyberninjas.com"
                    className="theme-text-primary dark:text-red-500 hover:opacity-70 transition-colors"
                  >
                    hello@cyberninjas.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
