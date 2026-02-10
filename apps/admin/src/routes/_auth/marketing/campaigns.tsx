import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/marketing/campaigns")({
  component: CampaignsPage,
});

function CampaignsPage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Campaigns
    </h1>
  );
}
