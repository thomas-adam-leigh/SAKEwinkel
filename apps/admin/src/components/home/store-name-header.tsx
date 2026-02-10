import { Pencil } from "lucide-react";
import { storeName } from "../../data/home";

export function StoreNameHeader() {
  return (
    <div className="flex items-center gap-2">
      <h1
        className="text-[18px] text-text-primary leading-[24px]"
        style={{ fontWeight: 600 }}
      >
        {storeName}
      </h1>
      <button
        type="button"
        className="flex items-center justify-center w-[28px] h-[28px] rounded-[8px] hover:bg-[rgba(0,0,0,0.05)] transition-colors"
        aria-label="Edit store name"
      >
        <Pencil size={14} className="text-icon-default" />
      </button>
    </div>
  );
}
