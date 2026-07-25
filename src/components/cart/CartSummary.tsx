"use client";

import { useState } from "react";
import { Tag, X } from "lucide-react";
import { formatIDR } from "@/lib/utils";
import { useCart } from "@/components/cart/CartContext";
import { Button } from "@/components/common/Button";

export function CartSummary() {
  const { subtotal, discount, couponCode, couponError, applyCoupon, removeCoupon, notes, setNotes } =
    useCart();
  const [couponInput, setCouponInput] = useState("");
  const grandTotal = Math.max(0, subtotal - discount);

  const handleApply = () => {
    if (!couponInput.trim()) return;
    applyCoupon(couponInput);
    setCouponInput("");
  };

  return (
    <div className="rounded-3xl border border-brown/10 bg-white p-6 card-shadow">
      <h2 className="font-display text-lg font-semibold text-foreground">Order Summary</h2>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-foreground/80">Coupon Code</label>
        {couponCode ? (
          <div className="flex items-center justify-between rounded-2xl bg-success/10 px-4 py-3">
            <span className="flex items-center gap-2 text-sm font-medium text-success">
              <Tag size={15} />
              {couponCode} applied
            </span>
            <button onClick={removeCoupon} aria-label="Remove coupon" className="text-success hover:text-red-500">
              <X size={16} />
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value)}
              placeholder="e.g. SERENA10"
              className="w-full rounded-full border border-brown/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-caramel focus:ring-2 focus:ring-caramel/30"
            />
            <Button variant="outline" size="sm" onClick={handleApply}>
              Apply
            </Button>
          </div>
        )}
        {couponError && <p className="mt-1.5 text-xs text-red-500">{couponError}</p>}
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-foreground/80">Order Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Special requests (optional)"
          className="min-h-[80px] w-full resize-none rounded-2xl border border-brown/15 bg-white px-4 py-3 text-sm outline-none focus:border-caramel focus:ring-2 focus:ring-caramel/30"
        />
      </div>

      <div className="mt-6 space-y-2.5 border-t border-brown/10 pt-5 text-sm">
        <div className="flex justify-between text-foreground/70">
          <span>Subtotal</span>
          <span>{formatIDR(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-success">
            <span>Discount</span>
            <span>-{formatIDR(discount)}</span>
          </div>
        )}
        <div className="flex justify-between text-foreground/70">
          <span>Shipping</span>
          <span className="text-foreground/50">Calculated at checkout</span>
        </div>
        <div className="flex justify-between border-t border-brown/10 pt-3 font-display text-base font-semibold text-foreground">
          <span>Total</span>
          <span className="text-brown">{formatIDR(grandTotal)}</span>
        </div>
      </div>

      <Button href="/checkout" className="mt-6 w-full" size="lg">
        Continue to Checkout
      </Button>
    </div>
  );
}
