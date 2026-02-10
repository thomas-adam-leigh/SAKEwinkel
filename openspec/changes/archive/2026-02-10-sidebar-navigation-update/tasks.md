## 1. Route Cleanup

- [x] 1.1 Delete unused sub-navigation route files: `orders/drafts.tsx`, `orders/abandoned.tsx`, `orders/$id.tsx`, `products/$id.tsx`, `products/collections.tsx`, `products/inventory.tsx`, `products/purchase-orders.tsx`, `products/transfers.tsx`, `products/gift-cards.tsx`, `customers/new.tsx`, `customers/$id.tsx`, `customers/segments.tsx`
- [x] 1.2 Delete unused primary route files: `marketing/` directory (all files), `content/` directory (all files), `discounts.tsx`, `markets.tsx`, `online-store.tsx`, `settings.tsx`
- [x] 1.3 Delete unused analytics sub-routes: `analytics/reports.tsx`, `analytics/live.tsx`

## 2. New Route Files

- [x] 2.1 Create `/suppliers` route (`_auth/suppliers/route.tsx`) with placeholder H1 "Suppliers"
- [x] 2.2 Create `/suppliers/new` route (`_auth/suppliers/new.tsx`) with placeholder H1 "Add supplier"
- [x] 2.3 Create `/legal` route (`_auth/legal/route.tsx`) with placeholder H1 "Legal"
- [x] 2.4 Create `/email-templates` route (`_auth/email-templates/route.tsx`) with placeholder H1 "Email Templates"
- [x] 2.5 Create `/reports` route (`_auth/reports/route.tsx`) with placeholder H1 "Reports"

## 3. NavItem Component Update

- [x] 3.1 Remove `expandable`, `expanded`, `onToggle`, and `indent` props from `NavItem`
- [x] 3.2 Add optional `comingSoon` boolean prop to `NavItem` that renders a "Coming soon" pill badge (11px, font-weight 550, pill shape, bg `#e4e4e4`, color `#616161`)
- [x] 3.3 Add optional `disabled` boolean prop to `NavItem` — when true, render as `<div>` instead of `<Link>`, use `cursor-default`, suppress hover background

## 4. NavSection Component Update

- [x] 4.1 Update `NavSection` to support a `static` mode: render as a plain label (uppercase, 12px, font-weight 600, color `#616161`, letter-spacing 0.5px) without collapse/expand toggle or chevron

## 5. Sidebar Restructure

- [x] 5.1 Rewrite `sidebar.tsx` — replace expandable nav items array and expand/collapse state with the new sectioned layout: Home (standalone), Operations (Orders, Products, Suppliers, Customers), Insights (Analytics, Reports), Growth (Marketing, Content), Configuration (Legal, Email Templates)
- [x] 5.2 Add appropriate lucide-react icons for new items: Truck for Suppliers, Scale for Legal, Mail for Email Templates, FileBarChart for Reports
- [x] 5.3 Apply `comingSoon` prop to Reports, Marketing, and Content nav items
- [x] 5.4 Apply `disabled` prop to Marketing and Content nav items (no route targets)
- [x] 5.5 Remove Sales channels section, Apps section, Settings link, Discounts item, and Markets item
