"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { services } from "@/data/services";
import { products } from "@/data/products";

export function Footer() {
  return (
    <footer className="theme-bg-tertiary border-t theme-border transition-colors duration-[1000ms]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo className="h-7 w-auto theme-text-primary dark:text-red-500 transition-colors duration-[1000ms]" />
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
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm theme-text-muted hover:theme-text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold theme-text-primary tracking-wide mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`} className="text-sm theme-text-muted hover:theme-text-primary transition-colors">
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold theme-text-primary tracking-wide mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm theme-text-muted">
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-chat-widget"))}
                  className="hover:theme-text-primary transition-colors"
                >
                  Get in Touch
                </button>
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
