"use client";

import { QrCode, Landmark, Wallet } from "lucide-react";
import { PaymentMethod } from "@/lib/data/payment-methods";
import { cn } from "@/lib/utils";

const typeIcon = { qris: QrCode, bank: Landmark, ewallet: Wallet };

export function PaymentMethodSelector({
  methods,
  selectedId,
  onSelect,
}: {
  methods: PaymentMethod[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {methods.map((method) => {
        const Icon = typeIcon[method.type];
        const active = selectedId === method.id;
        return (
          <button
            key={method.id}
            type="button"
            onClick={() => onSelect(method.id)}
            className={cn(
              "flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition-colors",
              active ? "border-brown bg-cream" : "border-brown/10 bg-white hover:bg-cream/50"
            )}
          >
            <Icon size={22} className={active ? "text-brown" : "text-foreground/50"} />
            <span className="text-xs font-semibold text-foreground">{method.name}</span>
          </button>
        );
      })}
    </div>
  );
}
