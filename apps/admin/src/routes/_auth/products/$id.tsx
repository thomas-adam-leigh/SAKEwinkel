import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/$id")({
  component: ProductDetailPage,
});

function ProductDetailPage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Product detail
    </h1>
  );
}
