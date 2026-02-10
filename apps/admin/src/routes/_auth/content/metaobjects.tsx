import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/content/metaobjects")({
  component: MetaobjectsPage,
});

function MetaobjectsPage() {
  return (
    <h1
      className="text-text-primary text-[18px] leading-[24px]"
      style={{ fontWeight: 600 }}
    >
      Metaobjects
    </h1>
  );
}
