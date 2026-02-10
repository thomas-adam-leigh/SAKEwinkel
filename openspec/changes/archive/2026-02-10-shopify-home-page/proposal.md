## Why

The admin home page (`/`) is currently a placeholder H1. As the first screen users see after login, it needs to match Shopify's admin dashboard — providing onboarding guidance, store status, and quick actions. This is the first page-level UI implementation following the core infrastructure (shell layout, navigation, design tokens, shared components) completed in step 00.

## What Changes

- Replace the placeholder home page route (`_auth/index.tsx`) with a full Shopify-style admin dashboard
- Add a trial banner component at the top of the main content area with dismiss functionality
- Add a greeting section with time-of-day–aware welcome message
- Add a Sidekick-style chat input area (UI shell only, non-functional)
- Add a store name header section with edit link
- Add a product preview card showing a recently added product
- Add four setup guide cards: design your store, payment provider, shipping rates, domain customization
- Add an educational content card (learn dropshipping)
- Add a fixed-position floating trial bar at the bottom-right corner
- Create mock JSON data files for product and store information
- All components are UI-only — no API calls, no database queries

## Capabilities

### New Capabilities

- `home-greeting`: Welcome greeting section with time-aware message, Sidekick chat input (UI only), and store name header — the top portion of the home dashboard
- `home-setup-cards`: Product preview card, four setup guide cards (design store, payment provider, shipping rates, domain), and educational content card — the main body of the home dashboard
- `home-trial-banners`: Dismissible trial banner at the top of content and a fixed floating trial bar at the bottom-right corner — promotional/onboarding overlays

### Modified Capabilities

_(none — no existing spec requirements are changing)_

## Impact

- **Routes:** `apps/admin/src/routes/_auth/index.tsx` — full rewrite from placeholder to dashboard
- **Components:** New home-page–specific components in `apps/admin/src/components/` (or a `home/` subdirectory)
- **Data:** New mock JSON data files in `apps/admin/src/data/` for product and store info
- **Shared components used:** Card, Button, Input from existing shared components
- **No changes to:** App shell, TopBar, Sidebar, routing config, authentication, database, APIs
