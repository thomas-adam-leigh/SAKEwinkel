import { type InputHTMLAttributes } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface SpinButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  readonly value: number;
  readonly onChange: (value: number) => void;
  readonly min?: number;
  readonly max?: number;
  readonly step?: number;
}

export function SpinButton({ value, onChange, min = 0, max, step = 1, className = "", ...props }: SpinButtonProps) {
  return (
    <div className="flex items-center h-[32px] rounded-[8px] border border-border-input bg-bg-input focus-within:border-border-input-focus focus-within:ring-2 focus-within:ring-border-focus-ring">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className={`flex-1 bg-transparent border-none text-[13px] text-text-primary px-3 py-1.5 outline-none text-right w-[80px] ${className}`}
        {...props}
      />
      <div className="flex flex-col border-l border-border-input">
        <button
          type="button"
          onClick={() => onChange(max !== undefined ? Math.min(value + step, max) : value + step)}
          className="flex items-center justify-center h-[15px] px-1 hover:bg-bg-surface-hover"
          aria-label="Increment"
        >
          <ChevronUp className="size-3 text-text-secondary" />
        </button>
        <button
          type="button"
          onClick={() => onChange(Math.max(value - step, min))}
          className="flex items-center justify-center h-[15px] px-1 hover:bg-bg-surface-hover"
          aria-label="Decrement"
        >
          <ChevronDown className="size-3 text-text-secondary" />
        </button>
      </div>
    </div>
  );
}
