import { Link, useLocation } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";

interface NavItemProps {
  readonly icon?: LucideIcon;
  readonly label: string;
  readonly to?: string;
  readonly comingSoon?: boolean;
  readonly disabled?: boolean;
}

export function NavItem({ icon: Icon, label, to, comingSoon, disabled }: NavItemProps) {
  const location = useLocation();
  const isActive = to
    ? location.pathname === to || (to !== "/" && location.pathname.startsWith(to + "/"))
    : false;

  const className = `flex h-[28px] items-center gap-2 rounded-[8px] pr-1 pl-2 text-[13px] font-[450] text-text-primary transition-colors ${
    disabled ? "cursor-default" : isActive ? "bg-bg-nav-active" : "hover:bg-bg-nav-hover"
  }`;

  const content = (
    <>
      {Icon && <Icon className="size-5 shrink-0 text-icon-default" />}
      <span className="flex-1 truncate">{label}</span>
      {comingSoon && (
        <span className="shrink-0 rounded-full bg-bg-pill-coming-soon px-1.5 py-[1px] text-[11px] font-[550] text-white">
          Coming soon
        </span>
      )}
    </>
  );

  if (disabled || !to) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link to={to} className={className}>
      {content}
    </Link>
  );
}
