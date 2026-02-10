interface AdminCardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function AdminCard({ children, className = "" }: AdminCardProps) {
  return (
    <div
      className={`bg-bg-surface rounded-[12px] shadow-[var(--shadow-polaris-100)] ${className}`}
    >
      {children}
    </div>
  );
}
