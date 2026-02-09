import Link from "next/link";

export function Footer() {
  return (
    <footer className="theme-bg-tertiary border-t theme-border transition-colors duration-[1000ms]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-light tracking-[0.2em] theme-text-primary">
                CYBER
              </span>
              <span className="text-lg font-semibold tracking-wider theme-text-primary dark:text-red-500">
                NINJAS
              </span>
            </div>
            <p className="text-sm theme-text-muted leading-relaxed">
              Boutique technology consultancy specializing in digital transformation and AI enablement.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold theme-text-primary tracking-wide mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/copilot-studio" className="text-sm theme-text-muted hover:theme-text-primary transition-colors">
                  Copilot Studio
                </Link>
              </li>
              <li>
                <Link href="/services/power-platform" className="text-sm theme-text-muted hover:theme-text-primary transition-colors">
                  Power Platform
                </Link>
              </li>
              <li>
                <Link href="/services/dynamics-ce" className="text-sm theme-text-muted hover:theme-text-primary transition-colors">
                  Dynamics CE
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="text-sm theme-text-muted hover:theme-text-primary transition-colors">
                  AI Agent Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold theme-text-primary tracking-wide mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm theme-text-muted">
              <li>
                <Link href="/contact" className="hover:theme-text-primary transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:theme-text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t theme-border">
          <p className="text-center text-xs theme-text-subtle">
            &copy; {new Date().getFullYear()} Cyber Ninjas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
