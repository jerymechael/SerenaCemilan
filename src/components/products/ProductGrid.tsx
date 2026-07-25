"use client";

import { PackageSearch } from "lucide-react";
import { Product } from "@/lib/types";
import { ProductCard } from "@/components/products/ProductCard";
import { StaggerContainer, StaggerItem } from "@/components/common/Reveal";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-brown/20 bg-white py-20 text-center">
        <PackageSearch size={40} className="text-brown/30" />
        <p className="mt-4 font-display text-lg font-medium text-foreground">
          No snacks match your search
        </p>
        <p className="mt-1 text-sm text-foreground/50">
          Try a different keyword or clear your filters.
        </p>
      </div>
    );
  }

  return (
    <StaggerContainer
      viewTriggered={false}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {products.map((product) => (
        <StaggerItem key={product.id}>
          <ProductCard product={product} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}