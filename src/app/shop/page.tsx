import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Premium chess equipment and accessories. Browse our curated collection of chess sets, boards, clocks, and books.",
};

const categories = [
  { name: "All", count: 6 },
  { name: "Chess Sets", count: 2 },
  { name: "Boards", count: 1 },
  { name: "Clocks", count: 1 },
  { name: "Books", count: 1 },
  { name: "Accessories", count: 1 },
];

const products = [
  {
    id: "1",
    name: "Tournament Chess Set",
    price: 89.99,
    category: "Chess Sets",
    description:
      "Professional-grade Staunton chess pieces with triple-weighted bases. Regulation size for official tournaments.",
    badge: "Best Seller",
    icon: "♚",
  },
  {
    id: "2",
    name: "Walnut Chess Board",
    price: 129.99,
    category: "Boards",
    description:
      "Hand-crafted solid walnut and maple chess board with 2.25\" squares. Inlaid with precision and finished with a satin coat.",
    badge: null,
    icon: "♝",
  },
  {
    id: "3",
    name: "Digital Chess Clock",
    price: 54.99,
    category: "Clocks",
    description:
      "Tournament-approved digital clock with multiple time controls, delay modes, and a clear LCD display.",
    badge: "New",
    icon: "⏱",
  },
  {
    id: "4",
    name: "Luxury Wooden Set",
    price: 249.99,
    category: "Chess Sets",
    description:
      "Exquisite hand-carved rosewood pieces with felt bases. A collector's item and statement piece for any home.",
    badge: "Premium",
    icon: "♛",
  },
  {
    id: "5",
    name: "Chess Strategy Masterclass",
    price: 34.99,
    category: "Books",
    description:
      "Comprehensive guide covering openings, middlegame strategy, and endgame technique. Written by GM Alexander Petrov.",
    badge: null,
    icon: "📖",
  },
  {
    id: "6",
    name: "Premium Chess Bag",
    price: 39.99,
    category: "Accessories",
    description:
      "Padded carrying bag for chess pieces and board. Water-resistant nylon with multiple compartments and shoulder strap.",
    badge: null,
    icon: "👜",
  },
];

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export default function ShopPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2">
            <span className="text-sm font-medium text-gold">♜ Premium Collection</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Chess Equipment
            <br />
            <span className="text-gradient-gold">For Champions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
            Curated selection of premium chess sets, boards, clocks, and
            accessories. Every piece chosen for quality and craftsmanship.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="border-y border-border bg-background-secondary">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-gold text-black"
                    : "border border-border text-foreground-secondary hover:border-border-hover hover:text-foreground"
                }`}
                id={`category-${cat.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                {cat.name}
                <span className="ml-1.5 text-xs opacity-60">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Our Products"
            title="Built to Last, Designed to Impress"
            subtitle="Every item in our shop meets our rigorous standards for quality and craftsmanship."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card
                key={product.id}
                className="relative flex flex-col p-0 overflow-hidden"
                id={`product-${product.id}`}
              >
                {/* Product Image Area */}
                <div className="relative flex h-48 items-center justify-center bg-surface-elevated">
                  <span className="text-6xl">{product.icon}</span>
                  {product.badge && (
                    <span className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold ${
                      product.badge === "Premium"
                        ? "bg-gold text-black"
                        : product.badge === "New"
                        ? "bg-info/20 text-info"
                        : "bg-gold/10 text-gold"
                    }`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                    {product.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-secondary">
                    {product.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-2xl font-bold text-gold">
                      {formatPrice(product.price)}
                    </span>
                    <Button size="sm" variant="secondary">
                      View Details
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
          <h2 className="text-3xl font-bold sm:text-4xl">
            Can&apos;t Find What You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground-secondary">
            We&apos;re always expanding our collection. Contact us for custom orders
            or special requests.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
