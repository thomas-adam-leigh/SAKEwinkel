import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/customers/segments")({
  component: SegmentsPage,
});

function SegmentsPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Segments</h1>;
}
