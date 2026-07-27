import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight transition-colors hover:text-gold"
          id="nav-logo"
        >
          <span className="text-2xl">♞</span>
          <span>{SITE_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground hover:bg-surface"
              id={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="/contact" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </nav>
    </header>
  );
}
