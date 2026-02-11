import {
  BarChart3,
  ClipboardList,
  FileBarChart,
  FileText,
  Mail,
  Megaphone,
  Package,
  Scale,
  ShoppingCart,
  Truck,
  Users,
  UserCog,
} from "lucide-react";
import { NavItem } from "./nav-item";
import { NavSection } from "./nav-section";

export function Sidebar() {
  return (
    <aside className="bg-bg-sidebar fixed top-[56px] left-0 z-40 flex h-[calc(100vh-56px)] w-[240px] flex-col overflow-y-auto rounded-tl-[10px]">
      <nav className="flex flex-1 flex-col gap-0.5 p-2">
        <NavSection label="Operations">
          <NavItem icon={ShoppingCart} label="Orders" to="/orders" />
          <NavItem icon={Package} label="Products" to="/products" />
          <NavItem icon={Truck} label="Suppliers" to="/suppliers" />
          <NavItem icon={Users} label="Customers" to="/customers" />
        </NavSection>

        <NavSection label="Insights">
          <NavItem icon={BarChart3} label="Analytics" to="/analytics" />
          <NavItem icon={FileBarChart} label="Reports" comingSoon disabled />
        </NavSection>

        <NavSection label="Configuration">
          <NavItem icon={Scale} label="Legal" to="/legal" />
          <NavItem icon={Mail} label="Email Templates" to="/email-templates" />
        </NavSection>

        <NavSection label="Admin">
          <NavItem icon={UserCog} label="Team" disabled />
          <NavItem icon={ClipboardList} label="Audit Log" disabled />
        </NavSection>
      </nav>
    </aside>
  );
}
