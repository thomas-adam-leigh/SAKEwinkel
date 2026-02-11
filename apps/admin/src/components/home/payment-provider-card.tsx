import { AdminCard } from "@/components/admin/card";

export function PaymentProviderCard() {
  return (
    <AdminCard className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="mb-1 text-[13px] font-[600] text-text-primary">
            Set up a payment provider
          </h3>
          <div className="mt-2 flex items-center gap-2">
            {["PayPal", "Visa", "Mastercard"].map((name) => (
              <span
                key={name}
                className="rounded bg-bg-surface-secondary px-1.5 py-0.5 text-[11px] font-[550] text-text-secondary"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
        <a
          href="#"
          className="shrink-0 text-[13px] font-[550] text-text-primary hover:underline"
          onClick={(e) => e.preventDefault()}
        >
          Activate
        </a>
      </div>
    </AdminCard>
  );
}
