import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/page-header";

export const Route = createFileRoute("/_auth/suppliers/new")({
  component: AddSupplierPage,
});

function AddSupplierPage() {
  return (
    <div>
      <PageHeader title="Add supplier" />
    </div>
  );
}
