"use client";

import { useState } from "react";

export function DojoWaitlist() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/dojo/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 py-3">
        <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
          <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </span>
        <p className="text-sm theme-text-muted">
          You are on the list — we will reach out before the next cohort opens publicly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        className="w-full sm:w-32 bg-transparent border theme-border rounded px-3 py-2 text-sm theme-text-primary placeholder:theme-text-subtle focus:outline-none focus:border-[var(--border-hover)] transition-colors duration-200"
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full sm:w-56 bg-transparent border theme-border rounded px-3 py-2 text-sm theme-text-primary placeholder:theme-text-subtle focus:outline-none focus:border-[var(--border-hover)] transition-colors duration-200"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 px-4 py-2 text-sm font-medium theme-text-primary border theme-border rounded hover:theme-bg-primary transition-colors duration-200 disabled:opacity-50 whitespace-nowrap"
      >
        {status === "loading" ? "Joining…" : "Join Waitlist"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-500 self-center">Something went wrong — try again.</p>
      )}
    </form>
  );
}
