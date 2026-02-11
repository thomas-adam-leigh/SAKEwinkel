import { StatusBadge, type StatusTone } from "@/components/admin/status-badge";

interface EmailSubscriptionBadgeProps {
  readonly status: "subscribed" | "not_subscribed";
}

const toneMap: Record<string, StatusTone> = {
  subscribed: "success",
  not_subscribed: "subdued",
};

const labelMap: Record<string, string> = {
  subscribed: "Subscribed",
  not_subscribed: "Not subscribed",
};

export function EmailSubscriptionBadge({ status }: EmailSubscriptionBadgeProps) {
  return (
    <StatusBadge tone={toneMap[status] ?? "subdued"}>
      {labelMap[status] ?? status}
    </StatusBadge>
  );
}
