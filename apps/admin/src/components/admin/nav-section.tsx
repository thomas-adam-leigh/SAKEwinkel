import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface NavSectionProps {
  readonly label: string;
  readonly defaultOpen?: boolean;
  readonly children: React.ReactNode;
}

export function NavSection({ label, defaultOpen = true, children }: NavSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-[24px] w-full items-center px-2 py-1 text-[13px] font-normal text-black"
      >
        <span className="flex-1 text-left">{label}</span>
        <ChevronRight
          className={`text-icon-default size-4 transition-transform ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>
      {open && <div>{children}</div>}
    </div>
  );
}
