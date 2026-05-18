import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";
import { CTASection } from "@/components/CTASection";
import { DojoWaitlist } from "@/components/DojoWaitlist";
import { GlitchWord } from "@/components/GlitchWord";
import { ScholarshipSection } from "@/components/ScholarshipSection";

export const metadata: Metadata = {
  title: "Claude Code Intensive | Cyber Ninjas Dojo",
  description:
    "A hands-on, cohort-based track that takes you from watching AI coding demos to shipping a real, working project with Claude Code — agents, tools, automation, and guardrails, the way a consultancy actually uses it. UK-based.",
  keywords: [
    "Claude Code training UK",
    "Claude Code course",
    "agentic AI coding bootcamp",
    "AI coding cohort",
    "Claude Code MCP training",
    "AI assisted delivery training",
    "Anthropic Claude Code workshop",
  ],
};

// ── Data ──────────────────────────────────────────────────────────────────────

const differentiators = [
  {
    title: "Agentic Delivery",
    description:
      "You will not paste snippets into a chat box. You will run Claude Code as an agent that plans, edits across files, runs commands, and iterates — and learn how to direct it so the output is something you would actually ship.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    title: "Tools & MCP",
    description:
      "Connect Claude Code to real systems with the Model Context Protocol. You will wire up and use tools and MCP servers so the agent operates on your actual environment — not a sandbox toy.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401-.29-.221-.634-.349-1.003-.349-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959-.221-.29-.349-.634-.349-1.003 0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
  },
  {
    title: "Hooks & Automation",
    description:
      "Make the agent reliable. You will configure hooks, permissions, and guardrails so Claude Code runs your formatters, tests, and checks automatically — and stays inside the lines on real work.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437" />
      </svg>
    ),
  },
  {
    title: "Subagents & Orchestration",
    description:
      "Move past one prompt at a time. You will break work into parallel subagents, plan multi-step changes, and orchestrate the agent across a real codebase — the difference between a demo and delivery.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Guardrails & Review",
    description:
      "AI-written code still has to be correct. You will learn to read, challenge, and review what the agent produces — and the practices that keep AI-assisted work safe to put in front of a client.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Ship Something Real",
    description:
      "The cohort is built around one outcome: a working project you delivered with Claude Code, from a blank repository to something that runs — documented and reviewed, not a tutorial result.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

type ComparisonValue = boolean | "partial";

const comparisonRows: {
  feature: string;
  courses: ComparisonValue;
  selfStudy: ComparisonValue;
  dojo: ComparisonValue;
}[] = [
  { feature: "Knows what Claude Code is", courses: true, selfStudy: true, dojo: true },
  { feature: "Agentic workflow practice", courses: "partial", selfStudy: "partial", dojo: true },
  { feature: "Tools and MCP integration", courses: false, selfStudy: false, dojo: true },
  { feature: "Hooks, permissions, guardrails", courses: false, selfStudy: false, dojo: true },
  { feature: "Subagent orchestration", courses: false, selfStudy: false, dojo: true },
  { feature: "Reviewing AI-written code safely", courses: false, selfStudy: "partial", dojo: true },
  { feature: "Ship a real, working project", courses: false, selfStudy: false, dojo: true },
  { feature: "Work reviewed to a professional standard", courses: false, selfStudy: false, dojo: true },
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

export default function ClaudeCodeTrackPage() {
  return (
    <div className="theme-bg-primary dojo-page">

      {/* ─── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="py-28 theme-bg-secondary relative overflow-hidden">
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/dojo"
            className="inline-flex items-center gap-2 text-sm theme-text-subtle hover:theme-text-primary transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dojo
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — text content */}
            <div>
              <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
                Dojo Track — AI Engineering
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light theme-text-primary leading-tight mb-3">
                Claude Code{" "}
                <GlitchWord text="Intensive" className="font-semibold theme-text-secondary dark:text-red-500" />
              </h1>
              <p className="text-xl md:text-2xl font-light theme-text-muted tracking-wide mb-8">
                Ship real software with agentic AI
              </p>
              <p className="text-lg theme-text-muted leading-relaxed mb-10">
                Everyone has watched the demos. Almost nobody ships production work with AI.
                Over three weeks, this cohort takes you from prompting a chat box to running
                Claude Code as an agent on a real project — tools, MCP, hooks, subagents, and
                the review practices that keep AI-assisted work safe to deliver. You leave with
                something that runs, not a folder of notes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <NeonButton href="/dojo/apply?track=claude-code">Apply Now</NeonButton>
                <a
                  href="/dojo"
                  className="px-8 py-3 text-sm font-medium tracking-wide border theme-border theme-text-secondary rounded hover:theme-bg-primary transition-colors duration-300 text-center"
                >
                  Compare Tracks
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t theme-border">
                {[
                  { value: "3 Weeks", label: "Duration" },
                  { value: "Cohort-Based", label: "Live Delivery" },
                  { value: "Real Project", label: "Built & Shipped" },
                  { value: "£950 + VAT", label: "Programme Fee" },
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

      {/* ─── Cohort Strip ─────────────────────────────────────────────────── */}
      <div className="theme-bg-primary border-b theme-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <span className="flex items-center gap-2 text-sm theme-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Next cohort forming — May 2026
              </span>
              <span className="text-sm theme-text-subtle hidden sm:block">|</span>
              <span className="text-sm theme-text-muted">Small cohort by design</span>
              <span className="text-sm theme-text-subtle hidden sm:block">|</span>
              <span className="text-sm theme-text-muted">Rolling applications</span>
            </div>
            <Link
              href="/dojo/apply?track=claude-code"
              className="text-sm font-medium theme-text-primary dark:text-red-500 hover:opacity-70 transition-opacity whitespace-nowrap flex items-center gap-1"
            >
              Apply Now
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Waitlist Strip ───────────────────────────────────────────────── */}
      <div className="theme-bg-secondary border-b theme-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="shrink-0">
              <p className="text-sm font-medium theme-text-primary">Can&apos;t make this cohort?</p>
              <p className="text-xs theme-text-muted">Join the waitlist — we notify you before the next cohort opens publicly.</p>
            </div>
            <div className="sm:ml-auto">
              <DojoWaitlist />
            </div>
          </div>
        </div>
      </div>

      {/* ─── 2. The Problem ───────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-dark relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-medium tracking-[0.3em] text-stone-500 dark:text-red-500/70 uppercase mb-4">
                The Challenge
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-stone-100 leading-snug mb-6">
                The Gap Between Watching and Shipping
              </h2>
              <p className="text-stone-400 leading-relaxed mb-4">
                There has never been more content about AI coding. Demos, threads, hot takes,
                hour-long videos. Most people who consume all of it still cannot sit down and
                deliver a real piece of work with an agent.
              </p>
              <p className="text-stone-400 leading-relaxed mb-4">
                The reason is the same one that holds for every tool: watching is not doing.
                Claude Code becomes powerful when you run it agentically, connect it to real
                systems, and constrain it so the output is trustworthy. None of that is learned
                by watching someone else do it.
              </p>
              <p className="text-stone-400 leading-relaxed border-l-2 border-red-500/30 pl-4 italic mt-8">
                This track is built to close that gap — by making you deliver, not watch.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-stone-500 uppercase mb-6">
                What the demos do not teach you
              </p>
              <ul className="space-y-4">
                {[
                  "How to run Claude Code as an agent across a real, multi-file codebase",
                  "How to connect tools and MCP servers so it works on your actual systems",
                  "How to configure hooks, permissions, and guardrails so it stays reliable",
                  "How to split work across subagents and orchestrate multi-step changes",
                  "How to read, challenge, and review AI-written code before it ships",
                  "What AI-assisted delivery looks like when a client is paying for the result",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/60 shrink-0" />
                    <span className="text-stone-400 leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Comparison Table ──────────────────────────────────────────── */}
      <section className="py-24 theme-bg-primary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Comparison
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
              How This Track Compares
            </h2>
            <p className="theme-text-muted leading-relaxed">
              Free content makes you aware of Claude Code. The Dojo makes you able to deliver
              with it. The difference is the entire point.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left py-4 pr-6 w-1/2" />
                  <th className="py-4 px-4 text-center">
                    <p className="text-xs font-medium tracking-[0.15em] theme-text-subtle uppercase">
                      YouTube &amp; Docs
                    </p>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <p className="text-xs font-medium tracking-[0.15em] theme-text-subtle uppercase">
                      Self-Study
                    </p>
                  </th>
                  <th className="py-4 px-4 text-center rounded-t-lg border-x border-t theme-border bg-[var(--bg-card)] dark:border-red-500/20">
                    <p className="text-xs font-medium tracking-[0.15em] theme-text-primary uppercase">
                      Cyber Ninjas Dojo
                    </p>
                    <p className="text-xs theme-text-subtle mt-0.5 dark:text-red-500/70">
                      This track
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

      {/* ─── 4. What Makes This Track Different ──────────────────────────── */}
      <section className="py-24 theme-bg-secondary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Differentiation
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
              What Makes This Track Different
            </h2>
            <p className="theme-text-muted leading-relaxed">
              It is built around one question: what would you have to actually do to deliver
              real work with Claude Code? Every part of the cohort exists to answer that.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="group relative rounded-lg p-px">
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
                <div className="relative theme-bg-card rounded-[7px] p-6 h-full">
                  <div className="w-9 h-9 rounded border theme-border flex items-center justify-center theme-text-muted group-hover:theme-text-primary mb-4 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-medium theme-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm theme-text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who It Is For ────────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-primary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Who It Is For
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
              Two Starting Points, One Cohort
            </h2>
            <p className="theme-text-muted leading-relaxed">
              You do not need to be a senior engineer. You do need to be willing to build.
              The cohort is paced so both starting points finish with something shipped.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="theme-bg-card border theme-border rounded-lg p-8">
              <p className="text-xs font-medium tracking-[0.2em] theme-text-subtle uppercase mb-4">
                Non-technical builders
              </p>
              <p className="text-sm theme-text-muted leading-relaxed">
                You have ideas and projects but limited or no formal coding background. You
                will learn to direct Claude Code as an agent to build and ship something real
                — and to understand and trust what it produces, rather than hoping it works.
              </p>
            </div>
            <div className="theme-bg-card border theme-border rounded-lg p-8">
              <p className="text-xs font-medium tracking-[0.2em] theme-text-subtle uppercase mb-4">
                Individual developers
              </p>
              <p className="text-sm theme-text-muted leading-relaxed">
                You already write code and want to operate at a different level — agentic
                workflows, MCP, hooks, subagent orchestration, and the review discipline that
                makes AI-assisted delivery safe enough to bill for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pricing ─────────────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-secondary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Investment
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
              Programme Pricing
            </h2>
            <p className="theme-text-muted leading-relaxed">
              One straightforward fee covers everything. No upsells, no hidden costs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">

            {/* Individual */}
            <div className="theme-bg-card border theme-border rounded-lg p-8 flex flex-col">
              <p className="text-xs font-medium tracking-[0.2em] theme-text-subtle uppercase mb-6">
                Individual Place
              </p>
              <div className="mb-2">
                <span className="text-4xl font-light theme-text-primary">£950</span>
                <span className="text-sm theme-text-muted ml-2">+ VAT</span>
              </div>
              <p className="text-xs theme-text-subtle mb-8">£1,140 inc. VAT</p>
              <ul className="space-y-3 mb-10 flex-1">
                {[
                  "Full 3-week live cohort",
                  "Agentic Claude Code workflows end to end",
                  "Tools, MCP, hooks, and subagent orchestration",
                  "A real project built and shipped",
                  "Code review and feedback to a professional standard",
                  "Programme completion certificate",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm theme-text-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] dark:bg-red-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <NeonButton href="/dojo/apply?track=claude-code">Apply Now</NeonButton>
            </div>

            {/* Corporate */}
            <div className="theme-bg-card border theme-border rounded-lg p-8 flex flex-col">
              <p className="text-xs font-medium tracking-[0.2em] theme-text-subtle uppercase mb-6">
                Corporate / Team
              </p>
              <div className="mb-2">
                <span className="text-4xl font-light theme-text-primary">Custom</span>
              </div>
              <p className="text-xs theme-text-subtle mb-8">Pricing based on team size and requirements</p>
              <ul className="space-y-3 mb-10 flex-1">
                {[
                  "Everything in the individual programme",
                  "Dedicated cohort for your team",
                  "Run against your own codebase and stack",
                  "AI-assisted delivery standards for your team",
                  "Invoiced to your organisation",
                  "Volume pricing available for 4+ places",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm theme-text-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] dark:bg-red-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/dojo/apply?track=claude-code"
                className="px-8 py-3 text-sm font-medium tracking-wide border theme-border theme-text-secondary rounded hover:theme-bg-secondary transition-colors duration-300 text-center"
              >
                Enquire for Teams
              </Link>
            </div>

          </div>
          <p className="text-xs theme-text-subtle mt-8 max-w-lg">
            Payment is requested on acceptance of your application, not at the point of applying.
            Individual places can be paid by card. Corporate places are invoiced directly to your organisation.
          </p>
        </div>
      </section>

      {/* ─── Scholarship ──────────────────────────────────────────────────── */}
      <ScholarshipSection track="claude-code" />

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <CTASection
        heading="Stop Watching. Start Shipping."
        description="The Claude Code Intensive runs as a small live cohort by design. If you want to actually deliver with agentic AI rather than read about it, submit your application to begin."
        buttonText="Apply Now"
        href="/dojo/apply?track=claude-code"
      />
    </div>
  );
}
