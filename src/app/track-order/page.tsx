"use client";

import { useState } from "react";
import { Search, CheckCircle2, Circle, Truck } from "lucide-react";
import { getLastOrder } from "@/lib/orderStore";
import { OrderRecord } from "@/lib/types";
import { formatIDR, cn } from "@/lib/utils";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";

const steps = [
  "Order Received",
  "Payment Verified",
  "Processing",
  "Packaging",
  "Shipping",
  "Delivered",
];

function currentStepIndex(order: OrderRecord): number {
  if (order.paymentStatus === "paid") return 3;
  if (order.paymentStatus === "verifying") return 1;
  return 0;
}

export default function TrackOrderPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<OrderRecord | null | undefined>(undefined);

  const handleSearch = () => {
    const lastOrder = getLastOrder();
    if (lastOrder && lastOrder.orderNumber.toLowerCase() === input.trim().toLowerCase()) {
      setResult(lastOrder);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="bg-background py-14 lg:py-20">
      <div className="container-app max-w-2xl">
        <Reveal className="text-center">
          <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Track Your Order
          </h1>
          <p className="mt-2 text-foreground/60">
            Enter your order number to see its current status.
          </p>
        </Reveal>

        <div className="mt-8 flex gap-2">
          <div className="relative w-full">
            <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="e.g. SRN-260724-1234"
              className="w-full rounded-full border border-brown/15 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-caramel focus:ring-2 focus:ring-caramel/30"
            />
          </div>
          <Button onClick={handleSearch}>Track</Button>
        </div>

        {result === null && (
          <p className="mt-6 text-center text-sm text-red-500">
            We couldn&apos;t find an order with that number on this device.
          </p>
        )}

        {result && (
          <div className="mt-10 rounded-3xl border border-brown/10 bg-white p-7 card-shadow">
            <div className="flex items-center justify-between">
              <p className="font-display text-lg font-semibold text-brown">{result.orderNumber}</p>
              <p className="text-sm text-foreground/50">{formatIDR(result.total)}</p>
            </div>

            <div className="mt-8 space-y-0">
              {steps.map((step, i) => {
                const active = i <= currentStepIndex(result);
                return (
                  <div key={step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      {active ? (
                        <CheckCircle2 size={22} className="text-success" />
                      ) : (
                        <Circle size={22} className="text-brown/20" />
                      )}
                      {i < steps.length - 1 && (
                        <div className={cn("my-1 h-8 w-px", active ? "bg-success" : "bg-brown/15")} />
                      )}
                    </div>
                    <p
                      className={cn(
                        "-mt-0.5 text-sm font-medium",
                        active ? "text-foreground" : "text-foreground/40"
                      )}
                    >
                      {step}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-cream p-4">
              <Truck size={20} className="text-brown" />
              <div>
                <p className="text-xs text-foreground/50">Shipping to</p>
                <p className="text-sm font-medium text-foreground">
                  {result.customer.city}, {result.customer.province}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
