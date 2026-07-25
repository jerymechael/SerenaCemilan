"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";
import { formatIDR, cn } from "@/lib/utils";
import { Badge } from "@/components/common/Badge";
import { useCart } from "@/components/cart/CartContext";
import { motion } from "framer-motion";

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const { addItem } = useCart();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-brown/10 bg-white card-shadow transition-shadow hover:card-shadow-lg",
        className
      )}
    >
      <Link href={`/products/${product.slug}`} className="relative block aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <Badge
            variant={product.badge === "Best Seller" ? "brown" : "caramel"}
            className="absolute left-3 top-3"
          >
            {product.badge}
          </Badge>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-base font-medium text-foreground transition-colors group-hover:text-brown">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 text-xs text-foreground/50">
          <Star size={13} className="fill-caramel text-caramel" />
          {product.rating.toFixed(1)} ({product.reviewCount} reviews)
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold text-brown">
            {formatIDR(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-foreground/40 line-through">
              {formatIDR(product.compareAtPrice)}
            </span>
          )}
        </div>
        <button
          onClick={() => addItem(product.id, 1)}
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brown py-2.5 text-sm font-medium text-white transition-colors hover:bg-brown-dark"
        >
          <ShoppingCart size={15} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
