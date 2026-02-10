import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/products/gift-cards")({
  component: GiftCardsPage,
});

function GiftCardsPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Gift cards</h1>;
}
