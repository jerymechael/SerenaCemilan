import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type BadgeVariant = "brown" | "caramel" | "success" | "cream" | "outline";

const styles: Record<BadgeVariant, string> = {
  brown: "bg-brown text-white",
  caramel: "bg-caramel text-white",
  success: "bg-success/10 text-success",
  cream: "bg-cream text-brown",
  outline: "border border-brown/30 text-brown",
};

export function Badge({
  children,
  variant = "cream",
  className,
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
