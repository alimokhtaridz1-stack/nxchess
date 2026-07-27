import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import PlacementQuiz from "@/components/ui/PlacementQuiz";
import {
  SITE_NAME,
  SITE_SLOGAN,
  CHESS_BENEFITS,
  CURRICULUM_LEVELS,
  RATING_CASE_STUDIES,
  AUDIENCE_SEGMENTS,
} from "@/lib/constants";

const featuredProducts = [
  {
    id: "1",
    name: "Staunton Tournament Set",
    category: "Chess Sets",
    price: "$89.99",
    tag: "Best Seller",
    icon: "♚",
    badgeColor: "bg-chess-green/15 text-chess-green-light border-chess-green/30",
    hoverGlow: "hover-glow-green",
    iconBg: "bg-surface-elevated text-chess-green-light border-border",
  },
  {
    id: "2",
    name: "Solid Walnut Board",
    category: "Boards",
    price: "$129.99",
    tag: "Handcrafted",
    icon: "♝",
    badgeColor: "bg-gold/15 text-gold-light border-gold/30",
    hoverGlow: "hover-glow-gold",
    iconBg: "bg-surface-elevated text-gold-light border-border",
  },
  {
    id: "3",
    name: "NX Digital Pro Timer",
    category: "Accessories",
    price: "$54.99",
    tag: "Tech Edition",
    icon: "⏱",
    badgeColor: "bg-tech-blue/15 text-tech-blue-light border-tech-blue/30",
    hoverGlow: "hover-glow-tech",
    iconBg: "bg-surface-elevated text-tech-blue-light border-border",
  },
];

const partnerLogos = [
  "Dubai Sports City Academy",
  "Emirates Sports Hotel",
  "FIDE Certified Trainers",
  "International Chess Federation Network",
];

const stats = [
  { value: "4.9 ★", label: "Parent & Student Rating" },
  { value: "$20/mo", label: "Self-Learning Membership" },
  { value: "8 Levels", label: "Pawn to King Curriculum" },
  { value: "15+", label: "Master Coaches" },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ============================================
          Hero Section
          ============================================ */}
      <section className="relative overflow-hidden section-padding">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-chess-green/5 rounded-full blur-[120px]" />
        <div className="pointer-events-none absolute top-10 right-1/3 w-[400px] h-[300px] bg-gold/5 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-chess-green/30 bg-chess-green/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-chess-green animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-chess-green-light">
              {SITE_SLOGAN}
            </span>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Welcome to <span className="text-gradient-gold">{SITE_NAME}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-secondary sm:text-xl">
            Premier chess academy combining structured 8-level piece curriculum, master coaching, self-learning digital modules, and tournament equipment.
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 bg-surface-elevated border border-border px-5 py-2.5 rounded-2xl text-sm shadow-md">
            <span className="px-2.5 py-0.5 rounded-full bg-chess-green text-black font-extrabold text-xs">
              ACADEMY MEMBERSHIP
            </span>
            <span className="text-foreground font-medium">
              Self-Learning Plan: <strong className="text-chess-green-light font-bold">$20/month</strong> (Includes 1 Monthly Live Session)
            </span>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/coaching" size="lg" variant="primary">
              <span>📚 Explore Coaching & Curriculum</span>
            </Button>
            <Button href="/shop" variant="gold" size="lg">
              <span>🛒 Browse Shop</span>
            </Button>
            <Button href="/about" variant="outline" size="lg">
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================
          Partner / Institutional Trust Bar
          ============================================ */}
      <section className="border-y border-border bg-background-secondary py-6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-bold text-foreground-muted uppercase tracking-wider">
            {partnerLogos.map((p) => (
              <div key={p} className="flex items-center gap-2">
                <span className="text-gold-light">✓</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Stats Bar
          ============================================ */}
      <section className="border-b border-border bg-background py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-gold-light sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-foreground-secondary uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Audience Segmentation
          ============================================ */}
      <section className="section-padding relative">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Target Programs"
            title="Tailored Solutions for Every Player"
            subtitle="Whether you are a parent looking for structured kids lessons, an adult student, or a tournament contender."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {AUDIENCE_SEGMENTS.map((seg) => (
              <Card key={seg.id} className="p-8 bg-surface hover-glow-gold flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">{seg.icon}</div>
                  <span className="text-xs font-bold uppercase tracking-wider text-chess-green-light block mb-1">
                    {seg.highlight}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">{seg.title}</h3>
                  <p className="text-sm font-semibold text-gold-light mt-1">{seg.headline}</p>
                  <p className="text-xs leading-relaxed text-foreground-secondary mt-3">
                    {seg.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <Button href="/coaching" variant="outline" size="sm" className="w-full">
                    {seg.ctaText} →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Placement Quiz Integration
          ============================================ */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-4xl">
          <PlacementQuiz />
        </div>
      </section>

      {/* ============================================
          8-Level Progressive Curriculum Overview
          ============================================ */}
      <section className="section-padding relative">
        <div className="mx-auto max-w-6xl relative z-10">
          <SectionHeading
            label="Structured Curriculum"
            title="8-Level Piece Learning Framework"
            subtitle="From Pawn to King — a step-by-step progressive roadmap designed by Grandmasters for maximum skill development."
          />

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {CURRICULUM_LEVELS.map((lvl) => (
              <Card
                key={lvl.level}
                className="p-4 text-center bg-surface hover-glow-green border-border flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-chess-green-light block mb-1">
                    Lvl {lvl.level}
                  </span>
                  <div className="text-3xl my-2 text-gold-light">{lvl.icon}</div>
                  <h4 className="text-sm font-bold text-foreground">{lvl.name}</h4>
                  <p className="text-[11px] text-foreground-secondary mt-1 line-clamp-2">
                    {lvl.title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Student Rating Case Studies (Proof)
          ============================================ */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Proven Progress"
            title="Student Rating Breakthroughs"
            subtitle="Real rating gains achieved by NXChess academy students through our structured framework."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {RATING_CASE_STUDIES.map((c) => (
              <Card key={c.name} className="p-6 bg-surface hover-glow-green border-chess-green/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-foreground-muted">{c.location}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-chess-green/20 text-chess-green-light border border-chess-green/40">
                      {c.gain}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground">{c.name} ({c.age})</h3>
                  <div className="flex items-center gap-3 my-2 text-xs">
                    <span className="text-foreground-muted">Initial: {c.initialRating}</span>
                    <span className="text-chess-green-light font-bold">→ Current: {c.currentRating}</span>
                  </div>

                  <p className="text-xs italic leading-relaxed text-foreground-secondary mt-3">
                    &quot;{c.quote}&quot;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border text-[11px] font-semibold text-gold-light">
                  Program: {c.program}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Benefits of Chess (Brain Development)
          ============================================ */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Why Learn Chess"
            title="Cognitive & Life Skill Benefits"
            subtitle="Chess is more than a game — it trains the mind for academic, strategic, and personal success."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CHESS_BENEFITS.map((benefit) => (
              <Card key={benefit.title} className="p-6 bg-surface hover-glow-gold">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{benefit.icon}</span>
                  <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {benefit.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Featured Store
          ============================================ */}
      <section className="section-padding border-t border-border bg-background-secondary relative">
        <div className="mx-auto max-w-6xl relative z-10">
          <SectionHeading
            label="Featured Store"
            title="Popular Chess Gear & Equipment"
            subtitle="Explore high-quality Staunton sets, wooden boards, and digital clocks."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {featuredProducts.map((p) => (
              <Card key={p.id} className={`p-6 flex flex-col justify-between ${p.hoverGlow} bg-surface`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                      {p.category}
                    </span>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${p.badgeColor}`}>
                      {p.tag}
                    </span>
                  </div>
                  <div className={`h-36 flex items-center justify-center text-6xl my-2 rounded-2xl border ${p.iconBg}`}>
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold mt-4 text-foreground">{p.name}</h3>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xl font-bold text-gold-light">{p.price}</span>
                  <Button href="/shop" size="sm" variant="gold">
                    View Product
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
