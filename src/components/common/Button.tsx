import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white" | "glass";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brown text-white hover:bg-brown-dark shadow-sm hover:shadow-md",
  secondary:
    "bg-caramel text-white hover:brightness-95 shadow-sm hover:shadow-md",
  outline:
    "border-2 border-brown text-brown hover:bg-brown hover:text-white",
  ghost: "text-brown hover:bg-cream",
  white: "bg-white text-brown hover:bg-cream shadow-sm",
  glass:
    "bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 hover:border-white",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-[15px] px-6 py-3 gap-2",
  lg: "text-base px-8 py-4 gap-2",
};

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

interface ButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface LinkButtonProps extends BaseProps {
  href: string;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  className,
  children,
  href,
  ...props
}: ButtonProps | LinkButtonProps) {
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}