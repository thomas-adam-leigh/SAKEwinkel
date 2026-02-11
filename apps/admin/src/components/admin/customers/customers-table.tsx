import { Link } from "@tanstack/react-router";
import { EmailSubscriptionBadge } from "@/components/admin/email-subscription-badge";

interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  emailSubscription: string;
  city: string;
  country: string;
  orders: number;
  amountSpent: number;
}

interface CustomersTableProps {
  readonly customers: Customer[];
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(amount);
}

export function CustomersTable({ customers }: CustomersTableProps) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-border-separator">
          <th className="w-[40px] py-2 pl-4">
            <input
              type="checkbox"
              aria-label="Select all customers"
              className="accent-bg-primary"
            />
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Customer name
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Email subscription
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Location
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Orders
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Amount spent
          </th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr
            key={customer.id}
            className="h-[52px] cursor-pointer border-b border-border-separator transition-colors hover:bg-bg-surface-hover"
          >
            <td
              className="w-[40px] pl-4"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="checkbox"
                aria-label={`Select ${customer.firstName} ${customer.lastName}`}
                className="accent-bg-primary"
              />
            </td>
            <td className="px-4">
              <Link
                to="/customers/$customerId"
                params={{ customerId: customer.id }}
                className="text-[12px] font-[450] text-text-primary no-underline hover:underline"
              >
                {customer.firstName} {customer.lastName}
              </Link>
            </td>
            <td className="px-4">
              <EmailSubscriptionBadge
                status={
                  customer.emailSubscription as
                    | "subscribed"
                    | "not_subscribed"
                }
              />
            </td>
            <td className="px-4 text-[12px] font-[450] text-text-primary">
              {customer.city}, {customer.country}
            </td>
            <td className="px-4 text-[12px] font-[450] text-text-primary">
              {customer.orders}
            </td>
            <td className="px-4 text-[12px] font-[450] text-text-primary">
              {formatCurrency(customer.amountSpent)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
