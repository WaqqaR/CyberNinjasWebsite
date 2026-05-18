import type { Metadata } from "next";
import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";
import { CTASection } from "@/components/CTASection";
import { DojoWaitlist } from "@/components/DojoWaitlist";
import { GlitchWord } from "@/components/GlitchWord";
import { ScholarshipSection } from "@/components/ScholarshipSection";
import { TerminalPlayer, type TerminalLine } from "@/components/TerminalPlayer";
import { ScrollScrubPreview } from "@/components/ScrollScrubPreview";
import { Reveal } from "@/components/Reveal";
import { ParallaxBg } from "@/components/ParallaxBg";

const SITE = "https://cyberninjascorp.com";

export const metadata: Metadata = {
  title: "Claude Code Intensive — Ship Real Software With Agentic AI | Cyber Ninjas Dojo",
  description:
    "A live, cohort-based intensive that takes you from watching AI coding demos to shipping a real, working project with Claude Code — agents, tools, MCP, hooks, and the review discipline a consultancy actually uses. UK-based.",
  keywords: [
    "Claude Code training",
    "Claude Code course",
    "agentic AI coding bootcamp",
    "AI coding cohort UK",
    "Claude Code MCP training",
    "AI assisted delivery",
    "Anthropic Claude Code workshop",
    "learn Claude Code",
  ],
  alternates: { canonical: `${SITE}/dojo/claude-code` },
  openGraph: {
    title: "Claude Code Intensive — Ship Real Software With Agentic AI",
    description:
      "Stop watching AI coding demos. A live cohort where you ship a real project with Claude Code the way a consultancy actually uses it.",
    url: `${SITE}/dojo/claude-code`,
    siteName: "Cyber Ninjas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code Intensive — Ship Real Software With Agentic AI",
    description:
      "Stop watching AI coding demos. A live cohort where you ship a real project with Claude Code.",
  },
};

// ── Terminal scripts ──────────────────────────────────────────────────────────

const heroScript: TerminalLine[] = [
  { type: "prompt", text: 'claude "add rate limiting to the /api/login route"' },
  { type: "gap", text: "" },
  { type: "think", text: "Planning — read the route, reuse the existing limiter, add a guard, test." },
  { type: "tool", text: "Read   src/app/api/login/route.ts", instant: true },
  { type: "tool", text: "Read   src/lib/redis.ts", instant: true },
  { type: "out", text: "Found an Upstash client already configured — reusing it.", instant: true },
  { type: "tool", text: "Edit   src/app/api/login/route.ts", instant: true },
  { type: "add", text: "const { success } = await ratelimit.limit(ip);" },
  { type: "add", text: 'if (!success) return new Response("Too many requests", { status: 429 });' },
  { type: "tool", text: "Bash   npm test -- login", instant: true },
  { type: "out", text: "✔ 14 passed  ·  login.test.ts", instant: true },
  { type: "gap", text: "" },
  { type: "done", text: "Done. Rate limiting added, tests green, nothing else touched." },
];

// The two terminals and the browser tell ONE story: prompt → code → a
// running site. clipScaffold + clipEnhance build exactly what
// <ScrollScrubPreview /> renders at localhost:3000.

const clipScaffold: TerminalLine[] = [
  { type: "prompt", text: 'claude "scaffold a cyber-ninja site with a full-bleed video hero"' },
  { type: "think", text: "Next.js page, full-bleed <video>, neon overlay title." },
  { type: "tool", text: "Write  app/page.tsx", instant: true },
  { type: "add", text: '<video ref={ref} src="/cyberninja.mp4" muted playsInline />' },
  { type: "tool", text: "Write  app/neon.css", instant: true },
  { type: "tool", text: "Bash   npm run dev", instant: true },
  { type: "out", text: "▲ ready on http://localhost:3000", instant: true },
  { type: "done", text: "Hero scaffolded and serving locally." },
];

const clipEnhance: TerminalLine[] = [
  { type: "prompt", text: 'claude "scrub the video frame-by-frame on scroll, parallax the title"' },
  { type: "think", text: "Map scroll progress to video.currentTime + transform the hero." },
  { type: "tool", text: "Edit   app/page.tsx", instant: true },
  { type: "add", text: "video.currentTime = progress * video.duration;" },
  { type: "add", text: "title.style.transform = `translateY(${-progress * 90}px)`;" },
  { type: "out", text: "✓ hot-reloaded http://localhost:3000", instant: true },
  { type: "done", text: "Live — scroll scrubs the film, frame by frame." },
];

// ── Differentiators ───────────────────────────────────────────────────────────

const differentiators = [
  {
    title: "Agentic Delivery",
    description:
      "You will not paste snippets into a chat box. You will run Claude Code as an agent that plans, edits across files, runs commands, and iterates — and learn how to direct it so the output is something you would actually ship.",
  },
  {
    title: "Tools & MCP",
    description:
      "Connect Claude Code to real systems with the Model Context Protocol. You will wire up and use tools and MCP servers so the agent operates on your actual environment — not a sandbox toy.",
  },
  {
    title: "Hooks & Automation",
    description:
      "Make the agent reliable. You will configure hooks, permissions, and guardrails so Claude Code runs your formatters, tests, and checks automatically — and stays inside the lines on real work.",
  },
  {
    title: "Subagents & Orchestration",
    description:
      "Move past one prompt at a time. You will break work into parallel subagents, plan multi-step changes, and orchestrate the agent across a real codebase — the difference between a demo and delivery.",
  },
  {
    title: "Guardrails & Review",
    description:
      "AI-written code still has to be correct. You will learn to read, challenge, and review what the agent produces — and the practices that keep AI-assisted work safe to put in front of a client.",
  },
  {
    title: "Ship Something Real",
    description:
      "The cohort is built around one outcome: a working project you delivered with Claude Code, from a blank repository to something that runs — documented and reviewed, not a tutorial result.",
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

const faqs = [
  {
    q: "Do I need to be a developer to take the Claude Code Intensive?",
    a: "No. The cohort is paced for two starting points — non-technical builders and individual developers — and both finish with a real project shipped. You do need to be willing to build, not just watch.",
  },
  {
    q: "How long is the Claude Code Intensive and how is it delivered?",
    a: "It runs as a three-week live cohort, delivered remotely from the UK. It is hands-on throughout — you build and ship a working project, not watch recordings.",
  },
  {
    q: "How is this different from free Claude Code tutorials and videos?",
    a: "It is led by a working consultancy that ships billable client work with Claude Code, it is applied rather than passive, and your work is reviewed to a professional standard. You leave with something that runs, not a folder of notes.",
  },
  {
    q: "What will I actually have at the end?",
    a: "A real, working project you delivered with Claude Code — agentic workflows, tools and MCP, hooks, and the review discipline that makes AI-assisted delivery safe enough to bill for.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Claude Code Intensive",
  description:
    "A live, cohort-based intensive that takes you from watching AI coding demos to shipping a real, working project with Claude Code — agents, tools, MCP, hooks, and professional review discipline.",
  provider: {
    "@type": "Organization",
    name: "Cyber Ninjas",
    url: SITE,
  },
  url: `${SITE}/dojo/claude-code`,
  offers: {
    "@type": "Offer",
    price: "950",
    priceCurrency: "GBP",
    category: "Paid",
    url: `${SITE}/dojo/apply?track=claude-code`,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "P3W",
    location: { "@type": "VirtualLocation", url: `${SITE}/dojo/claude-code` },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function Check() {
  return (
    <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
function Cross() {
  return (
    <svg className="w-4 h-4 text-stone-400 dark:text-stone-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* No-JS / non-rendering crawler fallback — never hide content */}
      <noscript>
        <style>{`.cn-reveal{opacity:1 !important;transform:none !important}`}</style>
      </noscript>

      {/* ─── 1. Terminal Hero ─────────────────────────────────────────────── */}
      <section className="cn-cinematic relative overflow-hidden py-24 lg:py-28">
        <ParallaxBg />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/dojo"
            className="inline-flex items-center gap-2 text-sm theme-text-muted hover:theme-text-primary transition-colors mb-12"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dojo
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — SEO content */}
            <div>
              <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-[#5eead8]/80 uppercase mb-5">
                Dojo Track — AI Engineering
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light theme-text-primary leading-[1.05] mb-5">
                Claude Code{" "}
                <GlitchWord text="Intensive" className="font-semibold text-red-500" />
              </h1>
              <p className="text-xl md:text-2xl font-light theme-text-secondary tracking-wide mb-7">
                Ship real software with agentic AI.
              </p>
              <p className="text-lg theme-text-muted leading-relaxed mb-10 max-w-xl">
                Everyone has watched the demos. Almost nobody ships production work with AI.
                In a three-week live cohort you go from prompting a chat box to running
                Claude Code as an agent on a real project — tools, MCP, hooks, subagents,
                and the review discipline that keeps AI-assisted work safe to deliver.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <NeonButton href="/dojo/apply?track=claude-code">Apply Now</NeonButton>
                <a
                  href="#agentic"
                  className="px-8 py-3 text-sm font-medium tracking-wide border theme-border theme-text-secondary rounded hover:theme-bg-primary transition-colors duration-300 text-center"
                >
                  See It In Action
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

            {/* Right — live terminal */}
            <div className="relative">
              <TerminalPlayer script={heroScript} title="claude — agentic session" />
            </div>

          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 cn-hairline" />
      </section>

      {/* ─── Cohort Strip ─────────────────────────────────────────────────── */}
      <div className="cn-strip border-b theme-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <span className="flex items-center gap-2 text-sm theme-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Next cohort forming — June 2026
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

      {/* ─── 2. Agentic In Action (live clips) ────────────────────────────── */}
      <section id="agentic" className="cn-cinematic relative overflow-hidden py-24 scroll-mt-20">
        <ParallaxBg />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-[#5eead8]/80 uppercase mb-4">
              What You&apos;ll Deliver
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
              Take an Idea and Ship It — to a Professional Standard
            </h2>
            <p className="theme-text-muted leading-relaxed">
              You leave able to turn a real idea into working, reviewed software with Claude
              Code — the same way we deliver client work. See a real example below.
            </p>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { n: "01", label: "Prompt", node: <TerminalPlayer script={clipScaffold} title="claude — scaffold the site" /> },
              { n: "02", label: "Refine", node: <TerminalPlayer script={clipEnhance} title="claude — scroll-scrub the video" /> },
              { n: "03", label: "Running on localhost", node: <ScrollScrubPreview url="localhost:3000" /> },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 140}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full border theme-border theme-text-primary dark:border-[#5eead8]/40 dark:text-[#5eead8] text-xs font-medium tabular-nums">
                    {step.n}
                  </span>
                  <span className="text-xs font-medium tracking-[0.2em] theme-text-muted uppercase">
                    {step.label}
                  </span>
                  {i < 2 && (
                    <span className="hidden lg:block flex-1 h-px bg-gradient-to-r from-[var(--border-color)] to-transparent dark:from-[#5eead8]/30" />
                  )}
                </div>
                {step.node}
              </Reveal>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 cn-hairline" />
      </section>

      {/* ─── 3. The Problem ───────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-dark relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
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
            </Reveal>
            <Reveal delay={120}>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 4. Comparison Table ──────────────────────────────────────────── */}
      <section className="py-24 theme-bg-primary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
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
          </Reveal>
          <Reveal className="overflow-x-auto">
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
                    className={`border-t theme-border ${i === comparisonRows.length - 1 ? "border-b" : ""}`}
                  >
                    <td className="py-3.5 pr-6 text-sm theme-text-muted">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center"><Mark value={row.courses} /></td>
                    <td className="py-3.5 px-4 text-center"><Mark value={row.selfStudy} /></td>
                    <td
                      className={`py-3.5 px-4 border-x theme-border bg-[var(--bg-card)] dark:border-red-500/20 ${i === comparisonRows.length - 1 ? "rounded-b-lg border-b" : ""}`}
                    >
                      <Mark value={row.dojo} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ─── 5. What Makes This Track Different ──────────────────────────── */}
      <section className="py-24 theme-bg-secondary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-16">
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
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 100}>
                <div className="group relative rounded-lg p-px h-full">
                  <span
                    className="service-card-gradient absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute inset-0 rounded-lg border theme-border group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative theme-bg-card rounded-[7px] p-6 h-full">
                    <h3 className="text-base font-medium theme-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm theme-text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. Who It Is For ─────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-primary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
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
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Reveal>
              <div className="theme-bg-card border theme-border rounded-lg p-8 h-full">
                <p className="text-xs font-medium tracking-[0.2em] theme-text-subtle uppercase mb-4">
                  Non-technical builders
                </p>
                <p className="text-sm theme-text-muted leading-relaxed">
                  You have ideas and projects but limited or no formal coding background. You
                  will learn to direct Claude Code as an agent to build and ship something real
                  — and to understand and trust what it produces, rather than hoping it works.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="theme-bg-card border theme-border rounded-lg p-8 h-full">
                <p className="text-xs font-medium tracking-[0.2em] theme-text-subtle uppercase mb-4">
                  Individual developers
                </p>
                <p className="text-sm theme-text-muted leading-relaxed">
                  You already write code and want to operate at a different level — agentic
                  workflows, MCP, hooks, subagent orchestration, and the review discipline that
                  makes AI-assisted delivery safe enough to bill for.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 7. Pricing ───────────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-secondary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Investment
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
              Programme Pricing
            </h2>
            <p className="theme-text-muted leading-relaxed">
              One straightforward fee covers everything. No upsells, no hidden costs.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Reveal>
              <div className="theme-bg-card border theme-border rounded-lg p-8 flex flex-col h-full">
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
            </Reveal>
            <Reveal delay={120}>
              <div className="theme-bg-card border theme-border rounded-lg p-8 flex flex-col h-full">
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
            </Reveal>
          </div>
          <p className="text-xs theme-text-subtle mt-8 max-w-lg">
            Payment is requested on acceptance of your application, not at the point of applying.
            Individual places can be paid by card. Corporate places are invoiced directly to your organisation.
          </p>
        </div>
      </section>

      {/* ─── 8. FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-primary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-12">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary">
              Frequently Asked
            </h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 100}>
                <div className="theme-bg-card border theme-border rounded-lg p-6">
                  <h3 className="text-base font-medium theme-text-primary mb-2">{f.q}</h3>
                  <p className="text-sm theme-text-muted leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
