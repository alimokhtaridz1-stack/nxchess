"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductModal, { ProductItem } from "@/components/ui/ProductModal";
import { STORE_POLICIES } from "@/lib/constants";

const categories = [
  "All Products",
  "Chess Boards",
  "Chess Accessories",
  "Luxury Sets",
  "Digital Tech",
];

const products: ProductItem[] = [
  {
    id: "board-1",
    name: "Solid Walnut & Maple Chess Board",
    category: "Chess Boards",
    price: "$129.99",
    description: "Handcrafted 2.25\" square tournament regulation board with satin protective coat.",
    icon: "♝",
    badge: "Handmade",
  },
  {
    id: "board-2",
    name: "Luxury Ebony Wood Board",
    category: "Chess Boards",
    price: "$189.99",
    description: "Deep black ebony wood with maple inlays. Built for grandmaster study and display.",
    icon: "♚",
    badge: "Premium",
  },
  {
    id: "acc-1",
    name: "NXChess Digital Pro Timer",
    category: "Chess Accessories",
    price: "$54.99",
    description: "FIDE-approved digital chess clock featuring multi-stage delay, increment, and quiet touch buttons.",
    icon: "⏱",
    badge: "Tech Edition",
  },
  {
    id: "acc-2",
    name: "Padded Canvas Carrying Bag",
    category: "Chess Accessories",
    price: "$39.99",
    description: "Waterproof heavy-duty nylon bag with slots for board, pieces, clock, and scorebooks.",
    icon: "👜",
    badge: "Essential",
  },
  {
    id: "set-1",
    name: "Triple-Weighted Staunton Pieces",
    category: "Luxury Sets",
    price: "$89.99",
    description: "Full 34-piece set with dual queens. Weighted base with green felt pads.",
    icon: "♛",
    badge: "Best Seller",
  },
  {
    id: "acc-3",
    name: "Hardcover Opening Encyclopedia",
    category: "Chess Accessories",
    price: "$44.99",
    description: "Comprehensive guide to modern openings with annotated grandmaster games.",
    icon: "📖",
    badge: "Guide",
  },
];

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
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

      {/* Store Trust Policies Bar */}
      <section className="border-y border-border bg-background-secondary py-4">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-foreground-secondary">
            <div className="flex items-center gap-2">
              <span className="text-chess-green-light font-bold">🚚 UAE Delivery:</span>
              <span>{STORE_POLICIES.deliveryUae}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-tech-blue-light font-bold">✈️ Worldwide Shipping:</span>
              <span>{STORE_POLICIES.deliveryGlobal}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-light font-bold">🛡️ Returns:</span>
              <span>{STORE_POLICIES.returns}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-4 overflow-x-auto">
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
                className="p-0 overflow-hidden flex flex-col justify-between hover-glow-gold bg-surface border-border"
                id={`product-card-${p.id}`}
              >
                {/* Visual Header */}
                <div className="h-44 bg-surface-elevated flex items-center justify-center relative border-b border-border">
                  <span className="text-6xl">{p.icon}</span>
                  {p.badge && (
                    <span className="absolute top-4 right-4 text-xs font-extrabold px-3 py-1 rounded-full bg-gold/20 text-gold-light border border-gold/30">
                      {p.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold text-chess-green-light bg-chess-green/15 px-2.5 py-0.5 rounded border border-chess-green/30">
                    In Stock
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
                    <span className="text-2xl font-extrabold text-gold-light">
                      {p.price}
                    </span>
                    <Button
                      onClick={() => setSelectedProduct(p)}
                      variant="gold"
                      size="sm"
                    >
                      Quick View & Buy
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal Trigger */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}
