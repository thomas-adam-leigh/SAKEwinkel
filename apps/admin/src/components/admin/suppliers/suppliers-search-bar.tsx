import { ArrowUpDown, Search } from "lucide-react";

interface SuppliersSearchBarProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export function SuppliersSearchBar({
  value,
  onChange,
}: SuppliersSearchBarProps) {
  return (
    <div className="flex items-center gap-2 px-3">
      <div className="flex flex-1 items-center gap-2 rounded-[8px] border border-border-subdued bg-bg-input px-3 h-[32px] focus-within:border-border-input-focus focus-within:ring-2 focus-within:ring-border-focus-ring/20">
        <Search className="size-3.5 shrink-0 text-text-secondary" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search suppliers"
          className="flex-1 border-none bg-transparent text-[13px] font-[450] text-text-primary placeholder:text-text-subdued outline-none"
        />
      </div>
      <button
        type="button"
        className="flex size-[32px] shrink-0 items-center justify-center rounded-[8px] text-text-secondary transition-colors hover:bg-bg-nav-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring"
        aria-label="Sort"
      >
        <ArrowUpDown className="size-4" />
      </button>
    </div>
  );
}
