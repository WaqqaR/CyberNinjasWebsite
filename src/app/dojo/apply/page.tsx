"use client";

import { useState } from "react";
import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";

type BackgroundType = "career-switcher" | "junior-developer" | "it-professional" | "corporate" | "";
type ExperienceLevel = "none" | "basic" | "hands-on" | "intermediate" | "";
type DevOpsExperience = "yes" | "no" | "heard-of-it" | "";
type CohortAvailability = "yes" | "future" | "unsure" | "";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  jobTitle: string;
  location: string;
  backgroundType: BackgroundType;
  companyName: string;
  teamSize: string;
  corporateObjectives: string;
  experienceLevel: ExperienceLevel;
  certifications: string;
  devOpsExperience: DevOpsExperience;
  whyDojo: string;
  successDefinition: string;
  howHeard: string;
  cohortAvailability: CohortAvailability;
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  linkedin: "",
  jobTitle: "",
  location: "",
  backgroundType: "",
  companyName: "",
  teamSize: "",
  corporateObjectives: "",
  experienceLevel: "",
  certifications: "",
  devOpsExperience: "",
  whyDojo: "",
  successDefinition: "",
  howHeard: "",
  cohortAvailability: "",
};

const STEPS = ["About You", "Your Background", "Your Experience", "Motivation"];

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-medium theme-text-primary mb-1.5">
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full bg-transparent border theme-border rounded px-4 py-3 text-sm theme-text-primary placeholder:theme-text-subtle focus:outline-none focus:border-[var(--border-hover)] transition-colors duration-200"
    />
  );
}

function TextArea({
  value,
  onChange,
  placeholder,
  rows = 4,
  required,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className="w-full bg-transparent border theme-border rounded px-4 py-3 text-sm theme-text-primary placeholder:theme-text-subtle focus:outline-none focus:border-[var(--border-hover)] transition-colors duration-200 resize-none"
    />
  );
}

function RadioCard({
  selected,
  onSelect,
  label,
  description,
}: {
  selected: boolean;
  onSelect: () => void;
  label: string;
  description?: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left flex items-start gap-3 p-4 border rounded transition-colors duration-200 ${
        selected
          ? "border-[var(--border-hover)] theme-bg-card"
          : "theme-border hover:border-[var(--border-hover)]/50 theme-bg-card/50"
      }`}
    >
      <span
        className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors duration-200 ${
          selected ? "border-[var(--border-hover)]" : "theme-border"
        }`}
      >
        {selected && (
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] dark:bg-red-500 block" />
        )}
      </span>
      <div>
        <p className="text-sm font-medium theme-text-primary">{label}</p>
        {description && <p className="text-xs theme-text-muted mt-0.5 leading-relaxed">{description}</p>}
      </div>
    </button>
  );
}

function SelectInput({
  value,
  onChange,
  options,
  required,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full bg-transparent border theme-border rounded px-4 py-3 text-sm theme-text-primary focus:outline-none focus:border-[var(--border-hover)] transition-colors duration-200 cursor-pointer"
    >
      <option value="" className="theme-bg-primary">Select one</option>
      {options.map((o) => (
        <option key={o.value} value={o.value} className="theme-bg-primary">
          {o.label}
        </option>
      ))}
    </select>
  );
}

export default function DojoApplyPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors([]);
  }

  function validateStep(): string[] {
    const errs: string[] = [];
    if (step === 0) {
      if (!data.firstName.trim()) errs.push("First name is required.");
      if (!data.lastName.trim()) errs.push("Last name is required.");
      if (!data.email.trim() || !data.email.includes("@")) errs.push("A valid email address is required.");
      if (!data.jobTitle.trim()) errs.push("Current job title is required.");
    }
    if (step === 1) {
      if (!data.backgroundType) errs.push("Please select the option that best describes you.");
      if (data.backgroundType === "corporate" && !data.companyName.trim())
        errs.push("Company name is required for corporate applications.");
    }
    if (step === 2) {
      if (!data.experienceLevel) errs.push("Please select your Power Platform experience level.");
      if (!data.devOpsExperience) errs.push("Please indicate your Azure DevOps familiarity.");
    }
    if (step === 3) {
      if (!data.whyDojo.trim() || data.whyDojo.trim().length < 50)
        errs.push("Please tell us why you want to join the Dojo (at least 50 characters).");
      if (!data.successDefinition.trim() || data.successDefinition.trim().length < 30)
        errs.push("Please describe what success looks like for you (at least 30 characters).");
      if (!data.cohortAvailability) errs.push("Please indicate your cohort availability.");
    }
    return errs;
  }

  function handleNext() {
    const errs = validateStep();
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    setErrors([]);
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1);
    } else {
      handleSubmit();
    }
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="theme-bg-primary min-h-[80vh] flex items-center transition-colors duration-[1000ms]">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 py-24 text-center">
          <div className="w-12 h-12 rounded-full border theme-border flex items-center justify-center mx-auto mb-8">
            <svg className="w-5 h-5 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
            Application Received
          </p>
          <h1 className="text-3xl md:text-4xl font-light theme-text-primary mb-4">
            Thank you, {data.firstName}.
          </h1>
          <p className="theme-text-muted leading-relaxed mb-4">
            Your application has been received. A member of the Cyber Ninjas team will review your
            submission and be in touch within two working days.
          </p>
          <p className="theme-text-muted leading-relaxed mb-10">
            In the meantime, if you have any questions about the programme, use the chat below —
            we are happy to talk through the details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton onClick={() => window.dispatchEvent(new CustomEvent("open-chat-widget"))}>
              Chat With Us
            </NeonButton>
            <Link
              href="/dojo"
              className="px-8 py-3 text-sm font-medium tracking-wide border theme-border theme-text-secondary rounded hover:theme-bg-secondary transition-colors duration-300 text-center"
            >
              Back to the Dojo
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="theme-bg-primary transition-colors duration-[1000ms]">
      {/* Header */}
      <section className="py-16 theme-bg-secondary relative transition-colors duration-[1000ms]">
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/dojo"
            className="inline-flex items-center gap-2 text-sm theme-text-subtle hover:theme-text-primary transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Cyber Ninjas Dojo
          </Link>
          <p className="text-sm font-medium tracking-[0.3em] theme-text-subtle dark:text-red-500/80 uppercase mb-4">
            Application Form
          </p>
          <h1 className="text-3xl md:text-4xl font-light theme-text-primary mb-2">
            Apply for the{" "}
            <span className="font-semibold dark:text-red-500">Dojo</span>
          </h1>
          <p className="theme-text-muted text-sm">
            This takes approximately 5 minutes. All fields marked with an asterisk are required.
          </p>
        </div>
      </section>

      {/* Progress */}
      <div className="theme-bg-secondary border-b theme-border transition-colors duration-[1000ms]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-0">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-0 flex-1 last:flex-none">
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors duration-300 ${
                      i < step
                        ? "bg-[var(--accent)] dark:bg-red-500 text-white"
                        : i === step
                        ? "border-2 border-[var(--border-hover)] theme-text-primary"
                        : "border theme-border theme-text-subtle"
                    }`}
                  >
                    {i < step ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </span>
                  <span
                    className={`text-xs font-medium hidden sm:block transition-colors duration-300 ${
                      i === step ? "theme-text-primary" : "theme-text-subtle"
                    }`}
                  >
                    {s}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`h-px flex-1 mx-3 transition-colors duration-300 ${i < step ? "bg-[var(--accent)] dark:bg-red-500" : "bg-[var(--border-color)]"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Body */}
      <section className="py-16 theme-bg-primary transition-colors duration-[1000ms]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          {/* Step 0: About You */}
          {step === 0 && (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium tracking-[0.2em] theme-text-subtle uppercase mb-1">Step 1 of 4</p>
                <h2 className="text-2xl font-light theme-text-primary mb-6">About You</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <FieldLabel required>First name</FieldLabel>
                  <TextInput value={data.firstName} onChange={(v) => update("firstName", v)} placeholder="Jane" required />
                </div>
                <div>
                  <FieldLabel required>Last name</FieldLabel>
                  <TextInput value={data.lastName} onChange={(v) => update("lastName", v)} placeholder="Smith" required />
                </div>
              </div>
              <div>
                <FieldLabel required>Email address</FieldLabel>
                <TextInput type="email" value={data.email} onChange={(v) => update("email", v)} placeholder="jane.smith@email.com" required />
              </div>
              <div>
                <FieldLabel required>Current job title</FieldLabel>
                <TextInput value={data.jobTitle} onChange={(v) => update("jobTitle", v)} placeholder="e.g. IT Support Analyst, Junior Developer" required />
              </div>
              <div>
                <FieldLabel>Location</FieldLabel>
                <TextInput value={data.location} onChange={(v) => update("location", v)} placeholder="e.g. London, UK" />
              </div>
              <div>
                <FieldLabel>LinkedIn profile (optional)</FieldLabel>
                <TextInput value={data.linkedin} onChange={(v) => update("linkedin", v)} placeholder="https://linkedin.com/in/..." />
              </div>
            </div>
          )}

          {/* Step 1: Background */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium tracking-[0.2em] theme-text-subtle uppercase mb-1">Step 2 of 4</p>
                <h2 className="text-2xl font-light theme-text-primary mb-1">Your Background</h2>
                <p className="text-sm theme-text-muted mb-6">Select the option that best describes your current situation.</p>
              </div>
              <div className="space-y-3">
                <RadioCard
                  selected={data.backgroundType === "career-switcher"}
                  onSelect={() => update("backgroundType", "career-switcher")}
                  label="Career switcher"
                  description="I am transitioning from another field and want to move into Power Platform consultancy."
                />
                <RadioCard
                  selected={data.backgroundType === "junior-developer"}
                  onSelect={() => update("backgroundType", "junior-developer")}
                  label="Junior developer"
                  description="I have a development background and want to specialise in the Microsoft Power Platform ecosystem."
                />
                <RadioCard
                  selected={data.backgroundType === "it-professional"}
                  onSelect={() => update("backgroundType", "it-professional")}
                  label="IT professional"
                  description="I work in IT support, systems administration, or a similar role and want to move into a consultancy position."
                />
                <RadioCard
                  selected={data.backgroundType === "corporate"}
                  onSelect={() => update("backgroundType", "corporate")}
                  label="Corporate / team training"
                  description="I am applying on behalf of a team or organisation looking to upskill multiple individuals."
                />
              </div>

              {data.backgroundType === "corporate" && (
                <div className="space-y-4 border theme-border rounded-lg p-6 mt-2">
                  <p className="text-sm font-medium theme-text-primary">Corporate application details</p>
                  <div>
                    <FieldLabel required>Company name</FieldLabel>
                    <TextInput value={data.companyName} onChange={(v) => update("companyName", v)} placeholder="Acme Ltd" required />
                  </div>
                  <div>
                    <FieldLabel>Number of participants</FieldLabel>
                    <SelectInput
                      value={data.teamSize}
                      onChange={(v) => update("teamSize", v)}
                      options={[
                        { value: "2-3", label: "2–3 people" },
                        { value: "4-6", label: "4–6 people" },
                        { value: "7-10", label: "7–10 people" },
                        { value: "10+", label: "More than 10 people" },
                      ]}
                    />
                  </div>
                  <div>
                    <FieldLabel>Specific objectives or requirements</FieldLabel>
                    <TextArea
                      value={data.corporateObjectives}
                      onChange={(v) => update("corporateObjectives", v)}
                      placeholder="Briefly describe what you are hoping to achieve for your team..."
                      rows={3}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Experience */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium tracking-[0.2em] theme-text-subtle uppercase mb-1">Step 3 of 4</p>
                <h2 className="text-2xl font-light theme-text-primary mb-1">Your Experience</h2>
                <p className="text-sm theme-text-muted mb-6">
                  Be honest — we use this to ensure the programme is a good fit for you, not to filter out candidates.
                </p>
              </div>
              <div>
                <FieldLabel required>Power Platform experience level</FieldLabel>
                <div className="space-y-3 mt-2">
                  <RadioCard
                    selected={data.experienceLevel === "none"}
                    onSelect={() => update("experienceLevel", "none")}
                    label="None — I have not used it yet"
                    description="I am aware of Power Platform but have not built anything with it."
                  />
                  <RadioCard
                    selected={data.experienceLevel === "basic"}
                    onSelect={() => update("experienceLevel", "basic")}
                    label="Basic — tutorials and online content only"
                    description="I have completed Microsoft Learn paths or similar content but have not built real solutions."
                  />
                  <RadioCard
                    selected={data.experienceLevel === "hands-on"}
                    onSelect={() => update("experienceLevel", "hands-on")}
                    label="Some hands-on — informal or internal builds"
                    description="I have built solutions informally, for internal use, or as part of personal projects."
                  />
                  <RadioCard
                    selected={data.experienceLevel === "intermediate"}
                    onSelect={() => update("experienceLevel", "intermediate")}
                    label="Intermediate — professional use"
                    description="I work with Power Platform in a professional capacity as part of my current role."
                  />
                </div>
              </div>
              <div>
                <FieldLabel required>Azure DevOps familiarity</FieldLabel>
                <div className="space-y-3 mt-2">
                  <RadioCard
                    selected={data.devOpsExperience === "yes"}
                    onSelect={() => update("devOpsExperience", "yes")}
                    label="Yes — I have used it"
                    description="I have worked with Azure DevOps boards, pipelines, or repos in some capacity."
                  />
                  <RadioCard
                    selected={data.devOpsExperience === "heard-of-it"}
                    onSelect={() => update("devOpsExperience", "heard-of-it")}
                    label="I am aware of it but have not used it"
                    description="I know what it is but have not had direct experience with it."
                  />
                  <RadioCard
                    selected={data.devOpsExperience === "no"}
                    onSelect={() => update("devOpsExperience", "no")}
                    label="No — this will be new to me"
                    description="I have no prior experience with Azure DevOps."
                  />
                </div>
              </div>
              <div>
                <FieldLabel>Microsoft certifications held (optional)</FieldLabel>
                <TextInput
                  value={data.certifications}
                  onChange={(v) => update("certifications", v)}
                  placeholder="e.g. PL-900, PL-200, AZ-900, none"
                />
              </div>
            </div>
          )}

          {/* Step 3: Motivation */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium tracking-[0.2em] theme-text-subtle uppercase mb-1">Step 4 of 4</p>
                <h2 className="text-2xl font-light theme-text-primary mb-1">Your Motivation</h2>
                <p className="text-sm theme-text-muted mb-6">
                  These answers carry the most weight in our review. Take the time to be specific.
                </p>
              </div>
              <div>
                <FieldLabel required>Why do you want to join the Dojo?</FieldLabel>
                <TextArea
                  value={data.whyDojo}
                  onChange={(v) => update("whyDojo", v)}
                  placeholder="Tell us about your current situation, what is driving the change, and why the Dojo specifically is the right next step for you..."
                  rows={5}
                  required
                />
                <p className="text-xs theme-text-subtle mt-1">{data.whyDojo.trim().length} characters (minimum 50)</p>
              </div>
              <div>
                <FieldLabel required>What does success look like for you after completing the programme?</FieldLabel>
                <TextArea
                  value={data.successDefinition}
                  onChange={(v) => update("successDefinition", v)}
                  placeholder="Be specific — what role, environment, or outcome are you working towards?"
                  rows={4}
                  required
                />
              </div>
              <div>
                <FieldLabel required>Cohort availability</FieldLabel>
                <div className="space-y-3 mt-2">
                  <RadioCard
                    selected={data.cohortAvailability === "yes"}
                    onSelect={() => update("cohortAvailability", "yes")}
                    label="I am available for the next cohort"
                    description="I can commit to the programme schedule as advertised."
                  />
                  <RadioCard
                    selected={data.cohortAvailability === "future"}
                    onSelect={() => update("cohortAvailability", "future")}
                    label="I am interested in a future cohort"
                    description="I am not available right now but want to be considered when the next cohort is announced."
                  />
                  <RadioCard
                    selected={data.cohortAvailability === "unsure"}
                    onSelect={() => update("cohortAvailability", "unsure")}
                    label="I am not yet sure"
                    description="I need more information before committing to a start date."
                  />
                </div>
              </div>
              <div>
                <FieldLabel>How did you hear about the Dojo?</FieldLabel>
                <SelectInput
                  value={data.howHeard}
                  onChange={(v) => update("howHeard", v)}
                  options={[
                    { value: "linkedin", label: "LinkedIn" },
                    { value: "google", label: "Google / web search" },
                    { value: "word-of-mouth", label: "Word of mouth" },
                    { value: "event", label: "Event or meetup" },
                    { value: "other", label: "Other" },
                  ]}
                />
              </div>
            </div>
          )}

          {/* Errors */}
          {errors.length > 0 && (
            <div className="mt-6 border border-red-500/30 rounded-lg p-4">
              <ul className="space-y-1">
                {errors.map((e) => (
                  <li key={e} className="text-sm text-red-500 flex items-start gap-2">
                    <span className="mt-1 w-1 h-1 rounded-full bg-red-500 shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t theme-border">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => { setStep((s) => s - 1); setErrors([]); }}
                className="flex items-center gap-2 text-sm theme-text-muted hover:theme-text-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            ) : (
              <span />
            )}
            <NeonButton onClick={handleNext}>
              {step < STEPS.length - 1 ? "Continue" : "Submit Application"}
            </NeonButton>
          </div>

          {/* Privacy note */}
          <p className="text-xs theme-text-subtle mt-6 text-center">
            Your information is used solely to assess your application and will not be shared with
            third parties. By submitting you agree to our privacy policy.
          </p>
        </div>
      </section>
    </div>
  );
}
