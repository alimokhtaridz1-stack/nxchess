"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import PlacementQuiz from "@/components/ui/PlacementQuiz";
import BookingModal from "@/components/ui/BookingModal";
import {
  CURRICULUM_LEVELS,
  VERIFIABLE_COACHES,
  EXPANDED_FAQS,
} from "@/lib/constants";

const learningPlans = [
  {
    id: "self-learning",
    title: "Self-Learning Membership",
    price: "$45",
    period: "/ month",
    badge: "Best Value",
    isFeatured: true,
    hoverGlow: "hover-glow-green",
    badgeColor: "bg-chess-green text-black font-extrabold",
    iconBg: "bg-gradient-to-br from-chess-green/30 to-emerald-700/40 text-chess-green-light border-chess-green/40",
    description:
      "Full access to our interactive digital self-learning platform combined with a monthly live 1-on-1 coaching session.",
    features: [
      "1 Live 1-on-1 Coaching Session every month",
      "Unlimited access to self-paced interactive video courses",
      "Tactical puzzle modules & opening explorer",
      "Personalized monthly homework & study guide",
      "Progress tracking dashboard",
    ],
    cta: "Join Self-Learning ($45/mo)",
    btnVariant: "primary" as const,
  },
  {
    id: "kids",
    title: "Kids Chess Lessons",
    price: "$350",
    period: "/ package",
    badge: "Youth Program",
    isFeatured: false,
    hoverGlow: "hover-glow-gold",
    badgeColor: "bg-gold/20 text-gold-light border border-gold/40 font-bold",
    iconBg: "bg-gradient-to-br from-amber-500/30 to-orange-700/40 text-gold-light border-gold/40",
    description:
      "Fun, structured lessons designed for ages 5-15 to build logical thinking, focus, and youth tournament preparation.",
    features: [
      "Small group sessions (max 6 kids)",
      "Interactive digital learning tools",
      "Youth tournament preparation",
      "Weekly parent progress reports",
      "Self-learning platform access included",
    ],
    cta: "Enroll Kids Lessons ($350)",
    btnVariant: "gold" as const,
  },
  {
    id: "private",
    title: "Private Master Coaching",
    price: "$650",
    period: "/ package",
    badge: "Intensive 1-on-1",
    isFeatured: false,
    hoverGlow: "hover-glow-tech",
    badgeColor: "bg-tech-blue/20 text-tech-blue-light border border-tech-blue/40 font-bold",
    iconBg: "bg-gradient-to-br from-cyan-500/30 to-blue-700/40 text-tech-blue-light border-tech-blue/40",
    description:
      "Customized 1-on-1 training with titled masters for ambitious players aiming for rating milestones and competitive mastery.",
    features: [
      "Dedicated Grandmaster / Master coach",
      "Deep opening repertoire prep & engine analysis",
      "Real-time game breakdown & weakness diagnosis",
      "Priority scheduling & session recordings",
      "Full self-learning platform access",
    ],
    cta: "Book Private Coaching ($650)",
    btnVariant: "tech" as const,
  },
];

const chessCamp = {
  title: "Intensive Holiday & Summer Chess Camp",
  subtitle: "Master-Led Training Camps",
  badge: "Exclusive Master Workshop",
  description:
    "An intensive 2-week training camp led by Super Grandmasters focused on opening novelties, middlegame calculation, positional sacrifices, and simultaneous exhibition games.",
  highlights: [
    "Daily GM lectures & tactical puzzle sprints",
    "Simultaneous games against Grandmasters",
    "Signed completion certificate & trophy distribution",
    "Small group size (max 10 students per master)",
  ],
  cta: "Reserve Camp Spot",
};

export default function CoachingPage() {
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string | null>(null);

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/3 w-[600px] h-[400px] bg-chess-green/15 rounded-full blur-[100px]" />
        <div className="pointer-events-none absolute top-10 right-1/4 w-[500px] h-[400px] bg-gold/15 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-chess-green/40 bg-chess-green/15 px-4 py-2 backdrop-blur-md">
            <span className="text-xs font-extrabold text-chess-green-light uppercase tracking-wider">
              ♟ ACADEMY PROGRAMS & CURRICULUM
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            NXChess <span className="text-gradient-brand">Learning & Coaching</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary leading-relaxed">
            Structured 8-level piece curriculum, self-paced digital learning, master coaching, and intensive holiday camps.
          </p>
        </div>
      </section>

      {/* Pricing & Learning Plans */}
      <section className="section-padding border-t border-border bg-background-secondary relative">
        <div className="mx-auto max-w-6xl relative z-10">
          <SectionHeading
            label="Learning Plans"
            title="Self-Learning & Coaching Options"
            subtitle="Choose between our popular $45/month Self-Learning plan (includes 1 monthly live session), Kids Lessons ($350), or Private Master Coaching ($650)."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {learningPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`p-8 flex flex-col justify-between relative ${plan.hoverGlow} ${plan.isFeatured ? "border-chess-green/50 scale-[1.03] bg-gradient-to-b from-surface-elevated to-surface shadow-2xl" : "bg-surface"}`}
                id={`plan-${plan.id}`}
              >
                {plan.isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-chess-green to-emerald-500 px-5 py-1 text-xs font-extrabold text-black uppercase tracking-wider shadow-lg">
                    ★ MOST POPULAR ★
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full ${plan.badgeColor}`}>
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">{plan.title}</h3>

                  <div className="my-4">
                    <span className="text-4xl font-extrabold text-gradient-green">{plan.price}</span>
                    <span className="text-sm font-semibold text-foreground-secondary">{plan.period}</span>
                  </div>

                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="my-6 border-t border-border pt-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-3 block">
                      What&apos;s Included:
                    </span>
                    <ul className="space-y-3 text-sm text-foreground-secondary">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <span className="text-chess-green-light font-bold mt-0.5">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <Button
                    onClick={() => setSelectedPlanForModal(plan.id)}
                    variant={plan.btnVariant}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Level Placement Quiz */}
      <section className="section-padding border-t border-border bg-background relative">
        <div className="mx-auto max-w-4xl">
          <PlacementQuiz />
        </div>
      </section>

      {/* 8-Level Piece Curriculum Breakdown */}
      <section className="section-padding relative border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Step-by-Step System"
            title="The 8-Level Piece Curriculum Framework"
            subtitle="Students progress sequentially through piece-themed modules with regular evaluations and activity-based learning."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CURRICULUM_LEVELS.map((lvl) => (
              <Card key={lvl.level} className="p-6 bg-surface hover-glow-gold flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-chess-green-light">
                      LEVEL {lvl.level}
                    </span>
                    <span className="text-2xl">{lvl.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{lvl.name}</h3>
                  <h4 className="text-xs font-semibold text-gold-light mt-1">{lvl.title}</h4>
                  <p className="text-xs text-foreground-secondary mt-3 leading-relaxed">
                    {lvl.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Chess Camp Section */}
      <section className="section-padding relative">
        <div className="mx-auto max-w-5xl">
          <Card className="p-10 border-gold/40 bg-surface flex flex-col lg:flex-row items-center justify-between gap-8 hover-glow-gold">
            <div>
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-gold-light bg-gold/15 px-3 py-1 rounded-full border border-gold/30 mb-3">
                🏆 {chessCamp.badge}
              </div>
              <h3 className="text-3xl font-extrabold text-foreground">{chessCamp.title}</h3>
              <p className="text-sm text-foreground-secondary mt-3 max-w-xl leading-relaxed">
                {chessCamp.description}
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground-secondary">
                {chessCamp.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="text-gold-light font-bold">✓</span> {h}
                  </li>
                ))}
              </ul>
            </div>
            <Button onClick={() => setSelectedPlanForModal("camp")} variant="gold" size="lg" className="shrink-0">
              {chessCamp.cta}
            </Button>
          </Card>
        </div>
      </section>

      {/* Verified Master Coaches Section (Typo Fixed: Titled Professionals) */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Verified Faculty"
            title="Learn From Titled Professionals"
            subtitle="All NXChess master coaches hold verified FIDE titles, official ratings, and proven youth coaching records."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {VERIFIABLE_COACHES.map((c) => (
              <Card key={c.id} className="p-8 hover-glow-green bg-surface flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chess-green/15 text-chess-green-light text-2xl border border-chess-green/30">
                      {c.icon}
                    </div>
                    <a
                      href={c.fideLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-tech-blue-light hover:underline bg-tech-blue/10 px-2.5 py-1 rounded-md border border-tech-blue/30"
                    >
                      Official FIDE Profile ↗
                    </a>
                  </div>

                  <h3 className="font-bold text-xl text-foreground">{c.name}</h3>
                  <div className="text-xs text-chess-green-light font-extrabold mt-0.5 mb-2">
                    {c.title} · <span className="text-gold-light">{c.rating}</span>
                  </div>

                  <div className="space-y-1.5 text-xs text-foreground-secondary mb-4 border-t border-border pt-3">
                    <div><strong>Experience:</strong> {c.experience}</div>
                    <div><strong>Languages:</strong> {c.languages.join(", ")}</div>
                    <div><strong>Achievements:</strong> {c.achievements}</div>
                  </div>

                  <p className="text-xs leading-relaxed text-foreground-secondary border-t border-border pt-3">
                    {c.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded FAQ */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            label="Coaching FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about pricing, placement, class length, and coach verification."
          />

          <div className="mt-12 space-y-4">
            {EXPANDED_FAQS.map((faq) => (
              <Card key={faq.question} className="p-6 bg-surface hover:border-chess-green/40">
                <h4 className="font-bold text-foreground">{faq.question}</h4>
                <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Booking Modal Trigger */}
      <BookingModal
        isOpen={selectedPlanForModal !== null}
        onClose={() => setSelectedPlanForModal(null)}
        defaultProgram={selectedPlanForModal || "self-learning"}
      />
    </main>
  );
}
