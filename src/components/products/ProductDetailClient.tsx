"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, ShoppingCart, Zap, MessageCircle, Truck, Package, Clock } from "lucide-react";
import { Product } from "@/lib/types";
import { formatIDR } from "@/lib/utils";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { QuantitySelector } from "@/components/common/QuantitySelector";
import { useCart } from "@/components/cart/CartContext";

export function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const router = useRouter();

  const whatsappMessage = encodeURIComponent(
    `Hi Serena Cemilan, I'm interested in ${product.name} (${quantity}x). Is it available?`
  );

  const handleBuyNow = () => {
    addItem(product.id, quantity);
    router.push("/cart");
  };

  return (
    <div>
      {product.badge && (
        <Badge variant={product.badge === "Best Seller" ? "brown" : "caramel"} className="mb-3">
          {product.badge}
        </Badge>
      )}
      <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
        {product.name}
      </h1>

      <div className="mt-3 flex items-center gap-2 text-sm text-foreground/60">
        <div className="flex items-center gap-1 text-caramel">
          <Star size={16} className="fill-caramel text-caramel" />
          <span className="font-semibold text-foreground">{product.rating.toFixed(1)}</span>
        </div>
        <span>·</span>
        <span>{product.reviewCount} reviews</span>
        <span>·</span>
        <span className={product.inStock ? "text-success" : "text-red-500"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="mt-5 flex items-baseline gap-3">
        <span className="font-display text-3xl font-semibold text-brown">
          {formatIDR(product.price)}
        </span>
        {product.compareAtPrice && (
          <span className="text-base text-foreground/40 line-through">
            {formatIDR(product.compareAtPrice)}
          </span>
        )}
      </div>

      <p className="mt-5 leading-relaxed text-foreground/70">{product.description}</p>

      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-2xl border border-brown/10 bg-white p-3">
          <Package size={18} className="mx-auto text-brown" />
          <p className="mt-1.5 text-xs text-foreground/50">Weight</p>
          <p className="text-xs font-semibold text-foreground">{product.weight}</p>
        </div>
        <div className="rounded-2xl border border-brown/10 bg-white p-3">
          <Clock size={18} className="mx-auto text-brown" />
          <p className="mt-1.5 text-xs text-foreground/50">Shelf Life</p>
          <p className="text-xs font-semibold text-foreground">{product.shelfLife.split(" (")[0]}</p>
        </div>
        <div className="rounded-2xl border border-brown/10 bg-white p-3">
          <Truck size={18} className="mx-auto text-brown" />
          <p className="mt-1.5 text-xs text-foreground/50">Packaging</p>
          <p className="text-xs font-semibold text-foreground">{product.packaging.split(" ")[0]}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <QuantitySelector value={quantity} onChange={setQuantity} />
        <Button
          variant="outline"
          size="lg"
          icon={<ShoppingCart size={18} />}
          onClick={() => addItem(product.id, quantity)}
        >
          Add to Cart
        </Button>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        <Button size="lg" icon={<Zap size={18} />} className="flex-1" onClick={handleBuyNow}>
          Buy Now
        </Button>
        <a
          href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-success px-6 py-4 text-base font-medium text-white transition-colors hover:brightness-95"
        >
          <MessageCircle size={18} />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
