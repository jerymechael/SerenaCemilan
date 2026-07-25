"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Product } from "@/lib/types";
import { formatIDR } from "@/lib/utils";
import { QuantitySelector } from "@/components/common/QuantitySelector";
import { useCart } from "@/components/cart/CartContext";

export function CartLineItem({
  product,
  quantity,
  lineTotal,
}: {
  product: Product;
  quantity: number;
  lineTotal: number;
}) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 rounded-3xl border border-brown/10 bg-white p-4 card-shadow sm:gap-6 sm:p-5">
      <Link href={`/products/${product.slug}`} className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl sm:h-24 sm:w-24">
        <Image src={product.image} alt={product.name} fill sizes="100px" className="object-cover" />
      </Link>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/products/${product.slug}`}>
              <h3 className="font-display text-base font-medium text-foreground hover:text-brown">
                {product.name}
              </h3>
            </Link>
            <p className="mt-0.5 text-xs text-foreground/50">{product.weight}</p>
          </div>
          <button
            onClick={() => removeItem(product.id)}
            aria-label="Remove item"
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-foreground/40 transition-colors hover:bg-red-50 hover:text-red-500"
          >
            <Trash2 size={16} />
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <QuantitySelector value={quantity} onChange={(q) => updateQuantity(product.id, q)} />
          <p className="font-display text-base font-semibold text-brown">{formatIDR(lineTotal)}</p>
        </div>
      </div>
    </div>
  );
}
