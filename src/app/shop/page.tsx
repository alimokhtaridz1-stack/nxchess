import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Explore NXChess equipment: handcrafted wooden chess boards, tournament sets, digital timers, and chess accessories.",
};

const categories = [
  "All Products",
  "Chess Boards",
  "Chess Accessories",
  "Luxury Sets",
  "Digital Tech",
];

const products = [
  {
    id: "board-1",
    name: "Solid Walnut & Maple Chess Board",
    category: "Chess Boards",
    price: "$129.99",
    description: "Handcrafted 2.25\" square tournament regulation board with satin protective coat.",
    icon: "♝",
    badge: "Handmade",
    isTech: false,
  },
  {
    id: "board-2",
    name: "Luxury Ebony Wood Board",
    category: "Chess Boards",
    price: "$189.99",
    description: "Deep black ebony wood with maple inlays. Built for grandmaster study and display.",
    icon: "♚",
    badge: "Premium",
    isTech: false,
  },
  {
    id: "acc-1",
    name: "NXChess Digital Pro Timer",
    category: "Chess Accessories",
    price: "$54.99",
    description: "FIDE-approved digital chess clock featuring multi-stage delay, increment, and quiet touch buttons.",
    icon: "⏱",
    badge: "Tech Accent",
    isTech: true,
  },
  {
    id: "acc-2",
    name: "Padded Canvas Carrying Bag",
    category: "Chess Accessories",
    price: "$39.99",
    description: "Waterproof heavy-duty nylon bag with slots for board, pieces, clock, and scorebooks.",
    icon: "👜",
    badge: "Essential",
    isTech: false,
  },
  {
    id: "set-1",
    name: "Triple-Weighted Staunton Pieces",
    category: "Luxury Sets",
    price: "$89.99",
    description: "Full 34-piece set with dual queens. Weighted base with green felt pads.",
    icon: "♛",
    badge: "Best Seller",
    isTech: false,
  },
  {
    id: "acc-3",
    name: "Hardcover Opening Encyclopedia",
    category: "Chess Accessories",
    price: "$44.99",
    description: "Comprehensive guide to modern openings with annotated grandmaster games.",
    icon: "📖",
    badge: "Guide",
    isTech: false,
  },
];

export default function ShopPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2">
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">
              ♜ PREPARATION & EQUIPMENT
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            NXChess <span className="text-gradient-gold">Store</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
            Premium chess boards, official Staunton sets, digital clocks, and specialized accessories.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="border-y border-border bg-background-secondary">
        <div className="mx-auto max-w-6xl px-6 py-6 overflow-x-auto">
          <div className="flex items-center gap-3">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  idx === 0
                    ? "bg-gold text-black shadow-md shadow-gold/10"
                    : "bg-surface border border-border text-foreground-secondary hover:border-border-hover hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Curated Catalog"
            title="Featured Chess Boards & Accessories"
            subtitle="Engineered for durability, aesthetic appeal, and competitive tournament standards."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Card
                key={p.id}
                className={`p-0 overflow-hidden flex flex-col justify-between ${p.isTech ? "border-tech-blue/30" : "border-border"}`}
                id={`product-card-${p.id}`}
              >
                {/* Visual Header */}
                <div className="h-44 bg-surface-elevated flex items-center justify-center relative">
                  <span className="text-6xl">{p.icon}</span>
                  <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${p.isTech ? "bg-tech-blue/15 text-tech-blue-light border border-tech-blue/30" : "bg-gold/15 text-gold border border-gold/30"}`}>
                    {p.badge}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-foreground-muted uppercase tracking-wider block mb-1">
                      {p.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                    <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-2xl font-bold text-gold">{p.price}</span>
                    <Button
                      href="/contact"
                      variant={p.isTech ? "tech" : "secondary"}
                      size="sm"
                    >
                      Inquire / Buy
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Looking for Custom Gear?</h2>
          <p className="mt-3 text-foreground-secondary">
            We provide custom school board sets, bulk club discounts, and custom wooden engravings.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact" size="lg">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
