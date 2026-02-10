import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/transfers")({
  component: TransfersPage,
});

function TransfersPage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Transfers
    </h1>
  );
}
