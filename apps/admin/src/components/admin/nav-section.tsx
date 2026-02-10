interface NavSectionProps {
  readonly label: string;
  readonly children: React.ReactNode;
}

export function NavSection({ label, children }: NavSectionProps) {
  return (
    <div className="mt-2">
      <div
        className="flex h-[28px] items-center text-[12px] uppercase"
        style={{
          padding: "4px 3px 4px 8px",
          fontWeight: 600,
          color: "#616161",
          letterSpacing: "0.5px",
        }}
      >
        {label}
      </div>
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  );
}
