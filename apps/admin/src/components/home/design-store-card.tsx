import { AdminButton } from "@/components/admin/button";
import { AdminCard } from "@/components/admin/card";
import { AdminInput } from "@/components/admin/input";

export function DesignStoreCard() {
  return (
    <AdminCard className="p-4">
      <h3 className="mb-1 text-[13px] font-[600] text-text-primary">
        Design your store
      </h3>
      <p className="mb-3 text-[13px] font-[450] text-text-secondary">
        Add your business description to help generate a store design.
      </p>
      <AdminInput
        placeholder="Describe your business..."
        wrapperClassName="mb-3"
      />
      <div className="flex items-center gap-3">
        <AdminButton variant="primary">Generate</AdminButton>
        <a
          href="#"
          className="text-[13px] font-[450] text-text-primary hover:underline"
          onClick={(e) => e.preventDefault()}
        >
          browse pre-designed themes
        </a>
      </div>
    </AdminCard>
  );
}
