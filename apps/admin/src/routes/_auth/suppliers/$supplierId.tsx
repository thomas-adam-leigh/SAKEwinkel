import { useState, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AdminButton } from "@/components/admin/button";
import { PageHeader } from "@/components/admin/page-header";
import { ContextualSaveBar } from "@/components/admin/products/contextual-save-bar";
import { NewProductLayout } from "@/components/admin/products/new-product-layout";
import { CompanyDetailsCard } from "@/components/admin/suppliers/company-details-card";
import { ContactPersonCard } from "@/components/admin/suppliers/contact-person-card";
import { BusinessAddressCard } from "@/components/admin/suppliers/business-address-card";
import { LegalComplianceCard } from "@/components/admin/suppliers/legal-compliance-card";
import { SupplierStatusCard } from "@/components/admin/suppliers/supplier-status-card";
import { CommunicationCard } from "@/components/admin/suppliers/communication-card";
import type { Supplier } from "@/types/supplier";
import suppliersData from "@/data/suppliers.json";

export const Route = createFileRoute("/_auth/suppliers/$supplierId")({
  component: EditSupplierPage,
});

function EditSupplierPage() {
  const { supplierId } = Route.useParams();
  const supplier = (suppliersData as Supplier[]).find(
    (s) => s.id === supplierId,
  );

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

  if (!supplier) {
    return (
      <div>
        <PageHeader title="Supplier not found" />
        <p className="text-[13px] text-text-subdued">
          No supplier found with ID "{supplierId}".
        </p>
      </div>
    );
  }

  return (
    <div>
      <ContextualSaveBar
        isDirty={isDirty}
        onDiscard={handleDiscard}
        onSave={handleSave}
        message="Unsaved supplier"
      />

      <PageHeader title={supplier.companyName} />

      <NewProductLayout
        left={
          <>
            <CompanyDetailsCard
              onFieldChange={markDirty}
              defaultValues={{
                companyName: supplier.companyName,
                tradingName: supplier.tradingName,
              }}
            />
            <ContactPersonCard
              onFieldChange={markDirty}
              defaultValues={supplier.contact}
            />
            <BusinessAddressCard
              onFieldChange={markDirty}
              defaultValues={supplier.address}
            />
            <LegalComplianceCard
              onFieldChange={markDirty}
              defaultValues={supplier.legal}
            />
          </>
        }
        right={
          <>
            <SupplierStatusCard
              onFieldChange={markDirty}
              defaultValue={supplier.status}
            />
            <CommunicationCard
              onFieldChange={markDirty}
              defaultValues={supplier.communication}
            />
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
