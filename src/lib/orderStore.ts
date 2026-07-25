import { CheckoutInfo, OrderRecord } from "@/lib/types";

const DRAFT_KEY = "serena-cemilan-checkout-draft";
const ORDER_KEY = "serena-cemilan-last-order";

export interface CheckoutDraft {
  customer: CheckoutInfo;
  subtotal: number;
  discount: number;
  shippingCost: number;
  total: number;
}

export function saveCheckoutDraft(draft: CheckoutDraft) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}

export function getCheckoutDraft(): CheckoutDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    return raw ? (JSON.parse(raw) as CheckoutDraft) : null;
  } catch {
    return null;
  }
}

export function saveOrder(order: OrderRecord) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ORDER_KEY, JSON.stringify(order));
}

export function getLastOrder(): OrderRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(ORDER_KEY);
    return raw ? (JSON.parse(raw) as OrderRecord) : null;
  } catch {
    return null;
  }
}
