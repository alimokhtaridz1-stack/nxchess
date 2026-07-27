import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Chess Coaching",
  description:
    "Explore NXChess coaching programs: Kids Chess Lessons, Private Grandmaster Coaching, and School Programs.",
};

const mainPrograms = [
  {
    id: "kids",
    title: "Kids Chess Lessons",
    subtitle: "Ages 5 - 15",
    icon: "♟",
    badge: "Youth Program",
    isTech: false,
    description:
      "Interactive, fun, and structured chess lessons designed specifically for children and young players to develop focus, patience, and logic.",
    features: [
      "Fun gamified learning puzzles",
      "Small group sizes (max 6 students)",
      "Youth tournament preparation",
      "Weekly parent progress updates",
      "Interactive digital chess board tools",
    ],
    cta: "Enroll in Kids Lessons",
  },
  {
    id: "private",
    title: "Private Coaching",
    subtitle: "All Ratings & Adults",
    icon: "♚",
    badge: "1-on-1 Training",
    isTech: true,
    description:
      "Direct 1-on-1 instruction with titled coaches tailored to your personal goals, opening repertoire, positional play, and endgame mastery.",
    features: [
      "Personalized training roadmap",
      "Deep database & opening prep",
      "Real-time game analysis & feedback",
      "AI-powered error detection",
      "Flexible schedule & session recording",
    ],
    cta: "Book Private Session",
  },
  {
    id: "school",
    title: "School Programs",
    subtitle: "Schools & Academies",
    icon: "🏫",
    badge: "Institutional",
    isTech: false,
    description:
      "Complete after-school chess programs and curriculum integration for elementary, middle, and high schools.",
    features: [
      "Turnkey curriculum & lesson plans",
      "Certified grandmaster/master instructors",
      "In-school tournament organization",
      "Equipment & chess clock provision",
      "Inter-school league representation",
    ],
    cta: "Inquire for School",
  },
];

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
    question: "How do online sessions work?",
    answer:
      "Sessions take place via high-definition video calls with interactive online chess boards. Students receive session recordings and digital homework assignments after every class.",
  },
  {
    question: "What age is recommended for Kids Lessons?",
    answer:
      "Our Kids Chess Lessons are structured for ages 5 to 15, categorized by experience level from complete beginner to advanced youth tournament competitors.",
  },
  {
    question: "Can we bring NXChess to our school?",
    answer:
      "Yes! We partner directly with public and private schools to provide instructors, learning materials, and after-school chess clubs.",
  },
];

export default function CoachingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2">
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">
              ♟ WORLD-CLASS INSTRUCTION
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            NXChess <span className="text-gradient-gold">Coaching</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
            Structured programs built for youth prodigies, ambitious adults, and school institutions.
          </p>
        </div>
      </section>

      {/* Main 3 Programs: Kids, Private, School */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Our Core Programs"
            title="Coaching Tailored To Your Needs"
            subtitle="Explore our three specialized streams designed to elevate chess skills at any stage."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {mainPrograms.map((prog) => (
              <Card
                key={prog.id}
                glow={prog.isTech}
                className={`p-8 flex flex-col justify-between relative ${prog.isTech ? "border-tech-blue/40" : "border-border"}`}
                id={`coaching-program-${prog.id}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-foreground-muted uppercase tracking-wider">
                      {prog.subtitle}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${prog.isTech ? "bg-tech-blue/15 text-tech-blue-light border border-tech-blue/30" : "bg-gold/15 text-gold border border-gold/30"}`}>
                      {prog.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 my-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated text-2xl">
                      {prog.icon}
                    </div>
                    <h3 className="text-xl font-bold">{prog.title}</h3>
                  </div>

                  <p className="mt-3 text-sm text-foreground-secondary leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="my-6 border-t border-border pt-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-3 block">
                      Program Highlights:
                    </span>
                    <ul className="space-y-2.5 text-sm text-foreground-secondary">
                      {prog.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <span className={prog.isTech ? "text-tech-blue-light mt-0.5" : "text-gold mt-0.5"}>✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <Button
                    href="/contact"
                    variant={prog.isTech ? "tech" : "primary"}
                    className="w-full"
                  >
                    {prog.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Master Coaches"
            title="Learn From Tilted Professionals"
            subtitle="Our coaches are experienced grandmasters and international masters committed to your growth."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {coaches.map((c) => (
              <Card key={c.name} className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-3xl text-gold">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{c.name}</h3>
                    <p className="text-xs text-gold font-semibold">{c.title} · {c.rating}</p>
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
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            label="Coaching FAQ"
            title="Got Questions?"
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

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Start Training Today</h2>
          <p className="mt-3 text-foreground-secondary">
            Get in touch to book a diagnostic session or register for school programs.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact" size="lg">
              Book a Diagnostic Session
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
