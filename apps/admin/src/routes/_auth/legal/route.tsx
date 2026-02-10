import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/page-header";

export const Route = createFileRoute("/_auth/legal")({
  component: LegalPage,
});

function LegalPage() {
  return (
    <div>
      <PageHeader title="Legal" />
    </div>
  );
}
