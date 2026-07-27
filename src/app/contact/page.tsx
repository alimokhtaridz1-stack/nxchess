"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "coaching",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-tech-blue/30 bg-tech-blue/10 px-4 py-2">
            <span className="text-xs font-semibold text-tech-blue-light uppercase tracking-wider">
              ✉ DIRECT COMMUNICATION
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Contact <span className="text-gradient-gold">{SITE_NAME}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
            Have questions about Kids Lessons, Private Coaching, School Programs, or Products? Reach out to us below or text us directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* WhatsApp Feature Banner */}
      <section className="border-t border-b border-border bg-background-secondary">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <Card glow className="p-8 border-whatsapp/30 bg-surface flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-whatsapp/20 text-whatsapp text-3xl">
                💬
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-whatsapp">
                  Fastest Response
                </span>
                <h3 className="text-xl font-bold text-foreground">Chat with Us on WhatsApp</h3>
                <p className="text-sm text-foreground-secondary mt-1">
                  Direct instant messaging with our coaching advisors and support team.
                </p>
              </div>
            </div>

            <Button
              href={SOCIAL_LINKS.whatsapp}
              variant="whatsapp"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-direct-btn"
            >
              <span>💬 Open WhatsApp Chat</span>
            </Button>
          </Card>
        </div>
      </section>

      {/* Contact Methods Cards */}
      <section className="section-padding">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-16">
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold text-2xl">
                ✉
              </div>
              <h3 className="font-bold">Email Support</h3>
              <p className="text-xs text-foreground-secondary mt-1">24/7 inbox response</p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="mt-3 inline-block text-sm font-semibold text-gold hover:text-gold-light"
              >
                {CONTACT_INFO.email}
              </a>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp/10 text-whatsapp text-2xl">
                📞
              </div>
              <h3 className="font-bold">Phone & WhatsApp</h3>
              <p className="text-xs text-foreground-secondary mt-1">Mon - Sat (9am - 8pm)</p>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-whatsapp hover:brightness-110"
              >
                {CONTACT_INFO.phone}
              </a>
            </Card>

            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-tech-blue/10 text-tech-blue-light text-2xl">
                🌐
              </div>
              <h3 className="font-bold">Global Platform</h3>
              <p className="text-xs text-foreground-secondary mt-1">Online worldwide sessions</p>
              <p className="mt-3 text-sm font-semibold text-tech-blue-light">
                {CONTACT_INFO.address}
              </p>
            </Card>
          </div>

          {/* Form Layout */}
          <SectionHeading
            label="Send Message"
            title="Online Inquiry Form"
            subtitle="Fill in your details and our team will get back to you within 24 hours."
          />

          <div className="mt-12 max-w-2xl mx-auto">
            {submitted ? (
              <Card glow className="p-10 text-center border-gold/30">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold">Thank You!</h3>
                <p className="mt-2 text-foreground-secondary">
                  Your message has been received. We will get in touch with you shortly.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="secondary"
                  className="mt-6"
                >
                  Send Another Inquiry
                </Button>
              </Card>
            ) : (
              <Card className="p-8 sm:p-10 border-border" hover={false}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-foreground-secondary uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-foreground-secondary uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-foreground-secondary uppercase tracking-wider mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                    >
                      <option value="kids">Kids Chess Lessons</option>
                      <option value="private">Private 1-on-1 Coaching</option>
                      <option value="school">School & Academy Program</option>
                      <option value="shop">Chess Shop & Products Inquiry</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-foreground-secondary uppercase tracking-wider mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
                      placeholder="Tell us about your goals or questions..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Inquiry Form
                  </Button>
                </form>
              </Card>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
