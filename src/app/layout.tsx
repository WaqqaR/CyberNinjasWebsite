import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { CookieConsent } from "@/components/CookieConsent";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Cyber Ninjas | Digital Transformation & AI Consultancy",
  description: "Boutique technology consultancy specializing in digital transformation, AI enablement, and Microsoft solutions. We partner with select clients to deliver exceptional results.",
  keywords: ["digital transformation", "AI consultancy", "Copilot Studio", "Power Platform", "Dynamics CE", "n8n automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased min-h-screen flex flex-col theme-bg-primary`}>
        <ThemeProvider>
          <Header />
          <main className="flex-grow pt-16 theme-bg-primary">
            {children}
          </main>
          <Footer />
          <ChatWidget />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
