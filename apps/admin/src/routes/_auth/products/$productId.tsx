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
import type { Product, ProductType } from "@/types/product";
import productsData from "@/data/products.json";

export const Route = createFileRoute("/_auth/products/$productId")({
  component: EditProductPage,
});

function EditProductPage() {
  const { productId } = Route.useParams();
  const product = (productsData as unknown as Product[]).find(
    (p) => p.id === productId,
  );

  const [isDirty, setIsDirty] = useState(false);
  const [productType, setProductType] = useState<ProductType>(
    product?.productType ?? "Physical",
  );

  const markDirty = useCallback(() => {
    setIsDirty(true);
  }, []);

  const handleDiscard = useCallback(() => {
    setIsDirty(false);
  }, []);

  const handleSave = useCallback(() => {
    setIsDirty(false);
  }, []);

  if (!product) {
    return (
      <div>
        <PageHeader title="Product not found" />
        <p className="text-[13px] text-text-subdued">
          No product found with ID "{productId}".
        </p>
      </div>
    );
  }

  useTopBarSaveBar({ isDirty, onDiscard: handleDiscard, onSave: handleSave });

  return (
    <div>
      <PageHeader title={product.name} />

      <NewProductLayout
        left={
          <>
            <ProductTypeCard
              value={productType}
              onTypeChange={setProductType}
              onFieldChange={markDirty}
            />
            <TitleDescriptionCard
              onFieldChange={markDirty}
              defaultValues={{
                name: product.name,
                shortOverview: product.shortOverview,
                description: product.description,
              }}
            />
            <PriceCard
              onFieldChange={markDirty}
              defaultValues={{
                originalPrice: product.originalPrice,
                salePrice: product.salePrice ?? undefined,
              }}
            />
            <CommissionCard
              onFieldChange={markDirty}
              defaultValues={{
                commissionValue: product.commissionValue,
              }}
            />
            {(productType === "Physical" || productType === "Voucher") && (
              <InventoryCard
                onFieldChange={markDirty}
                defaultValues={{
                  maxPerOrder: product.maxPerOrder,
                }}
              />
            )}
            {productType === "Physical" && (
              <ShippingCard
                onFieldChange={markDirty}
                defaultValues={{
                  deliveryCost: product.deliveryCost,
                  weight: product.weight,
                  packageType: product.packageType,
                  countryOfOrigin: product.countryOfOrigin,
                }}
              />
            )}
            {productType === "Voucher" && (
              <VoucherDetailsCard
                onFieldChange={markDirty}
                defaultValues={{
                  voucherCodePrefix: product.voucherCodePrefix,
                  voucherExpiry: product.voucherExpiry,
                  voucherOffer: product.voucherOffer,
                  optionalHeadline: product.optionalHeadline,
                }}
              />
            )}
            {productType === "Clickthrough" && (
              <ClickthroughCard
                onFieldChange={markDirty}
                defaultValues={{
                  clickThroughUrl: product.clickThroughUrl,
                  ctaButtonText: product.ctaButtonText,
                }}
              />
            )}
            <VariantsCard
              onFieldChange={markDirty}
              defaultValues={product.variants}
            />
            <SeoCard onFieldChange={markDirty} />
          </>
        }
        right={
          <>
            <StatusCard
              onFieldChange={markDirty}
              defaultValue={product.status}
            />
            <SchedulingCard
              onFieldChange={markDirty}
              defaultValues={{
                productStart: product.productStart ?? undefined,
                productEnd: product.productEnd ?? undefined,
              }}
            />
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
