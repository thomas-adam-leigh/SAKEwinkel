import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/settings/")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Settings
    </h1>
  );
}
