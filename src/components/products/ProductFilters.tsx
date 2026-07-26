"use client";

import { useMemo } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductCategory } from "@/lib/types";
import { products } from "@/lib/data/products";

// Preferred display order for known categories. Any category present in the
// product data but not listed here will still show up — just appended at
// the end — so a newly added category can never silently disappear.
const CATEGORY_ORDER: ProductCategory[] = [
  "Traditional Snacks",
  "Cookies",
  "Crackers",
  "Chips",
];

export type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

interface ProductFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: ProductCategory | "All";
  onCategoryChange: (value: ProductCategory | "All") => void;
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
}

export function ProductFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
}: ProductFiltersProps) {
  // Derived from the actual product list, so a category only appears here
  // if at least one product actually has it — no more empty/blank tabs.
  const categories = useMemo<(ProductCategory | "All")[]>(() => {
    const present = new Set(products.map((p) => p.category));
    const ordered = CATEGORY_ORDER.filter((c) => present.has(c));
    const extras = Array.from(present).filter((c) => !CATEGORY_ORDER.includes(c));
    return ["All", ...ordered, ...extras];
  }, []);

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search snacks..."
            className="w-full rounded-full border border-brown/15 bg-white py-2.5 pl-11 pr-4 text-sm outline-none transition-colors focus:border-caramel focus:ring-2 focus:ring-caramel/30"
          />
        </div>

        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="w-full rounded-full border border-brown/15 bg-white px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-caramel focus:ring-2 focus:ring-caramel/30 sm:w-auto"
        >
          <option value="featured">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onCategoryChange(c)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              category === c
                ? "bg-brown text-white"
                : "bg-white text-foreground/70 border border-brown/15 hover:bg-cream"
            )}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}