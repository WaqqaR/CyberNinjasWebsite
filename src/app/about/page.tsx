import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | Cyber Ninjas",
  description: "Boutique Microsoft consultancy founded by Waqqar Ahmed. Over a decade delivering Power Platform and Dynamics 365 across public sector, housing, finance, and higher education.",
  openGraph: {
    title: "About Us | Cyber Ninjas",
    description: "Boutique Microsoft consultancy founded by Waqqar Ahmed. Over a decade delivering Power Platform and Dynamics 365 across public sector, housing, finance, and education.",
    url: "https://cyberninjascorp.com/about",
    siteName: "Cyber Ninjas",
    type: "website",
  },
};

const team = [
  {
    name: "Waqqar Ahmed",
    role: "Founder & Principal Consultant",
    bio: "Over a decade delivering Microsoft Power Platform and Dynamics 365 engagements across the public sector, housing, finance, and higher education. Waqqar founded Cyber Ninjas after years of seeing capable candidates fail to land consultancy roles — not for lack of technical skill, but for lack of real-world delivery experience. The Dojo is the answer to that gap.",
    tag: "10+ years · Founder",
  },
  {
    name: "Suman Saru",
    role: "Senior Consultant",
    bio: "Suman brings deep hands-on experience across Power Platform and Dynamics 365 implementations. Having delivered across multiple sectors, she contributes both to client engagements and to the technical standards embedded in the Dojo programme.",
    tag: "Senior Consultant",
  },
  {
    name: "Sunil Saru",
    role: "Data Expert",
    bio: "Sunil leads on data architecture, reporting, and analytics across our client portfolio. His expertise spans Power BI, Dataverse, and integration design — ensuring that the solutions we build are not just functional, but insightful.",
    tag: "Data & Analytics",
  },
  {
    name: "Imran Suhail",
    role: "Consultant",
    bio: "Imran joined Cyber Ninjas after completing the Dojo programme. He is now a working consultant delivering real client engagements — which is precisely what the programme is designed to produce. His trajectory is the proof of concept.",
    tag: "Dojo Graduate",
  },
];

export default function AboutPage() {
  return (
    <div className="theme-bg-primary">
      {/* Hero */}
      <PageHero
        label="About Us"
        title={<>The <span className="font-semibold dark:text-red-500">Cyber Ninjas</span> Way</>}
        description="We are a boutique technology consultancy that believes in doing fewer things exceptionally well. In an industry of volume-driven firms, we chose a different path."
      />

      {/* Founder */}
      <section className="py-24 theme-bg-primary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-6">
                Built from the Inside Out
              </h2>
              <div className="space-y-5 theme-text-muted leading-relaxed">
                <p>
                  Cyber Ninjas was founded by Waqqar Ahmed, a Microsoft Power Platform
                  and Dynamics 365 consultant with over ten years of delivery experience
                  across the public sector, housing, finance, and higher education.
                </p>
                <p>
                  The business was previously incorporated as <span className="theme-text-primary font-medium">Pepper Tech Ltd</span> before
                  rebranding to Cyber Ninjas Corp Ltd — a name that better reflects the
                  culture we have built: technically rigorous, independent, and precise.
                </p>
                <p>
                  The decision to stay boutique was deliberate. Large consultancies optimise
                  for utilisation. We optimise for outcomes. Every client engagement we take
                  on receives the full attention of experienced practitioners — not a project
                  manager and a team of juniors following a playbook.
                </p>
                <p>
                  The Cyber Ninjas Dojo grew directly from this experience. After years
                  of interviewing and working alongside candidates who had certifications
                  but no delivery instincts, we built the programme we wished existed.
                </p>
              </div>
            </div>
            <div className="space-y-4 lg:pt-16">
              {[
                { value: "10+", label: "Years in the Microsoft ecosystem" },
                { value: "4", label: "Sectors served — public, housing, finance, education" },
                { value: "Boutique", label: "By design, not by circumstance" },
                { value: "1", label: "Dojo graduate already in delivery" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-start gap-6 p-5 theme-bg-card border theme-border rounded-lg">
                  <p className="text-2xl font-light theme-text-primary shrink-0 w-20">{stat.value}</p>
                  <p className="text-sm theme-text-muted leading-relaxed pt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 theme-bg-secondary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              The Team
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
              The People Behind the Work
            </h2>
            <p className="theme-text-muted leading-relaxed">
              A small team of experienced practitioners — and one graduate who is now
              proof that the Dojo works.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((person) => (
              <div key={person.name} className="theme-bg-card border theme-border rounded-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium theme-text-primary">{person.name}</h3>
                    <p className="text-sm theme-text-secondary dark:text-red-500/80 mt-0.5">{person.role}</p>
                  </div>
                  <span className="text-xs font-medium tracking-[0.1em] uppercase theme-text-subtle border theme-border rounded px-2.5 py-1 shrink-0 ml-4">
                    {person.tag}
                  </span>
                </div>
                <p className="text-sm theme-text-muted leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 theme-bg-primary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
                Philosophy
              </p>
              <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-6">
                Serve the Mission, <span className="font-semibold dark:text-red-500">Not the Machine</span>
              </h2>
              <div className="space-y-5 theme-text-muted leading-relaxed">
                <p>
                  The ninja masters of feudal Japan were defined by singular focus.
                  They did not dilute their craft across a hundred disciplines — they
                  refined one thing until it was unmatchable.
                </p>
                <p>
                  We apply that principle to consultancy. A small number of clients.
                  Full attention on each engagement. No account managers between you
                  and the people doing the work.
                </p>
                <p>
                  The rōnin served the mission, not the institution. We chose the
                  same model — working with clients we believe in, on problems worth solving.
                </p>
              </div>
            </div>
            <div className="theme-bg-card rounded-lg border theme-border p-10 flex flex-col items-center text-center">
              <div className="text-5xl font-light theme-text-subtle mb-6">&ldquo;</div>
              <p className="text-lg italic theme-text-muted leading-relaxed mb-6">
                Perfection is achieved not when there is nothing more to add,
                but when there is nothing left to take away.
              </p>
              <p className="text-sm theme-text-subtle">— Antoine de Saint-Exupéry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 theme-bg-secondary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Values
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary">
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Precision", description: "Every solution is crafted with meticulous attention to detail. We do not do good enough." },
              { title: "Partnership", description: "We do not work for our clients — we work with them. True transformation requires genuine collaboration." },
              { title: "Results", description: "We measure success by outcomes, not hours billed. Your transformation is our reputation." },
            ].map((value) => (
              <div key={value.title} className="p-8 theme-bg-card border theme-border rounded-lg">
                <div className="w-8 h-8 mb-6 flex items-center justify-center">
                  <div className="w-3 h-3 rotate-45 bg-[var(--accent)] dark:bg-red-500" />
                </div>
                <h3 className="text-lg font-medium theme-text-primary mb-3">{value.title}</h3>
                <p className="theme-text-muted text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 theme-bg-primary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
              Our Technical Stack
            </h2>
            <p className="theme-text-muted leading-relaxed">
              Deep specialisation in the Microsoft ecosystem, with genuine capability
              across the full Power Platform suite, Dynamics 365, and Azure.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Microsoft Power Platform",
              "Dynamics 365",
              "Copilot Studio",
              "Power BI",
              "Azure",
              "Azure DevOps",
              "Dataverse",
              "n8n",
              "AI Automation",
              "Application Lifecycle Management",
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
        description="We are always looking for the next meaningful partnership. If our approach resonates with you, let's talk."
        buttonText="Start a Conversation"
      />
    </div>
  );
}
