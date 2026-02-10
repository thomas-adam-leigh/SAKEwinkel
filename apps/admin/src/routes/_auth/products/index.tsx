import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { PageHeader } from "../../../components/admin/page-header";
import { AdminCard } from "../../../components/admin/card";
import { AdminButton } from "../../../components/admin/button";
import { ProductsTabBar } from "../../../components/admin/products/products-tab-bar";
import { ProductsSearchBar } from "../../../components/admin/products/products-search-bar";
import { ProductsDataTable } from "../../../components/admin/products/products-data-table";
import productsData from "../../../data/products.json";

export const Route = createFileRoute("/_auth/products/")({
  component: ProductsPage,
});

function ProductsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  return (
    <div style={{ padding: "0" }}>
      {/* Header row */}
      <div className="flex items-center justify-between">
        <PageHeader title="Products" />
        <div className="flex items-center gap-2" style={{ marginBottom: 16 }}>
          <AdminButton variant="tertiary">Export</AdminButton>
          <AdminButton variant="tertiary">Import</AdminButton>
          <AdminButton variant="tertiary" className="pr-1.5">
            More actions
            <ChevronDown size={14} className="ml-1" />
          </AdminButton>
          <AdminButton variant="primary">Add product</AdminButton>
        </div>
      </div>

      {/* Table card */}
      <AdminCard className="overflow-hidden">
        <div style={{ padding: "8px 0" }}>
          <ProductsTabBar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <div style={{ padding: "8px 0" }}>
          <ProductsSearchBar />
        </div>
        <ProductsDataTable
          products={productsData}
          selectedIds={selectedIds}
          onSelectionChange={setSelectedIds}
        />
      </AdminCard>

      {/* Footer link */}
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            fontSize: 12,
            fontWeight: 550,
            color: "#303030",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.textDecoration = "underline";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.textDecoration = "none";
          }}
        >
          Learn more about products
        </a>
      </div>
    </div>
  );
}
