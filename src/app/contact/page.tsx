"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

const contactMethods = [
  {
    icon: "✉",
    title: "Email Us",
    description: "We'll respond within 24 hours.",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: "💬",
    title: "Social Media",
    description: "Follow us and send a DM.",
    value: "@nxchess",
    href: SOCIAL_LINKS.twitter,
  },
  {
    icon: "📍",
    title: "Location",
    description: "Available for in-person sessions.",
    value: "Worldwide · Online",
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // V1: Just show success message (no backend)
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2">
            <span className="text-sm font-medium text-gold">♞ Get in Touch</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Start a
            <br />
            <span className="text-gradient-gold">Conversation</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
            Whether you have questions about coaching, products, or partnerships
            — we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {contactMethods.map((method) => (
              <Card key={method.title} className="p-6 text-center" id={`contact-${method.title.toLowerCase().replace(/\s/g, "-")}`}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-2xl">
                  {method.icon}
                </div>
                <h3 className="font-semibold">{method.title}</h3>
                <p className="mt-1 text-sm text-foreground-secondary">
                  {method.description}
                </p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="mt-3 inline-block text-sm font-medium text-gold hover:text-gold-light transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="mt-3 text-sm font-medium text-gold">
                    {method.value}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            label="Send a Message"
            title="We'd Love to Hear From You"
            subtitle="Fill out the form below and we'll get back to you as soon as possible."
          />

          <div className="mt-12">
            {submitted ? (
              <Card glow className="p-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="mt-3 text-foreground-secondary">
                  Thank you for reaching out. We&apos;ll get back to you within 24
                  hours.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  variant="secondary"
                  className="mt-8"
                >
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <Card className="p-8 sm:p-10" hover={false}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-foreground-secondary"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-foreground-secondary"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-foreground-secondary"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20"
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      <option value="coaching">Coaching Inquiry</option>
                      <option value="products">Product Question</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground-secondary"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/20"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-center text-xs text-foreground-muted">
                    By submitting this form, you agree to our privacy policy.
                    We&apos;ll never share your information with third parties.
                  </p>
                </form>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Map / Info */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Available Worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground-secondary">
            {SITE_NAME} operates online, so you can access our coaching and
            products from anywhere in the world. All coaching sessions are
            conducted via video call.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground-muted">
            <span>🌍 Europe</span>
            <span>🌎 Americas</span>
            <span>🌏 Asia Pacific</span>
          </div>
        </div>
      </section>
    </main>
  );
}
