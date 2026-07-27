import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME } from "@/lib/constants";

const features = [
  {
    icon: "♟",
    title: "Expert Coaching",
    description:
      "Learn from titled players and experienced coaches with personalized training plans tailored to your skill level.",
    href: "/coaching",
  },
  {
    icon: "♜",
    title: "Premium Products",
    description:
      "Curated selection of high-quality chess sets, boards, clocks, and accessories for the discerning player.",
    href: "/shop",
  },
  {
    icon: "♛",
    title: "Digital Innovation",
    description:
      "AI-powered analysis, interactive courses, and cutting-edge tools to accelerate your chess improvement.",
    href: "/contact",
  },
];

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "15+", label: "Expert Coaches" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "50+", label: "Premium Products" },
];

export default function Home() {
  return (
    <main>
      {/* ============================================
          Hero Section
          ============================================ */}
      <section className="relative overflow-hidden section-padding">
        {/* Background glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-gold">
              Now Accepting Students
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Elevate Your
            <br />
            <span className="text-gradient-gold">Chess Game</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-secondary sm:text-xl">
            {SITE_NAME} brings together world-class coaching, premium equipment,
            and innovative technology to help you master the royal game.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/coaching" size="lg">
              Start Learning
            </Button>
            <Button href="/shop" variant="secondary" size="lg">
              Browse Shop
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================
          Stats Section
          ============================================ */}
      <section className="border-y border-border bg-background-secondary">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gold sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-foreground-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Features Section
          ============================================ */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="What We Offer"
            title="Everything You Need to Excel"
            subtitle="From beginner to grandmaster, we provide the tools and guidance to take your chess to the next level."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="p-8 text-center" id={`feature-${feature.title.toLowerCase().replace(/\s/g, "-")}`}>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                  {feature.description}
                </p>
                <Button
                  href={feature.href}
                  variant="ghost"
                  size="sm"
                  className="mt-6"
                >
                  Learn More →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Why NXChess Section
          ============================================ */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left — Content */}
            <div>
              <SectionHeading
                label="Why NXChess"
                title="Built for Players Who Demand Excellence"
                align="left"
              />
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Personalized Approach",
                    desc: "Every student gets a customized training program designed around their strengths, weaknesses, and goals.",
                  },
                  {
                    title: "Proven Results",
                    desc: "Our students consistently improve their ratings, with an average gain of 200+ Elo points within 6 months.",
                  },
                  {
                    title: "Modern Methods",
                    desc: "We combine classical chess wisdom with AI analysis and data-driven insights for maximum improvement.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl border border-border bg-surface p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">♚</div>
                  <p className="text-foreground-secondary text-sm">
                    Master the Royal Game
                  </p>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gold/5 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA Section
          ============================================ */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <Card glow className="relative overflow-hidden p-12 text-center sm:p-16">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to Make Your Move?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-foreground-secondary">
                Join hundreds of players who have transformed their chess game
                with {SITE_NAME}. Start your journey today.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button href="/coaching" size="lg">
                  Book a Session
                </Button>
                <Button href="/shop" variant="outline" size="lg">
                  Explore Products
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
