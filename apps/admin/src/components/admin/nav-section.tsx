import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface NavSectionProps {
  readonly label: string;
  readonly defaultOpen?: boolean;
  readonly children: React.ReactNode;
}

export function NavSection({
  label,
  defaultOpen = true,
  children,
}: NavSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center w-full h-[24px] px-2 py-1 text-[13px] text-black font-normal"
      >
        <span className="flex-1 text-left">{label}</span>
        <ChevronRight
          className={`size-4 text-icon-default transition-transform ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>
      {open && <div>{children}</div>}
    </div>
  );
}
