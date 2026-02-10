import { Check } from "lucide-react";
import { AdminCard } from "../admin/card";
import { product } from "../../data/home";

export function ProductPreviewCard() {
  return (
    <AdminCard className="p-4">
      <div className="flex flex-col items-center gap-3">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-[120px] h-[120px] rounded-[8px] object-cover"
        />
        <div className="text-center">
          <p className="text-[13px] text-text-primary" style={{ fontWeight: 450 }}>
            {product.name}
          </p>
          <p className="text-[13px] text-text-primary" style={{ fontWeight: 450 }}>
            {product.price}
          </p>
          <div className="flex items-center justify-center gap-1 mt-1">
            <Check size={14} className="text-[#047b5d]" />
            <span className="text-[13px] text-[#047b5d]" style={{ fontWeight: 450 }}>
              Product added
            </span>
          </div>
        </div>
        <button
          type="button"
          className="w-full flex items-center justify-center h-[32px] rounded-[8px] bg-white text-text-primary text-[13px] shadow-[var(--shadow-polaris-btn-secondary)]"
          style={{ fontWeight: 450 }}
        >
          Find products
        </button>
      </div>
    </AdminCard>
  );
}
