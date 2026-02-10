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

  const className = `text-text-primary flex h-[28px] items-center gap-2 rounded-[8px] pr-1 pl-2 text-[13px] transition-colors ${
    disabled ? "cursor-default" : isActive ? "bg-bg-nav-active" : "hover:bg-bg-nav-hover"
  }`;

  const content = (
    <>
      {Icon && <Icon className="text-icon-default size-5 shrink-0" />}
      <span className="flex-1 truncate">{label}</span>
      {comingSoon && (
        <span
          className="shrink-0 rounded-full"
          style={{
            fontSize: 11,
            fontWeight: 550,
            padding: "1px 6px",
            background: "#e4e4e4",
            color: "#616161",
          }}
        >
          Coming soon
        </span>
      )}
    </>
  );

  if (disabled || !to) {
    return (
      <div className={className} style={{ fontWeight: 450 }}>
        {content}
      </div>
    );
  }

  return (
    <Link to={to} className={className} style={{ fontWeight: 450 }}>
      {content}
    </Link>
  );
}
