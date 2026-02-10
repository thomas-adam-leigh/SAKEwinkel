interface ContextualSaveBarProps {
  readonly isDirty: boolean;
  readonly onDiscard: () => void;
  readonly onSave: () => void;
}

export function ContextualSaveBar({ isDirty, onDiscard, onSave }: ContextualSaveBarProps) {
  return (
    <div
      className="sticky top-0 z-10 flex items-center justify-between px-4 h-[44px] rounded-[10px] mb-4"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <span className="text-[12px] text-[#e3e3e3]" style={{ fontWeight: 450 }}>
        Unsaved product
      </span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onDiscard}
          className="h-[28px] px-2 rounded-[8px] text-[12px] text-[#e3e3e3] bg-transparent border-none transition-colors hover:bg-[rgba(255,255,255,0.1)]"
          style={{ fontWeight: 550 }}
        >
          Discard
        </button>
        <button
          type="button"
          onClick={onSave}
          disabled={!isDirty}
          className="h-[28px] px-2 rounded-[8px] text-[12px] border-none transition-colors"
          style={{
            fontWeight: 550,
            backgroundColor: isDirty ? "#ffffff" : "transparent",
            color: isDirty ? "#303030" : "#8a8a8a",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
