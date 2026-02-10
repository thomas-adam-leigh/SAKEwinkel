interface EmailSubscriptionBadgeProps {
  readonly status: "subscribed" | "not_subscribed";
}

const variants = {
  subscribed: { label: "Subscribed", bg: "#d4f3e5", color: "#014b40" },
  not_subscribed: { label: "Not subscribed", bg: "#f1f1f1", color: "#616161" },
} as const;

export function EmailSubscriptionBadge({ status }: EmailSubscriptionBadgeProps) {
  const { label, bg, color } = variants[status];
  return (
    <span
      className="inline-flex items-center text-[12px] px-2 py-[2px] rounded-full"
      style={{ fontWeight: 550, backgroundColor: bg, color }}
    >
      {label}
    </span>
  );
}
