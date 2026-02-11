import { StatusBadge, type StatusTone } from "@/components/admin/status-badge";

const statusTone: Record<string, StatusTone> = {
  Active: "success",
  Draft: "neutral",
  Archived: "subdued",
};

interface ProductStatusBadgeProps {
  readonly status: string;
}

export function ProductStatusBadge({ status }: ProductStatusBadgeProps) {
  return (
    <StatusBadge tone={statusTone[status] ?? "subdued"}>{status}</StatusBadge>
  );
}
