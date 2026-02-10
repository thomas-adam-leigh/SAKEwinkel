## 1. Design Tokens & Font Setup

- [x] 1.1 Add Polaris design tokens (colors, spacing, font sizes, font weights, border radii, box shadows) as CSS custom properties in `src/styles.css` and map them via `@theme inline`
- [x] 1.2 Add Inter font via Google Fonts `<link>` tag in `__root.tsx` head and configure `font-sans` to use Inter with system fallbacks

## 2. App Shell Components

- [x] 2.1 Create `src/components/admin/top-bar.tsx` — fixed dark header (56px, `#1a1a1a`, z-50) with CSS grid layout: left section (logo glyph + wordmark), center section (search bar placeholder with icon and ⌘K badges), right section (notification bell, store switcher with avatar)
- [x] 2.2 Create `src/components/admin/nav-item.tsx` — reusable nav item component with icon, label, optional chevron for expandable items, hover state (`rgba(0,0,0,0.05)`), and active state (`rgba(0,0,0,0.08)`) derived from current URL
- [x] 2.3 Create `src/components/admin/nav-section.tsx` — section header component ("Sales channels", "Apps") with toggle chevron and collapsible children
- [x] 2.4 Create `src/components/admin/sidebar.tsx` — fixed sidebar (240px, `#ebebeb`, z-40, below top bar) composing nav items, expandable sub-navigation with local React state, section headers, Apps "Add" button, and Settings pinned to bottom via flex spacer. Auto-expand parent when navigating to a sub-page
- [x] 2.5 Create `src/components/admin/app-shell.tsx` — layout wrapper composing TopBar + Sidebar + scrollable main content area (`ml-[240px] mt-[56px] min-h-[calc(100vh-56px)] bg-bg-page`)

## 3. Shared UI Components

- [x] 3.1 Create `src/components/admin/button.tsx` — Polaris-styled button with variants: primary (`#303030` bg, white text, inset shadow), secondary (white bg, dark text, secondary shadow), tertiary (`#e3e3e3` bg, no shadow), and ghost (transparent, underline on hover)
- [x] 3.2 Create `src/components/admin/card.tsx` — Polaris-styled card (white bg, 12px border-radius, shadow-100)
- [x] 3.3 Create `src/components/admin/input.tsx` — Polaris-styled input (gray border, `#fdfdfd` bg, 32px height, blue focus ring)
- [x] 3.4 Create `src/components/admin/page-header.tsx` — shared H1 header (18px, font-weight 600, `#303030`) with back arrow icon for breadcrumb navigation

## 4. Layout Route Integration

- [x] 4.1 Update `src/routes/_auth/route.tsx` to render `<AppShell>` wrapping the `<Outlet />` instead of bare `<Outlet />`
- [x] 4.2 Remove `src/routes/_auth/dashboard/` directory (index.tsx and route.tsx)

## 5. Primary Navigation Routes

- [x] 5.1 Create `src/routes/_auth/index.tsx` — Home page placeholder (`/`)
- [x] 5.2 Create `src/routes/_auth/orders/index.tsx` — Orders page placeholder (`/orders`)
- [x] 5.3 Create `src/routes/_auth/products/index.tsx` — Products page placeholder (`/products`)
- [x] 5.4 Create `src/routes/_auth/customers/index.tsx` — Customers page placeholder (`/customers`)
- [x] 5.5 Create `src/routes/_auth/marketing/index.tsx` — Marketing page placeholder (`/marketing`)
- [x] 5.6 Create `src/routes/_auth/discounts/index.tsx` — Discounts page placeholder (`/discounts`)
- [x] 5.7 Create `src/routes/_auth/content/index.tsx` — Content page placeholder (`/content`)
- [x] 5.8 Create `src/routes/_auth/markets/index.tsx` — Markets page placeholder (`/markets`)
- [x] 5.9 Create `src/routes/_auth/analytics/index.tsx` — Analytics page placeholder (`/analytics`)

## 6. Sub-Navigation Routes

- [x] 6.1 Create Orders sub-routes: `orders/drafts.tsx` (`/orders/drafts`), `orders/abandoned.tsx` (`/orders/abandoned`)
- [x] 6.2 Create Products sub-routes: `products/collections.tsx`, `products/inventory.tsx`, `products/purchase-orders.tsx`, `products/transfers.tsx`, `products/gift-cards.tsx`
- [x] 6.3 Create Customers sub-routes: `customers/segments.tsx` (`/customers/segments`)
- [x] 6.4 Create Marketing sub-routes: `marketing/automations.tsx`, `marketing/campaigns.tsx`
- [x] 6.5 Create Content sub-routes: `content/metaobjects.tsx`, `content/files.tsx`
- [x] 6.6 Create Analytics sub-routes: `analytics/reports.tsx`, `analytics/live.tsx`

## 7. Secondary & Detail Routes

- [x] 7.1 Create `src/routes/_auth/online-store/index.tsx` — Online Store placeholder (`/online-store`)
- [x] 7.2 Create `src/routes/_auth/settings/index.tsx` — Settings placeholder (`/settings`)
- [x] 7.3 Create detail/create routes: `products/new.tsx`, `products/$id.tsx`, `orders/$id.tsx`, `customers/new.tsx`, `customers/$id.tsx`

## 8. Verification

- [x] 8.1 Run type check (`pnpm check-types`) and fix any TypeScript errors
- [x] 8.2 Visually verify: top bar is fixed dark header with logo, search placeholder, and icon buttons at correct dimensions
- [x] 8.3 Visually verify: sidebar is fixed, 240px, correct background, nav items with icons, expandable sub-nav, settings at bottom
- [x] 8.4 Visually verify: main content area scrolls independently, correct margins and background color
- [x] 8.5 Verify all routes render their placeholder H1 titles and that `/dashboard` shows not-found
