import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/collections")({
  component: CollectionsPage,
});

function CollectionsPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Collections</h1>;
}
