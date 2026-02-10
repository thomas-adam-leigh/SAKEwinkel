import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/orders/$id")({
  component: OrderDetailPage,
});

function OrderDetailPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Order detail</h1>;
}
