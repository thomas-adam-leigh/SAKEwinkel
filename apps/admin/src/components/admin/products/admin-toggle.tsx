interface AdminToggleProps {
  readonly checked: boolean;
  readonly onChange: (checked: boolean) => void;
  readonly label?: string;
  readonly id?: string;
}

export function AdminToggle({ checked, onChange, label, id }: AdminToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        role="switch"
        id={id}
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className="relative inline-flex w-[36px] h-[20px] rounded-full transition-colors duration-200"
        style={{ backgroundColor: checked ? "#303030" : "#b5b5b5" }}
      >
        <span
          className="absolute top-[2px] size-[16px] rounded-full bg-white transition-transform duration-200"
          style={{ transform: checked ? "translateX(18px)" : "translateX(2px)" }}
        />
      </button>
      {label && (
        <label
          htmlFor={id}
          className="text-[13px] text-text-primary cursor-pointer"
          style={{ fontWeight: 450 }}
        >
          {label}
        </label>
      )}
    </div>
  );
}
