import { Plus } from "lucide-react";

interface ExpandableOptionButtonProps {
  readonly label: string;
  readonly onClick: () => void;
}

export function ExpandableOptionButton({ label, onClick }: ExpandableOptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1 h-[28px] px-2 rounded-[8px] text-[13px] text-text-primary bg-transparent border-none transition-colors hover:bg-[rgba(0,0,0,0.05)]"
      style={{ fontWeight: 400 }}
    >
      <Plus className="size-3.5" />
      {label}
    </button>
  );
}
