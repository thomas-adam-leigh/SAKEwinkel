import { Play } from "lucide-react";
import { AdminCard } from "../admin/card";
import { AdminButton } from "../admin/button";

export function EducationalCard() {
  return (
    <AdminCard className="p-4">
      <h2
        className="text-[16px] text-text-primary mb-2"
        style={{ fontWeight: 600 }}
      >
        Learn the basics of dropshipping
      </h2>
      <p className="text-[13px] text-text-secondary mb-3" style={{ fontWeight: 450 }}>
        Get started with dropshipping by learning the fundamentals of how to find products, set up your store, and market to customers.
      </p>
      <div className="flex items-center gap-3">
        <AdminButton variant="secondary">
          <Play size={14} className="mr-1.5" />
          Watch video
        </AdminButton>
        <a
          href="#"
          className="text-[13px] text-text-primary hover:underline"
          style={{ fontWeight: 450 }}
          onClick={(e) => e.preventDefault()}
        >
          Learn more
        </a>
      </div>
    </AdminCard>
  );
}
