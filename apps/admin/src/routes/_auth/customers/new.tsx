import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/customers/new")({
  component: NewCustomerPage,
});

function NewCustomerPage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Add customer
    </h1>
  );
}
