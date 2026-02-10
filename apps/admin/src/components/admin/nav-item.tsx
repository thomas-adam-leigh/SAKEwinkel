import { Link, useLocation } from "@tanstack/react-router";
import { ChevronRight, type LucideIcon } from "lucide-react";

interface NavItemProps {
  readonly icon?: LucideIcon;
  readonly label: string;
  readonly to: string;
  readonly expandable?: boolean;
  readonly expanded?: boolean;
  readonly onToggle?: () => void;
  readonly indent?: boolean;
}

export function NavItem({
  icon: Icon,
  label,
  to,
  expandable,
  expanded,
  onToggle,
  indent,
}: NavItemProps) {
  const location = useLocation();
  const isActive =
    location.pathname === to || (to !== "/" && location.pathname.startsWith(to + "/"));

  return (
    <div className="flex flex-col">
      <Link
        to={to}
        onClick={(e: React.MouseEvent) => {
          if (expandable && onToggle) {
            e.preventDefault();
            onToggle();
          }
        }}
        className={`text-text-primary flex h-[28px] items-center gap-2 rounded-[8px] text-[13px] transition-colors ${
          indent ? "pr-1 pl-[36px]" : "pr-1 pl-2"
        } ${isActive ? "bg-bg-nav-active" : "hover:bg-bg-nav-hover"}`}
        style={{ fontWeight: 450 }}
      >
        {Icon && <Icon className="text-icon-default size-5 shrink-0" />}
        <span className="flex-1 truncate">{label}</span>
        {expandable && (
          <ChevronRight
            className={`text-icon-default size-4 transition-transform ${
              expanded ? "rotate-90" : ""
            }`}
          />
        )}
      </Link>
    </div>
  );
}
