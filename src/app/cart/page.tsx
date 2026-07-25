"use client";

import Link from "next/link";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";
import { CartLineItem } from "@/components/cart/CartLineItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";

export default function CartPage() {
  const { lines, count } = useCart();

  if (count === 0) {
    return (
      <div className="bg-background py-24">
        <div className="container-app flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cream text-brown">
            <ShoppingBag size={32} />
          </div>
          <h1 className="mt-6 font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Your cart is empty
          </h1>
          <p className="mt-2 max-w-sm text-foreground/60">
            Looks like you haven&apos;t added any snacks yet. Explore our collection to find
            your favorites.
          </p>
          <Button href="/products" size="lg" className="mt-8">
            Browse Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background py-12 lg:py-16">
      <div className="container-app">
        <Reveal className="mb-8">
          <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Shopping Cart
          </h1>
          <p className="mt-2 text-foreground/60">{count} item(s) in your cart</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-4">
            {lines.map((line) => (
              <CartLineItem
                key={line.product.id}
                product={line.product}
                quantity={line.quantity}
                lineTotal={line.lineTotal}
              />
            ))}

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-brown transition-colors hover:text-brown-dark"
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>
          </div>

          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
