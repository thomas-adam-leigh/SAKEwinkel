import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Search, ArrowUpDown } from "lucide-react";
import { AdminButton } from "@/components/admin/button";
import { AdminCard } from "@/components/admin/card";
import { AdminTabs, type TabDef } from "@/components/admin/tabs";
import { PageHeader } from "@/components/admin/page-header";
import { CustomersEmptyState } from "@/components/admin/customers/customers-empty-state";
import { CustomersTable } from "@/components/admin/customers/customers-table";
import customersData from "@/data/customers.json";

export const Route = createFileRoute("/_auth/customers/")({
  component: CustomersPage,
});

const tabs: TabDef[] = [
  { id: "all", label: "All" },
  { id: "email", label: "Email subscribers" },
  { id: "returning", label: "Returning" },
];

function CustomersPage() {
  const [hasCustomers] = useState(true);

  if (!hasCustomers) {
    return (
      <div>
        <PageHeader title="Customers" />
        <CustomersEmptyState />
        <LearnMoreFooter />
      </div>
    );
  }

  return <PopulatedState />;
}

function PopulatedState() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  const filteredCustomers = useMemo(() => {
    let result = customersData;

    if (activeTab === "email") {
      result = result.filter((c) => c.emailSubscription === "subscribed");
    } else if (activeTab === "returning") {
      result = result.filter((c) => c.orders > 1);
    }

    if (searchValue.trim()) {
      const query = searchValue.toLowerCase();
      result = result.filter(
        (c) =>
          `${c.firstName} ${c.lastName}`.toLowerCase().includes(query) ||
          c.city.toLowerCase().includes(query) ||
          c.country.toLowerCase().includes(query),
      );
    }

    return result;
  }, [activeTab, searchValue]);

  const tabCounts = useMemo(
    () =>
      tabs.map((t) => ({
        ...t,
        count:
          t.id === "email"
            ? customersData.filter((c) => c.emailSubscription === "subscribed")
                .length
            : t.id === "returning"
              ? customersData.filter((c) => c.orders > 1).length
              : undefined,
      })),
    [],
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <PageHeader title="Customers" />
        <div className="mb-4 flex items-center gap-2">
          <AdminButton variant="tertiary">Export</AdminButton>
          <AdminButton variant="tertiary">Import</AdminButton>
          <AdminButton variant="tertiary">
            More actions
            <ChevronDown className="ml-0.5 size-3" />
          </AdminButton>
          <AdminButton variant="primary">Add customer</AdminButton>
        </div>
      </div>

      <AdminCard className="overflow-hidden">
        <div className="px-3 pt-3">
          <AdminTabs
            tabs={tabCounts}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="pill"
            showAddButton
          />
        </div>
        <div className="flex items-center gap-2 px-3 py-2">
          <div className="flex flex-1 items-center gap-2 rounded-[8px] border border-border-subdued bg-bg-input px-2 h-[32px] focus-within:border-border-input-focus focus-within:ring-2 focus-within:ring-border-focus-ring/20">
            <Search className="size-4 shrink-0 text-text-subdued" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search and filter customers"
              className="flex-1 border-none bg-transparent text-[13px] text-text-primary placeholder:text-text-subdued outline-none"
            />
          </div>
          <button
            type="button"
            className="flex size-[32px] shrink-0 items-center justify-center rounded-[8px] border border-border-subdued bg-bg-surface transition-colors hover:bg-bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring"
            aria-label="Sort"
          >
            <ArrowUpDown className="size-4 text-text-secondary" />
          </button>
        </div>
        <CustomersTable customers={filteredCustomers} />
      </AdminCard>

      <LearnMoreFooter />
    </div>
  );
}

function LearnMoreFooter() {
  return (
    <p className="mt-4 text-center">
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="text-[12px] font-[450] text-text-primary no-underline hover:underline"
      >
        Learn more about customers
      </a>
    </p>
  );
}
