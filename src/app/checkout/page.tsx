"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart/CartContext";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Reveal } from "@/components/common/Reveal";
import { Spinner } from "@/components/common/Loading";

export default function CheckoutPage() {
  const { count, lines } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (count === 0) router.replace("/cart");
  }, [count, router]);

  if (count === 0) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="bg-background py-12 lg:py-16">
      <div className="container-app max-w-3xl">
        <Breadcrumb items={[{ label: "Cart", href: "/cart" }, { label: "Checkout" }]} />
        <Reveal className="mt-6 mb-8">
          <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Checkout
          </h1>
          <p className="mt-2 text-foreground/60">
            {lines.length} product(s) ready — fill in your details to continue.
          </p>
        </Reveal>

        <CheckoutForm />
      </div>
    </div>
  );
}
