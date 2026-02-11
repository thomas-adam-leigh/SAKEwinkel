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
import { BankingDetailsCard } from "@/components/admin/suppliers/banking-details-card";
import { SupplierStatusCard } from "@/components/admin/suppliers/supplier-status-card";

export const Route = createFileRoute("/_auth/suppliers/new")({
  component: AddSupplierPage,
});

function AddSupplierPage() {
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
        message="Unsaved supplier"
      />

      <PageHeader title="Add supplier" />

      <NewProductLayout
        left={
          <>
            <CompanyDetailsCard onFieldChange={markDirty} />
            <ContactPersonCard onFieldChange={markDirty} />
            <BusinessAddressCard onFieldChange={markDirty} />
            <LegalComplianceCard onFieldChange={markDirty} />
            <BankingDetailsCard onFieldChange={markDirty} />
          </>
        }
        right={
          <>
            <SupplierStatusCard onFieldChange={markDirty} />
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
