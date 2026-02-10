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
    location.pathname === to ||
    (to !== "/" && location.pathname.startsWith(to + "/"));

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
        className={`flex items-center gap-2 h-[28px] rounded-[8px] text-[13px] text-text-primary transition-colors ${
          indent ? "pl-[36px] pr-1" : "pl-2 pr-1"
        } ${
          isActive
            ? "bg-bg-nav-active"
            : "hover:bg-bg-nav-hover"
        }`}
        style={{ fontWeight: 450 }}
      >
        {Icon && <Icon className="size-5 text-icon-default shrink-0" />}
        <span className="flex-1 truncate">{label}</span>
        {expandable && (
          <ChevronRight
            className={`size-4 text-icon-default transition-transform ${
              expanded ? "rotate-90" : ""
            }`}
          />
        )}
      </Link>
    </div>
  );
}
