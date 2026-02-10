import { Check } from "lucide-react";

interface AdminCheckboxProps {
  readonly checked: boolean;
  readonly onChange: (checked: boolean) => void;
  readonly label?: string;
  readonly id?: string;
}

export function AdminCheckbox({ checked, onChange, label, id }: AdminCheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        role="checkbox"
        id={id}
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className="flex items-center justify-center size-[16px] rounded-[4px] border transition-colors"
        style={{
          backgroundColor: checked ? "#303030" : "transparent",
          borderColor: checked ? "#303030" : "#8a8a8a",
        }}
      >
        {checked && <Check className="size-3 text-white" strokeWidth={3} />}
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
