import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronDown, Search, ArrowUpDown, Plus } from "lucide-react";
import { AdminButton } from "../../../components/admin/button";
import { AdminCard } from "../../../components/admin/card";
import { EmailSubscriptionBadge } from "../../../components/admin/email-subscription-badge";
import { PageHeader } from "../../../components/admin/page-header";
import customers from "../../../data/customers.json";

export const Route = createFileRoute("/_auth/customers/")({
  component: CustomersPage,
});

function CustomersPage() {
  const [hasCustomers, setHasCustomers] = useState(true);
  return (
    <div>
      {hasCustomers ? (
        <PopulatedState onToggle={() => setHasCustomers(false)} />
      ) : (
        <EmptyState onToggle={() => setHasCustomers(true)} />
      )}
    </div>
  );
}

function EmptyState({ onToggle }: { readonly onToggle: () => void }) {
  return (
    <>
      <PageHeader title="Customers" />
      <AdminCard className="p-5">
        <div className="flex gap-5">
          <div className="flex-1 flex flex-col">
            <h2 className="text-[14px] text-text-primary leading-[20px]" style={{ fontWeight: 600 }}>
              Everything customers-related in one place
            </h2>
            <p className="text-[13px] text-text-primary leading-[20px] mt-1" style={{ fontWeight: 450 }}>
              Manage customer details, see customer order history, and group customers into segments.
            </p>
            <div className="flex gap-2 mt-4">
              <AdminButton variant="primary">Add customer</AdminButton>
              <AdminButton variant="secondary">Import customers</AdminButton>
            </div>
          </div>
          <div className="flex-shrink-0"><CustomersIllustration /></div>
        </div>
        <div className="border-t border-border-subdued my-5" />
        <div>
          <h2 className="text-[14px] text-text-primary leading-[20px]" style={{ fontWeight: 600 }}>
            Get customers with apps
          </h2>
          <p className="text-[13px] text-text-primary leading-[20px] mt-1" style={{ fontWeight: 450 }}>
            Grow your customer list by adding a lead capture form to your store and marketing.
          </p>
          <div className="mt-4">
            <AdminButton variant="secondary">See app recommendations</AdminButton>
          </div>
        </div>
      </AdminCard>
      <LearnMoreFooter />
      <DevToggle label="Show populated state" onClick={onToggle} />
    </>
  );
}

function PopulatedState({ onToggle }: { readonly onToggle: () => void }) {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => window.history.back()} className="flex items-center justify-center size-7 rounded-[8px] hover:bg-bg-nav-hover transition-colors" aria-label="Go back">
            <ArrowLeft className="size-5 text-text-primary" />
          </button>
          <h1 className="text-[18px] text-text-primary leading-[24px]" style={{ fontWeight: 600 }}>Customers</h1>
        </div>
        <div className="flex items-center gap-2">
          <AdminButton variant="tertiary">Export</AdminButton>
          <AdminButton variant="tertiary">Import</AdminButton>
          <AdminButton variant="tertiary" className="gap-1">More actions<ChevronDown className="size-3" /></AdminButton>
          <AdminButton variant="primary">Add customer</AdminButton>
        </div>
      </div>
      <AdminCard>
        <div className="flex items-center gap-1 px-3 pt-3">
          {([{ id: "all", label: "All" }, { id: "email", label: "Email subscribers" }, { id: "returning", label: "Returning" }] as const).map((tab) => (
            <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className="h-[28px] px-2 rounded-[8px] text-[13px] transition-colors"
              style={{ fontWeight: activeTab === tab.id ? 400 : 450, backgroundColor: activeTab === tab.id ? "rgba(0,0,0,0.08)" : "transparent", color: activeTab === tab.id ? "#303030" : "#4a4a4a" }}
              onMouseEnter={(e) => { if (activeTab !== tab.id) e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.05)"; }}
              onMouseLeave={(e) => { if (activeTab !== tab.id) e.currentTarget.style.backgroundColor = "transparent"; }}
            >{tab.label}</button>
          ))}
          <button type="button" className="flex items-center justify-center size-[28px] rounded-[8px] text-[#4a4a4a] transition-colors hover:bg-[rgba(0,0,0,0.05)]">
            <Plus className="size-4" />
          </button>
        </div>
        <div className="flex items-center gap-2 px-3 py-2">
          <div className="flex-1 flex items-center h-[32px] rounded-[8px] border border-[#e3e3e3] bg-white px-2 gap-2">
            <Search className="size-4 text-[#8a8a8a] flex-shrink-0" />
            <input type="text" placeholder="Search and filter customers" className="flex-1 bg-transparent border-none text-[13px] text-text-primary outline-none placeholder:text-text-subdued" />
          </div>
          <button type="button" className="flex items-center justify-center size-[32px] rounded-[8px] border border-[#e3e3e3] bg-white hover:bg-[#f7f7f7] transition-colors">
            <ArrowUpDown className="size-4 text-[#616161]" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <div className="grid items-center border-b border-[#f1f1f1] text-[12px] text-[#616161] px-4" style={{ fontWeight: 550, gridTemplateColumns: "40px 1fr 140px 160px 80px 120px" }}>
            <div className="py-2 px-0"><input type="checkbox" className="size-4 rounded-[4px] border border-[#8a8a8a] accent-[#303030]" /></div>
            <div className="py-2">Customer name</div>
            <div className="py-2">Email subscription</div>
            <div className="py-2">Location</div>
            <div className="py-2">Orders</div>
            <div className="py-2">Amount spent</div>
          </div>
          {customers.map((customer) => (
            <div key={customer.id} className="grid items-center border-b border-[#f1f1f1] px-4 hover:bg-[#f7f7f7] transition-colors" style={{ height: "52px", gridTemplateColumns: "40px 1fr 140px 160px 80px 120px" }}>
              <div className="px-0"><input type="checkbox" className="size-4 rounded-[4px] border border-[#8a8a8a] accent-[#303030]" /></div>
              <div><Link to="/customers/$id" params={{ id: customer.id }} className="text-[12px] text-text-primary hover:underline" style={{ fontWeight: 450 }}>{customer.firstName} {customer.lastName}</Link></div>
              <div><EmailSubscriptionBadge status={customer.emailSubscription as "subscribed" | "not_subscribed"} /></div>
              <div className="text-[12px] text-text-primary" style={{ fontWeight: 450 }}>{customer.city}, {customer.country}</div>
              <div className="text-[12px] text-text-primary" style={{ fontWeight: 450 }}>{customer.orders}</div>
              <div className="text-[12px] text-text-primary" style={{ fontWeight: 450 }}>{formatCurrency(customer.amountSpent)}</div>
            </div>
          ))}
        </div>
      </AdminCard>
      <LearnMoreFooter />
      <DevToggle label="Show empty state" onClick={onToggle} />
    </>
  );
}

function LearnMoreFooter() {
  return (
    <div className="flex justify-center mt-4">
      <a href="#" className="text-[12px] text-text-primary hover:underline" style={{ fontWeight: 450 }}>Learn more about customers</a>
    </div>
  );
}

function DevToggle({ label, onClick }: { readonly label: string; readonly onClick: () => void }) {
  return (
    <div className="flex justify-center mt-6">
      <button type="button" onClick={onClick} className="text-[11px] text-[#8a8a8a] border border-dashed border-[#ccc] rounded px-2 py-1 hover:bg-[#f7f7f7] transition-colors">{label}</button>
    </div>
  );
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR" }).format(amount);
}

function CustomersIllustration() {
  return (
    <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="30" width="120" height="70" rx="12" fill="#f1f1f1" />
      <circle cx="80" cy="45" r="16" fill="#d4f3e5" />
      <circle cx="80" cy="37" r="8" fill="#303030" />
      <path d="M64 58 C64 50 96 50 96 58" fill="#303030" opacity="0.8" />
      <circle cx="42" cy="55" r="11" fill="#ebebeb" />
      <circle cx="42" cy="49" r="5.5" fill="#616161" />
      <path d="M31 63 C31 57 53 57 53 63" fill="#616161" opacity="0.7" />
      <circle cx="118" cy="55" r="11" fill="#d4f3e5" />
      <circle cx="118" cy="49" r="5.5" fill="#014b40" />
      <path d="M107 63 C107 57 129 57 129 63" fill="#014b40" opacity="0.7" />
      <circle cx="30" cy="85" r="3" fill="#d4f3e5" />
      <circle cx="130" cy="85" r="3" fill="#ebebeb" />
      <circle cx="80" cy="90" r="2.5" fill="#d4f3e5" opacity="0.6" />
    </svg>
  );
}
