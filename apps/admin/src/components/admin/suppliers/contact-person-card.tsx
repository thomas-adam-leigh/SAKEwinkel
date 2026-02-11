import { AdminCard } from "@/components/admin/card";
import { AdminInput } from "@/components/admin/input";
import { CardSectionHeading } from "@/components/admin/products/card-section-heading";
import { FieldLabel } from "@/components/admin/products/field-label";

interface ContactPersonCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: {
    firstName?: string;
    surname?: string;
    role?: string;
    email?: string;
    phone?: string;
  };
  readonly additionalContacts?: readonly {
    firstName: string;
    surname: string;
    phone: string;
    email: string;
    role: string;
  }[];
}

export function ContactPersonCard({ onFieldChange, defaultValues, additionalContacts }: ContactPersonCardProps) {
  return (
    <AdminCard>
      <div className="p-4">
        <CardSectionHeading className="mb-3">
          Primary contact
        </CardSectionHeading>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <FieldLabel>First name</FieldLabel>
              <AdminInput defaultValue={defaultValues?.firstName} onChange={onFieldChange} />
            </div>
            <div>
              <FieldLabel>Surname</FieldLabel>
              <AdminInput defaultValue={defaultValues?.surname} onChange={onFieldChange} />
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

        {additionalContacts && additionalContacts.length > 0 && (
          <>
            {additionalContacts.map((contact, i) => (
              <div key={i} className="mt-4 pt-4 border-t border-border-separator">
                <CardSectionHeading className="mb-3">
                  Additional contact {i + 1}
                </CardSectionHeading>
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <FieldLabel>First name</FieldLabel>
                      <AdminInput defaultValue={contact.firstName} onChange={onFieldChange} />
                    </div>
                    <div>
                      <FieldLabel>Surname</FieldLabel>
                      <AdminInput defaultValue={contact.surname} onChange={onFieldChange} />
                    </div>
                  </div>
                  <div>
                    <FieldLabel>Job title</FieldLabel>
                    <AdminInput defaultValue={contact.role} onChange={onFieldChange} />
                  </div>
                  <div>
                    <FieldLabel>Email address</FieldLabel>
                    <AdminInput type="email" defaultValue={contact.email} onChange={onFieldChange} />
                  </div>
                  <div>
                    <FieldLabel>Phone number</FieldLabel>
                    <AdminInput type="tel" defaultValue={contact.phone} onChange={onFieldChange} />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </AdminCard>
  );
}
