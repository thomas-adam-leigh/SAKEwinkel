import { X } from "lucide-react";
import { AdminCard } from "../admin/card";

interface TrialBannerProps {
  readonly onDismiss: () => void;
}

export function TrialBanner({ onDismiss }: TrialBannerProps) {
  return (
    <AdminCard className="px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-text-primary" style={{ fontWeight: 450 }}>
            Get 3 months for $1/month
          </span>
          <a
            href="#"
            className="text-[13px] text-text-primary underline"
            style={{ fontWeight: 550 }}
            onClick={(e) => e.preventDefault()}
          >
            Select a plan
          </a>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          className="flex items-center justify-center w-[28px] h-[28px] rounded-[8px] hover:bg-[rgba(0,0,0,0.05)] transition-colors"
          aria-label="Dismiss trial banner"
        >
          <X size={16} className="text-icon-default" />
        </button>
      </div>
    </AdminCard>
  );
}
