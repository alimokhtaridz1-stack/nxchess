"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultProgram = "self-learning",
}: BookingModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [bookingData, setBookingData] = useState({
    studentName: "",
    parentEmail: "",
    whatsapp: "",
    program: defaultProgram,
    experienceLevel: "beginner",
    preferredDate: "",
    notes: "",
  });

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep("success");
  }

  function handleReset() {
    setStep("form");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl border border-chess-green/40 bg-surface p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-surface-elevated text-foreground-secondary hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {step === "form" ? (
          <div>
            <div className="mb-6">
              <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-chess-green-light bg-chess-green/15 px-3 py-1 rounded-full border border-chess-green/30 mb-2">
                ⚡ FREE 15-MIN ASSESSMENT
              </span>
              <h3 className="text-2xl font-bold text-foreground">Book Free Skill Assessment</h3>
              <p className="text-xs text-foreground-secondary mt-1">
                Meet a master coach, evaluate your tactical vision, and find your exact Pawn-to-King starting level.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-foreground-secondary mb-1">
                  Student Name *
                </label>
                <input
                  type="text"
                  required
                  value={bookingData.studentName}
                  onChange={(e) => setBookingData({ ...bookingData, studentName: e.target.value })}
                  placeholder="e.g. Rayan Ahmed"
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-chess-green"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-foreground-secondary mb-1">
                    Parent/Student Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={bookingData.parentEmail}
                    onChange={(e) => setBookingData({ ...bookingData, parentEmail: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-chess-green"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground-secondary mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingData.whatsapp}
                    onChange={(e) => setBookingData({ ...bookingData, whatsapp: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-chess-green"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-foreground-secondary mb-1">
                    Program Interested *
                  </label>
                  <select
                    value={bookingData.program}
                    onChange={(e) => setBookingData({ ...bookingData, program: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-chess-green"
                  >
                    <option value="self-learning">Self-Learning Membership ($45/mo)</option>
                    <option value="kids">Kids Chess Lessons ($350)</option>
                    <option value="private">Private Master Coaching ($650)</option>
                    <option value="camp">Holiday & Summer Camp</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground-secondary mb-1">
                    Current Level *
                  </label>
                  <select
                    value={bookingData.experienceLevel}
                    onChange={(e) => setBookingData({ ...bookingData, experienceLevel: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-chess-green"
                  >
                    <option value="complete-beginner">Complete Beginner (Knows Rules)</option>
                    <option value="beginner">Beginner (&lt; 1000 Elo)</option>
                    <option value="intermediate">Intermediate (1000 - 1500 Elo)</option>
                    <option value="advanced">Advanced (1500+ Elo)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground-secondary mb-1">
                  Preferred Date & Time
                </label>
                <input
                  type="date"
                  value={bookingData.preferredDate}
                  onChange={(e) => setBookingData({ ...bookingData, preferredDate: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-chess-green"
                />
              </div>

              <div className="pt-3">
                <Button type="submit" size="lg" className="w-full">
                  <span>Confirm Free Assessment Booking →</span>
                </Button>
                <p className="text-[11px] text-center text-foreground-muted mt-2">
                  🔒 100% Free. Guaranteed response within 2 hours during business hours.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-chess-green/20 text-chess-green-light text-3xl">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-foreground">Assessment Booked!</h3>
            <p className="text-sm text-foreground-secondary max-w-sm mx-auto">
              Thank you, <strong className="text-foreground">{bookingData.studentName}</strong>! Our academy team will reach out via WhatsApp at <strong className="text-chess-green-light">{bookingData.whatsapp}</strong> within 2 hours to confirm your time slot.
            </p>
            <div className="pt-4">
              <Button onClick={handleReset} variant="secondary" size="md">
                Close & Return
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
