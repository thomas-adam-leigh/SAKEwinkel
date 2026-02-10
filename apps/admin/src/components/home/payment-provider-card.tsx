import { AdminCard } from "../admin/card";

export function PaymentProviderCard() {
  return (
    <AdminCard className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3
            className="text-[13px] text-text-primary mb-1"
            style={{ fontWeight: 600 }}
          >
            Set up a payment provider
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[11px] text-text-secondary px-1.5 py-0.5 bg-[#f7f7f7] rounded" style={{ fontWeight: 550 }}>
              PayPal
            </span>
            <span className="text-[11px] text-text-secondary px-1.5 py-0.5 bg-[#f7f7f7] rounded" style={{ fontWeight: 550 }}>
              Visa
            </span>
            <span className="text-[11px] text-text-secondary px-1.5 py-0.5 bg-[#f7f7f7] rounded" style={{ fontWeight: 550 }}>
              Mastercard
            </span>
          </div>
        </div>
        <a
          href="#"
          className="text-[13px] text-text-primary hover:underline shrink-0"
          style={{ fontWeight: 550 }}
          onClick={(e) => e.preventDefault()}
        >
          Activate
        </a>
      </div>
    </AdminCard>
  );
}
