## Context

The app shell (top bar, sidebar, main content area) is fully implemented at step 00. The `/products/new` route exists as a stub with only an H1. We now need to build the complete "Add product" form page that renders inside the existing `<main>` area of `AppShell`.

Existing reusable components: `AdminCard`, `AdminInput`, `AdminButton`, `PageHeader`. The `packages/ui/` library provides 50+ shadcn/ui primitives including `switch.tsx`, `select.tsx`, `checkbox.tsx`, `textarea.tsx`, `combobox.tsx`, and `toggle.tsx`.

Design tokens (Polaris) are defined in `apps/admin/src/styles.css` via Tailwind v4 `@theme inline` — colors, spacing, typography, shadows, and border radii are all available as Tailwind utilities (e.g., `bg-bg-surface`, `text-text-primary`, `rounded-[var(--radius-polaris-200)]`).

The spec reference (`docs/shopify-redesign/04-new-product.md`) provides pixel-level CSS values for every element on the page.

## Goals / Non-Goals

**Goals:**
- Pixel-accurate recreation of the Shopify "Add product" form page UI
- Establish reusable form patterns (two-column layout, expandable options, field groups) for future pages
- All form fields render with correct Polaris styling (inputs, selects, toggles, checkboxes, spinbuttons)
- Contextual save bar appears in the page content area (not modifying the TopBar component)
- Static/mock data only — form fields are interactive (type, toggle, expand) but submit nowhere

**Non-Goals:**
- No API integration, no database calls, no form submission logic
- No modifications to TopBar, Sidebar, or AppShell components
- No responsive/mobile layout (Shopify admin is desktop-first, matches current shell)
- No rich text editor implementation (toolbar placeholder with icons, no actual formatting)
- No file upload functionality (visual drop zone only)
- No product variant matrix/table (just the "Add options like size or color" expandable button)

## Decisions

### 1. Component organization: colocated page components in a `products/` directory

Product form components will live in `apps/admin/src/components/admin/products/`. The main page component orchestrates them from the route file.

**Why:** Keeps route files thin. Groups related components by domain. Other pages (orders, customers) will follow the same pattern with their own subdirectories.

**Alternative considered:** Putting everything in the route file — rejected because 12+ card sections would make the file 1000+ lines and hard to navigate.

### 2. Contextual save bar: rendered inside the page, not modifying TopBar

The save bar (Unsaved product / Discard / Save) will be rendered as a sticky bar at the top of the main content area, visually overlapping the content zone. We will NOT modify the `TopBar` component.

**Why:** The user explicitly stated not to modify the app bar. A sticky save bar within the content area achieves the same visual effect. If future work needs it integrated into TopBar, that can be a separate change with context/state management.

**Alternative considered:** Passing save bar state up to TopBar via context — rejected per scope constraint.

### 3. Two-column layout: CSS flexbox with Polaris negative margin technique

Use the exact Polaris layout approach from the spec: `display: flex; flex-wrap: wrap; margin: -16px 0 0 -16px` with children having `margin: 16px 0 0 16px`. Left column: `flex: 2 2 480px`, right column: `flex: 1 1 240px`. Max-width 998px, centered.

**Why:** Matches Shopify's exact layout behavior including how cards wrap on narrow viewports. Using the same CSS ensures identical spacing.

**Alternative considered:** CSS grid — would also work but wouldn't match the flex-wrap behavior exactly.

### 4. Form fields: extend existing AdminInput + build new specialized field components

- **AdminInput** — reuse as-is for plain text inputs
- **PriceInput** — new, wraps AdminInput with a currency prefix ("R ") inside the wrapper
- **AdminSelect** — new, styled native select matching Polaris input height/border/radius
- **AdminToggle** — new, 36×20px toggle switch matching Polaris spec exactly
- **AdminCheckbox** — new, 16×16px checkbox with Polaris styling
- **SpinButton** — new, number input with increment/decrement controls
- **ExpandableOptions** — new, row of "+" buttons that reveal hidden fields when clicked
- **MediaDropZone** — new, dashed-border upload area (visual only)
- **RichTextToolbar** — new, toolbar with icon buttons (visual placeholder, non-functional)
- **ComboboxField** — new, input with dropdown chevron for autocomplete fields

**Why:** Building these as standalone components establishes the field library for all future form pages. Each maps 1:1 to a Polaris form control.

**Alternative considered:** Using shadcn/ui primitives directly — partially applicable for select/checkbox/switch, but their default styling doesn't match Polaris. We'll build custom components that use Polaris tokens directly.

### 5. Mock data: static defaults in component props, optional JSON data file

Form fields will have sensible defaults/placeholders matching the Shopify spec (e.g., placeholder "Short sleeve t-shirt" for title). For the inventory location table, a small inline data array will suffice. No separate JSON data directory needed unless images are required (they are not for this page).

**Why:** The form is mostly empty by default (it's a "new" product). Static placeholders match the spec exactly. Avoids unnecessary data file overhead.

### 6. Expandable sections: local React state with show/hide toggle

Each expandable option group (Price extras, Inventory extras, Shipping extras) uses `useState` booleans. Clicking a "+" button sets state to true and renders the hidden field. The button disappears when the field is shown.

**Why:** Simple, no external state needed. Each card manages its own expansion state independently.

## Risks / Trade-offs

- **Rich text editor is a placeholder** → We render a toolbar with formatting icons and an empty contentEditable area. Full RTE integration (TipTap, Plate, etc.) is a future concern. Mitigation: clearly mark as placeholder in code comments.

- **No form validation or submission** → Fields accept input but nothing is validated or persisted. Mitigation: form elements use standard HTML attributes (type, min, max) for basic browser behavior. Actual validation will come with API integration.

- **Contextual save bar is within content, not in TopBar** → Visual position differs slightly from Shopify's actual TopBar integration. Mitigation: position it as a sticky bar at the top of the scrollable content area so it looks natural. Future work can integrate it into TopBar.

- **Custom form components over shadcn/ui** → Building Polaris-styled fields from scratch rather than restyling shadcn. Mitigation: keeps components simple and avoids fighting shadcn's default styling. The components are small and focused.
