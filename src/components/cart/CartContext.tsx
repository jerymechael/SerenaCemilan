"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { CartItem, Product } from "@/lib/types";
import { products } from "@/lib/data/products";
import { Coupon, getCoupon, calculateDiscount } from "@/lib/data/coupons";

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  discount: number;
  couponCode: string | null;
  couponError: string | null;
  notes: string;
  setNotes: (notes: string) => void;
  applyCoupon: (code: string) => void;
  removeCoupon: () => void;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  lines: { product: Product; quantity: number; lineTotal: number }[];
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "serena-cemilan-cart";
const COUPON_KEY = "serena-cemilan-coupon";
const NOTES_KEY = "serena-cemilan-notes";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);
  const [notes, setNotesState] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
      const savedCoupon = window.localStorage.getItem(COUPON_KEY);
      if (savedCoupon) setCouponCode(savedCoupon);
      const savedNotes = window.localStorage.getItem(NOTES_KEY);
      if (savedNotes) setNotesState(savedNotes);
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    if (couponCode) window.localStorage.setItem(COUPON_KEY, couponCode);
    else window.localStorage.removeItem(COUPON_KEY);
  }, [couponCode, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(NOTES_KEY, notes);
  }, [notes, hydrated]);

  const addItem = useCallback((productId: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { productId, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.productId !== productId)
        : prev.map((i) => (i.productId === productId ? { ...i, quantity } : i))
    );
  }, []);

  const clear = useCallback(() => {
    setItems([]);
    setCouponCode(null);
    setNotesState("");
  }, []);

  const applyCoupon = useCallback((code: string) => {
    const match: Coupon | undefined = getCoupon(code);
    if (!match) {
      setCouponError("This coupon code isn't valid.");
      return;
    }
    setCouponCode(match.code);
    setCouponError(null);
  }, []);

  const removeCoupon = useCallback(() => {
    setCouponCode(null);
    setCouponError(null);
  }, []);

  const setNotes = useCallback((value: string) => setNotesState(value), []);

  const lines = useMemo(
    () =>
      items
        .map((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return null;
          return { product, quantity: item.quantity, lineTotal: product.price * item.quantity };
        })
        .filter((l): l is { product: Product; quantity: number; lineTotal: number } => l !== null),
    [items]
  );

  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = lines.reduce((sum, l) => sum + l.lineTotal, 0);
  const activeCoupon = couponCode ? getCoupon(couponCode) : undefined;
  const discount = calculateDiscount(activeCoupon, subtotal);

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        subtotal,
        discount,
        couponCode,
        couponError,
        notes,
        setNotes,
        applyCoupon,
        removeCoupon,
        addItem,
        removeItem,
        updateQuantity,
        clear,
        lines,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
