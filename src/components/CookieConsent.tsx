"use client";

import { useEffect, useState } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] px-4 pb-4 pointer-events-none">
      <div
        className="pointer-events-auto mx-auto max-w-3xl rounded-lg theme-bg-card border theme-border shadow-2xl overflow-hidden"
        style={{ boxShadow: "0 0 0 1px var(--border-color), 0 8px 32px rgba(0,0,0,0.2)" }}
      >
        {/* Gradient top line */}
        <div
          className="h-px w-full hidden dark:block"
          style={{ background: "linear-gradient(to right, transparent, rgba(158,48,169,0.7) 30%, rgba(64,144,181,0.9) 60%, transparent)" }}
        />

        <div className="px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Icon */}
          <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, rgba(158,48,169,0.15), rgba(64,144,181,0.15))", border: "1px solid rgba(158,48,169,0.25)" }}
          >
            <svg className="w-4 h-4 theme-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium theme-text-primary mb-0.5">This site uses cookies</p>
            <p className="text-xs theme-text-muted leading-relaxed">
              We use essential cookies to make our site work. With your consent, we may also use analytics cookies to improve your experience.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={decline}
              className="px-4 py-1.5 text-xs font-medium tracking-wide theme-text-muted border theme-border rounded hover:theme-text-primary transition-colors duration-200"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="relative px-4 py-1.5 text-xs font-medium tracking-wide rounded overflow-hidden transition-all duration-200"
              style={{
                background: "linear-gradient(to right, #9e30a9, #4090b5)",
                color: "#fff",
                boxShadow: "0 0 8px rgba(158,48,169,0.3), 0 0 16px rgba(64,144,181,0.2)",
              }}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
