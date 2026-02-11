import { Play } from "lucide-react";
import { AdminButton } from "@/components/admin/button";
import { AdminCard } from "@/components/admin/card";

export function EducationalCard() {
  return (
    <AdminCard className="p-4">
      <h2 className="mb-2 text-[16px] font-[600] text-text-primary">
        Learn the basics of dropshipping
      </h2>
      <p className="mb-3 text-[13px] font-[450] text-text-secondary">
        Get started with dropshipping by learning the fundamentals of how to
        find products, set up your store, and market to customers.
      </p>
      <div className="flex items-center gap-3">
        <AdminButton variant="secondary">
          <Play size={14} className="mr-1.5" />
          Watch video
        </AdminButton>
        <a
          href="#"
          className="text-[13px] font-[450] text-text-primary hover:underline"
          onClick={(e) => e.preventDefault()}
        >
          Learn more
        </a>
      </div>
    </AdminCard>
  );
}
