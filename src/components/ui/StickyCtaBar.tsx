"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import BookingModal from "@/components/ui/BookingModal";

export default function StickyCtaBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Persistent Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl p-3 shadow-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-3 sm:px-6">
          {/* Left Text Offer */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-chess-green animate-ping" />
            <div>
              <span className="text-xs font-bold text-foreground">
                Self-Learning Membership: <span className="text-chess-green-light font-extrabold">$20/mo</span>
              </span>
              <p className="text-[11px] text-foreground-muted">
                Includes full video course access + 1 monthly live session
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex w-full sm:w-auto items-center justify-between sm:justify-end gap-2.5">
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="primary"
              size="sm"
              className="flex-1 sm:flex-initial text-xs sm:text-sm"
            >
              <span>⚡ Free Skill Assessment</span>
            </Button>
            <Button
              href="/coaching"
              variant="gold"
              size="sm"
              className="flex-1 sm:flex-initial text-xs sm:text-sm"
            >
              <span>Join ($20/mo)</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Booking Modal Triggered by Bar */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
