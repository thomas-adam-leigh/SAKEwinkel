import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/page-header";

export const Route = createFileRoute("/_auth/suppliers")({
  component: SuppliersPage,
});

function SuppliersPage() {
  return (
    <div>
      <PageHeader title="Suppliers" />
    </div>
  );
}
