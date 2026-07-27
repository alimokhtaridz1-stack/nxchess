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
    badgeColor: "bg-chess-green/25 text-chess-green-light border-chess-green/50",
    hoverGlow: "hover-glow-green",
    iconBg: "bg-gradient-to-br from-chess-green/30 to-emerald-900/50 text-chess-green-light border-chess-green/30",
  },
  {
    id: "2",
    name: "Solid Walnut Board",
    category: "Boards",
    price: "$129.99",
    tag: "Handcrafted",
    icon: "♝",
    badgeColor: "bg-gold/25 text-gold-light border-gold/50",
    hoverGlow: "hover-glow-gold",
    iconBg: "bg-gradient-to-br from-amber-500/30 to-orange-900/50 text-gold-light border-gold/30",
  },
  {
    id: "3",
    name: "NX Digital Pro Timer",
    category: "Accessories",
    price: "$54.99",
    tag: "Tech Edition",
    icon: "⏱",
    badgeColor: "bg-tech-blue/25 text-tech-blue-light border-tech-blue/50",
    hoverGlow: "hover-glow-tech",
    iconBg: "bg-gradient-to-br from-cyan-500/30 to-blue-900/50 text-tech-blue-light border-tech-blue/30",
  },
];

const services = [
  {
    icon: "📚",
    title: "Self-Learning Membership ($20/mo)",
    description:
      "Interactive digital self-learning course access paired with 1 monthly live 1-on-1 coaching session.",
    href: "/coaching",
    isFeatured: true,
    hoverGlow: "hover-glow-green",
    iconBg: "bg-gradient-to-br from-chess-green/30 to-emerald-600/30 text-chess-green-light border border-chess-green/40",
  },
  {
    icon: "♟",
    title: "Kids & Youth Coaching ($350)",
    description:
      "Fun, structured chess lessons designed for children to build logic, focus, and youth tournament strategy.",
    href: "/coaching",
    isFeatured: false,
    hoverGlow: "hover-glow-gold",
    iconBg: "bg-gradient-to-br from-amber-500/30 to-orange-600/30 text-gold-light border border-gold/40",
  },
  {
    icon: "♚",
    title: "Private 1-on-1 Coaching ($650)",
    description:
      "Personalized instruction with titled masters customized to your opening repertoire, tactics, and endgames.",
    href: "/coaching",
    isFeatured: false,
    hoverGlow: "hover-glow-tech",
    iconBg: "bg-gradient-to-br from-cyan-500/30 to-blue-600/30 text-tech-blue-light border border-tech-blue/40",
  },
];

const whyReasons = [
  {
    title: "Self-Paced Platform + 1 Monthly Live Session",
    desc: "Subscribe for $20/month to get full platform course access plus 1 live coaching session every month.",
    badgeClass: "bg-chess-green/20 text-chess-green-light border-chess-green/40",
    checkBg: "bg-chess-green/30 text-chess-green-light border-chess-green/40",
  },
  {
    title: "Dedicated Learning & Coaching Focus",
    desc: "We focus 100% on instruction, courses, and equipment to accelerate your skill growth.",
    badgeClass: "bg-gold/20 text-gold-light border-gold/40",
    checkBg: "bg-gold/30 text-gold-light border-gold/40",
  },
  {
    title: "AI-Powered Game Analysis",
    desc: "Identify your tactical blind spots using engine evaluations and master annotations.",
    badgeClass: "bg-tech-blue/20 text-tech-blue-light border-tech-blue/40",
    checkBg: "bg-tech-blue/30 text-tech-blue-light border-tech-blue/40",
  },
  {
    title: "Tournament Equipment",
    desc: "Weighted Staunton pieces, handcrafted wooden boards, and digital clocks built to FIDE standards.",
    badgeClass: "bg-purple-accent/20 text-purple-light border-purple-accent/40",
    checkBg: "bg-purple-accent/30 text-purple-light border-purple-accent/40",
  },
];

const stats = [
  { value: "$20/mo", label: "Self-Learning Membership", color: "text-chess-green-light" },
  { value: "500+", label: "Active Students", color: "text-gold-light" },
  { value: "15+", label: "Titled Coaches", color: "text-tech-blue-light" },
  { value: "50+", label: "Premium Products", color: "text-purple-light" },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ============================================
          Hero Section — Vibrant Multi-Color Glow Flares
          ============================================ */}
      <section className="relative overflow-hidden section-padding">
        {/* Multi-Color Ambient Background Flares */}
        <div className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[450px] bg-chess-green/15 rounded-full blur-[100px]" />
        <div className="pointer-events-none absolute top-10 right-1/4 w-[550px] h-[450px] bg-tech-blue/15 rounded-full blur-[100px]" />
        <div className="pointer-events-none absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-gold/15 rounded-full blur-[110px]" />

        <div className="relative mx-auto max-w-5xl text-center z-10">
          {/* Vibrant Slogan Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-chess-green/50 bg-gradient-to-r from-chess-green/20 via-tech-blue/20 to-gold/20 px-5 py-2 backdrop-blur-md shadow-lg shadow-chess-green/10">
            <span className="h-2.5 w-2.5 rounded-full bg-chess-green animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-gradient-brand">
              {SITE_SLOGAN}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Welcome to <span className="text-gradient-brand">{SITE_NAME}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-secondary sm:text-xl">
            The premier platform for self-learning courses, live master coaching, and tournament-grade chess equipment.
          </p>

          {/* Highlighted Multi-Color Banner for $20/mo */}
          <div className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-surface-elevated via-surface to-surface-elevated border border-chess-green/50 px-6 py-3 rounded-2xl text-sm shadow-xl shadow-chess-green/10">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-chess-green via-emerald-500 to-tech-blue text-black font-extrabold text-xs shadow-md">
              POPULAR
            </span>
            <span className="text-foreground font-semibold">
              Self-Learning Membership: <strong className="text-gradient-green font-extrabold text-base">$20/month</strong> (Includes 1 Live Session)
            </span>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/coaching" size="lg" variant="primary">
              <span>📚 Explore Self-Learning & Plans</span>
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
          Colorful Stats Bar
          ============================================ */}
      <section className="border-y border-border bg-gradient-to-r from-background-secondary via-surface to-background-secondary relative">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-3xl font-extrabold sm:text-4xl ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-foreground-secondary uppercase tracking-wider font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Services Section with Vibrant Cards
          ============================================ */}
      <section className="section-padding relative">
        <div className="pointer-events-none absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-accent/10 rounded-full blur-[100px]" />
        
        <div className="mx-auto max-w-6xl relative z-10">
          <SectionHeading
            label="Learning Solutions"
            title="Self-Paced Courses & Master Coaching"
            subtitle="Start with our $20/mo Self-Learning plan or enroll in specialized coaching."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Card
                key={s.title}
                className={`p-8 text-center flex flex-col justify-between ${s.hoverGlow} ${s.isFeatured ? "border-chess-green/50 bg-gradient-to-b from-surface-elevated to-surface" : "bg-surface"}`}
              >
                <div>
                  <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl border shadow-lg ${s.iconBg}`}>
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                    {s.description}
                  </p>
                </div>
                <div className="mt-8">
                  <Button href={s.href} variant={s.isFeatured ? "primary" : "outline"} size="sm">
                    Learn More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Featured Store Section
          ============================================ */}
      <section className="section-padding border-t border-border bg-background-secondary relative">
        <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] bg-gold/10 rounded-full blur-[120px]" />

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
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground-muted">
                      {p.category}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full font-extrabold border ${p.badgeColor}`}>
                      {p.tag}
                    </span>
                  </div>
                  <div className={`h-36 flex items-center justify-center text-6xl my-2 rounded-2xl border shadow-inner ${p.iconBg}`}>
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold mt-4 text-foreground">{p.name}</h3>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xl font-extrabold text-gold-light">{p.price}</span>
                  <Button href="/shop" size="sm" variant="gold">
                    View Product
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/shop" variant="secondary" size="md">
              View All Products in Shop →
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================
          Why NXChess Section
          ============================================ */}
      <section className="section-padding relative">
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
                    <div className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-xs font-bold border ${reason.checkBg}`}>
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground flex items-center gap-2">
                        {reason.title}
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
              <Card glow className="p-8 text-center border-chess-green/40 relative overflow-hidden bg-gradient-to-b from-surface-elevated via-surface to-background-secondary shadow-2xl hover-glow-green">
                <div className="text-7xl mb-4 text-gradient-brand">♚</div>
                <h3 className="text-2xl font-bold">{SITE_SLOGAN}</h3>
                <p className="mt-3 text-sm text-foreground-secondary max-w-md mx-auto">
                  Experience self-paced learning courses paired with live 1-on-1 master instruction.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-mono text-chess-green-light bg-chess-green/15 px-4 py-2.5 rounded-xl border border-chess-green/40 shadow-md">
                  <span>● $20/MO MEMBERSHIP</span>
                  <span>·</span>
                  <span>1 LIVE SESSION INCLUDED</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Vibrant CTA Banner
          ============================================ */}
      <section className="section-padding border-t border-border bg-gradient-to-b from-background-secondary via-surface to-background relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-chess-green/10 via-tech-blue/10 to-gold/10 opacity-70 blur-3xl" />

        <div className="mx-auto max-w-4xl relative z-10">
          <Card glow className="p-10 sm:p-14 text-center border-chess-green/50 bg-gradient-to-b from-surface-elevated to-surface relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl text-foreground">
              Start Your Self-Learning Plan Today
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
