import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/marketing/automations")({
  component: AutomationsPage,
});

function AutomationsPage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Automations
    </h1>
  );
}
