"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

const tabs = ["Description", "Ingredients", "Shipping & Storage"] as const;

export function ProductInfoTabs({ product }: { product: Product }) {
  const [active, setActive] = useState<(typeof tabs)[number]>("Description");

  return (
    <div className="mt-16">
      <div className="flex gap-2 border-b border-brown/10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={cn(
              "relative px-4 py-3 text-sm font-medium transition-colors sm:px-6",
              active === tab ? "text-brown" : "text-foreground/50 hover:text-foreground/80"
            )}
          >
            {tab}
            {active === tab && (
              <span className="absolute -bottom-px left-0 h-0.5 w-full rounded-full bg-brown" />
            )}
          </button>
        ))}
      </div>

      <div className="py-8">
        {active === "Description" && (
          <p className="max-w-3xl leading-relaxed text-foreground/70">
            {product.longDescription}
          </p>
        )}

        {active === "Ingredients" && (
          <ul className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
            {product.ingredients.map((ingredient) => (
              <li key={ingredient} className="flex items-center gap-2 text-sm text-foreground/70">
                <Check size={15} className="flex-shrink-0 text-success" />
                {ingredient}
              </li>
            ))}
          </ul>
        )}

        {active === "Shipping & Storage" && (
          <dl className="grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/40">
                Weight
              </dt>
              <dd className="mt-1 text-sm text-foreground/80">{product.weight}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/40">
                Shelf Life
              </dt>
              <dd className="mt-1 text-sm text-foreground/80">{product.shelfLife}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/40">
                Packaging
              </dt>
              <dd className="mt-1 text-sm text-foreground/80">{product.packaging}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/40">
                Shipping
              </dt>
              <dd className="mt-1 text-sm text-foreground/80">
                Ships via JNE, J&T, SiCepat, AnterAja, GoSend, or GrabExpress within 1–2 business days.
              </dd>
            </div>
          </dl>
        )}
      </div>
    </div>
  );
}
