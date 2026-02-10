import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/orders/abandoned")({
  component: AbandonedPage,
});

function AbandonedPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Abandoned checkouts</h1>;
}
