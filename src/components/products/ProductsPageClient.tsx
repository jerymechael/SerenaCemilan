"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/data/products";
import { ProductCategory } from "@/lib/types";
import { ProductFilters, SortOption } from "@/components/products/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Pagination } from "@/components/common/Pagination";
import { Reveal } from "@/components/common/Reveal";

const PAGE_SIZE = 8;

export function ProductsPageClient() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as ProductCategory | null) ?? "All";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProductCategory | "All">(initialCategory);
  const [sort, setSort] = useState<SortOption>("featured");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setPage(1);
  }, [search, category, sort]);

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      p.name.toLowerCase().includes(search.trim().toLowerCase())
    );
    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        list = [...list].sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
    }
    return list;
  }, [search, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="bg-background py-14 lg:py-18">
      <div className="container-app">
        <Reveal className="mb-10 text-center">
          <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Our Products
          </h1>
          <p className="mt-2 text-foreground/60">
            Traditional snacks, cookies, and gift hampers — all handcrafted in small batches.
          </p>
        </Reveal>

        <ProductFilters
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          sort={sort}
          onSortChange={setSort}
        />

        <p className="mt-6 mb-4 text-sm text-foreground/50">
          Showing {paged.length} of {filtered.length} products
        </p>

        <ProductGrid products={paged} />

        <div className="mt-12">
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </div>
    </div>
  );
}
