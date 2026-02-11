import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/page-header";

export const Route = createFileRoute("/_auth/customers/$customerId")({
  component: CustomerDetailPage,
});

function CustomerDetailPage() {
  const { customerId } = Route.useParams();

  return (
    <div>
      <PageHeader title={`Customer ${customerId}`} />
    </div>
  );
}
