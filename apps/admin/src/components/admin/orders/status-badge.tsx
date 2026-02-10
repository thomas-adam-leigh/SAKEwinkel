import type { FulfillmentStatus, PaymentStatus } from "@/data/orders";

type StatusBadgeProps =
  | { readonly variant: "payment"; readonly status: PaymentStatus }
  | { readonly variant: "fulfillment"; readonly status: FulfillmentStatus };

const colorMap: Record<string, { bg: string; text: string }> = {
  Paid: { bg: "#d4f3e5", text: "#014b40" },
  Fulfilled: { bg: "#d4f3e5", text: "#014b40" },
  Pending: { bg: "#ffedb3", text: "#5e4200" },
  "Partially paid": { bg: "#ffedb3", text: "#5e4200" },
  Unfulfilled: { bg: "#ffedb3", text: "#5e4200" },
  Refunded: { bg: "#f1f1f1", text: "#616161" },
};

export function StatusBadge(props: StatusBadgeProps) {
  const colors = colorMap[props.status] ?? { bg: "#f1f1f1", text: "#616161" };

  return (
    <span
      className="inline-block rounded-full text-[11px] leading-none"
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        fontWeight: 550,
        padding: "2px 8px",
      }}
    >
      {props.status}
    </span>
  );
}
