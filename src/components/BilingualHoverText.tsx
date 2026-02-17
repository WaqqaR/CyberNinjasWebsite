"use client";

import Link from "next/link";

interface BilingualHoverTextProps {
  english: string;
  japanese: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  height?: "sm" | "md" | "lg";
}

const heightClasses = {
  sm: "h-5",
  md: "h-8",
  lg: "h-11",
};

export function BilingualHoverText({
  english,
  japanese,
  href,
  onClick,
  className = "",
  height = "lg",
}: BilingualHoverTextProps) {
  const inner = (
    <>
      <span className="inline-block transition-[translate,opacity] duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
        {english}
      </span>
      <span className="absolute inset-0 inline-flex items-center justify-center translate-y-full opacity-0 transition-[translate,opacity] duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
        {japanese}
      </span>
    </>
  );

  const sharedClassName = `group relative inline-flex items-center justify-center overflow-clip ${heightClasses[height]} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={sharedClassName}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={href || "/"} className={sharedClassName}>
      {inner}
    </Link>
  );
}
