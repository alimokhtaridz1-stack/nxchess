import { SITE_NAME, NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="text-center max-w-2xl">
        {/* Hero */}
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          {SITE_NAME}
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/60">
          A modern chess platform combining chess coaching, premium products,
          and cutting-edge technology.
        </p>

        {/* Navigation Cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {NAV_LINKS.filter((link) => link.href !== "/").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-foreground/10 bg-foreground/5 p-6 text-left transition-colors hover:border-foreground/20 hover:bg-foreground/10"
            >
              <h2 className="text-lg font-semibold">
                {link.label}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </h2>
              <p className="mt-2 text-sm text-foreground/50">
                Explore {link.label.toLowerCase()}
              </p>
            </Link>
          ))}
        </div>

        {/* Status */}
        <div className="mt-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-2 text-sm text-foreground/40">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Version 1 — In Development
          </span>
        </div>
      </div>
    </main>
  );
}
