import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/new")({
  component: NewProductPage,
});

function NewProductPage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Add product
    </h1>
  );
}
