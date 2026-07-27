"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { STORE_POLICIES } from "@/lib/constants";

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  icon: string;
  badge?: string;
}

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [checkoutStep, setCheckoutStep] = useState<"view" | "ordered">("view");

  if (!product) return null;

  function handleOrder() {
    setCheckoutStep("ordered");
  }

  function handleCloseModal() {
    setCheckoutStep("view");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl border border-gold/40 bg-surface p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleCloseModal}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-surface-elevated text-foreground-secondary hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {checkoutStep === "view" ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground-muted">
                {product.category}
              </span>
              <span className="text-xs px-3 py-1 rounded-full font-bold bg-gold/20 text-gold-light border border-gold/30">
                In Stock (Ready to Ship)
              </span>
            </div>

            <div className="h-44 bg-surface-elevated rounded-2xl flex items-center justify-center text-7xl my-4 border border-border">
              {product.icon}
            </div>

            <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
            <div className="text-2xl font-extrabold text-gold-light my-2">{product.price}</div>

            <p className="text-sm text-foreground-secondary leading-relaxed my-3">
              {product.description}
            </p>

            {/* Delivery & Guarantee Info */}
            <div className="my-4 rounded-xl bg-background p-4 space-y-2 border border-border text-xs text-foreground-secondary">
              <div className="flex items-center gap-2">
                <span className="text-chess-green-light font-bold">🚚 UAE Express:</span>
                <span>{STORE_POLICIES.deliveryUae}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-tech-blue-light font-bold">✈️ Worldwide:</span>
                <span>{STORE_POLICIES.deliveryGlobal}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-light font-bold">🛡️ Guarantee:</span>
                <span>{STORE_POLICIES.returns}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-6 flex items-center gap-2 text-[11px] text-foreground-muted">
              <span>Accepted Payments:</span>
              <div className="flex gap-1.5 font-bold text-foreground-secondary">
                {STORE_POLICIES.paymentMethods.map((m) => (
                  <span key={m} className="px-2 py-0.5 rounded bg-surface-elevated border border-border">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleOrder} variant="gold" size="lg" className="w-full">
                <span>🛒 Proceed to Express Checkout</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold-light text-3xl">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-foreground">Order Request Initiated!</h3>
            <p className="text-sm text-foreground-secondary max-w-sm mx-auto">
              Your order for <strong className="text-gold-light">{product.name}</strong> ({product.price}) has been received. Our store manager will contact you via WhatsApp to confirm your delivery address.
            </p>
            <div className="pt-4">
              <Button onClick={handleCloseModal} variant="secondary" size="md">
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
