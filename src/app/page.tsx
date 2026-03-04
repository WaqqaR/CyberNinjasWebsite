import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Cyber Ninjas | Microsoft Power Platform & AI Consultancy",
  description: "Boutique UK technology consultancy specialising in Microsoft Power Platform, Dynamics 365, Copilot Studio, and AI automation. We partner with select clients to deliver digital transformation with precision.",
  keywords: ["Power Platform consultancy UK", "Dynamics 365 consultant", "Copilot Studio", "AI automation", "digital transformation", "Microsoft consultancy"],
  openGraph: {
    title: "Cyber Ninjas | Microsoft Power Platform & AI Consultancy",
    description: "Boutique UK technology consultancy specialising in Microsoft Power Platform, Dynamics 365, Copilot Studio, and AI automation.",
    url: "https://cyberninjascorp.com",
    siteName: "Cyber Ninjas",
    type: "website",
  },
};

export default function Page() {
  return <HomeClient />;
}
