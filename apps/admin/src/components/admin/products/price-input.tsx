import { type InputHTMLAttributes } from "react";

interface PriceInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  readonly prefix?: string;
}

export function PriceInput({ prefix = "R ", className = "", ...props }: PriceInputProps) {
  return (
    <div className="flex items-center h-[32px] rounded-[8px] border border-border-input bg-bg-input focus-within:border-border-input-focus focus-within:ring-2 focus-within:ring-border-focus-ring">
      <span
        className="text-[13px] text-text-primary pl-3 select-none"
        style={{ fontWeight: 450 }}
      >
        {prefix}
      </span>
      <input
        type="number"
        className={`flex-1 bg-transparent border-none text-[13px] text-text-primary pr-3 py-1.5 outline-none placeholder:text-text-subdued ${className}`}
        step="0.01"
        min="0"
        {...props}
      />
    </div>
  );
}
