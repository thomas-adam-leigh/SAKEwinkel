import { type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface AdminSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  readonly options: { value: string; label: string }[];
}

export function AdminSelect({ options, className = "", ...props }: AdminSelectProps) {
  return (
    <div className="relative">
      <select
        className={`w-full h-[32px] rounded-[8px] border border-border-input bg-bg-input text-[13px] text-text-primary px-3 py-1.5 pr-8 appearance-none outline-none focus:border-border-input-focus focus:ring-2 focus:ring-border-focus-ring ${className}`}
        style={{ fontWeight: 450 }}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-text-secondary pointer-events-none" />
    </div>
  );
}
