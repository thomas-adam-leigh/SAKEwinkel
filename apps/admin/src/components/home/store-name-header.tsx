import { Pencil } from "lucide-react";
import { storeName } from "@/data/home";

export function StoreNameHeader() {
  return (
    <div className="flex items-center gap-2">
      <h1 className="text-[18px] font-[600] leading-[24px] text-text-primary">
        {storeName}
      </h1>
      <button
        type="button"
        className="flex size-[28px] items-center justify-center rounded-[8px] transition-colors hover:bg-bg-nav-hover"
        aria-label="Edit store name"
      >
        <Pencil size={14} className="text-icon-default" />
      </button>
    </div>
  );
}
