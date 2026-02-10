interface CardSectionHeadingProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly action?: React.ReactNode;
}

export function CardSectionHeading({ children, className = "", action }: CardSectionHeadingProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <h2
        className="text-[13px] text-text-primary leading-[20px]"
        style={{ fontWeight: 600 }}
      >
        {children}
      </h2>
      {action}
    </div>
  );
}
