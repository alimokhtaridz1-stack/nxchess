import { SITE_NAME } from "@/lib/constants";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-foreground/60">
          Get in touch with {SITE_NAME}. We&apos;d love to hear from you.
        </p>
        <div className="mt-8 rounded-xl border border-foreground/10 bg-foreground/5 p-8">
          <p className="text-sm text-foreground/40">
            🚧 This page is under construction — Agent 1 (Frontend Designer) will build the full UI.
          </p>
        </div>
      </div>
    </main>
  );
}
