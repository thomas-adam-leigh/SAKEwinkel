## Context

The admin app (`apps/admin/`) is a TanStack Start application using Tailwind CSS v4, React 19, lucide-react, and file-based routing. The current layout is a generic starter template — authenticated routes live under `_auth/` with a simple `Outlet` wrapper and a dashboard page. There is no app shell, navigation structure, or Shopify-style design tokens.

The existing CSS (`src/styles.css`) uses Tailwind v4's `@theme inline` block with shadcn CSS variables. The Polaris design tokens need to be added alongside these without breaking existing shadcn component theming.

## Goals / Non-Goals

**Goals:**
- Pixel-accurate reproduction of the Shopify admin shell (top bar, sidebar, main content area)
- Complete routing structure matching Shopify's URL hierarchy, with empty placeholder pages
- Polaris design tokens available as Tailwind utilities throughout the app
- Sidebar navigation with expandable sections and active state tracking
- Shared Button, Card, and Input components matching Polaris styling

**Non-Goals:**
- No API integration, data fetching, or database changes
- No search modal functionality (search bar is a visual placeholder only)
- No responsive/mobile sidebar collapse (desktop-only for now)
- No dark mode for the admin shell (Shopify admin is light-only)
- No page content beyond H1 titles — individual page designs come in later changes

## Decisions

### 1. Tailwind v4 CSS-based tokens (not tailwind.config.js)

The project uses Tailwind v4 with `@tailwindcss/vite`, which configures theme via `@theme inline` blocks in CSS — not a `tailwind.config.js` file. All Polaris design tokens (colors, spacing, font sizes, radii, shadows) will be added as CSS custom properties in `styles.css` and mapped via `@theme inline`.

**Why not tailwind.config.js:** Tailwind v4 doesn't use config files by default. The project already has `@theme inline` for shadcn tokens. Adding Polaris tokens in the same pattern keeps things consistent and avoids introducing a config file that fights the v4 conventions.

### 2. Route structure: flat under `_auth/` layout route

All admin pages will be file-based routes under `src/routes/_auth/`. The `_auth/route.tsx` layout will render the app shell (TopBar + Sidebar + main content area) instead of the current bare `Outlet`.

Route files will use TanStack Start's file-based routing conventions:
- `_auth/route.tsx` → shell layout (replaces current `Outlet`-only component)
- `_auth/index.tsx` → Home (`/`)
- `_auth/orders/index.tsx` → Orders (`/orders`)
- `_auth/orders/drafts.tsx` → Order drafts (`/orders/drafts`)
- `_auth/products/$id.tsx` → Product detail (`/products/:id`)
- etc.

**Why flat under `_auth/`:** The existing auth guard in `_auth/route.tsx` already handles redirecting unauthenticated users. Making this the shell layout means every authenticated route automatically gets the app shell. No new layout nesting needed.

**Why remove `_auth/dashboard/`:** The current `dashboard/` nesting adds an unnecessary URL segment. Shopify's admin routes are flat from the root — `/orders`, `/products`, etc. — not `/dashboard/orders`.

### 3. Sidebar state: React state with URL-based active detection

The sidebar will track expanded sections with local React state (useState). The active nav item will be derived from the current URL using TanStack Router's `useLocation` or `Link` component's active props.

**Why local state over URL params:** Expanded/collapsed sidebar sections are UI state, not navigation state. Storing them in the URL would pollute the address bar. React state is simpler and resets appropriately on navigation.

### 4. Inter font via Google Fonts link

Add the Inter font via a `<link>` tag in the root `<head>` rather than bundling `@fontsource/inter`.

**Why Google Fonts:** Simpler setup (one `<link>` tag), CDN-cached for most users, and avoids adding a dependency. The Inter font family is already the first entry in the Polaris font stack.

### 5. New Polaris component files alongside existing shadcn components

Polaris-styled components (Button, Card, Input) will live in `src/components/admin/` to separate them from existing shadcn `src/components/ui/` components. This avoids breaking existing shadcn components while building out the Shopify-style UI.

**Why not replace shadcn components:** The shadcn Button/Input may still be used in auth pages (login, signup). Keeping both available avoids scope creep. The Polaris components are specific to the admin shell.

### 6. Shell component structure

```
src/components/admin/
  app-shell.tsx      — layout wrapper (TopBar + Sidebar + main area)
  top-bar.tsx        — fixed dark header with logo, search, icons
  sidebar.tsx        — fixed light sidebar with nav
  nav-item.tsx       — single nav item (icon + label + optional chevron)
  nav-section.tsx    — section header ("Sales channels", "Apps")
  card.tsx           — Polaris-styled card
  button.tsx         — Polaris button variants (primary/secondary/tertiary/ghost)
  input.tsx          — Polaris-styled input field
  page-header.tsx    — shared H1 header row with back arrow
```

The `_auth/route.tsx` will import and render `<AppShell>` which composes TopBar, Sidebar, and the `<Outlet />` for page content.

## Risks / Trade-offs

**[Dual component systems]** → Having both shadcn and Polaris components may confuse future contributors. Mitigated by clear directory separation (`ui/` vs `admin/`) and removing shadcn components once the full redesign is complete.

**[No responsive design]** → The fixed 240px sidebar won't work on mobile. This is an explicit non-goal for now — responsive collapse will be a future change. Risk is low since this is an internal admin tool.

**[Token name collisions]** → Polaris token names (like `--color-bg-surface`) could theoretically conflict with shadcn variables. Mitigated by using a `polaris-` or `p-` prefix namespace for Polaris-specific tokens in the `@theme inline` block (e.g., `--color-bg-page`, `--color-text-primary` which don't overlap with shadcn's `--color-background`, `--color-foreground`).

**[Large number of route files]** → Creating ~25+ empty route files is tedious but necessary for TanStack's file-based routing to generate the route tree. Each file is minimal (component + H1 title), so maintenance burden is low.
