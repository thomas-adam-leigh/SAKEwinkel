import { X } from "lucide-react";
import { AdminCard } from "@/components/admin/card";

interface TrialBannerProps {
  readonly onDismiss: () => void;
}

export function TrialBanner({ onDismiss }: TrialBannerProps) {
  return (
    <AdminCard className="px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-[450] text-text-primary">
            Get 3 months for $1/month
          </span>
          <a
            href="#"
            className="text-[13px] font-[550] text-text-primary underline"
            onClick={(e) => e.preventDefault()}
          >
            Select a plan
          </a>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          className="flex size-[28px] items-center justify-center rounded-[8px] transition-colors hover:bg-bg-nav-hover"
          aria-label="Dismiss trial banner"
        >
          <X size={16} className="text-icon-default" />
        </button>
      </div>
    </AdminCard>
  );
}
