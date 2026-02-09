export default function AboutPage() {
  return (
    <div className="theme-bg-primary transition-colors duration-[1000ms]">
      {/* Hero */}
      <section className="py-24 theme-bg-secondary transition-colors duration-[1000ms]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-light theme-text-primary mb-6">
              The <span className="font-semibold dark:text-red-500">Cyber Ninjas</span> Way
            </h1>
            <p className="text-lg theme-text-muted leading-relaxed">
              We are a boutique technology consultancy that believes in doing fewer things
              exceptionally well. In an industry of volume-driven firms, we chose a different path.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl font-light theme-text-primary mb-6">
                Our <span className="font-semibold dark:text-red-500">Philosophy</span>
              </h2>
              <div className="space-y-6 theme-text-muted leading-relaxed">
                <p>
                  The ninja masters of feudal Japan understood that true mastery comes from
                  focused dedication. They didn&apos;t try to be everything to everyone—they
                  honed their skills with singular purpose.
                </p>
                <p>
                  We apply this philosophy to modern technology consulting. By limiting
                  ourselves to a select number of clients, we ensure that each engagement
                  receives our complete attention, creativity, and expertise.
                </p>
                <p>
                  The result? Transformations that actually transform. Solutions that
                  solve. Partnerships that last.
                </p>
              </div>
            </div>
            <div className="aspect-square theme-bg-tertiary rounded-lg border theme-border flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-6xl font-light theme-text-subtle mb-4">
                  &ldquo;
                </div>
                <p className="text-lg italic theme-text-muted">
                  Perfection is achieved not when there is nothing more to add,
                  but when there is nothing left to take away.
                </p>
                <p className="mt-4 text-sm theme-text-subtle">
                  — Antoine de Saint-Exupéry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 theme-bg-secondary transition-colors duration-[1000ms]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-light theme-text-primary">
              Our <span className="font-semibold dark:text-red-500">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                <div className="w-3 h-3 rotate-45 dark:bg-red-500" style={{ backgroundColor: 'var(--accent)' }} />
              </div>
              <h3 className="text-lg font-medium theme-text-primary mb-3">
                Precision
              </h3>
              <p className="theme-text-muted">
                Every solution is crafted with meticulous attention to detail.
                We don&apos;t do &quot;good enough.&quot;
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                <div className="w-3 h-3 rotate-45 dark:bg-red-500" style={{ backgroundColor: 'var(--accent)' }} />
              </div>
              <h3 className="text-lg font-medium theme-text-primary mb-3">
                Partnership
              </h3>
              <p className="theme-text-muted">
                We don&apos;t work for our clients—we work with them. True transformation
                requires collaboration.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                <div className="w-3 h-3 rotate-45 dark:bg-red-500" style={{ backgroundColor: 'var(--accent)' }} />
              </div>
              <h3 className="text-lg font-medium theme-text-primary mb-3">
                Results
              </h3>
              <p className="theme-text-muted">
                We measure success by outcomes, not hours billed. Your transformation
                is our reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-light theme-text-primary mb-6">
              Our <span className="font-semibold dark:text-red-500">Expertise</span>
            </h2>
            <p className="theme-text-muted mb-12">
              We specialize in the Microsoft ecosystem and modern AI automation,
              bringing deep technical knowledge to every engagement.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Microsoft Copilot Studio",
              "Power Platform",
              "Dynamics 365",
              "Azure",
              "n8n",
              "AI Automation",
              "Process Optimization",
              "Digital Transformation",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 theme-bg-card border theme-border rounded text-sm theme-text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 theme-bg-dark transition-colors duration-[1000ms]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light theme-text-on-dark mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg theme-text-on-dark opacity-70 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for the next meaningful partnership.
            If our philosophy resonates with you, let&apos;s talk.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide theme-bg-secondary theme-text-primary dark:bg-red-600 dark:text-white rounded hover:opacity-90 transition-colors duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
