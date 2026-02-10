import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/marketing/campaigns")({
  component: CampaignsPage,
});

function CampaignsPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Campaigns</h1>;
}
