import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/content/metaobjects")({
  component: MetaobjectsPage,
});

function MetaobjectsPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Metaobjects</h1>;
}
