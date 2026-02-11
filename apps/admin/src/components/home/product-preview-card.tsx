import { Check } from "lucide-react";
import { AdminCard } from "@/components/admin/card";
import { product } from "@/data/home";

export function ProductPreviewCard() {
  return (
    <AdminCard className="p-4">
      <div className="flex flex-col items-center gap-3">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="size-[120px] rounded-[8px] object-cover"
        />
        <div className="text-center">
          <p className="text-[13px] font-[450] text-text-primary">
            {product.name}
          </p>
          <p className="text-[13px] font-[450] text-text-primary">
            {product.price}
          </p>
          <div className="mt-1 flex items-center justify-center gap-1">
            <Check size={14} className="text-[var(--color-status-success-text)]" />
            <span className="text-[13px] font-[450] text-[var(--color-status-success-text)]">
              Product added
            </span>
          </div>
        </div>
        <button
          type="button"
          className="flex h-[32px] w-full items-center justify-center rounded-[8px] bg-white text-[13px] font-[450] text-text-primary shadow-[var(--shadow-polaris-btn-secondary)]"
        >
          Find products
        </button>
      </div>
    </AdminCard>
  );
}
