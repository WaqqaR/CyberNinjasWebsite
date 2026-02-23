"use client";

import React from "react";

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function NeonButton({ children, onClick, href, className = "" }: NeonButtonProps) {
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
    <button onClick={onClick} className={`neon-btn ${className}`}>
      {inner}
    </button>
  );
}
