import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin/page-header";

export const Route = createFileRoute("/_auth/email-templates")({
  component: EmailTemplatesPage,
});

function EmailTemplatesPage() {
  return (
    <div>
      <PageHeader title="Email Templates" />
    </div>
  );
}
