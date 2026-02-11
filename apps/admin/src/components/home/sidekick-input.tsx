import { Plus } from "lucide-react";

export function SidekickInput() {
  return (
    <div className="rounded-[12px] border border-border-input bg-bg-surface shadow-[var(--shadow-polaris-100)]">
      <textarea
        className="w-full resize-none bg-transparent px-4 pt-3 pb-1 text-[13px] text-text-primary placeholder:text-text-subdued outline-none"
        placeholder="Ask anything..."
        rows={2}
      />
      <div className="flex items-center justify-between px-3 pb-2">
        <button
          type="button"
          className="flex size-[28px] items-center justify-center rounded-[8px] transition-colors hover:bg-bg-nav-hover"
          aria-label="Add files and more"
        >
          <Plus size={16} className="text-icon-default" />
        </button>
        <button
          type="button"
          className="flex h-[28px] items-center justify-center rounded-[8px] bg-bg-primary px-3 text-[13px] font-[450] text-text-on-dark shadow-[var(--shadow-polaris-btn-primary)]"
        >
          Send
        </button>
      </div>
    </div>
  );
}
