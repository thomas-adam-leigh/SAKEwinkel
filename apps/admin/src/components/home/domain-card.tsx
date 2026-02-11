import { AdminButton } from "@/components/admin/button";
import { AdminCard } from "@/components/admin/card";
import { storeDomain } from "@/data/home";

export function DomainCard() {
  return (
    <AdminCard className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="mb-1 text-[13px] font-[600] text-text-primary">
            Domain customized
          </h3>
          <p className="text-[13px] font-[450] text-text-secondary">
            {storeDomain}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="rounded-full bg-[var(--color-status-success-bg)] px-2 py-0.5 text-[11px] font-[550] text-[var(--color-status-success-text)]">
            Get $20
          </span>
          <AdminButton variant="secondary">Buy a domain</AdminButton>
        </div>
      </div>
    </AdminCard>
  );
}
