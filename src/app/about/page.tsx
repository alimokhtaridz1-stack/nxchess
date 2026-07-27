import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME, SITE_SLOGAN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NXChess, our story, mission, and how we are building the next generation of chess.",
};

const missionPoints = [
  {
    icon: "🚀",
    title: "Empower Every Player",
    description:
      "Provide accessible, world-class coaching and technology to players of all skill levels, from beginners to grandmasters.",
  },
  {
    icon: "⚡",
    title: "Tech-Driven Improvement",
    description:
      "Integrate AI analysis and modern training tools to accelerate skill acquisition and tactical mastery.",
  },
  {
    icon: "🏆",
    title: "Craftsmanship & Quality",
    description:
      "Deliver premium chess sets and equipment crafted to elevate the playing experience.",
  },
];

const values = [
  {
    title: "Innovation First",
    desc: "We combine centuries of classical chess wisdom with modern technology.",
    tag: "Tech Accent",
  },
  {
    title: "Excellence & Precision",
    desc: "From our coaches to our products, we hold ourselves to grandmaster standards.",
    tag: "Gold Accent",
  },
  {
    title: "Community Growth",
    desc: "Building a supportive global ecosystem for chess enthusiasts, students, and educators.",
    tag: "Global",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        {/* Background ambient light */}
        <div className="pointer-events-none absolute top-0 left-1/3 w-[500px] h-[350px] bg-gold/5 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-1/4 w-[400px] h-[300px] bg-tech-blue/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-tech-blue/30 bg-tech-blue/10 px-4 py-2 text-xs font-semibold text-tech-blue-light">
            <span className="h-2 w-2 rounded-full bg-tech-blue animate-ping" />
            ABOUT NXCHESS
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Building {SITE_SLOGAN}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary leading-relaxed">
            {SITE_NAME} was founded to revolutionize how chess is taught, practiced, and experienced around the globe.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div>
              <SectionHeading
                label="Our Story"
                title="Where Passion Meets Innovation"
                align="left"
              />
              <div className="mt-6 space-y-4 text-foreground-secondary leading-relaxed">
                <p>
                  NXChess began with a simple observation: while chess is one of humanity&apos;s oldest and most profound games, the way players learn and access quality resources remained fragmented.
                </p>
                <p>
                  We set out to create a unified platform—combining elite 1-on-1 coaching, premium handcrafted equipment, and modern data-driven tools.
                </p>
                <p>
                  Today, NXChess serves hundreds of students across the globe, pairing ambitious players with grandmasters and master coaches who share a vision of modern chess excellence.
                </p>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="relative">
              <Card glow className="p-8 relative overflow-hidden border-gold/20">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-bold text-gold">NX</span>
                  <span className="badge-tech">Founded 2026</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Next Generation</h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  Combining classical grandmaster strategy with modern digital learning platforms.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gold">500+</div>
                    <div className="text-xs text-foreground-muted">Global Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-tech-blue-light">100%</div>
                    <div className="text-xs text-foreground-muted">Dedication to Quality</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Our Mission"
            title="Redefining Chess for the Modern Era"
            subtitle="We exist to help players uncover their full tactical and strategic potential."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {missionPoints.map((point) => (
              <Card key={point.title} className="p-8 text-center hover:border-tech-blue/40 transition-all">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-elevated text-3xl">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                  {point.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            label="Core Values"
            title="What Drives Us Forward"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                    {v.tag}
                  </span>
                </div>
                <h4 className="text-lg font-bold">{v.title}</h4>
                <p className="mt-2 text-sm text-foreground-secondary">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Join {SITE_SLOGAN}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground-secondary">
            Experience the future of chess training and equipment today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/coaching" size="lg">
              Explore Coaching
            </Button>
            <Button href="/contact" variant="tech" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
