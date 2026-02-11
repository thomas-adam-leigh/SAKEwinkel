import { AdminCard } from "@/components/admin/card";

export function ShippingRatesCard() {
  return (
    <AdminCard className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="mb-1 text-[13px] font-[600] text-text-primary">
            Review your shipping rates
          </h3>
          <span className="text-[13px] font-[450] text-text-secondary">
            Domestic
          </span>
        </div>
        <a
          href="#"
          className="shrink-0 text-[13px] font-[550] text-text-primary hover:underline"
          onClick={(e) => e.preventDefault()}
        >
          Review
        </a>
      </div>
    </AdminCard>
  );
}
