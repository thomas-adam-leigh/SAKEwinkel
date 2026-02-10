import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/online-store/")({
  component: OnlineStorePage,
});

function OnlineStorePage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Online Store</h1>;
}
