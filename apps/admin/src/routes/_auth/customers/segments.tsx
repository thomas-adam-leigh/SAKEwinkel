import { createFileRoute } from "@tanstack/react-router";
import { AdminCard } from "../../../components/admin/card";
import { PageHeader } from "../../../components/admin/page-header";

export const Route = createFileRoute("/_auth/customers/segments")({
  component: SegmentsPage,
});

function SegmentsPage() {
  return (
    <>
      <PageHeader title="Customer segments" />
      <AdminCard className="p-5">
        <h2 className="text-[14px] text-text-primary leading-[20px]" style={{ fontWeight: 600 }}>What are segments?</h2>
        <p className="text-[13px] text-text-primary leading-[20px] mt-1" style={{ fontWeight: 450 }}>
          Segments let you group customers based on filters like location, purchase history, and email subscription status. Use segments to target specific customer groups for marketing campaigns and promotions.
        </p>
      </AdminCard>
    </>
  );
}
