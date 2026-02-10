import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/analytics/reports")({
  component: ReportsPage,
});

function ReportsPage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Reports
    </h1>
  );
}
