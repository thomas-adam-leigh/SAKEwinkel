import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/customers/new")({
  component: NewCustomerPage,
});

function NewCustomerPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Add customer</h1>;
}
