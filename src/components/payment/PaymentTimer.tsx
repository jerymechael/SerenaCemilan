"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function PaymentTimer({ minutes = 15 }: { minutes?: number }) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mm = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, "0");
  const ss = (secondsLeft % 60).toString().padStart(2, "0");
  const expired = secondsLeft === 0;

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium",
        expired ? "bg-red-50 text-red-600" : "bg-cream text-brown"
      )}
    >
      <Clock size={16} />
      {expired ? (
        "Payment window expired — please refresh to try again"
      ) : (
        <>
          Complete payment within{" "}
          <span className="font-display text-base font-semibold">
            {mm}:{ss}
          </span>
        </>
      )}
    </div>
  );
}
