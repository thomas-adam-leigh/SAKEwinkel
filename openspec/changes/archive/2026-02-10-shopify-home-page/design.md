## Context

The admin app shell is fully implemented: `TopBar` (fixed, 56px, `#1a1a1a`), `Sidebar` (fixed, 240px, `#ebebeb`), and a main content area (`ml-[240px] mt-[56px] bg-bg-page p-6`). Shared components exist for `AdminCard`, `AdminButton` (4 variants), `AdminInput`, and `PageHeader`. All Polaris design tokens are mapped to Tailwind v4 via `@theme inline` in `styles.css`.

The home page route (`_auth/index.tsx`) renders inside the `<Outlet />` of `AppShell`, so it receives `p-6` padding from the main container. The page currently renders a single `<h1>Home</h1>`.

This is the first page-level UI build. Decisions here set the pattern for all subsequent page implementations.

## Goals / Non-Goals

**Goals:**
- Pixel-accurate recreation of Shopify's admin Home page main content area
- Establish a component organization pattern for page-specific components
- Use mock data to demonstrate UI without backend integration
- Reuse existing shared components (`AdminCard`, `AdminButton`, `AdminInput`) wherever they fit

**Non-Goals:**
- No functional Sidekick chat (UI shell only — textarea + buttons, no submission logic)
- No backend API integration, database queries, or server functions
- No changes to `AppShell`, `TopBar`, `Sidebar`, or routing config
- No persisted state (banner dismissal resets on page reload)
- No responsive/mobile layout — desktop-only matching Shopify's admin viewport
- No dark mode support (Shopify admin is light-only)

## Decisions

### 1. Component file organization

**Decision:** Create home-specific components in `apps/admin/src/components/home/`.

**Rationale:** Page-specific components don't belong alongside shared admin components. A `home/` directory keeps them scoped and sets the pattern for `orders/`, `products/`, etc. Each component file handles one visual section. An `index.ts` barrel export keeps imports clean from the route file.

**Alternatives considered:**
- Inline everything in `index.tsx` — rejected, the page has 8+ distinct sections; a single file would exceed 500 lines and be hard to maintain.
- Put components in `components/admin/home/` — rejected, nesting page components inside admin shared components conflates concerns.

### 2. Mock data approach

**Decision:** Create `apps/admin/src/data/home.ts` exporting typed constants (not JSON files).

**Rationale:** TypeScript constants give us type safety and IDE autocomplete. They can be imported directly without JSON parsing. A single `home.ts` file is simpler than multiple JSON files for a small dataset (store name, product info, setup guide items).

**Alternatives considered:**
- JSON files in `src/data/` — rejected, requires type assertions and loader boilerplate for no benefit.
- Inline mock data in components — rejected, scatters data across files and makes it hard to find/update.

### 3. Trial banner dismiss state

**Decision:** Use React `useState` local to the home page component. Banner reappears on page reload.

**Rationale:** This is a UI-only implementation. Persisting dismiss state would require localStorage or a backend call, both of which add complexity beyond the current scope. The banner is a demo element.

### 4. Time-of-day greeting

**Decision:** Compute greeting text ("Good morning/afternoon/evening") from `new Date().getHours()` at render time.

**Rationale:** Matches Shopify's behavior. No timezone library needed — the browser's local time is correct for the user. The greeting is a static string, not a live clock.

### 5. Floating trial bar positioning

**Decision:** Use `fixed` positioning with `bottom: 16px`, `right: 16px`, `z-index: 30`.

**Rationale:** Matches the Shopify spec exactly. `z-index: 30` sits below the TopBar (50) and Sidebar (40) but above page content. The bar overlaps the main content area only, not the sidebar, because it's right-aligned.

### 6. Layout structure within main content

**Decision:** Single-column vertical stack with `flex flex-col gap-4` on the page container. No CSS Grid needed.

**Rationale:** The Shopify home page is a simple vertical flow — banner, greeting, chat input, store name, cards stacked vertically. The setup guide cards also stack vertically (not a grid). This matches the reference exactly.

### 7. Reuse of existing `AdminCard` component

**Decision:** Use `AdminCard` for all card-like sections (product preview, setup guides, educational content). Apply padding via `className` prop. The trial banner at the top also uses `AdminCard` since it's a white rounded-corner surface with shadow.

**Rationale:** `AdminCard` already provides `bg-bg-surface rounded-[12px] shadow-[var(--shadow-polaris-100)]` which matches the spec. Adding inner padding per-use via className is simpler than adding padding variants to the shared component.

### 8. Icons approach

**Decision:** Use Lucide React icons (already installed in the project) for UI icons. Where Shopify uses specific icons not in Lucide, use the closest visual match.

**Alternatives considered:**
- Install `@shopify/polaris-icons` — rejected, adds a dependency for a small number of icons. Lucide covers the common cases (search, pencil, X, chevron, check, play, plus).

## Risks / Trade-offs

- **Greeting accuracy** — The time-of-day greeting uses browser local time, which may differ from the user's expected timezone in testing. → Acceptable for UI-only; no mitigation needed.
- **Mock data drift** — When real API integration happens later, the mock data structure may not match the actual schema. → Mitigated by using simple, obvious field names (`storeName`, `productName`, `productPrice`) that map naturally to real entities.
- **Component granularity** — Breaking the page into ~8 component files may feel heavy for a single page. → Trade-off accepted; each component is small (30-80 lines) and independently testable. This pattern scales to more complex pages.
- **No responsive design** — The page will not adapt to narrow viewports. → Explicitly a non-goal; Shopify's admin itself is desktop-first. Can be addressed in a future change.
