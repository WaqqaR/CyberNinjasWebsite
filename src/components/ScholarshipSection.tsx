import Link from "next/link";

type Track = "power-platform" | "claude-code";

const COPY: Record<
  Track,
  { discipline: string; network: string; talent: string; applyHref: string }
> = {
  "power-platform": {
    discipline: "Power Platform consultant training",
    network:
      "a growing network of Power Platform professionals we actively introduce to clients and opportunities",
    talent: "Power Platform talent",
    applyHref: "/dojo/apply?track=power-platform",
  },
  "claude-code": {
    discipline: "agentic AI delivery training",
    network:
      "a growing network of AI-capable builders and developers we actively introduce to clients and opportunities",
    talent: "AI-capable delivery talent",
    applyHref: "/dojo/apply?track=claude-code",
  },
};

export function ScholarshipSection({ track }: { track: Track }) {
  const copy = COPY[track];

  const steps = [
    {
      step: "01",
      title: "Submit your application",
      body: "Apply through the standard application form and tick the scholarship consideration box. Your application is reviewed alongside all other candidates.",
    },
    {
      step: "02",
      title: "Scholarship interview",
      body: "If shortlisted, you will be invited to a short interview — typically 20 to 30 minutes. We want to understand your situation, your goals, and your commitment to completing the programme.",
    },
    {
      step: "03",
      title: "Decision communicated with cohort offers",
      body: "The scholarship decision is made at the same time as cohort acceptance offers. If awarded, your place is fully funded — no hidden costs, the same programme as every other participant.",
    },
    {
      step: "04",
      title: "Join the consultant portfolio",
      body: `Scholarship graduates are included in the Cyber Ninjas consultant network. We introduce strong graduates to clients looking for ${copy.talent}.`,
    },
  ];

  return (
    <section className="py-24 theme-bg-dark relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-[0.3em] text-red-500/70 uppercase mb-4">
              Scholarship Programme
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-100 leading-snug mb-6">
              One Free Place,{" "}
              <span className="font-semibold text-red-400">Every Cohort</span>
            </h2>
            <p className="text-stone-400 leading-relaxed mb-4">
              The Dojo is built to be the gold standard in {copy.discipline}. That
              standard should not be determined by who can afford it. Each cohort includes one
              fully-funded scholarship place for a candidate who demonstrates the aptitude, drive,
              and commitment to succeed — regardless of their financial situation.
            </p>
            <p className="text-stone-400 leading-relaxed mb-4">
              Scholarship candidates go through the same application process as everyone else, plus
              a short additional interview. We are looking for people who genuinely cannot meet the
              programme fee, not people who would prefer not to.
            </p>
            <p className="text-stone-400 leading-relaxed border-l-2 border-red-500/30 pl-4 italic mt-8">
              Scholarship graduates join the Cyber Ninjas consultant portfolio — {copy.network}.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="shrink-0 w-8 h-8 rounded border border-red-500/20 flex items-center justify-center">
                  <span className="text-xs font-medium text-red-400/70">{item.step}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-200 mb-1">{item.title}</p>
                  <p className="text-sm text-stone-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
            <div className="pt-4">
              <Link
                href={copy.applyHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors"
              >
                Apply and request scholarship consideration
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
