import { useState, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AdminButton } from "@/components/admin/button";
import { PageHeader } from "@/components/admin/page-header";
import { useTopBarSaveBar } from "@/components/admin/top-bar-context";
import { NewProductLayout } from "@/components/admin/products/new-product-layout";
import { ProductTypeCard } from "@/components/admin/products/product-type-card";
import { TitleDescriptionCard } from "@/components/admin/products/title-description-card";
import { PriceCard } from "@/components/admin/products/price-card";
import { CommissionCard } from "@/components/admin/products/commission-card";
import { InventoryCard } from "@/components/admin/products/inventory-card";
import { ShippingCard } from "@/components/admin/products/shipping-card";
import { VoucherDetailsCard } from "@/components/admin/products/voucher-details-card";
import { ClickthroughCard } from "@/components/admin/products/clickthrough-card";
import { VariantsCard } from "@/components/admin/products/variants-card";
import { SeoCard } from "@/components/admin/products/seo-card";
import { StatusCard } from "@/components/admin/products/status-card";
import { SchedulingCard } from "@/components/admin/products/scheduling-card";
import { ProductOrganizationCard } from "@/components/admin/products/product-organization-card";
import type { ProductType } from "@/types/product";

export const Route = createFileRoute("/_auth/products/new")({
  component: NewProductPage,
});

function NewProductPage() {
  const [isDirty, setIsDirty] = useState(false);
  const [productType, setProductType] = useState<ProductType>("Physical");

  const markDirty = useCallback(() => {
    setIsDirty(true);
  }, []);

  const handleDiscard = useCallback(() => {
    setIsDirty(false);
  }, []);

  const handleSave = useCallback(() => {
    setIsDirty(false);
  }, []);

  useTopBarSaveBar({ isDirty, onDiscard: handleDiscard, onSave: handleSave });

  return (
    <div>
      <PageHeader title="Add product" />

      <NewProductLayout
        left={
          <>
            <ProductTypeCard
              value={productType}
              onTypeChange={setProductType}
              onFieldChange={markDirty}
            />
            <TitleDescriptionCard onFieldChange={markDirty} />
            <PriceCard onFieldChange={markDirty} />
            <CommissionCard onFieldChange={markDirty} />
            {(productType === "Physical" || productType === "Voucher") && (
              <InventoryCard onFieldChange={markDirty} />
            )}
            {productType === "Physical" && (
              <ShippingCard onFieldChange={markDirty} />
            )}
            {productType === "Voucher" && (
              <VoucherDetailsCard onFieldChange={markDirty} />
            )}
            {productType === "Clickthrough" && (
              <ClickthroughCard onFieldChange={markDirty} />
            )}
            <VariantsCard onFieldChange={markDirty} />
            <SeoCard onFieldChange={markDirty} />
          </>
        }
        right={
          <>
            <StatusCard onFieldChange={markDirty} />
            <SchedulingCard onFieldChange={markDirty} />
            <ProductOrganizationCard onFieldChange={markDirty} />
          </>
        }
      />

      <div className="mt-4 max-w-[998px] pb-8">
        <AdminButton variant="primary" disabled={!isDirty} onClick={handleSave}>
          Save
        </AdminButton>
      </div>
    </div>
  );
}
