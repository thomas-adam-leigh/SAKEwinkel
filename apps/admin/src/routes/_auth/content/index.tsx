import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/content/")({
  component: ContentPage,
});

function ContentPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Content</h1>;
}
