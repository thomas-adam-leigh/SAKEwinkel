import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/new")({
  component: NewProductPage,
});

function NewProductPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Add product</h1>;
}
