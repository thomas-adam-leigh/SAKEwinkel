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
      className={`border-border-input bg-bg-input focus-within:border-border-input-focus focus-within:ring-border-focus-ring flex h-[32px] items-center rounded-[8px] border focus-within:ring-2 ${wrapperClassName}`}
    >
      <input
        className={`text-text-primary placeholder:text-text-subdued flex-1 border-none bg-transparent px-3 py-1.5 text-[13px] outline-none ${className}`}
        {...props}
      />
    </div>
  );
}
