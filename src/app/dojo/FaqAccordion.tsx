"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need prior Power Platform experience to apply?",
    a: "You do not need professional experience, but you do need a baseline level of technical exposure. Complete beginners with no technical background at all are unlikely to get the most from the programme. If you are unsure whether you qualify, apply — we assess each application individually and will tell you honestly.",
  },
  {
    q: "Do participants work on real client projects?",
    a: "No. All work is conducted within a simulated consultancy environment. You will work on structured, realistic projects that mirror client engagements, but no participant ever works on a live client account. This protects both clients and participants, and ensures the simulation is controlled and consistent for everyone.",
  },
  {
    q: "Does the programme prepare me for Microsoft PL-200?",
    a: "Yes. PL-200 (Microsoft Power Platform Functional Consultant) content is integrated throughout the programme from the start — not bolted on at the end. You will finish with both the practical delivery experience and the structured preparation needed to sit the exam with confidence.",
  },
  {
    q: "What is the weekly time commitment?",
    a: "You should expect to commit between 8 and 12 hours per week, including live sessions, sprint work, and independent study. The programme is designed around working professionals, but it requires genuine engagement. Participants who treat it as a side activity typically do not complete it.",
  },
  {
    q: "Is a payment plan available?",
    a: "Yes. You can pay in full at £2,500 + VAT, or split into two instalments of £1,350 + VAT each (total £2,700 + VAT). Instalment schedules are confirmed during the application process. Corporate invoicing is available for employer-funded places.",
  },
  {
    q: "Can my employer fund my place?",
    a: "Yes, and many participants go this route. We can provide a programme prospectus, detailed outcomes documentation, and a formal invoice to support funding requests. For organisations looking to upskill multiple team members, corporate and team pricing is available on application.",
  },
  {
    q: "What tools or licences will I need access to?",
    a: "A Microsoft 365 account with access to Power Platform trial environments is sufficient for most of the programme. We guide you through environment setup in the first week. You do not need to purchase any additional tooling or licences before applying — we will tell you exactly what you need once your place is confirmed.",
  },
  {
    q: "What happens after I apply?",
    a: "We review every application individually and aim to respond within two working days. Shortlisted applicants are invited to a short call to discuss the programme and confirm their place. We do not operate a waiting list — places are confirmed in the order applications are accepted.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={faq.q} className={`border-b theme-border ${i === 0 ? "border-t" : ""}`}>
          <button
            type="button"
            className="w-full flex items-start justify-between py-5 text-left gap-6"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-sm font-medium theme-text-primary">{faq.q}</span>
            <svg
              className={`w-4 h-4 theme-text-subtle shrink-0 mt-0.5 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <p className="pb-5 text-sm theme-text-muted leading-relaxed max-w-3xl">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
