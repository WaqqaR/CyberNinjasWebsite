import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased theme-bg-primary`}>
        <ThemeProvider>
          <div className="relative z-[1] flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16 theme-bg-primary">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
