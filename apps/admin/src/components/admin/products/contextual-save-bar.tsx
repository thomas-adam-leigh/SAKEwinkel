interface ContextualSaveBarProps {
  readonly isDirty: boolean;
  readonly onDiscard: () => void;
  readonly onSave: () => void;
}

export function ContextualSaveBar({ isDirty, onDiscard, onSave }: ContextualSaveBarProps) {
  return (
    <div className="sticky top-0 z-10 mb-4 flex h-[44px] items-center justify-between rounded-[10px] bg-bg-primary px-4">
      <span className="text-[12px] font-[450] text-text-placeholder">
        Unsaved product
      </span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onDiscard}
          className="h-[28px] rounded-[8px] border-none bg-transparent px-2 text-[12px] font-[550] text-text-placeholder transition-colors hover:bg-white/10"
        >
          Discard
        </button>
        <button
          type="button"
          onClick={onSave}
          disabled={!isDirty}
          className={`h-[28px] rounded-[8px] border-none px-2 text-[12px] font-[550] transition-colors ${
            isDirty
              ? "bg-white text-text-primary"
              : "bg-transparent text-text-subdued"
          }`}
        >
          Save
        </button>
      </div>
    </div>
  );
}
