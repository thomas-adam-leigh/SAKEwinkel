import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { AdminButton } from "@/components/admin/button";
import { AdminCard } from "@/components/admin/card";
import { PageHeader } from "@/components/admin/page-header";
import { ProductsTabBar } from "@/components/admin/products/products-tab-bar";
import { ProductsSearchBar } from "@/components/admin/products/products-search-bar";
import { ProductsDataTable } from "@/components/admin/products/products-data-table";
import type { Product } from "@/types/product";
import type { Supplier } from "@/types/supplier";
import productsData from "@/data/products.json";
import suppliersData from "@/data/suppliers.json";

export const Route = createFileRoute("/_auth/products/")({
  component: ProductsPage,
});

function ProductsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const products = productsData as unknown as Product[];
  const suppliers = suppliersData as unknown as Supplier[];
  const supplierMap = new Map(suppliers.map((s) => [s.id, s]));

  const tabCounts = useMemo(
    () => ({
      all: products.length,
      active: products.filter((p) => p.status === "Active").length,
      unlisted: products.filter((p) => p.status === "Unlisted").length,
      draft: products.filter((p) => p.status === "Draft").length,
    }),
    [products],
  );

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeTab !== "all") {
      const statusMap: Record<string, string> = {
        active: "Active",
        unlisted: "Unlisted",
        draft: "Draft",
      };
      result = result.filter((p) => p.status === statusMap[activeTab]);
    }

    if (searchValue.trim()) {
      const query = searchValue.toLowerCase();
      result = result.filter((p) => {
        const supplier = supplierMap.get(p.supplierId);
        return (
          p.name.toLowerCase().includes(query) ||
          (supplier?.tradingName.toLowerCase().includes(query) ?? false)
        );
      });
    }

    return result;
  }, [products, activeTab, searchValue, supplierMap]);

  function handleTabChange(tab: string) {
    setActiveTab(tab);
    setSelectedIds(new Set());
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <PageHeader title="Products" />
        <div className="mb-4 flex items-center gap-2">
          <AdminButton variant="tertiary">Export</AdminButton>
          <AdminButton variant="tertiary">Import</AdminButton>
          <AdminButton variant="tertiary">
            More actions
            <ChevronDown className="ml-1 size-3.5" />
          </AdminButton>
          <AdminButton variant="primary">Add product</AdminButton>
        </div>
      </div>

      <AdminCard className="overflow-hidden">
        <div className="py-2">
          <ProductsTabBar
            activeTab={activeTab}
            onTabChange={handleTabChange}
            tabCounts={tabCounts}
          />
        </div>
        <div className="py-2">
          <ProductsSearchBar value={searchValue} onChange={setSearchValue} />
        </div>
        <ProductsDataTable
          products={filteredProducts}
          suppliers={suppliers}
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
          Learn more about products
        </a>
      </p>
    </div>
  );
}
