import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/analytics/live")({
  component: LiveViewPage,
});

function LiveViewPage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Live View
    </h1>
  );
}
