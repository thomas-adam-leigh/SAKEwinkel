import { Plus } from "lucide-react";

const tabs = ["All", "Active", "Draft", "Archived"];

interface ProductsTabBarProps {
  readonly activeTab: string;
  readonly onTabChange: (tab: string) => void;
}

export function ProductsTabBar({ activeTab, onTabChange }: ProductsTabBarProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "0 4px", gap: 4 }}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.toLowerCase();
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab.toLowerCase())}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 28,
              padding: "4px 12px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: isActive ? 400 : 450,
              color: isActive ? "#303030" : "#4a4a4a",
              backgroundColor: isActive ? "rgba(0,0,0,0.08)" : "transparent",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.05)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isActive
                ? "rgba(0,0,0,0.08)"
                : "transparent";
            }}
          >
            {tab}
          </button>
        );
      })}
      <button
        type="button"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          backgroundColor: "transparent",
          color: "#4a4a4a",
          transition: "background-color 0.15s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
        }}
        aria-label="Create new view"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
