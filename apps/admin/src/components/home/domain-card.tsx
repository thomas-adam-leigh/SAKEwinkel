import { AdminCard } from "../admin/card";
import { AdminButton } from "../admin/button";
import { storeDomain } from "../../data/home";

export function DomainCard() {
  return (
    <AdminCard className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3
            className="text-[13px] text-text-primary mb-1"
            style={{ fontWeight: 600 }}
          >
            Domain customized
          </h3>
          <p className="text-[13px] text-text-secondary" style={{ fontWeight: 450 }}>
            {storeDomain}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span
            className="text-[11px] text-[#047b5d] bg-[#e8f5e9] px-2 py-0.5 rounded-full"
            style={{ fontWeight: 550 }}
          >
            Get $20
          </span>
          <AdminButton variant="secondary">Buy a domain</AdminButton>
        </div>
      </div>
    </AdminCard>
  );
}
