import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost";

interface AdminButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-bg-primary text-text-on-dark shadow-[var(--shadow-polaris-btn-primary)] hover:bg-bg-primary-hover h-[28px] px-3 rounded-[8px]",
  secondary:
    "bg-bg-secondary-btn text-text-primary shadow-[var(--shadow-polaris-btn-secondary)] h-[28px] px-3 rounded-[8px]",
  tertiary:
    "bg-bg-tertiary text-text-primary shadow-none h-[28px] px-3 rounded-[8px]",
  ghost:
    "bg-transparent text-text-primary text-[12px] font-[550] p-0 border-none shadow-none hover:underline",
};

export function AdminButton({
  variant = "primary",
  className = "",
  ...props
}: AdminButtonProps) {
  const isGhost = variant === "ghost";
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center transition-colors ${
        isGhost ? "" : "text-[13px]"
      } ${variantStyles[variant]} ${className}`}
      style={{ fontWeight: isGhost ? 550 : 450 }}
      {...props}
    />
  );
}
