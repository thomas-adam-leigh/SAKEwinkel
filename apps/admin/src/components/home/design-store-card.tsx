import { AdminCard } from "../admin/card";
import { AdminButton } from "../admin/button";
import { AdminInput } from "../admin/input";

export function DesignStoreCard() {
  return (
    <AdminCard className="p-4">
      <h3
        className="text-[13px] text-text-primary mb-1"
        style={{ fontWeight: 600 }}
      >
        Design your store
      </h3>
      <p className="text-[13px] text-text-secondary mb-3" style={{ fontWeight: 450 }}>
        Add your business description to help generate a store design.
      </p>
      <AdminInput
        placeholder="Describe your business..."
        className="mb-3"
        wrapperClassName="mb-3"
      />
      <div className="flex items-center gap-3">
        <AdminButton variant="primary">Generate</AdminButton>
        <a
          href="#"
          className="text-[13px] text-text-primary hover:underline"
          style={{ fontWeight: 450 }}
          onClick={(e) => e.preventDefault()}
        >
          browse pre-designed themes
        </a>
      </div>
    </AdminCard>
  );
}
