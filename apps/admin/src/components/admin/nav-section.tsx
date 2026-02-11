interface NavSectionProps {
  readonly label: string;
  readonly children: React.ReactNode;
}

export function NavSection({ label, children }: NavSectionProps) {
  return (
    <div className="mt-2">
      <div className="flex h-[28px] items-center px-2 text-[12px] font-[600] uppercase tracking-[0.5px] text-text-secondary">
        {label}
      </div>
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  );
}
