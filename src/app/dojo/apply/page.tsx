import type { Metadata } from "next";
import ApplyForm from "./ApplyForm";

export const metadata: Metadata = {
  title: "Apply | Cyber Ninjas Dojo",
  description: "Apply to the Cyber Ninjas Dojo — a Power Platform Consultant Bootcamp. Limited places per cohort. Takes approximately 5 minutes.",
  openGraph: {
    title: "Apply | Cyber Ninjas Dojo",
    description: "Apply to the Cyber Ninjas Dojo — a Power Platform Consultant Bootcamp. Limited places per cohort.",
    url: "https://cyberninjascorp.com/dojo/apply",
    siteName: "Cyber Ninjas",
    type: "website",
  },
};

export default function Page() {
  return <ApplyForm />;
}
