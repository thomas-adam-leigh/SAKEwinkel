import { AdminButton } from "@/components/admin/button";
import { AdminCard } from "@/components/admin/card";

function OrdersIllustration() {
  return (
    <svg
      width="226"
      height="226"
      viewBox="0 0 226 226"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background circle */}
      <circle cx="113" cy="113" r="100" fill="#f1f1f1" />

      {/* Clipboard body */}
      <rect x="66" y="52" width="94" height="122" rx="8" fill="#ffffff" />
      <rect
        x="66"
        y="52"
        width="94"
        height="122"
        rx="8"
        stroke="#d4d4d4"
        strokeWidth="1.5"
      />

      {/* Clipboard clip */}
      <rect x="93" y="44" width="40" height="16" rx="4" fill="#e3e3e3" />
      <rect
        x="93"
        y="44"
        width="40"
        height="16"
        rx="4"
        stroke="#d4d4d4"
        strokeWidth="1"
      />
      <rect x="105" y="48" width="16" height="8" rx="2" fill="#d4d4d4" />

      {/* Content lines */}
      <rect x="82" y="80" width="62" height="6" rx="3" fill="#e3e3e3" />
      <rect x="82" y="96" width="48" height="6" rx="3" fill="#e3e3e3" />
      <rect x="82" y="112" width="56" height="6" rx="3" fill="#e3e3e3" />

      {/* Checkmark circle accent */}
      <circle cx="82" cy="140" r="10" fill="#d4f3e5" />
      <path
        d="M78 140L81 143L87 137"
        stroke="#014b40"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Accent line next to checkmark */}
      <rect x="98" y="137" width="42" height="6" rx="3" fill="#e3e3e3" />
    </svg>
  );
}

export function OrdersEmptyState() {
  return (
    <div>
      <AdminCard className="py-10">
        <div className="flex flex-col items-center">
          <OrdersIllustration />

          <p
            className="text-text-primary mt-4 text-center text-[14px]"
            style={{ fontWeight: 600 }}
          >
            Your orders will show here
          </p>

          <p
            className="text-text-primary mt-1 max-w-[440px] text-center text-[12px]"
            style={{ fontWeight: 450 }}
          >
            To get orders and accept payments from customers, you need to select a plan.
          </p>

          <AdminButton variant="primary" className="mt-4">
            Select plan
          </AdminButton>
        </div>
      </AdminCard>

      <p className="mt-4 text-center">
        <a
          href="#"
          className="text-text-primary text-[12px] no-underline hover:underline"
          style={{ fontWeight: 550 }}
        >
          Learn more about orders
        </a>
      </p>
    </div>
  );
}
