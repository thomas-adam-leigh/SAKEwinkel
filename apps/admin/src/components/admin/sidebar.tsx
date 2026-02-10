import { useState, useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import {
  Home,
  ShoppingCart,
  Package,
  Users,
  Megaphone,
  Tag,
  FileText,
  Globe,
  BarChart3,
  Store,
  Settings,
  Plus,
} from "lucide-react";
import { NavItem } from "./nav-item";
import { NavSection } from "./nav-section";

interface ExpandableNav {
  key: string;
  icon: typeof Home;
  label: string;
  to: string;
  children: Array<{ label: string; to: string }>;
}

const expandableNavItems: ExpandableNav[] = [
  {
    key: "orders",
    icon: ShoppingCart,
    label: "Orders",
    to: "/orders",
    children: [
      { label: "Drafts", to: "/orders/drafts" },
      { label: "Abandoned checkouts", to: "/orders/abandoned" },
    ],
  },
  {
    key: "products",
    icon: Package,
    label: "Products",
    to: "/products",
    children: [
      { label: "Collections", to: "/products/collections" },
      { label: "Inventory", to: "/products/inventory" },
      { label: "Purchase orders", to: "/products/purchase-orders" },
      { label: "Transfers", to: "/products/transfers" },
      { label: "Gift cards", to: "/products/gift-cards" },
    ],
  },
  {
    key: "customers",
    icon: Users,
    label: "Customers",
    to: "/customers",
    children: [{ label: "Segments", to: "/customers/segments" }],
  },
  {
    key: "marketing",
    icon: Megaphone,
    label: "Marketing",
    to: "/marketing",
    children: [
      { label: "Automations", to: "/marketing/automations" },
      { label: "Campaigns", to: "/marketing/campaigns" },
    ],
  },
  {
    key: "content",
    icon: FileText,
    label: "Content",
    to: "/content",
    children: [
      { label: "Metaobjects", to: "/content/metaobjects" },
      { label: "Files", to: "/content/files" },
    ],
  },
  {
    key: "analytics",
    icon: BarChart3,
    label: "Analytics",
    to: "/analytics",
    children: [
      { label: "Reports", to: "/analytics/reports" },
      { label: "Live View", to: "/analytics/live" },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();

  // Auto-expand parents based on current URL
  const getInitialExpanded = () => {
    const expanded: Record<string, boolean> = {};
    for (const item of expandableNavItems) {
      const isChildActive = item.children.some(
        (child) => location.pathname === child.to
      );
      if (isChildActive || location.pathname === item.to) {
        expanded[item.key] = true;
      }
    }
    return expanded;
  };

  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    getInitialExpanded
  );

  // Auto-expand when navigating to sub-pages
  useEffect(() => {
    for (const item of expandableNavItems) {
      const isChildActive = item.children.some(
        (child) => location.pathname === child.to
      );
      if (isChildActive) {
        setExpanded((prev) => ({ ...prev, [item.key]: true }));
      }
    }
  }, [location.pathname]);

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="fixed top-[56px] left-0 w-[240px] h-[calc(100vh-56px)] bg-bg-sidebar z-40 overflow-y-auto flex flex-col rounded-tl-[10px]">
      <nav className="flex flex-col gap-0.5 p-2 flex-1">
        {/* Home */}
        <NavItem icon={Home} label="Home" to="/" />

        {/* Expandable nav items */}
        {expandableNavItems.map((item) => (
          <div key={item.key}>
            <NavItem
              icon={item.icon}
              label={item.label}
              to={item.to}
              expandable
              expanded={expanded[item.key]}
              onToggle={() => toggleExpanded(item.key)}
            />
            {expanded[item.key] &&
              item.children.map((child) => (
                <NavItem
                  key={child.to}
                  label={child.label}
                  to={child.to}
                  indent
                />
              ))}
          </div>
        ))}

        {/* Non-expandable items */}
        <NavItem icon={Tag} label="Discounts" to="/discounts" />
        <NavItem icon={Globe} label="Markets" to="/markets" />

        {/* Sales channels section */}
        <div className="mt-2">
          <NavSection label="Sales channels">
            <NavItem icon={Store} label="Online Store" to="/online-store" />
          </NavSection>
        </div>

        {/* Apps section */}
        <div className="mt-1">
          <NavSection label="Apps">
            <button
              type="button"
              className="flex items-center gap-2 h-[28px] rounded-[8px] text-[13px] text-text-secondary pl-2 pr-1 hover:bg-bg-nav-hover transition-colors w-full"
              style={{ fontWeight: 550 }}
            >
              <Plus className="size-5 text-icon-default" />
              <span>Add</span>
            </button>
          </NavSection>
        </div>

        {/* Spacer + Settings */}
        <div className="mt-auto pt-2">
          <NavItem icon={Settings} label="Settings" to="/settings" />
        </div>
      </nav>
    </aside>
  );
}
