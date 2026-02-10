## Why

The admin app currently uses a generic starter template layout with no structured navigation or app shell. To build a production-quality admin portal to manage an ecommerce platform, we need a Shopify-style admin interface — starting with the foundational shell (top bar, sidebar, main content area) and routing structure that all future pages will render inside. This is the first step in a multi-phase UI redesign; no API integration or database changes are in scope.

## What Changes

- **New app shell layout** wrapping all authenticated routes: fixed top bar (56px, dark), fixed sidebar (240px, light), and scrollable main content area
- **Top bar component** with logo, search bar placeholder, and right-side icon buttons (notifications, store switcher)
- **Sidebar component** with primary navigation items, expandable sub-navigation, section headers (Sales channels, Apps), and a pinned Settings link
- **Tailwind design tokens** mapped from Shopify Polaris: custom colors, spacing, font sizes, border radii, and box shadows
- **Route restructuring** under the `_auth` layout to match Shopify's URL structure: Home, Orders, Products, Customers, Marketing, Discounts, Content, Markets, Analytics, Online Store, Settings — all as empty placeholder pages with just an H1 title
- **Shared UI components**: Card, Button (primary/secondary/tertiary/ghost), and Input field styled to match Polaris tokens
- **BREAKING**: The existing `/_auth/dashboard` route and layout will be replaced by the new shell and route structure

## Capabilities

### New Capabilities
- `admin-shell-layout`: The app shell (TopBar + Sidebar + main content area), Tailwind design tokens, and the authenticated layout wrapper
- `admin-navigation`: Sidebar navigation structure with expandable sections, sub-nav items, active states, and section headers
- `admin-routes`: File-based route definitions for all primary and secondary navigation destinations, including detail/create routes
- `admin-shared-components`: Shared Polaris-styled Button, Card, and Input components used across all admin pages

### Modified Capabilities
_(none — no existing specs are changing at the requirements level)_

## Impact

- **Code**: `apps/admin/src/` — new components, route files, and Tailwind config extensions
- **Routes**: Existing `/_auth/dashboard` route replaced; new flat route structure under `/_auth`
- **Dependencies**: May add `lucide-react` for icons and `@fontsource/inter` or Google Fonts link for the Inter typeface
- **No backend changes**: No API calls, database migrations, or server-side logic
