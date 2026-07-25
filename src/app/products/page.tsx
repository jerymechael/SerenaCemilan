import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsPageClient } from "@/components/products/ProductsPageClient";
import { Skeleton } from "@/components/common/Loading";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse traditional Indonesian snacks, cookies, crackers, chips, and gift hampers from Serena Cemilan.",
};

function ProductsFallback() {
  return (
    <div className="container-app py-14">
      <Skeleton className="mx-auto h-10 w-64" />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[3/4] w-full" />
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsFallback />}>
      <ProductsPageClient />
    </Suspense>
  );
}
