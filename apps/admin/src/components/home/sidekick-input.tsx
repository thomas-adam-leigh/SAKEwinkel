import { Plus, SendHorizontal } from "lucide-react";

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
          className="flex items-center justify-center w-[28px] h-[28px] rounded-[8px] hover:bg-[rgba(0,0,0,0.05)] transition-colors"
          aria-label="Add files and more"
        >
          <Plus size={16} className="text-icon-default" />
        </button>
        <button
          type="button"
          className="flex items-center justify-center h-[28px] px-3 rounded-[8px] bg-bg-primary text-text-on-dark text-[13px] shadow-[var(--shadow-polaris-btn-primary)]"
          style={{ fontWeight: 450 }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
