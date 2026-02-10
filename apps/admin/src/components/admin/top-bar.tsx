import { Link } from "@tanstack/react-router";
import { Bell, ChevronDown, Search } from "lucide-react";

export function TopBar() {
  return (
    <header className="bg-bg-topbar fixed top-0 right-0 left-0 z-50 grid h-[56px] grid-cols-[1fr_auto_1fr] items-center px-5">
      {/* Left: Logo */}
      <Link to="/" className="flex items-center gap-2">
        <svg
          width="21"
          height="24"
          viewBox="0 0 21 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M17.83 4.39c-.02-.15-.15-.23-.26-.24-.11-.01-2.37-.04-2.37-.04s-1.88-1.83-2.08-2.03c-.2-.2-.59-.14-.74-.1-.03.01-.39.12-1.05.33A5.97 5.97 0 009.2.52C8.41-.3 7.38-.01 6.59.52c-.98.66-1.56 1.97-1.72 2.8-.86.26-1.45.45-1.48.46-.46.14-.47.16-.53.59C2.82 4.7.98 19.04.98 19.04L14.14 21.5l7.1-1.76s-3.39-15.2-3.41-15.35zM11.52 2.98l-1.7.52c.01-.11.01-.23.01-.36 0-1.02-.14-1.84-.37-2.44.92.11 1.54 1.16 2.06 2.28zM8.81.92c.25.58.42 1.43.42 2.59 0 .08 0 .16-.01.24L6.92 4.5c.36-1.65 1.04-2.97 1.89-3.58zM7.82.3c.13 0 .25.02.37.07-.93.66-1.67 2.1-2.03 3.85l-1.93.6c.41-1.67 1.6-4.52 3.59-4.52z"
            fill="white"
          />
          <path
            d="M17.57 4.15s-2.37-.04-2.37-.04-1.88-1.83-2.08-2.03a.36.36 0 00-.2-.1v19.52l7.1-1.76-3.19-15.35c-.02-.15-.15-.23-.26-.24z"
            fill="white"
            fillOpacity="0.6"
          />
        </svg>
        <span className="text-text-on-dark text-[14px] font-semibold tracking-tight">
          SAKEwinkel
        </span>
      </Link>

      {/* Center: Search placeholder */}
      <div className="bg-bg-search flex h-[36px] max-w-[580px] min-w-[400px] cursor-pointer items-center gap-2 rounded-[12px] px-3">
        <Search className="text-icon-on-dark size-4" />
        <span className="text-text-placeholder flex-1 text-[13px]">Search</span>
        <div className="flex items-center gap-0.5">
          <kbd className="text-text-placeholder rounded bg-white/10 px-1.5 py-0.5 text-[11px] font-medium">
            ⌘
          </kbd>
          <kbd className="text-text-placeholder rounded bg-white/10 px-1.5 py-0.5 text-[11px] font-medium">
            K
          </kbd>
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          className="flex size-[36px] items-center justify-center rounded-[12px] transition-colors hover:bg-white/10"
          aria-label="Notifications"
        >
          <Bell className="text-icon-on-dark size-5" />
        </button>
        <button
          type="button"
          className="flex h-[36px] items-center gap-2 rounded-[12px] px-2 transition-colors hover:bg-white/10"
          aria-label="Store switcher"
        >
          <div className="bg-bg-avatar flex size-6 items-center justify-center rounded-full text-[11px] font-semibold text-white">
            S
          </div>
          <ChevronDown className="text-icon-on-dark size-4" />
        </button>
      </div>
    </header>
  );
}
