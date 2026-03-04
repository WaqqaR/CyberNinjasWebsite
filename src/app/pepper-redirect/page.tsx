"use client";

import { useEffect, useState } from "react";

export default function PepperRedirect() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count <= 0) {
      window.location.replace("https://cyberninjascorp.com");
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#e2d2c5",
        fontFamily: "sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#78716c", marginBottom: "1rem" }}>
          We have moved
        </p>
        <h1 style={{ fontSize: "2rem", fontWeight: 300, color: "#1c1917", marginBottom: "0.5rem" }}>
          Pepper Tech is now{" "}
          <span style={{ fontWeight: 600 }}>Cyber Ninjas Corp</span>
        </h1>
        <p style={{ color: "#78716c", marginBottom: "2rem", lineHeight: 1.6 }}>
          Same team, same expertise — new name, new identity.
          <br />
          You will be redirected automatically in {count} second{count !== 1 ? "s" : ""}.
        </p>
        <a
          href="https://cyberninjascorp.com"
          style={{
            display: "inline-block",
            background: "#1c1917",
            color: "#fff",
            padding: "0.75rem 2rem",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "0.875rem",
            letterSpacing: "0.05em",
          }}
        >
          Go now →
        </a>
      </div>
    </div>
  );
}
