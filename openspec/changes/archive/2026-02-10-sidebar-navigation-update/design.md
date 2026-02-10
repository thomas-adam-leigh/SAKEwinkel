## Context

The admin sidebar currently mirrors Shopify's default navigation: 9 primary nav items (6 with expandable sub-nav), 2 secondary items, a "Sales channels" section, an "Apps" section, and a pinned Settings link. The sidebar component (`sidebar.tsx`) uses an `expandableNavItems` array and manages expand/collapse state. Routes are defined as TanStack Router file-based routes under `_auth/`.

The admin has grown beyond the generic Shopify template. SAKEwinkel needs a sidebar that reflects its actual operational structure — core commerce operations, analytics, and configuration — with clear grouping and room for future features.

## Goals / Non-Goals

**Goals:**
- Reorganize sidebar into semantic sections (Operations, Insights, Growth, Configuration) that reflect actual admin workflows
- Remove all sub-navigation (no expandable items) — each nav item links directly to its page
- Add Suppliers, Legal, Email Templates, and Reports as new nav destinations
- Add a "Coming Soon" pill badge for Marketing, Content, and Reports
- Clean up route files — delete ~20 unused routes, add 5 new ones
- Maintain existing styling conventions (28px height, 13px font, Polaris tokens)

**Non-Goals:**
- Changing the top bar or overall shell layout
- Building out the actual Suppliers, Legal, Email Templates, or Reports pages (just placeholder routes)
- Adding authentication/permissions to routes
- Responsive or mobile sidebar behavior

## Decisions

### 1. Sidebar structure: four named sections with standalone Home

**Decision**: Home stays as a standalone item at the top. All other items live in named sections using the existing `NavSection` component.

```
Home

─ Operations ─
  Orders
  Products
  Suppliers
  Customers

─ Insights ─
  Analytics
  Reports [coming soon]

─ Growth ─
  Marketing [coming soon]
  Content [coming soon]

─ Configuration ─
  Legal
  Email Templates
```

**Rationale**: Sections provide clear mental model for different admin concerns. "Operations" covers daily commerce. "Insights" groups data/analytics. "Growth" holds future marketing features. "Configuration" contains set-once items. This is more intuitive than a flat list.

**Alternative considered**: Keeping Marketing and Content as standalone items without a section. Rejected because grouping them communicates they're related future features, and having a section ready means no sidebar restructuring when they ship.

### 2. No expandable nav items

**Decision**: Remove all expand/collapse behavior. Every nav item is a direct link. The `expandable`, `expanded`, `onToggle`, and `indent` props on `NavItem` are no longer needed.

**Rationale**: With sub-nav items removed, there's nothing to expand. Simpler component, less state to manage.

### 3. Coming soon nav items are non-navigable

**Decision**: Nav items with "coming soon" badges (Marketing, Content, Reports) render as `<div>` elements instead of `<Link>` components. They show the pill but don't navigate anywhere. Exception: Reports DOES have a route (`/reports`) so it should navigate but still show the pill. Marketing and Content have no routes and are purely visual.

Wait — the user wants /reports as a route. So Reports should be a navigable link with a coming soon pill. Marketing and Content should be non-navigable with a coming soon pill.

**Rationale**: Reports has a placeholder page; Marketing and Content don't. Non-navigable items avoid confusion (clicking a "coming soon" item and seeing a 404).

### 4. Route cleanup approach

**Decision**: Delete route files one-by-one rather than bulk-deleting the directory. This avoids accidentally removing the `_auth/route.tsx` layout or other structural files.

New routes to create:
- `_auth/suppliers/route.tsx` — placeholder
- `_auth/suppliers/new.tsx` — placeholder
- `_auth/legal/route.tsx` — placeholder
- `_auth/email-templates/route.tsx` — placeholder
- `_auth/reports/route.tsx` — placeholder

Routes to delete (everything not in the target list):
- `_auth/orders/drafts.tsx`, `_auth/orders/abandoned.tsx`, `_auth/orders/$id.tsx`
- `_auth/products/$id.tsx`, `_auth/products/collections.tsx`, `_auth/products/inventory.tsx`, `_auth/products/purchase-orders.tsx`, `_auth/products/transfers.tsx`, `_auth/products/gift-cards.tsx`
- `_auth/customers/new.tsx`, `_auth/customers/$id.tsx`, `_auth/customers/segments.tsx`
- `_auth/marketing/` (entire directory)
- `_auth/content/` (entire directory)
- `_auth/discounts.tsx`
- `_auth/markets.tsx`
- `_auth/analytics/reports.tsx`, `_auth/analytics/live.tsx`
- `_auth/online-store.tsx`
- `_auth/settings.tsx`

### 5. Coming Soon pill implementation

**Decision**: Add an optional `comingSoon` prop to `NavItem`. When set, it renders a small pill badge inline after the label. Styling follows existing badge patterns: 11px font, font-weight 550, pill shape (border-radius 9999px), muted background (#e4e4e4), color #616161.

**Alternative considered**: Creating a separate `ComingSoonBadge` component. Rejected — it's simple enough to be inline in `NavItem`.

### 6. Sections default to open, not collapsible

**Decision**: Section headers in the new sidebar are static labels (not toggleable). Remove the collapse/expand chevron from `NavSection` for the sidebar sections. They always show their children.

**Rationale**: With only 2-4 items per section, collapsing provides no value and adds unnecessary interaction. The sidebar is short enough to show everything.

**Alternative considered**: Keeping sections collapsible. Rejected because the total nav count is small (~11 items) and collapsing creates hiding problems.

## Risks / Trade-offs

- **Breaking bookmarks**: Users who bookmarked removed routes (e.g., `/orders/drafts`, `/products/collections`) will hit 404. → Low risk for an internal admin tool.
- **Component cleanup**: Removing expandable nav behavior means any code depending on `NavItem`'s `expandable` prop breaks. → Contained to sidebar, no external consumers.
- **Marketing/Content nav items not clickable**: Could confuse users expecting them to go somewhere. → Mitigated by the visible "Coming Soon" pill.
