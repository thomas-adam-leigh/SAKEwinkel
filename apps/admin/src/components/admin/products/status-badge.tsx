const statusColors: Record<string, { bg: string; text: string }> = {
  Active: { bg: "#d4f3e5", text: "#014b40" },
  Draft: { bg: "#e3e3e3", text: "#4a4a4a" },
  Archived: { bg: "#f1f1f1", text: "#616161" },
};

interface StatusBadgeProps {
  readonly status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const colors = statusColors[status] ?? statusColors.Draft;

  return (
    <span
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        fontSize: 12,
        fontWeight: 550,
        padding: "2px 8px",
        borderRadius: 9999,
        whiteSpace: "nowrap",
      }}
    >
      {status}
    </span>
  );
}
