"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/common/Reveal";

export function BestSellers() {
  const bestSellers = products.filter((p) => p.badge === "Best Seller").slice(0, 3);
  const featured = bestSellers.length >= 3 ? bestSellers : products.slice(0, 3);

  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container-app">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Most Popular Treats
            </h2>
            <p className="mt-2 text-foreground/60">
              The timeless classics our customers love most.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brown transition-colors hover:text-brown-dark"
          >
            View All Products <ArrowRight size={16} />
          </Link>
        </Reveal>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
