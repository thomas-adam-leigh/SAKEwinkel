import { AdminButton } from "@/components/admin/button";
import { AdminCard } from "@/components/admin/card";

export function CustomersEmptyState() {
  return (
    <AdminCard className="p-5">
      <div className="flex gap-5">
        <div className="flex flex-1 flex-col">
          <h2 className="text-[14px] font-[600] leading-[20px] text-text-primary">
            Everything customers-related in one place
          </h2>
          <p className="mt-1 text-[13px] font-[450] leading-[20px] text-text-primary">
            Manage customer details, see customer order history, and group
            customers into segments.
          </p>
          <div className="mt-4 flex gap-2">
            <AdminButton variant="primary">Add customer</AdminButton>
            <AdminButton variant="secondary">Import customers</AdminButton>
          </div>
        </div>
        <div className="shrink-0">
          <CustomersIllustration />
        </div>
      </div>
      <div className="my-5 border-t border-border-subdued" />
      <div>
        <h2 className="text-[14px] font-[600] leading-[20px] text-text-primary">
          Get customers with apps
        </h2>
        <p className="mt-1 text-[13px] font-[450] leading-[20px] text-text-primary">
          Grow your customer list by adding a lead capture form to your store
          and marketing.
        </p>
        <div className="mt-4">
          <AdminButton variant="secondary">
            See app recommendations
          </AdminButton>
        </div>
      </div>
    </AdminCard>
  );
}

function CustomersIllustration() {
  return (
    <svg
      width="160"
      height="120"
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="20" y="30" width="120" height="70" rx="12" fill="#f1f1f1" />
      <circle cx="80" cy="45" r="16" fill="#d4f3e5" />
      <circle cx="80" cy="37" r="8" fill="#303030" />
      <path
        d="M64 58 C64 50 96 50 96 58"
        fill="#303030"
        opacity="0.8"
      />
      <circle cx="42" cy="55" r="11" fill="#ebebeb" />
      <circle cx="42" cy="49" r="5.5" fill="#616161" />
      <path
        d="M31 63 C31 57 53 57 53 63"
        fill="#616161"
        opacity="0.7"
      />
      <circle cx="118" cy="55" r="11" fill="#d4f3e5" />
      <circle cx="118" cy="49" r="5.5" fill="#014b40" />
      <path
        d="M107 63 C107 57 129 57 129 63"
        fill="#014b40"
        opacity="0.7"
      />
      <circle cx="30" cy="85" r="3" fill="#d4f3e5" />
      <circle cx="130" cy="85" r="3" fill="#ebebeb" />
      <circle cx="80" cy="90" r="2.5" fill="#d4f3e5" opacity="0.6" />
    </svg>
  );
}
