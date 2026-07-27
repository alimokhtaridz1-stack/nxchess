import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME, SITE_SLOGAN, CHESS_BENEFITS, CURRICULUM_LEVELS } from "@/lib/constants";

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

const testimonials = [
  {
    quote: "My 9-year-old son joined the Pawn level and reached Knight level in 3 months. His focus at school and calculation in games improved tremendously!",
    author: "Sarah M.",
    role: "Parent of Academy Student",
    rating: "★★★★★",
  },
  {
    quote: "The Grandmaster coaches are patient and friendly. The periodic progress reports keep us updated on exact ratings and tactical module completion.",
    author: "David K.",
    role: "Private Student Parent",
    rating: "★★★★★",
  },
  {
    quote: "The combination of the $20/mo platform and monthly live sessions is unmatched. Best investment for serious chess improvement.",
    author: "Alexander R.",
    role: "Adult Club Player",
    rating: "★★★★★",
  },
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
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-chess-green/30 bg-chess-green/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-chess-green animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-chess-green-light">
              {SITE_SLOGAN}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Welcome to <span className="text-gradient-gold">{SITE_NAME}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-secondary sm:text-xl">
            Premier chess academy combining structured 8-level piece curriculum, master coaching, self-learning digital modules, and tournament equipment.
          </p>

          {/* Highlighted Banner */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 bg-surface-elevated border border-border px-5 py-2.5 rounded-2xl text-sm shadow-md">
            <span className="px-2.5 py-0.5 rounded-full bg-chess-green text-black font-extrabold text-xs">
              ACADEMY MEMBERSHIP
            </span>
            <span className="text-foreground font-medium">
              Self-Learning Plan: <strong className="text-chess-green-light font-bold">$20/month</strong> (Includes 1 Monthly Live Session)
            </span>
          </div>

          {/* CTAs */}
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
          Stats Bar
          ============================================ */}
      <section className="border-y border-border bg-background-secondary">
        <div className="mx-auto max-w-5xl px-6 py-10">
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

          <div className="mt-10 text-center">
            <Button href="/coaching" variant="outline" size="sm">
              View Full 8-Level Curriculum Details →
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================
          Benefits of Chess (Brain Development)
          ============================================ */}
      <section className="section-padding border-t border-border bg-background-secondary">
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
          Social Proof & Parent Testimonials
          ============================================ */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Social Proof"
            title="Trusted by Parents & Students"
            subtitle="Rated 4.9/5 stars for teaching excellence, student progress, and master coaching."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.author} className="p-6 bg-surface flex flex-col justify-between hover:border-gold/40">
                <div>
                  <div className="text-gold text-sm font-bold mb-3">{t.rating}</div>
                  <p className="text-sm italic leading-relaxed text-foreground-secondary">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <h4 className="text-sm font-bold text-foreground">{t.author}</h4>
                  <span className="text-xs text-foreground-muted">{t.role}</span>
                </div>
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

      {/* ============================================
          CTA Banner
          ============================================ */}
      <section className="section-padding border-t border-border bg-background-secondary relative">
        <div className="mx-auto max-w-4xl relative z-10">
          <Card glow className="p-10 sm:p-14 text-center border-chess-green/30 bg-surface relative overflow-hidden">
            <h2 className="text-3xl font-extrabold sm:text-4xl text-foreground">
              Start Your Chess Journey Today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground-secondary">
              Join for $20/month to get complete digital course access and 1 live coaching session every month.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/coaching" size="lg" variant="primary">
                Join Self-Learning ($20/mo)
              </Button>
              <Button href="/contact" variant="whatsapp" size="lg">
                💬 Chat on WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
