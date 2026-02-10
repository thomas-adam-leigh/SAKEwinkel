import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/inventory")({
  component: InventoryPage,
});

function InventoryPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Inventory</h1>;
}
