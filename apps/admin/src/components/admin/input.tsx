import { type InputHTMLAttributes } from "react";

interface AdminInputProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly wrapperClassName?: string;
}

export function AdminInput({
  className = "",
  wrapperClassName = "",
  ...props
}: AdminInputProps) {
  return (
    <div
      className={`flex items-center h-[32px] rounded-[8px] border border-border-input bg-bg-input focus-within:border-border-input-focus focus-within:ring-2 focus-within:ring-border-focus-ring ${wrapperClassName}`}
    >
      <input
        className={`flex-1 bg-transparent border-none text-[13px] text-text-primary px-3 py-1.5 outline-none placeholder:text-text-subdued ${className}`}
        {...props}
      />
    </div>
  );
}
