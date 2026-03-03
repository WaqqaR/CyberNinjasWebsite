"use client";

import React from "react";

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

export function NeonButton({ children, onClick, href, className = "", disabled = false }: NeonButtonProps) {
  const inner = (
    <>
      <span className="neon-btn-bg" />
      <span className="neon-btn-txt">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`neon-btn ${className}`}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={`neon-btn ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}>
      {inner}
    </button>
  );
}
