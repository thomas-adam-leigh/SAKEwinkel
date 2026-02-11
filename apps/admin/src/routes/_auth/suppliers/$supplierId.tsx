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
import type { Supplier } from "@/types/supplier";
import suppliersData from "@/data/suppliers.json";

export const Route = createFileRoute("/_auth/suppliers/$supplierId")({
  component: EditSupplierPage,
});

function EditSupplierPage() {
  const { supplierId } = Route.useParams();
  const supplier = (suppliersData as unknown as Supplier[]).find(
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

      <PageHeader title={supplier.tradingName} />

      <NewProductLayout
        left={
          <>
            <CompanyDetailsCard
              onFieldChange={markDirty}
              defaultValues={{
                legalName: supplier.legalName,
                tradingName: supplier.tradingName,
                businessType: supplier.businessType,
                shortDescription: supplier.shortDescription,
                websiteUrl: supplier.websiteUrl,
              }}
            />
            <ContactPersonCard
              onFieldChange={markDirty}
              defaultValues={supplier.primaryContact}
              additionalContacts={supplier.additionalContacts}
            />
            <BusinessAddressCard
              onFieldChange={markDirty}
              defaultValues={supplier.address}
            />
            <LegalComplianceCard
              onFieldChange={markDirty}
              defaultValues={{
                identificationType: supplier.identificationType,
                identificationNumber: supplier.identificationNumber,
                isVatRegistered: supplier.vatRegistration.isRegistered,
                vatNumber: supplier.vatRegistration.vatNumber,
              }}
            />
            <BankingDetailsCard
              onFieldChange={markDirty}
              defaultValues={supplier.banking}
            />
          </>
        }
        right={
          <>
            <SupplierStatusCard
              onFieldChange={markDirty}
              defaultValue={supplier.isActive ? "Active" : "Inactive"}
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
