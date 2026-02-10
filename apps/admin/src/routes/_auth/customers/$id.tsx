import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/customers/$id")({
  component: CustomerDetailPage,
});

function CustomerDetailPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Customer detail</h1>;
}
