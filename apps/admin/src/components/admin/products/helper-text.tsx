interface HelperTextProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function HelperText({ children, className = "" }: HelperTextProps) {
  return (
    <p
      className={`text-[12px] text-text-secondary leading-[16px] mt-1 ${className}`}
      style={{ fontWeight: 450 }}
    >
      {children}
    </p>
  );
}
