import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/discounts/")({
  component: DiscountsPage,
});

function DiscountsPage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Discounts
    </h1>
  );
}
