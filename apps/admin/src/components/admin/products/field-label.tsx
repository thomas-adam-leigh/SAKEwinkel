interface FieldLabelProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly htmlFor?: string;
}

export function FieldLabel({ children, className = "", htmlFor }: FieldLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-[13px] text-text-primary leading-[20px] mb-1 ${className}`}
      style={{ fontWeight: 450 }}
    >
      {children}
    </label>
  );
}
