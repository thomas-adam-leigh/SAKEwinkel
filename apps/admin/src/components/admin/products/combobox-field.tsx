import { type InputHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface ComboboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly icon?: React.ReactNode;
}

export function ComboboxField({ className = "", icon, ...props }: ComboboxFieldProps) {
  return (
    <div className="relative flex items-center h-[32px] rounded-[8px] border border-border-input bg-bg-input focus-within:border-border-input-focus focus-within:ring-2 focus-within:ring-border-focus-ring">
      {icon && <span className="pl-3 text-text-secondary">{icon}</span>}
      <input
        className={`flex-1 bg-transparent border-none text-[13px] text-text-primary px-3 py-1.5 outline-none placeholder:text-text-subdued ${icon ? "pl-1" : ""} ${className}`}
        {...props}
      />
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-text-secondary pointer-events-none" />
    </div>
  );
}
