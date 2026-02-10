import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/marketing/")({
  component: MarketingPage,
});

function MarketingPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Marketing</h1>;
}
