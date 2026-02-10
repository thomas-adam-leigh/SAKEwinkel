import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/online-store/")({
  component: OnlineStorePage,
});

function OnlineStorePage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Online Store
    </h1>
  );
}
