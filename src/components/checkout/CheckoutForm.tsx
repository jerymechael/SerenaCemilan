"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Truck } from "lucide-react";
import { Input, Textarea, Select } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { cn, formatIDR } from "@/lib/utils";
import { provinces, shippingOptions } from "@/lib/data/shipping";
import { useCart } from "@/components/cart/CartContext";
import { saveCheckoutDraft } from "@/lib/orderStore";
import { CheckoutInfo } from "@/lib/types";

const checkoutSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  phone: z
    .string()
    .min(9, "Enter a valid phone number")
    .regex(/^[0-9+\s-]+$/, "Numbers only, please"),
  email: z.string().email("Enter a valid email address"),
  province: z.string().min(1, "Select a province"),
  city: z.string().min(2, "City is required"),
  address: z.string().min(10, "Please provide a full street address"),
  postalCode: z.string().min(4, "Enter a valid postal code"),
  notes: z.string().optional(),
  shippingId: z.string().min(1, "Choose a shipping method"),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export function CheckoutForm() {
  const router = useRouter();
  const { subtotal, discount } = useCart();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      province: "",
      city: "",
      address: "",
      postalCode: "",
      notes: "",
      shippingId: shippingOptions[0].id,
    },
  });

  const selectedShippingId = watch("shippingId");
  const selectedShipping = shippingOptions.find((s) => s.id === selectedShippingId);
  const shippingCost = selectedShipping?.price ?? 0;
  const grandTotal = Math.max(0, subtotal - discount) + shippingCost;

  const onSubmit = (values: CheckoutFormValues) => {
    setSubmitting(true);
    const customer: CheckoutInfo = { ...values };
    saveCheckoutDraft({
      customer,
      subtotal,
      discount,
      shippingCost,
      total: grandTotal,
    });
    router.push("/payment");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="rounded-3xl border border-brown/10 bg-white p-6 card-shadow">
        <h2 className="font-display text-lg font-semibold text-foreground">Customer Details</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input label="Full Name" placeholder="Jane Doe" {...register("fullName")} error={errors.fullName?.message} />
          <Input label="Phone Number" placeholder="0812xxxxxxx" {...register("phone")} error={errors.phone?.message} />
          <Input label="Email" type="email" placeholder="jane@email.com" {...register("email")} error={errors.email?.message} className="sm:col-span-2" />

          <Controller
            control={control}
            name="province"
            render={({ field }) => (
              <Select label="Province" {...field} error={errors.province?.message}>
                <option value="">Select province</option>
                {provinces.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </Select>
            )}
          />
          <Input label="City" placeholder="e.g. Bandung" {...register("city")} error={errors.city?.message} />
          <Textarea label="Address" placeholder="Street, house number, RT/RW, kelurahan" {...register("address")} error={errors.address?.message} className="sm:col-span-2" />
          <Input label="Postal Code" placeholder="e.g. 40123" {...register("postalCode")} error={errors.postalCode?.message} />
          <Textarea label="Notes (optional)" placeholder="Delivery instructions" {...register("notes")} className="sm:col-span-2" />
        </div>
      </div>

      <div className="rounded-3xl border border-brown/10 bg-white p-6 card-shadow">
        <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <Truck size={19} className="text-brown" />
          Shipping Method
        </h2>
        <div className="mt-5 space-y-3">
          {shippingOptions.map((option) => (
            <label
              key={option.id}
              className={cn(
                "flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition-colors",
                selectedShippingId === option.id
                  ? "border-brown bg-cream"
                  : "border-brown/10 bg-white hover:bg-cream/50"
              )}
            >
              <span className="flex items-center gap-3">
                <input
                  type="radio"
                  value={option.id}
                  {...register("shippingId")}
                  className="h-4 w-4 accent-[#8B5E3C]"
                />
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    {option.courier} — {option.service}
                  </span>
                  <span className="block text-xs text-foreground/50">{option.eta}</span>
                </span>
              </span>
              <span className="text-sm font-semibold text-brown">{formatIDR(option.price)}</span>
            </label>
          ))}
        </div>
        {errors.shippingId && (
          <p className="mt-2 text-xs text-red-500">{errors.shippingId.message}</p>
        )}
      </div>

      <div className="rounded-3xl border border-brown/10 bg-white p-6 card-shadow">
        <h2 className="font-display text-lg font-semibold text-foreground">Order Total</h2>
        <div className="mt-4 space-y-2.5 text-sm">
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
            <span>{formatIDR(shippingCost)}</span>
          </div>
          <div className="flex justify-between border-t border-brown/10 pt-3 font-display text-base font-semibold text-foreground">
            <span>Grand Total</span>
            <span className="text-brown">{formatIDR(grandTotal)}</span>
          </div>
        </div>
        <Button type="submit" size="lg" className="mt-6 w-full" disabled={submitting}>
          {submitting ? "Processing..." : "Continue to Payment"}
        </Button>
      </div>
    </form>
  );
}
