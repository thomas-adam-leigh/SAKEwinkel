import { AdminButton } from "../button";
import { HelperText } from "./helper-text";

export function MediaDropZone() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 p-4 rounded-[8px] text-center"
      style={{ border: "1px dashed #c0c0c0", backgroundColor: "#f7f7f7" }}
    >
      <div className="flex items-center gap-2">
        <AdminButton variant="secondary">Upload new</AdminButton>
        <AdminButton variant="secondary">Select existing</AdminButton>
      </div>
      <HelperText>Accepts images, videos, or 3D models</HelperText>
    </div>
  );
}
