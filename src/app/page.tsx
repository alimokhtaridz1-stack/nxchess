import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME, SITE_SLOGAN } from "@/lib/constants";

const featuredProducts = [
  {
    id: "1",
    name: "Staunton Tournament Set",
    category: "Chess Sets",
    price: "$89.99",
    tag: "Best Seller",
    icon: "♚",
    badgeColor: "bg-chess-green/20 text-chess-green-light border-chess-green/40",
  },
  {
    id: "2",
    name: "Solid Walnut Board",
    category: "Boards",
    price: "$129.99",
    tag: "Handcrafted",
    icon: "♝",
    badgeColor: "bg-gold/20 text-gold border-gold/40",
  },
  {
    id: "3",
    name: "NX Digital Pro Timer",
    category: "Accessories",
    price: "$54.99",
    tag: "Tech Edition",
    icon: "⏱",
    badgeColor: "bg-tech-blue/20 text-tech-blue-light border-tech-blue/40",
  },
];

const services = [
  {
    icon: "♟",
    title: "Kids & Youth Coaching",
    description:
      "Fun, structured chess lessons designed specifically for children to develop logic, patience, and concentration.",
    href: "/coaching",
  },
  {
    icon: "♚",
    title: "Private 1-on-1 Coaching",
    description:
      "Personalized instruction with titled masters customized to your opening repertoire, middlegame tactics, and endgames.",
    href: "/coaching",
  },
  {
    icon: "🏫",
    title: "School Programs",
    description:
      "Turnkey chess curriculum, club management, and tournament organization for schools and institutions.",
    href: "/coaching",
  },
];

const whyReasons = [
  {
    title: "AI-Powered Analysis",
    desc: "Combine grandmaster intuition with computer engine precision to spot your tactical mistakes.",
    isTech: true,
  },
  {
    title: "Personalized Training",
    desc: "Custom learning roadmaps crafted for your rating goals, whether 1000 Elo or 2200 Elo.",
    isTech: false,
  },
  {
    title: "Tournament Gear",
    desc: "Weighted pieces, handcrafted wooden boards, and digital timers built to FIDE standards.",
    isTech: false,
  },
  {
    title: "Global Community",
    desc: "Connect with players worldwide, participate in interactive events, and track your rating progress.",
    isTech: true,
  },
];

const stats = [
  { value: "500+", label: "Active Students" },
  { value: "15+", label: "Titled Coaches" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "50+", label: "Premium Products" },
];

export default function Home() {
  return (
    <main>
      {/* ============================================
          Hero Section — Chess.com Inspired Dark + Green Accent
          ============================================ */}
      <section className="relative overflow-hidden section-padding">
        {/* Background glow flares */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-chess-green/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-20 right-10 w-[400px] h-[400px] bg-tech-blue/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Tech Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-chess-green/40 bg-chess-green/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-chess-green animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-chess-green-light">
              {SITE_SLOGAN}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Welcome to <span className="text-gradient-green">{SITE_NAME}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-secondary sm:text-xl">
            Play better, train smarter, and equip your game. Experience world-class coaching, handcrafted chess sets, and next-generation tech analysis.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/coaching" size="lg" variant="primary">
              <span>▶ Play & Learn Coaching</span>
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
                <div className="text-3xl font-extrabold text-chess-green-light sm:text-4xl">
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
          Services Section
          ============================================ */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Our Services"
            title="Coaching Programs for Every Level"
            subtitle="Tailored learning for kids, private students, and school institutions."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="p-8 text-center flex flex-col justify-between hover:border-chess-green/50 transition-all">
                <div>
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-elevated text-3xl text-chess-green-light">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                    {s.description}
                  </p>
                </div>
                <div className="mt-8">
                  <Button href={s.href} variant="outline" size="sm">
                    Learn More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Featured Products Section
          ============================================ */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Featured Store"
            title="Popular Chess Gear & Equipment"
            subtitle="Explore high-quality Staunton sets, wooden boards, and digital clocks."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {featuredProducts.map((p) => (
              <Card key={p.id} className="p-6 flex flex-col justify-between hover:border-gold/40">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                      {p.category}
                    </span>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${p.badgeColor}`}>
                      {p.tag}
                    </span>
                  </div>
                  <div className="h-36 flex items-center justify-center text-6xl my-2 bg-surface-elevated rounded-2xl border border-border">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold mt-4">{p.name}</h3>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xl font-extrabold text-gold">{p.price}</span>
                  <Button href="/shop" size="sm" variant="gold">
                    View Product
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/shop" variant="secondary" size="md">
              View All Products in Shop →
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================
          Why NXChess Section
          ============================================ */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                label="Why NXChess"
                title="Chess Mastered for the Modern Era"
                align="left"
              />
              <div className="mt-8 space-y-6">
                {whyReasons.map((reason) => (
                  <div key={reason.title} className="flex gap-4">
                    <div className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${reason.isTech ? "bg-tech-blue/20 text-tech-blue-light border border-tech-blue/30" : "bg-chess-green/20 text-chess-green-light border border-chess-green/30"}`}>
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold flex items-center gap-2">
                        {reason.title}
                        {reason.isTech && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-tech-blue/20 text-tech-blue-light font-bold">
                            TECH
                          </span>
                        )}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card glow className="p-8 text-center border-chess-green/30 relative overflow-hidden bg-surface">
                <div className="text-7xl mb-4 text-gradient-green">♚</div>
                <h3 className="text-2xl font-bold">{SITE_SLOGAN}</h3>
                <p className="mt-3 text-sm text-foreground-secondary max-w-md mx-auto">
                  Experience grandmaster-led instruction combined with cutting-edge tools.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-mono text-chess-green-light bg-chess-green/10 px-4 py-2 rounded-lg border border-chess-green/30">
                  <span>● ONLINE PLATFORM</span>
                  <span>·</span>
                  <span>V1 ACTIVE</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA Banner
          ============================================ */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-4xl">
          <Card glow className="p-10 sm:p-14 text-center border-chess-green/30 relative">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Ready to Upgrade Your Game?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground-secondary">
              Book a coaching session or chat with our team directly on WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/coaching" size="lg" variant="primary">
                Book a Session
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
