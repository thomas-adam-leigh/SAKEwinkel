import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/orders/drafts")({
  component: DraftsPage,
});

function DraftsPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Drafts</h1>;
}
