## Context

The admin app shell is complete. The Products route currently renders a placeholder H1.

## Goals / Non-Goals

**Goals:** Pixel-perfect Products list page, reuse shared components, static mock data.
**Non-Goals:** No API integration, no functional search/filter, no responsive layout.

## Decisions

1. Flat page-specific component folder at `apps/admin/src/components/admin/products/`
2. CSS Grid data table (matches Shopify spec)
3. Mock data in `apps/admin/src/data/products.json`
4. Checkbox state via local `useState` with `Set<string>`
5. Tab state via `useState<string>('all')` (visual only)
6. Status badge color mapping object
