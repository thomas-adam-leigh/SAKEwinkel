import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/content/files")({
  component: FilesPage,
});

function FilesPage() {
  return <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Files</h1>;
}
