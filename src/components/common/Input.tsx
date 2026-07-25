import { cn } from "@/lib/utils";
import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, forwardRef } from "react";

interface FieldWrapperProps {
  label?: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

function FieldWrapper({ label, error, hint, children }: FieldWrapperProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-foreground/80">
          {label}
        </label>
      )}
      {children}
      {hint && !error && <p className="mt-1 text-xs text-foreground/50">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

const fieldBase =
  "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 transition-colors focus:outline-none focus:ring-2 focus:ring-caramel/40";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string; hint?: string }
>(({ label, error, hint, className, ...props }, ref) => (
  <FieldWrapper label={label} error={error} hint={hint}>
    <input
      ref={ref}
      className={cn(fieldBase, error ? "border-red-400" : "border-brown/15 focus:border-caramel", className)}
      {...props}
    />
  </FieldWrapper>
));
Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; error?: string; hint?: string }
>(({ label, error, hint, className, ...props }, ref) => (
  <FieldWrapper label={label} error={error} hint={hint}>
    <textarea
      ref={ref}
      className={cn(fieldBase, "min-h-[110px] resize-none", error ? "border-red-400" : "border-brown/15 focus:border-caramel", className)}
      {...props}
    />
  </FieldWrapper>
));
Textarea.displayName = "Textarea";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement> & { label?: string; error?: string; hint?: string }
>(({ label, error, hint, className, children, ...props }, ref) => (
  <FieldWrapper label={label} error={error} hint={hint}>
    <select
      ref={ref}
      className={cn(fieldBase, "appearance-none bg-white", error ? "border-red-400" : "border-brown/15 focus:border-caramel", className)}
      {...props}
    >
      {children}
    </select>
  </FieldWrapper>
));
Select.displayName = "Select";
