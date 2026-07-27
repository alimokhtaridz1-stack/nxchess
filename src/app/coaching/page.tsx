import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Chess Coaching",
  description:
    "Personalized chess coaching from expert players. Private lessons, group classes, and custom training programs for all skill levels.",
};

const packages = [
  {
    name: "Beginner",
    price: "$45",
    period: "/session",
    description: "Perfect for players just starting their chess journey.",
    features: [
      "1-hour private session",
      "Opening fundamentals",
      "Basic tactics training",
      "Game analysis review",
      "Practice exercises",
    ],
    highlight: false,
  },
  {
    name: "Intermediate",
    price: "$75",
    period: "/session",
    description: "For club players looking to break through plateaus.",
    features: [
      "90-minute private session",
      "Advanced opening repertoire",
      "Positional understanding",
      "Endgame technique",
      "Tournament preparation",
      "Weekly progress reports",
    ],
    highlight: true,
  },
  {
    name: "Advanced",
    price: "$120",
    period: "/session",
    description: "Elite training for competitive and tournament players.",
    features: [
      "2-hour intensive session",
      "Deep opening preparation",
      "Complex middlegame strategy",
      "Advanced endgame mastery",
      "Psychological preparation",
      "Custom study plans",
      "Priority scheduling",
    ],
    highlight: false,
  },
];

const coaches = [
  {
    name: "GM Alexander Petrov",
    title: "Head Coach",
    rating: "2580 FIDE",
    specialty: "Positional Play & Endgames",
    bio: "Former national champion with 20+ years of coaching experience. Specializes in developing players from club to tournament level.",
    icon: "♔",
  },
  {
    name: "IM Sofia Chen",
    title: "Senior Coach",
    rating: "2410 FIDE",
    specialty: "Tactical Training & Openings",
    bio: "International Master and certified chess educator. Known for creative tactical training methods that produce rapid improvement.",
    icon: "♕",
  },
  {
    name: "FM David Torres",
    title: "Youth Coach",
    rating: "2320 FIDE",
    specialty: "Junior Development",
    bio: "Experienced youth coach who has trained multiple national junior champions. Makes learning chess fun and engaging for young minds.",
    icon: "♗",
  },
];

const faqs = [
  {
    question: "How do online coaching sessions work?",
    answer:
      "Sessions are conducted via video call with a shared interactive chess board. You'll receive real-time instruction, analyze your games together, and get personalized homework after each session.",
  },
  {
    question: "What skill level do I need to start?",
    answer:
      "We welcome all levels! Whether you're learning how the pieces move or preparing for your next tournament, we have a coaching plan tailored to your needs.",
  },
  {
    question: "Can I reschedule a session?",
    answer:
      "Yes, sessions can be rescheduled with at least 24 hours notice at no extra charge. We understand that life happens.",
  },
  {
    question: "Do you offer package discounts?",
    answer:
      "Yes! We offer 10% off when you book 5 sessions, and 20% off when you book 10 sessions. Contact us for custom package pricing.",
  },
];

export default function CoachingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2">
            <span className="text-sm font-medium text-gold">♟ Personalized Training</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Master Chess with
            <br />
            <span className="text-gradient-gold">Expert Coaching</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
            One-on-one sessions with titled players who know how to unlock your
            potential. From first moves to tournament victories.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Packages"
            title="Choose Your Training Path"
            subtitle="Flexible coaching packages designed for every stage of your chess journey."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                glow={pkg.highlight}
                className={`relative flex flex-col p-8 ${pkg.highlight ? "border-gold/30 scale-[1.02]" : ""}`}
                id={`package-${pkg.name.toLowerCase()}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold text-black">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    {pkg.description}
                  </p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gold">{pkg.price}</span>
                  <span className="text-foreground-secondary">{pkg.period}</span>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 text-gold">✓</span>
                      <span className="text-foreground-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={pkg.highlight ? "primary" : "secondary"}
                  className="w-full"
                >
                  Book Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Our Team"
            title="Learn From The Best"
            subtitle="Our coaches combine deep chess knowledge with proven teaching methods."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {coaches.map((coach) => (
              <Card key={coach.name} className="p-8" id={`coach-${coach.name.split(" ").pop()?.toLowerCase()}`}>
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gold/10 text-4xl">
                  {coach.icon}
                </div>
                <h3 className="text-lg font-bold">{coach.name}</h3>
                <div className="mt-1 flex items-center gap-3">
                  <span className="text-sm font-medium text-gold">{coach.title}</span>
                  <span className="text-foreground-muted">·</span>
                  <span className="text-sm text-foreground-secondary">{coach.rating}</span>
                </div>
                <p className="mt-1 text-xs text-foreground-muted">{coach.specialty}</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                  {coach.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our coaching services."
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground-secondary">
            Book a free consultation to discuss your goals and find the perfect
            coaching plan for you.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
