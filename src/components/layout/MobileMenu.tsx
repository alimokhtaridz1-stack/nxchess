"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground-secondary transition-colors hover:bg-surface hover:text-foreground md:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        id="mobile-menu-toggle"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="transition-transform duration-200"
        >
          {isOpen ? (
            <path
              d="M5 5L15 15M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          ) : (
            <>
              <path d="M3 5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 transform border-l border-border bg-background transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex h-16 items-center justify-end px-6">
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground-secondary hover:bg-surface hover:text-foreground"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-1 px-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-foreground-secondary transition-colors hover:bg-surface hover:text-foreground"
              id={`mobile-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 px-4">
          <Button href="/contact" size="lg" className="w-full">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
