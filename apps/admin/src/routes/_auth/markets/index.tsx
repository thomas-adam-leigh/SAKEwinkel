import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/markets/")({
  component: MarketsPage,
});

function MarketsPage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Markets
    </h1>
  );
}
