export interface Coupon {
  code: string;
  type: "percent" | "flat";
  value: number;
  label: string;
}

export const coupons: Coupon[] = [
  { code: "SERENA10", type: "percent", value: 10, label: "10% off your order" },
  { code: "KELUARGA15", type: "percent", value: 15, label: "15% off family packages" },
  { code: "ONGKIR20K", type: "flat", value: 20000, label: "Rp 20.000 off" },
];

export function getCoupon(code: string): Coupon | undefined {
  return coupons.find((c) => c.code.toLowerCase() === code.trim().toLowerCase());
}

export function calculateDiscount(coupon: Coupon | undefined, subtotal: number): number {
  if (!coupon) return 0;
  if (coupon.type === "percent") return Math.round((subtotal * coupon.value) / 100);
  return Math.min(coupon.value, subtotal);
}
