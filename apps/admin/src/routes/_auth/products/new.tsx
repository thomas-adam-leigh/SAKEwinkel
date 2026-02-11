import { useState, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AdminButton } from "@/components/admin/button";
import { PageHeader } from "@/components/admin/page-header";
import { ContextualSaveBar } from "@/components/admin/products/contextual-save-bar";
import { NewProductLayout } from "@/components/admin/products/new-product-layout";
import { TitleDescriptionCard } from "@/components/admin/products/title-description-card";
import { PriceCard } from "@/components/admin/products/price-card";
import { InventoryCard } from "@/components/admin/products/inventory-card";
import { ShippingCard } from "@/components/admin/products/shipping-card";
import { VariantsCard } from "@/components/admin/products/variants-card";
import { SeoCard } from "@/components/admin/products/seo-card";
import { StatusCard } from "@/components/admin/products/status-card";
import { PublishingCard } from "@/components/admin/products/publishing-card";
import { ProductOrganizationCard } from "@/components/admin/products/product-organization-card";
import { ThemeTemplateCard } from "@/components/admin/products/theme-template-card";

export const Route = createFileRoute("/_auth/products/new")({
  component: NewProductPage,
});

function NewProductPage() {
  const [isDirty, setIsDirty] = useState(false);

  const markDirty = useCallback(() => {
    setIsDirty(true);
  }, []);

  const handleDiscard = useCallback(() => {
    setIsDirty(false);
  }, []);

  const handleSave = useCallback(() => {
    setIsDirty(false);
  }, []);

  return (
    <div>
      <ContextualSaveBar
        isDirty={isDirty}
        onDiscard={handleDiscard}
        onSave={handleSave}
      />

      <PageHeader title="Add product" />

      <NewProductLayout
        left={
          <>
            <TitleDescriptionCard onFieldChange={markDirty} />
            <PriceCard onFieldChange={markDirty} />
            <InventoryCard onFieldChange={markDirty} />
            <ShippingCard onFieldChange={markDirty} />
            <VariantsCard onFieldChange={markDirty} />
            <SeoCard onFieldChange={markDirty} />
          </>
        }
        right={
          <>
            <StatusCard onFieldChange={markDirty} />
            <PublishingCard onFieldChange={markDirty} />
            <ProductOrganizationCard onFieldChange={markDirty} />
            <ThemeTemplateCard onFieldChange={markDirty} />
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
