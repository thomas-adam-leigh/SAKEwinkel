import { useLocation } from "@tanstack/react-router";
import {
  BarChart3,
  FileText,
  Globe,
  Home,
  Megaphone,
  Package,
  Plus,
  Settings,
  ShoppingCart,
  Store,
  Tag,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
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
      const isChildActive = item.children.some((child) => location.pathname === child.to);
      if (isChildActive || location.pathname === item.to) {
        expanded[item.key] = true;
      }
    }
    return expanded;
  };

  const [expanded, setExpanded] = useState<Record<string, boolean>>(getInitialExpanded);

  // Auto-expand when navigating to sub-pages
  useEffect(() => {
    for (const item of expandableNavItems) {
      const isChildActive = item.children.some((child) => location.pathname === child.to);
      if (isChildActive) {
        setExpanded((prev) => ({ ...prev, [item.key]: true }));
      }
    }
  }, [location.pathname]);

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="bg-bg-sidebar fixed top-[56px] left-0 z-40 flex h-[calc(100vh-56px)] w-[240px] flex-col overflow-y-auto rounded-tl-[10px]">
      <nav className="flex flex-1 flex-col gap-0.5 p-2">
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
                <NavItem key={child.to} label={child.label} to={child.to} indent />
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
              className="text-text-secondary hover:bg-bg-nav-hover flex h-[28px] w-full items-center gap-2 rounded-[8px] pr-1 pl-2 text-[13px] transition-colors"
              style={{ fontWeight: 550 }}
            >
              <Plus className="text-icon-default size-5" />
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
