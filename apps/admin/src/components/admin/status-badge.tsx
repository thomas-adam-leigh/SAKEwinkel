export type StatusTone = "success" | "warning" | "neutral" | "subdued";

interface StatusBadgeProps {
  readonly tone: StatusTone;
  readonly children: React.ReactNode;
}

const toneStyles: Record<StatusTone, string> = {
  success:
    "bg-[var(--color-status-success-bg)] text-[var(--color-status-success-text)]",
  warning:
    "bg-[var(--color-status-warning-bg)] text-[var(--color-status-warning-text)]",
  neutral:
    "bg-[var(--color-status-neutral-bg)] text-[var(--color-status-neutral-text)]",
  subdued:
    "bg-[var(--color-status-subdued-bg)] text-[var(--color-status-subdued-text)]",
};

const dotStyles: Record<StatusTone, string> = {
  success: "bg-[var(--color-status-success-text)]",
  warning: "bg-[var(--color-status-warning-text)]",
  neutral: "bg-[var(--color-status-neutral-text)]",
  subdued: "bg-[var(--color-status-subdued-text)]",
};

export function StatusBadge({ tone, children }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-[2px] text-[11px] font-[550] leading-none ${toneStyles[tone]}`}
    >
      <span
        className={`size-[6px] shrink-0 rounded-full ${dotStyles[tone]}`}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
