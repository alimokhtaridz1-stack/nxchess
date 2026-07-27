"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import BookingModal from "@/components/ui/BookingModal";
import { SITE_NAME, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "kids",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);

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
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-chess-green/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-chess-green/30 bg-chess-green/10 px-4 py-2">
            <span className="text-xs font-semibold text-chess-green-light uppercase tracking-wider">
              ✉ DIRECT ACADEMY COMMUNICATION
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Contact <span className="text-gradient-gold">{SITE_NAME}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
            Inquire about our 8-Level Piece Curriculum, $45/mo Self-Learning plan, Kids Lessons ($350), Private Coaching ($650), or Holiday Camps.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-chess-green-light bg-chess-green/15 px-4 py-2 rounded-xl border border-chess-green/30">
            <span>{CONTACT_INFO.responsePromise}</span>
          </div>
        </div>
      </section>

      {/* WhatsApp & Fast Assessment Feature Banner */}
      <section className="border-t border-b border-border bg-background-secondary">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <Card glow className="p-8 border-whatsapp/30 bg-surface flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-whatsapp/20 text-whatsapp text-3xl">
                💬
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-whatsapp">
                  Fastest Response Channel
                </span>
                <h3 className="text-xl font-bold text-foreground">Chat with Us on WhatsApp</h3>
                <p className="text-sm text-foreground-secondary mt-1">
                  Direct instant messaging with our academy advisors and coaching team.
                </p>
                <div className="text-xs font-semibold text-foreground-muted mt-2">
                  🕒 Business Hours: {CONTACT_INFO.hours}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
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
              <Button
                onClick={() => setIsAssessmentModalOpen(true)}
                variant="primary"
                size="lg"
              >
                <span>⚡ Book Assessment</span>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Locations & Operational Details */}
      <section className="section-padding">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            label="Locations & Operational Hours"
            title="Where To Find Us"
            subtitle="Visit our academy branches in Dubai or join our global online classroom."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 mb-16">
            {CONTACT_INFO.locations.map((loc) => (
              <Card key={loc.city} className="p-6 text-center hover-glow-gold">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold text-2xl">
                  📍
                </div>
                <h3 className="font-bold text-foreground">{loc.city}</h3>
                <p className="text-xs text-foreground-secondary mt-2 leading-relaxed">
                  {loc.detail}
                </p>
              </Card>
            ))}
          </div>

          {/* Form Layout */}
          <SectionHeading
            label="Send Message"
            title="Online Inquiry Form"
            subtitle="Fill in your details and our academy team will respond within 2 hours."
          />

          <div className="mt-12 max-w-2xl mx-auto">
            {submitted ? (
              <Card glow className="p-10 text-center border-chess-green/30">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-chess-green/10 text-chess-green-light text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold">Thank You!</h3>
                <p className="mt-2 text-foreground-secondary">
                  Your inquiry has been received. Our team will contact you within 2 hours.
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
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-chess-green focus:ring-1 focus:ring-chess-green/30 transition-colors"
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
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-chess-green focus:ring-1 focus:ring-chess-green/30 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-foreground-secondary uppercase tracking-wider mb-2">
                      Inquiry Topic *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-chess-green focus:ring-1 focus:ring-chess-green/30 transition-colors"
                    >
                      <option value="self-learning">Self-Learning Membership ($45/mo)</option>
                      <option value="kids">Kids Chess Lessons ($350)</option>
                      <option value="private">Private 1-on-1 Coaching ($650)</option>
                      <option value="camp">Holiday & Summer Chess Camp</option>
                      <option value="school">School & Academy Program</option>
                      <option value="shop">Chess Equipment Inquiry</option>
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
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-chess-green focus:ring-1 focus:ring-chess-green/30 transition-colors resize-none"
                      placeholder="Tell us about your student's goals..."
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

      <BookingModal
        isOpen={isAssessmentModalOpen}
        onClose={() => setIsAssessmentModalOpen(false)}
      />
    </main>
  );
}
