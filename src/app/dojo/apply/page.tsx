import type { Metadata } from "next";
import ApplyForm from "./ApplyForm";

export const metadata: Metadata = {
  title: "Apply | Cyber Ninjas Dojo",
  description: "Apply to a Cyber Ninjas Dojo track — practitioner-led, cohort-based training. Limited places per cohort. Takes approximately 5 minutes.",
  openGraph: {
    title: "Apply | Cyber Ninjas Dojo",
    description: "Apply to a Cyber Ninjas Dojo track — practitioner-led, cohort-based training. Limited places per cohort.",
    url: "https://cyberninjascorp.com/dojo/apply",
    siteName: "Cyber Ninjas",
    type: "website",
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ track?: string }>;
}) {
  const { track } = await searchParams;
  // Power Platform bootcamp is hidden for now, so a bare /dojo/apply defaults to
  // the Claude Code track. The PP page still links here with ?track=power-platform.
  const normalized: "power-platform" | "claude-code" =
    track === "power-platform" ? "power-platform" : "claude-code";
  return <ApplyForm track={normalized} />;
}
