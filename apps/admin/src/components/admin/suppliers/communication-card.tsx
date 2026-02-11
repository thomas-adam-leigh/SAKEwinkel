import { useState } from "react";
import { AdminCard } from "@/components/admin/card";
import { AdminInput } from "@/components/admin/input";
import { AdminToggle } from "@/components/admin/products/admin-toggle";
import { CardSectionHeading } from "@/components/admin/products/card-section-heading";
import { FieldLabel } from "@/components/admin/products/field-label";

interface CommunicationCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: {
    orderNotificationEmail?: string;
    notifyOnNewOrder?: boolean;
    notifyOnPaymentReceived?: boolean;
    notifyOnShipmentRequired?: boolean;
  };
}

export function CommunicationCard({ onFieldChange, defaultValues }: CommunicationCardProps) {
  const [notifyNewOrder, setNotifyNewOrder] = useState(defaultValues?.notifyOnNewOrder ?? true);
  const [notifyPayment, setNotifyPayment] = useState(defaultValues?.notifyOnPaymentReceived ?? true);
  const [notifyShipment, setNotifyShipment] = useState(defaultValues?.notifyOnShipmentRequired ?? true);

  function handleToggle(
    setter: (v: boolean) => void,
    current: boolean,
  ) {
    setter(!current);
    onFieldChange();
  }

  return (
    <AdminCard>
      <div className="p-4">
        <CardSectionHeading className="mb-3">
          Communication
        </CardSectionHeading>
        <div className="flex flex-col gap-3">
          <div>
            <FieldLabel>Order notification email</FieldLabel>
            <AdminInput type="email" defaultValue={defaultValues?.orderNotificationEmail} onChange={onFieldChange} />
            <p className="mt-1 text-[12px] font-[400] text-text-subdued">
              Email address that receives order notifications
            </p>
          </div>
          <div className="flex flex-col gap-2.5 pt-1">
            <AdminToggle
              checked={notifyNewOrder}
              onChange={() =>
                handleToggle(setNotifyNewOrder, notifyNewOrder)
              }
              label="New order placed"
            />
            <AdminToggle
              checked={notifyPayment}
              onChange={() =>
                handleToggle(setNotifyPayment, notifyPayment)
              }
              label="Payment received"
            />
            <AdminToggle
              checked={notifyShipment}
              onChange={() =>
                handleToggle(setNotifyShipment, notifyShipment)
              }
              label="Shipment required"
            />
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
