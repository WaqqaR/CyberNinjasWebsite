import type { Metadata } from "next";
import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";
import { CTASection } from "@/components/CTASection";
import { FaqAccordion } from "../FaqAccordion";

export const metadata: Metadata = {
  title: "Programme Overview | Cyber Ninjas Dojo",
  description:
    "A detailed breakdown of the Cyber Ninjas Dojo Power Platform Consultant Bootcamp — sprint timeline, programme content, outcomes, tools, pricing, and FAQ.",
};

const sprintPhases = [
  {
    label: "Foundation",
    weeks: "Weeks 1–2",
    theme: "Setup",
    activities: [
      "Environment and tooling orientation",
      "Azure DevOps board setup",
      "First sprint planning session",
      "Team norms and ways of working",
    ],
  },
  {
    label: "Sprint 01",
    weeks: "Weeks 3–4",
    theme: "Discovery & First Build",
    activities: [
      "Requirements and discovery workshop",
      "User story writing and refinement",
      "Canvas app build to acceptance criteria",
      "Dev environment deployment",
    ],
  },
  {
    label: "Sprint 02",
    weeks: "Weeks 5–6",
    theme: "Expand & Integrate",
    activities: [
      "Model-driven app development",
      "Power Automate flow integration",
      "Test environment promotion",
      "Stakeholder review simulation",
    ],
  },
  {
    label: "Sprint 03",
    weeks: "Weeks 7–8",
    theme: "Change & Quality",
    activities: [
      "In-sprint change request handling",
      "Peer code review and feedback",
      "Governance and documentation sprint",
      "Solution design document draft",
    ],
  },
  {
    label: "Sprint 04",
    weeks: "Weeks 9–10",
    theme: "Production & Sign-off",
    activities: [
      "Production environment promotion",
      "Stakeholder sign-off simulation",
      "Final governance review",
      "Retrospective and lessons learned",
    ],
  },
  {
    label: "Wrap-up",
    weeks: "Weeks 11–12",
    theme: "Portfolio & Certification",
    activities: [
      "Portfolio documentation and finalisation",
      "PL-200 structured exam preparation",
      "Peer portfolio reviews",
      "Programme retrospective and graduation",
    ],
  },
];

const experiences = [
  {
    number: "01",
    title: "Sprint Planning and Delivery",
    description:
      "Work through structured two-week sprint cycles from requirements through to review. Learn how delivery is planned, tracked, and communicated within an Agile framework.",
  },
  {
    number: "02",
    title: "User Story Interpretation",
    description:
      "Read, interpret, and write user stories that reflect real business requirements. Understand acceptance criteria and how they shape what gets built — and what does not.",
  },
  {
    number: "03",
    title: "Power Platform Development",
    description:
      "Build canvas and model-driven Power Apps against defined acceptance criteria. Develop Power Automate flows and integrate with Dataverse — to a consultancy standard, not a tutorial standard.",
  },
  {
    number: "04",
    title: "Dev / Test / Production Promotion",
    description:
      "Promote solutions through environments using ALM pipelines. Understand environment strategy and why it matters to clients, delivery teams, and the integrity of production systems.",
  },
  {
    number: "05",
    title: "Stakeholder Simulation",
    description:
      "Participate in simulated discovery workshops and requirements sessions. Practise asking the right questions and translating business need into clearly defined technical scope.",
  },
  {
    number: "06",
    title: "Change Request Management",
    description:
      "Handle in-sprint change requests within scope constraints. Learn how consultants manage scope, negotiate priorities, and communicate change clearly to clients and project leads.",
  },
  {
    number: "07",
    title: "PL-200 Certification Preparation",
    description:
      "Microsoft Power Platform Functional Consultant (PL-200) exam content is integrated throughout the programme. You will finish prepared for the exam and able to map it directly to real delivery practice.",
  },
];

const outcomes = [
  {
    title: "A Consultancy-Standard Portfolio",
    description:
      "You will leave with a portfolio of project work produced under real consultancy conditions — documented, structured, and ready to demonstrate professional readiness to a prospective employer or client.",
  },
  {
    title: "Real-World Delivery Experience",
    description:
      "The workflows, tools, and standards used in the Dojo are the same ones used on live client projects. You will recognise them immediately when you start your first engagement — because you have already used them.",
  },
  {
    title: "Readiness to Bill as a Consultant",
    description:
      "The programme is designed around one outcome: making you someone a consultancy can place with a client and trust to perform. That is the standard we hold the Dojo to, and the standard we measure graduates against.",
  },
  {
    title: "PL-200 Certification Confidence",
    description:
      "Certification content is woven into the programme from the start. You will be prepared for the Microsoft Power Platform Functional Consultant exam and understand precisely how it maps to real-world delivery.",
  },
];

const tools = [
  { name: "Power Platform", logo: "/PowerPlatform.webp", desc: "Canvas apps, model-driven apps, Dataverse" },
  { name: "Power Automate", logo: "/PALogo.png", desc: "Flows, connectors, approvals" },
  { name: "Azure DevOps", logo: "/azure logo.svg", desc: "Boards, repos, sprint management" },
  { name: "Power BI", logo: "/powerbi.webp", desc: "Reporting and data visualisation" },
  { name: "Power Pages", logo: "/PowerPages.webp", desc: "External-facing portals" },
];

export default function DojoProgrammePage() {
  return (
    <div className="theme-bg-primary transition-colors duration-[1000ms]">

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-28 theme-bg-secondary transition-colors duration-[1000ms] relative">
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
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Programme Overview
            </p>
            <h1 className="text-5xl md:text-6xl font-light theme-text-primary leading-tight mb-6">
              What the{" "}
              <span className="font-semibold theme-text-secondary dark:text-red-500">Dojo</span>{" "}
              Covers
            </h1>
            <p className="text-lg theme-text-muted leading-relaxed mb-10">
              A complete breakdown of the programme — the sprint structure, what you will build
              and experience, what you leave with, and how the format and pricing work.
            </p>
            <NeonButton href="/dojo/apply">Apply Now</NeonButton>
          </div>
        </div>
      </section>

      {/* ─── Sprint Timeline ──────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-dark relative transition-colors duration-[1000ms]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium tracking-[0.3em] text-stone-500 dark:text-red-500/70 uppercase mb-4">
              Programme Map
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-100 mb-4">
              Week by Week
            </h2>
            <p className="text-stone-400 leading-relaxed">
              The programme runs over six structured phases. Each sprint builds on the last,
              advancing you from environment setup through to production deployment and portfolio
              finalisation.
            </p>
          </div>
          <div className="relative">
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, var(--bg-dark-section), transparent)" }}
            />
            <div className="overflow-x-auto pb-4" style={{ scrollbarWidth: "thin", scrollbarColor: "var(--border-color) transparent" }}>
              <div className="flex gap-0 min-w-max">
                {sprintPhases.map((phase, i) => (
                  <div key={phase.label} className="flex items-stretch">
                    <div className="w-56 border border-stone-700/50 rounded-lg p-5 flex flex-col bg-stone-900/40 hover:bg-stone-900/60 transition-colors duration-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
                          {phase.weeks}
                        </span>
                        {i === 0 && (
                          <span className="text-xs font-medium text-stone-500 border border-stone-700 rounded px-1.5 py-0.5">
                            Setup
                          </span>
                        )}
                        {i === sprintPhases.length - 1 && (
                          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-500 border border-emerald-800/50 rounded px-1.5 py-0.5">
                            Final
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-stone-100 mb-0.5">{phase.label}</p>
                      <p className="text-xs text-stone-500 mb-4">{phase.theme}</p>
                      <ul className="space-y-2 mt-auto">
                        {phase.activities.map((a) => (
                          <li key={a} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-stone-600 shrink-0" />
                            <span className="text-xs text-stone-400 leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {i < sprintPhases.length - 1 && (
                      <div className="flex items-center px-2 shrink-0">
                        <div className="w-6 h-px bg-stone-700" />
                        <svg className="w-3 h-3 text-stone-600 -ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 4l8 8-8 8" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What You Will Experience ─────────────────────────────────────── */}
      <section className="py-24 theme-bg-primary transition-colors duration-[1000ms] relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
                Programme Content
              </p>
              <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
                What You Will Experience
              </h2>
              <p className="theme-text-muted leading-relaxed">
                The programme covers the full lifecycle of a Power Platform project — from
                discovery and requirements, through sprint delivery, to deployment and sign-off.
                Not just the build phase.
              </p>
            </div>
            <div className="space-y-6">
              {experiences.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-6 pb-6 border-b theme-border last:border-0 last:pb-0"
                >
                  <span className="text-3xl font-light theme-text-subtle shrink-0 w-12 tabular-nums">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-base font-medium theme-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm theme-text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Outcomes ─────────────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-secondary transition-colors duration-[1000ms] relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Results
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
              What You Leave With
            </h2>
            <p className="theme-text-muted leading-relaxed">
              The Dojo is outcomes-focused. Every element of the programme exists to serve a
              defined end state: a participant who is genuinely ready to operate as a billable
              Power Platform consultant.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((item, i) => (
              <div
                key={item.title}
                className="theme-bg-card border theme-border rounded-lg p-8 group hover:border-[var(--border-hover)] transition-colors duration-300"
              >
                <div className="flex items-start gap-5">
                  <span className="text-4xl font-light theme-text-subtle shrink-0 tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-medium theme-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm theme-text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tools & Technologies ─────────────────────────────────────────── */}
      <section className="py-16 theme-bg-primary relative transition-colors duration-[1000ms]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <div className="shrink-0">
              <p className="text-sm font-medium tracking-[0.2em] theme-text-subtle uppercase">
                Tools used in this programme
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-8">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-3 group">
                  <img src={tool.logo} alt={tool.name} className="h-7 w-auto object-contain opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="hidden lg:block">
                    <p className="text-xs font-medium theme-text-muted leading-none">{tool.name}</p>
                    <p className="text-xs theme-text-subtle mt-0.5">{tool.desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 flex items-center justify-center">
                  <svg className="w-6 h-6 opacity-50" viewBox="0 0 24 24" fill="none">
                    <rect x="1" y="1" width="10" height="10" rx="1.5" fill="currentColor" className="theme-text-muted" />
                    <rect x="13" y="1" width="10" height="10" rx="1.5" fill="currentColor" className="theme-text-muted" />
                    <rect x="1" y="13" width="10" height="10" rx="1.5" fill="currentColor" className="theme-text-muted" />
                    <rect x="13" y="13" width="10" height="10" rx="1.5" fill="currentColor" className="theme-text-muted" />
                  </svg>
                </div>
                <div className="hidden lg:block">
                  <p className="text-xs font-medium theme-text-muted leading-none">Microsoft 365</p>
                  <p className="text-xs theme-text-subtle mt-0.5">Teams, SharePoint, Outlook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Format + Pricing ─────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-secondary transition-colors duration-[1000ms] relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
                Format
              </p>
              <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-6">
                Programme Structure
              </h2>
              <p className="theme-text-muted leading-relaxed mb-10">
                The Dojo runs as a live, structured cohort. Small group sizes are intentional —
                they allow for the close feedback, accountability, and simulation quality that is
                not possible at scale.
              </p>
              <div className="border theme-border rounded-lg overflow-hidden mb-8">
                <div className="relative p-6 border-b theme-border">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent opacity-50 dark:opacity-100" />
                  <p className="text-xs font-medium tracking-[0.2em] theme-text-subtle uppercase mb-3">Pay in full</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-light theme-text-primary">£2,500</span>
                    <span className="text-sm theme-text-muted">+ VAT</span>
                  </div>
                  <p className="text-sm theme-text-muted mt-2">
                    All sessions, materials, tooling access, and PL-200 preparation included.
                  </p>
                </div>
                <div className="p-6 border-b theme-border theme-bg-card">
                  <p className="text-xs font-medium tracking-[0.2em] theme-text-subtle uppercase mb-3">Instalment plan</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-light theme-text-primary">2 × £1,350</span>
                    <span className="text-sm theme-text-muted">+ VAT</span>
                  </div>
                  <p className="text-sm theme-text-muted mt-1">Total £2,700 + VAT. Schedule confirmed on acceptance.</p>
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium tracking-[0.2em] theme-text-subtle uppercase mb-2">Corporate and team pricing</p>
                  <p className="text-sm theme-text-muted">
                    Available for organisations upskilling multiple team members.{" "}
                    <Link href="/dojo/apply" className="theme-text-primary dark:text-red-500 hover:opacity-70 transition-opacity">
                      Contact us on application.
                    </Link>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Duration", value: "8–12 Weeks" },
                  { label: "Cohort Size", value: "Max 12" },
                  { label: "Delivery", value: "Live, Remote" },
                  { label: "Location", value: "UK-Based" },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-[var(--border-color)] pl-4">
                    <p className="text-xs font-medium tracking-[0.2em] theme-text-subtle uppercase mb-1">{item.label}</p>
                    <p className="text-lg font-medium theme-text-primary">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.2em] theme-text-subtle uppercase mb-6">What to expect</p>
              <ul className="space-y-5">
                {[
                  { title: "Weekly live sessions", detail: "Structured sessions combining instruction, sprint work, and peer review. Attendance is expected — sessions are not recorded as a substitute for participation." },
                  { title: "Sprint ceremonies throughout", detail: "Planning, standups, reviews, and retrospectives are part of the programme structure — not optional extras. These are how the work is managed." },
                  { title: "Practical assessment", detail: "Assessment is based on the quality of your deliverables, not a multiple-choice exam. Work is reviewed against consultancy standards and given structured feedback." },
                  { title: "Integrated PL-200 preparation", detail: "Certification content is built into the programme from the start. You will finish with both real delivery experience and the preparation to sit the exam with confidence." },
                  { title: "Post-programme support", detail: "Access to the Dojo graduate network and a 30-day post-programme check-in to support your transition into your first consultancy role." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--accent)] dark:bg-red-500 shrink-0" />
                    <div>
                      <p className="text-sm font-medium theme-text-primary mb-0.5">{item.title}</p>
                      <p className="text-sm theme-text-muted leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-primary transition-colors duration-[1000ms] relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
            <div className="lg:sticky lg:top-28 self-start">
              <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
                Questions
              </p>
              <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
                Frequently Asked
              </h2>
              <p className="theme-text-muted leading-relaxed mb-6">
                If your question is not answered here, get in touch — we are happy to talk
                through the details before you apply.
              </p>
              <Link
                href="/dojo/apply"
                className="inline-flex items-center gap-2 text-sm font-medium theme-text-primary dark:text-red-500 hover:opacity-70 transition-opacity"
              >
                <span>Ask a question</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <CTASection
        heading="Applications Are Now Open"
        description="Cohort places are limited to 12 participants by design. If you are serious about making the transition into Power Platform consultancy, submit your application to begin the process."
        buttonText="Apply Now"
        href="/dojo/apply"
      />
    </div>
  );
}
