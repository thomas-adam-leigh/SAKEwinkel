import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/analytics/live")({
  component: LiveViewPage,
});

function LiveViewPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Live View</h1>;
}
