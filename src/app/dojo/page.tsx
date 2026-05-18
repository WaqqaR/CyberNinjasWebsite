import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";
import { CTASection } from "@/components/CTASection";
import { DojoWaitlist } from "@/components/DojoWaitlist";
import { GlitchWord } from "@/components/GlitchWord";

export const metadata: Metadata = {
  title: "Cyber Ninjas Dojo | Practitioner-Led Cohort Training",
  description:
    "The Cyber Ninjas Dojo is a training hall, not a course library. Practitioner-led, cohort-based, applied programmes that take you from knowing a tool to delivering real work. Choose your track — Power Platform consultancy or Claude Code.",
  keywords: [
    "Cyber Ninjas Dojo",
    "cohort-based training UK",
    "Power Platform consultant bootcamp",
    "Claude Code training",
    "AI coding course UK",
    "practitioner-led technical training",
  ],
};

// ── Data ──────────────────────────────────────────────────────────────────────

const principles = [
  {
    title: "Taught by practitioners",
    description:
      "Every track is led by people who deliver this work for clients — not career educators. You learn how it is actually done, including the parts tutorials leave out.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Applied, not passive",
    description:
      "You do not watch your way through the Dojo. Every track is built around producing real deliverables under realistic conditions — the work is the curriculum.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Cohorts, not catalogues",
    description:
      "Small live cohorts create accountability, feedback, and pace. You are part of a group moving together — not a username working through videos alone.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Reviewed to a real standard",
    description:
      "Your work is reviewed the way it would be on a live engagement — against the standard a client or senior would actually hold it to. That is what makes it stick.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const tracks = [
  {
    tag: "Track 01 — Microsoft",
    title: "Power Platform Consultant Bootcamp",
    href: "/dojo/power-platform",
    description:
      "The complete transition into billable Power Platform consultancy. A fully simulated consultancy environment — Agile sprints, Azure DevOps, ALM, stakeholder simulation, and PL-200 preparation.",
    facts: [
      { label: "Duration", value: "8–12 weeks" },
      { label: "Format", value: "Live cohort" },
      { label: "From", value: "£2,500 + VAT" },
    ],
    audience: "Career switchers · IT professionals · junior developers",
  },
  {
    tag: "Track 02 — AI Engineering",
    title: "Claude Code Intensive",
    href: "/dojo/claude-code",
    description:
      "Ship real software with agentic AI. A hands-on cohort where you build and deliver a working project with Claude Code the way a consultancy actually uses it — agents, tools, automation, and guardrails.",
    facts: [
      { label: "Duration", value: "3 weeks" },
      { label: "Format", value: "Live cohort" },
      { label: "From", value: "£950 + VAT" },
    ],
    audience: "Non-technical builders · individual developers",
  },
];

type ComparisonValue = boolean | "partial";

const comparisonRows: {
  feature: string;
  courses: ComparisonValue;
  selfStudy: ComparisonValue;
  dojo: ComparisonValue;
}[] = [
  { feature: "Taught by people doing the work today", courses: false, selfStudy: false, dojo: true },
  { feature: "Build real deliverables, not toy exercises", courses: false, selfStudy: "partial", dojo: true },
  { feature: "Live cohort with accountability", courses: false, selfStudy: false, dojo: true },
  { feature: "Work reviewed to a professional standard", courses: false, selfStudy: false, dojo: true },
  { feature: "Practise the workflow, not just the tool", courses: false, selfStudy: "partial", dojo: true },
  { feature: "Finish with a portfolio of real work", courses: false, selfStudy: false, dojo: true },
  { feature: "Designed around a defined outcome", courses: "partial", selfStudy: false, dojo: true },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function Check() {
  return (
    <svg
      className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      className="w-4 h-4 text-stone-400 dark:text-stone-600 mx-auto"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function Partial() {
  return <span className="text-xs theme-text-subtle mx-auto block text-center leading-none">Partial</span>;
}

function Mark({ value }: { value: ComparisonValue }) {
  return value === true ? <Check /> : value === "partial" ? <Partial /> : <Cross />;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DojoPage() {
  return (
    <div className="theme-bg-primary dojo-page">

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-28 theme-bg-secondary relative overflow-hidden">
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — text content */}
            <div>
              <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
                The Training Hall
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light theme-text-primary leading-tight mb-3">
                Cyber Ninjas{" "}
                <GlitchWord text="Dojo" className="font-semibold theme-text-secondary dark:text-red-500" />
              </h1>
              <p className="text-xl md:text-2xl font-light theme-text-muted tracking-wide mb-8">
                Practitioner-led cohort training
              </p>
              <p className="text-lg theme-text-muted leading-relaxed mb-10">
                A dojo is not a course library — it is where you train. Every track is built
                the same way: led by people who do the work for clients, delivered as a live
                cohort, and centred on producing real work reviewed to a professional standard.
                Knowing the tool is the start. The Dojo is where you become someone who delivers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <NeonButton href="#tracks">Explore the Tracks</NeonButton>
                <a
                  href="/about"
                  className="px-8 py-3 text-sm font-medium tracking-wide border theme-border theme-text-secondary rounded hover:theme-bg-primary transition-colors duration-300 text-center"
                >
                  About Cyber Ninjas
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t theme-border">
                {[
                  { value: "2 Tracks", label: "Disciplines" },
                  { value: "Cohort-Based", label: "Live Delivery" },
                  { value: "Practitioner", label: "Led" },
                  { value: "UK-Based", label: "Programme" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-lg font-medium theme-text-primary mb-1">{stat.value}</p>
                    <p className="text-xs font-medium tracking-[0.2em] theme-text-subtle uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — banner art */}
            <div
              className="relative hidden lg:block"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                maskComposite: "intersect",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                WebkitMaskComposite: "source-in",
              }}
            >
              <Image
                src="/cyberninjas-bannerart-dark.png"
                alt=""
                width={960}
                height={700}
                className="w-full h-auto dark:hidden"
                priority
              />
              <Image
                src="/cyberninjas-bannerart-light.png"
                alt=""
                width={960}
                height={700}
                className="w-full h-auto hidden dark:block"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ─── How the Dojo Trains ──────────────────────────────────────────── */}
      <section className="py-24 theme-bg-dark relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium tracking-[0.3em] text-stone-500 dark:text-red-500/70 uppercase mb-4">
              The Method
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-100 leading-snug mb-6">
              How the Dojo Trains
            </h2>
            <p className="text-stone-400 leading-relaxed">
              The disciplines differ. The method does not. Whatever track you choose, the
              way you are trained is the same — and it is the reason graduates can actually
              do the work, not just describe it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item) => (
              <div
                key={item.title}
                className="border border-stone-700/50 rounded-lg p-6 bg-stone-900/40 hover:bg-stone-900/60 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded border border-stone-700 flex items-center justify-center text-stone-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-medium text-stone-100 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-24 theme-bg-primary relative scroll-mt-20">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Choose Your Track
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
              Two Disciplines, One Standard
            </h2>
            <p className="theme-text-muted leading-relaxed">
              Each track is a complete programme in its own right. Pick the one that matches
              where you are going — the rigour behind both is identical.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {tracks.map((track) => (
              <Link
                key={track.href}
                href={track.href}
                className="group relative rounded-lg p-px block"
              >
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
                <div className="relative theme-bg-card rounded-[7px] p-8 h-full flex flex-col">
                  <p className="text-xs font-medium tracking-[0.2em] theme-text-subtle uppercase mb-4">
                    {track.tag}
                  </p>
                  <h3 className="text-2xl font-light theme-text-primary mb-3">{track.title}</h3>
                  <p className="text-sm theme-text-muted leading-relaxed mb-6 flex-1">
                    {track.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 py-5 border-y theme-border mb-5">
                    {track.facts.map((fact) => (
                      <div key={fact.label}>
                        <p className="text-xs font-medium tracking-[0.15em] theme-text-subtle uppercase mb-1">
                          {fact.label}
                        </p>
                        <p className="text-sm font-medium theme-text-primary">{fact.value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs theme-text-subtle mb-6">{track.audience}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium theme-text-primary dark:text-red-500 group-hover:gap-3 transition-all duration-300">
                    Explore this track
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Comparison ───────────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-secondary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Comparison
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
              How the Dojo Trains vs. Everyone Else
            </h2>
            <p className="theme-text-muted leading-relaxed">
              Most training prepares you to talk about the work. The Dojo prepares you to
              do it. This holds for every track.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left py-4 pr-6 w-1/2" />
                  <th className="py-4 px-4 text-center">
                    <p className="text-xs font-medium tracking-[0.15em] theme-text-subtle uppercase">
                      Passive Courses
                    </p>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <p className="text-xs font-medium tracking-[0.15em] theme-text-subtle uppercase">
                      Self-Study
                    </p>
                  </th>
                  <th className="py-4 px-4 text-center rounded-t-lg border-x border-t theme-border bg-[var(--bg-card)] dark:border-red-500/20">
                    <p className="text-xs font-medium tracking-[0.15em] theme-text-primary uppercase">
                      The Dojo
                    </p>
                    <p className="text-xs theme-text-subtle mt-0.5 dark:text-red-500/70">
                      Every track
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-t theme-border ${
                      i === comparisonRows.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <td className="py-3.5 pr-6 text-sm theme-text-muted">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center">
                      <Mark value={row.courses} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <Mark value={row.selfStudy} />
                    </td>
                    <td
                      className={`py-3.5 px-4 border-x theme-border bg-[var(--bg-card)] dark:border-red-500/20 ${
                        i === comparisonRows.length - 1 ? "rounded-b-lg border-b" : ""
                      }`}
                    >
                      <Mark value={row.dojo} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Waitlist Strip ───────────────────────────────────────────────── */}
      <div className="theme-bg-primary border-y theme-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="shrink-0">
              <p className="text-sm font-medium theme-text-primary">Not ready to apply yet?</p>
              <p className="text-xs theme-text-muted">
                Join the waitlist — we notify you before the next cohort of either track opens publicly.
              </p>
            </div>
            <div className="sm:ml-auto">
              <DojoWaitlist />
            </div>
          </div>
        </div>
      </div>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <CTASection
        heading="Train Where the Work Is Real"
        description="Pick a track and apply. Both run as small live cohorts by design — places are limited, and the standard is the same whichever discipline you choose."
        buttonText="Explore the Tracks"
        href="#tracks"
      />
    </div>
  );
}
