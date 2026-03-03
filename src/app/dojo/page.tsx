import type { Metadata } from "next";
import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";
import { CTASection } from "@/components/CTASection";
import { DojoWaitlist } from "@/components/DojoWaitlist";


export const metadata: Metadata = {
  title: "Cyber Ninjas Dojo | Power Platform Consultant Bootcamp",
  description:
    "A premium, cohort-based programme that trains career switchers and IT professionals to operate as billable Power Platform consultants. Includes PL-200 preparation, Azure DevOps, Agile delivery, and full consultancy simulation. UK-based.",
  keywords: [
    "Power Platform training UK",
    "Power Apps bootcamp",
    "PL-200 preparation",
    "Azure DevOps Power Platform",
    "Power Platform consultant bootcamp",
    "Power Platform consultant training",
    "Microsoft Power Platform certification UK",
  ],
};

// ── Data ──────────────────────────────────────────────────────────────────────

const differentiators = [
  {
    title: "Consultancy Simulation",
    description:
      "From day one, you operate inside a structured project environment modelled on real consultancy engagements. Timelines, deliverables, and dependencies mirror the conditions of a live project — not a training exercise.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Agile Ceremonies",
    description:
      "Every sprint begins with planning and ends with a review. You will run daily standups, manage your backlog, raise blockers, and participate in retrospectives — the same way you would on a live client project.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Azure DevOps",
    description:
      "Work items, user stories, epics, and sprint boards are managed in Azure DevOps throughout. You will leave the programme knowing how consultancies actually track and communicate project delivery.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0v10m0 0a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: "ALM and Deployments",
    description:
      "You will promote solutions through Development, Test, and Production environments. Understanding application lifecycle management is non-negotiable for a working Power Platform consultant.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
  },
  {
    title: "Governance and Documentation",
    description:
      "You will produce solution design documents, write functional specifications, and learn how to communicate technical decisions clearly — to both technical and non-technical stakeholders.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Peer Review",
    description:
      "Your work will be reviewed, and you will review others'. Pull requests, delivery standards, and constructive feedback are part of how the Dojo runs — and how professional consultancy teams operate.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
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
  { feature: "Platform knowledge", courses: true, selfStudy: true, dojo: true },
  { feature: "PL-200 preparation", courses: "partial", selfStudy: true, dojo: true },
  { feature: "Agile delivery practice", courses: false, selfStudy: false, dojo: true },
  { feature: "Azure DevOps boards", courses: false, selfStudy: false, dojo: true },
  { feature: "ALM and environment deployment", courses: false, selfStudy: false, dojo: true },
  { feature: "Consultancy simulation", courses: false, selfStudy: false, dojo: true },
  { feature: "Stakeholder engagement practice", courses: false, selfStudy: false, dojo: true },
  { feature: "Governance and documentation", courses: false, selfStudy: false, dojo: true },
  { feature: "Peer review and quality standards", courses: false, selfStudy: false, dojo: true },
  { feature: "Portfolio of project work", courses: false, selfStudy: false, dojo: true },
  { feature: "Billable consultant readiness", courses: false, selfStudy: false, dojo: true },
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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DojoPage() {
  return (
    <div className="theme-bg-primary">

      {/* ─── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="py-28 theme-bg-secondary relative">
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Training Programme
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light theme-text-primary leading-tight mb-3">
              Cyber Ninjas{" "}
              <span className="font-semibold theme-text-secondary dark:text-red-500">Dojo</span>
            </h1>
            <p className="text-xl md:text-2xl font-light theme-text-muted tracking-wide mb-8">
              Power Platform Consultant Bootcamp
            </p>
            <p className="text-lg theme-text-muted leading-relaxed max-w-2xl mb-10">
              Most Power Platform training stops at the tool. The Dojo goes further. Over 8 to 12
              weeks, you will work inside a fully simulated consultancy environment — running Agile
              sprints, managing Azure DevOps boards, deploying solutions across Dev, Test, and
              Production, and preparing for Microsoft PL-200 certification. This is not a course.
              It is a professional transition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <NeonButton href="/dojo/apply">Apply Now</NeonButton>
              <a
                href="/dojo/programme"
                className="px-8 py-3 text-sm font-medium tracking-wide border theme-border theme-text-secondary rounded hover:theme-bg-primary transition-colors duration-300 text-center"
              >
                Programme Overview
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t theme-border">
              {[
                { value: "8–12 Weeks", label: "Duration" },
                { value: "Cohort-Based", label: "Live Delivery" },
                { value: "PL-200", label: "Certification Prep" },
                { value: "£2,500 + VAT", label: "Programme Fee" },
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
        </div>
      </section>

      {/* ─── Cohort Strip ─────────────────────────────────────────────────── */}
      <div className="theme-bg-primary border-b theme-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <span className="flex items-center gap-2 text-sm theme-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Next cohort forming — April 2026
              </span>
              <span className="text-sm theme-text-subtle hidden sm:block">|</span>
              <span className="text-sm theme-text-muted">Limited to 12 participants</span>
              <span className="text-sm theme-text-subtle hidden sm:block">|</span>
              <span className="text-sm theme-text-muted">Applications close 14 March 2026</span>
            </div>
            <Link
              href="/dojo/apply"
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
                The Gap Between Training and Consultancy Work
              </h2>
              <p className="text-stone-400 leading-relaxed mb-4">
                Thousands of professionals hold Power Platform certifications or have completed
                online courses. Very few are ready to function effectively inside a consultancy
                engagement.
              </p>
              <p className="text-stone-400 leading-relaxed mb-4">
                The reason is straightforward: courses teach you to use the platform. They do not
                teach you how a consultant operates on a real project. There is a significant gap
                between completing training and being genuinely billable — and most professionals
                only discover it once they are already on the job.
              </p>
              <p className="text-stone-400 leading-relaxed border-l-2 border-red-500/30 pl-4 italic mt-8">
                The Dojo is designed to close this gap before you start.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-stone-500 uppercase mb-6">
                What standard training does not cover
              </p>
              <ul className="space-y-4">
                {[
                  "No exposure to Azure DevOps, source control, or work item management",
                  "No experience planning or delivering within Agile sprint cycles",
                  "No understanding of ALM or how solutions are promoted between environments",
                  "No practice handling scope change, client expectations, or competing priorities",
                  "No governance, documentation, or peer review experience",
                  "No understanding of what delivery quality looks like to a senior consultant or client",
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
              How the Dojo Compares
            </h2>
            <p className="theme-text-muted leading-relaxed">
              Standard training routes prepare you for the exam. The Dojo prepares you for the
              engagement. The difference is significant.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left py-4 pr-6 w-1/2" />
                  <th className="py-4 px-4 text-center">
                    <p className="text-xs font-medium tracking-[0.15em] theme-text-subtle uppercase">
                      Online Courses
                    </p>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <p className="text-xs font-medium tracking-[0.15em] theme-text-subtle uppercase">
                      Self-Study + Certs
                    </p>
                  </th>
                  <th className="py-4 px-4 text-center rounded-t-lg border-x border-t theme-border bg-[var(--bg-card)] dark:border-red-500/20">
                    <p className="text-xs font-medium tracking-[0.15em] theme-text-primary uppercase">
                      Cyber Ninjas Dojo
                    </p>
                    <p className="text-xs theme-text-subtle mt-0.5 dark:text-red-500/70">
                      This programme
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
                      {row.courses === true ? (
                        <Check />
                      ) : row.courses === "partial" ? (
                        <Partial />
                      ) : (
                        <Cross />
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {row.selfStudy === true ? (
                        <Check />
                      ) : row.selfStudy === "partial" ? (
                        <Partial />
                      ) : (
                        <Cross />
                      )}
                    </td>
                    <td
                      className={`py-3.5 px-4 border-x theme-border bg-[var(--bg-card)] dark:border-red-500/20 ${
                        i === comparisonRows.length - 1 ? "rounded-b-lg border-b" : ""
                      }`}
                    >
                      {row.dojo === true ? (
                        <Check />
                      ) : row.dojo === "partial" ? (
                        <Partial />
                      ) : (
                        <Cross />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 4. What Makes the Dojo Different ────────────────────────────── */}
      <section className="py-24 theme-bg-secondary relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
              Differentiation
            </p>
            <h2 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
              What Makes the Dojo Different
            </h2>
            <p className="theme-text-muted leading-relaxed">
              The Dojo is built around a single question: what would you need to experience to be
              genuinely ready for a consultancy engagement? Every element of the programme exists
              to answer that.
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

      {/* ─── Pricing ─────────────────────────────────────────────────────── */}
      <section className="py-24 theme-bg-primary relative">
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
                <span className="text-4xl font-light theme-text-primary">£2,500</span>
                <span className="text-sm theme-text-muted ml-2">+ VAT</span>
              </div>
              <p className="text-xs theme-text-subtle mb-8">£3,000 inc. VAT</p>
              <ul className="space-y-3 mb-10 flex-1">
                {[
                  "Full 8–12 week programme",
                  "Consultancy simulation environment",
                  "Azure DevOps access and coaching",
                  "PL-200 certification preparation",
                  "Peer review and feedback",
                  "Programme completion certificate",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm theme-text-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] dark:bg-red-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <NeonButton href="/dojo/apply">Apply Now</NeonButton>
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
                  "Tailored scenarios for your sector",
                  "Progress reporting for managers",
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
                href="/dojo/apply"
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
