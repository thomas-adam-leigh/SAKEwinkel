import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { AdminButton } from "@/components/admin/button";
import { AdminCard } from "@/components/admin/card";
import { PageHeader } from "@/components/admin/page-header";
import { SuppliersTabBar } from "@/components/admin/suppliers/suppliers-tab-bar";
import { SuppliersSearchBar } from "@/components/admin/suppliers/suppliers-search-bar";
import { SuppliersDataTable } from "@/components/admin/suppliers/suppliers-data-table";
import type { Supplier } from "@/types/supplier";
import suppliersData from "@/data/suppliers.json";

export const Route = createFileRoute("/_auth/suppliers/")({
  component: SuppliersPage,
});

function SuppliersPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const suppliers = suppliersData as Supplier[];

  const tabCounts = useMemo(
    () => ({
      all: suppliers.length,
      active: suppliers.filter((s) => s.status === "Active").length,
      inactive: suppliers.filter((s) => s.status === "Inactive").length,
      pending: suppliers.filter((s) => s.status === "Pending").length,
    }),
    [suppliers],
  );

  const filteredSuppliers = useMemo(() => {
    let result = suppliers;

    if (activeTab !== "all") {
      const statusMap: Record<string, string> = {
        active: "Active",
        inactive: "Inactive",
        pending: "Pending",
      };
      result = result.filter((s) => s.status === statusMap[activeTab]);
    }

    if (searchValue.trim()) {
      const query = searchValue.toLowerCase();
      result = result.filter(
        (s) =>
          s.companyName.toLowerCase().includes(query) ||
          s.contact.firstName.toLowerCase().includes(query) ||
          s.contact.lastName.toLowerCase().includes(query) ||
          s.contact.email.toLowerCase().includes(query),
      );
    }

    return result;
  }, [suppliers, activeTab, searchValue]);

  function handleTabChange(tab: string) {
    setActiveTab(tab);
    setSelectedIds(new Set());
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <PageHeader title="Suppliers" />
        <div className="mb-4 flex items-center gap-2">
          <AdminButton variant="tertiary">Export</AdminButton>
          <AdminButton variant="tertiary">Import</AdminButton>
          <AdminButton variant="tertiary">
            More actions
            <ChevronDown className="ml-1 size-3.5" />
          </AdminButton>
          <Link to="/suppliers/new">
            <AdminButton variant="primary">Add supplier</AdminButton>
          </Link>
        </div>
      </div>

      <AdminCard className="overflow-hidden">
        <div className="py-2">
          <SuppliersTabBar
            activeTab={activeTab}
            onTabChange={handleTabChange}
            tabCounts={tabCounts}
          />
        </div>
        <div className="py-2">
          <SuppliersSearchBar value={searchValue} onChange={setSearchValue} />
        </div>
        <SuppliersDataTable
          suppliers={filteredSuppliers}
          selectedIds={selectedIds}
          onSelectionChange={setSelectedIds}
        />
      </AdminCard>

      <p className="mt-4 text-center">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-[12px] font-[550] text-text-primary no-underline hover:underline"
        >
          Learn more about suppliers
        </a>
      </p>
    </div>
  );
}
