import { AdminCard } from "@/components/admin/card";
import { AdminInput } from "@/components/admin/input";
import { CardSectionHeading } from "@/components/admin/products/card-section-heading";
import { FieldLabel } from "@/components/admin/products/field-label";

interface ContactPersonCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: {
    firstName?: string;
    lastName?: string;
    role?: string;
    email?: string;
    phone?: string;
  };
}

export function ContactPersonCard({ onFieldChange, defaultValues }: ContactPersonCardProps) {
  return (
    <AdminCard>
      <div className="p-4">
        <CardSectionHeading className="mb-3">
          Contact person
        </CardSectionHeading>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <FieldLabel>First name</FieldLabel>
              <AdminInput defaultValue={defaultValues?.firstName} onChange={onFieldChange} />
            </div>
            <div>
              <FieldLabel>Last name</FieldLabel>
              <AdminInput defaultValue={defaultValues?.lastName} onChange={onFieldChange} />
            </div>
          </div>
          <div>
            <FieldLabel>Job title</FieldLabel>
            <AdminInput defaultValue={defaultValues?.role} onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>Email address</FieldLabel>
            <AdminInput type="email" defaultValue={defaultValues?.email} onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>Phone number</FieldLabel>
            <AdminInput type="tel" defaultValue={defaultValues?.phone} onChange={onFieldChange} />
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
