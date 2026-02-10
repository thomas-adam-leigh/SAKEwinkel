import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/purchase-orders")({
  component: PurchaseOrdersPage,
});

function PurchaseOrdersPage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Purchase orders
    </h1>
  );
}
