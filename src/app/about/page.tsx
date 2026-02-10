import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export default function AboutPage() {
  return (
    <div className="theme-bg-primary transition-colors duration-[1000ms]">
      {/* Hero */}
      <PageHero
        label="About Us"
        title={<>The <span className="font-semibold dark:text-red-500">Cyber Ninjas</span> Way</>}
        description="We are a boutique technology consultancy that believes in doing fewer things exceptionally well. In an industry of volume-driven firms, we chose a different path."
      />

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
            {[
              { title: "Precision", description: "Every solution is crafted with meticulous attention to detail. We don\u2019t do \u201Cgood enough.\u201D" },
              { title: "Partnership", description: "We don\u2019t work for our clients\u2014we work with them. True transformation requires collaboration." },
              { title: "Results", description: "We measure success by outcomes, not hours billed. Your transformation is our reputation." },
            ].map((value) => (
              <div key={value.title} className="text-center p-8">
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                  <div className="w-3 h-3 rotate-45 bg-[var(--accent)] dark:bg-red-500" />
                </div>
                <h3 className="text-lg font-medium theme-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="theme-text-muted">
                  {value.description}
                </p>
              </div>
            ))}
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
      <CTASection
        heading="Ready to Work Together?"
        description="We're always looking for the next meaningful partnership. If our philosophy resonates with you, let's talk."
        buttonText="Start a Conversation"
      />
    </div>
  );
}
