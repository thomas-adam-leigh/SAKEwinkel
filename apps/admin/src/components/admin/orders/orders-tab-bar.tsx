import { Search } from "lucide-react";
import { useState } from "react";

const tabs = ["All", "Unfulfilled", "Unpaid", "Open", "Closed"] as const;

export type OrderTab = (typeof tabs)[number];

interface OrdersTabBarProps {
  readonly onTabChange: (tab: OrderTab) => void;
}

export function OrdersTabBar({ onTabChange }: OrdersTabBarProps) {
  const [activeTab, setActiveTab] = useState<OrderTab>("All");

  function handleTabClick(tab: OrderTab) {
    setActiveTab(tab);
    onTabChange(tab);
  }

  return (
    <div className="flex items-center justify-between border-b border-[#e3e3e3] px-4">
      <div className="flex gap-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => handleTabClick(tab)}
            className={`relative px-3 py-2 text-[13px] transition-colors ${
              activeTab === tab
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary"
            }`}
            style={{ fontWeight: activeTab === tab ? 550 : 450 }}
          >
            {tab}
            {activeTab === tab && (
              <span className="bg-text-primary absolute right-3 bottom-0 left-3 h-[2px] rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="border-border-input bg-bg-input flex h-[32px] items-center gap-1.5 rounded-[8px] border px-2">
        <Search className="text-text-secondary size-4" />
        <input
          type="text"
          placeholder="Searching in All"
          className="text-text-primary placeholder:text-text-subdued w-[140px] border-none bg-transparent text-[13px] outline-none"
        />
      </div>
    </div>
  );
}
