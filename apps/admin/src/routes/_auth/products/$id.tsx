import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/$id")({
  component: ProductDetailPage,
});

function ProductDetailPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Product detail</h1>;
}
