import { X } from "lucide-react";

interface ChannelPillProps {
  readonly label: string;
  readonly onRemove: () => void;
}

export function ChannelPill({ label, onRemove }: ChannelPillProps) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-1 rounded-[8px] text-[13px] text-text-primary"
      style={{ backgroundColor: "#f1f1f1", fontWeight: 450 }}
    >
      {label}
      <button
        type="button"
        onClick={onRemove}
        className="flex items-center justify-center size-4 rounded-full hover:bg-[rgba(0,0,0,0.1)] transition-colors"
        aria-label={`Remove ${label}`}
      >
        <X className="size-3" />
      </button>
    </span>
  );
}
