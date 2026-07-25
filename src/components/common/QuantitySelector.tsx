"use client";

import { Minus, Plus } from "lucide-react";

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-brown/15 bg-white">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className="flex h-11 w-11 items-center justify-center rounded-full text-brown transition-colors hover:bg-cream disabled:opacity-30"
      >
        <Minus size={16} />
      </button>
      <span className="w-10 text-center text-sm font-semibold text-foreground">{value}</span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label="Increase quantity"
        className="flex h-11 w-11 items-center justify-center rounded-full text-brown transition-colors hover:bg-cream disabled:opacity-30"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
