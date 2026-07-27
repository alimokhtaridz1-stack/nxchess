import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Coaching & Learning Plans",
  description:
    "Explore NXChess learning plans: $20/mo Self-Learning Membership with 1 monthly live session, Kids Lessons, Private Coaching, and School Programs.",
};

const learningPlans = [
  {
    id: "self-learning",
    title: "Self-Learning Membership",
    price: "$20",
    period: "/ month",
    badge: "Best Value",
    isFeatured: true,
    description:
      "Full access to our interactive digital self-learning platform combined with a monthly live 1-on-1 coaching session.",
    features: [
      "1 Live 1-on-1 Coaching Session every month",
      "Unlimited access to self-paced interactive video courses",
      "Tactical puzzle modules & opening explorer",
      "Personalized monthly homework & study guide",
      "Progress tracking dashboard",
    ],
    cta: "Join Self-Learning ($20/mo)",
    btnVariant: "primary" as const,
  },
  {
    id: "kids",
    title: "Kids Chess Lessons",
    price: "$45",
    period: "/ session",
    badge: "Youth Program",
    isFeatured: false,
    description:
      "Fun, structured lessons designed for ages 5-15 to build logical thinking, focus, and youth tournament preparation.",
    features: [
      "Small group sessions (max 6 kids)",
      "Interactive digital learning tools",
      "Youth tournament preparation",
      "Weekly parent progress reports",
      "Self-learning platform access included",
    ],
    cta: "Enroll Kids Lessons",
    btnVariant: "gold" as const,
  },
  {
    id: "private",
    title: "Private Master Coaching",
    price: "$75",
    period: "/ session",
    badge: "Intensive 1-on-1",
    isFeatured: false,
    description:
      "Customized 1-on-1 training with titled masters for ambitious players aiming for rating milestones and competitive mastery.",
    features: [
      "Dedicated Grandmaster / Master coach",
      "Deep opening repertoire prep & engine analysis",
      "Real-time game breakdown & weakness diagnosis",
      "Priority scheduling & session recordings",
      "Full self-learning platform access",
    ],
    cta: "Book Private Coaching",
    btnVariant: "tech" as const,
  },
];

const schoolProgram = {
  title: "School & Institutional Programs",
  description:
    "Complete after-school chess curriculum, club management, and tournament organization for public & private schools.",
  features: [
    "Turnkey curriculum & lesson plans for teachers",
    "Certified master instructors provided",
    "In-school tournament organization & equipment",
    "Inter-school chess league representation",
  ],
};

const coaches = [
  {
    name: "GM Alexander Petrov",
    title: "Head Coach",
    rating: "2580 FIDE",
    specialty: "Positional Mastery & Strategy",
    bio: "Former national champion with 20+ years of coaching experience. Has trained top grandmasters and youth prodigies.",
    icon: "♔",
  },
  {
    name: "IM Sofia Chen",
    title: "Senior Master Coach",
    rating: "2410 FIDE",
    specialty: "Tactics & Opening Preparation",
    bio: "International Master and certified educator known for creative tactical training methods and opening analysis.",
    icon: "♕",
  },
  {
    name: "FM David Torres",
    title: "Youth Program Director",
    rating: "2320 FIDE",
    specialty: "Kids Development & Fundamentals",
    bio: "Dedicated youth coach who has introduced over 300 children to competitive chess and state championships.",
    icon: "♗",
  },
];

const faqs = [
  {
    question: "Is there online match playing on NXChess?",
    answer:
      "No. NXChess is dedicated exclusively to chess learning, 1-on-1 coaching, self-paced courses, and premium equipment. We do not host public match playing servers.",
  },
  {
    question: "What is included in the $20/month Self-Learning Membership?",
    answer:
      "For $20/month, you get complete access to our digital self-learning course library, interactive tactical modules, study roadmaps, AND 1 live 1-on-1 coaching session with a master instructor every month!",
  },
  {
    question: "How do the live coaching sessions work?",
    answer:
      "Live sessions are conducted via video call using our interactive digital chess board tools. You analyze games, receive direct feedback, and get personalized homework.",
  },
];

export default function CoachingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-chess-green/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-chess-green/40 bg-chess-green/10 px-4 py-2">
            <span className="text-xs font-bold text-chess-green-light uppercase tracking-wider">
              ♟ SELF-LEARNING & COACHING PLANS
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            NXChess <span className="text-gradient-green">Learning & Coaching</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
            Master the game through self-paced digital courses and live 1-on-1 master coaching.
          </p>
        </div>
      </section>

      {/* Pricing & Learning Plans (Includes $20/mo Self-Learning Tier) */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Learning Plans"
            title="Self-Learning & Coaching Options"
            subtitle="Choose between our popular $20/month Self-Learning plan (includes 1 monthly live session) or dedicated 1-on-1 packages."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {learningPlans.map((plan) => (
              <Card
                key={plan.id}
                glow={plan.isFeatured}
                className={`p-8 flex flex-col justify-between relative ${plan.isFeatured ? "border-chess-green/50 scale-[1.03] bg-surface-elevated" : "border-border"}`}
                id={`plan-${plan.id}`}
              >
                {plan.isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-chess-green px-4 py-1 text-xs font-extrabold text-white uppercase tracking-wider shadow-md">
                    ★ MOST POPULAR ★
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-foreground-muted uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold">{plan.title}</h3>

                  <div className="my-4">
                    <span className="text-4xl font-extrabold text-chess-green-light">{plan.price}</span>
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
                    href="/contact"
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

      {/* School Program Banner */}
      <section className="section-padding">
        <div className="mx-auto max-w-5xl">
          <Card className="p-10 border-tech-blue/30 bg-surface flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-tech-blue-light bg-tech-blue/10 px-3 py-1 rounded-full border border-tech-blue/30 mb-3">
                🏫 School & Academy Solution
              </div>
              <h3 className="text-2xl font-bold">{schoolProgram.title}</h3>
              <p className="text-sm text-foreground-secondary mt-2 max-w-xl">
                {schoolProgram.description}
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground-secondary">
                {schoolProgram.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-tech-blue-light">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <Button href="/contact" variant="tech" size="lg" className="shrink-0">
              Inquire for Schools
            </Button>
          </Card>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Master Coaches"
            title="Learn From Tilted Professionals"
            subtitle="Our coaches guide live sessions and craft our digital self-learning curriculum."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {coaches.map((c) => (
              <Card key={c.name} className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-chess-green/10 text-3xl text-chess-green-light">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{c.name}</h3>
                    <p className="text-xs text-chess-green-light font-semibold">{c.title} · {c.rating}</p>
                  </div>
                </div>
                <p className="text-xs text-foreground-muted font-medium mb-3">Specialty: {c.specialty}</p>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {c.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question} className="p-6">
                <h4 className="font-bold">{faq.question}</h4>
                <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
