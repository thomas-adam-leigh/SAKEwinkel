import { AdminCard } from "../admin/card";

export function ShippingRatesCard() {
  return (
    <AdminCard className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3
            className="text-[13px] text-text-primary mb-1"
            style={{ fontWeight: 600 }}
          >
            Review your shipping rates
          </h3>
          <span className="text-[13px] text-text-secondary" style={{ fontWeight: 450 }}>
            Domestic
          </span>
        </div>
        <a
          href="#"
          className="text-[13px] text-text-primary hover:underline shrink-0"
          style={{ fontWeight: 550 }}
          onClick={(e) => e.preventDefault()}
        >
          Review
        </a>
      </div>
    </AdminCard>
  );
}
