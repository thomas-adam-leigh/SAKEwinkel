import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/purchase-orders")({
  component: PurchaseOrdersPage,
});

function PurchaseOrdersPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Purchase orders</h1>;
}
