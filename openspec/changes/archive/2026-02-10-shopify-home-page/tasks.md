## 1. Setup and scaffolding

- [x] 1.1 Create git worktree at `./worktrees/shopify-home-page` branching from `main`
- [x] 1.2 Create `apps/admin/src/data/home.ts` with typed mock data constants (store name, store domain, product name, product price, product image URL)
- [x] 1.3 Create `apps/admin/src/components/home/` directory with barrel `index.ts` export file

## 2. Trial banners (home-trial-banners)

- [x] 2.1 Create `components/home/trial-banner.tsx` — dismissible banner with "Get 3 months for $1/month" text, "Select a plan" link, and X dismiss button using `AdminCard`
- [x] 2.2 Create `components/home/floating-trial-bar.tsx` — fixed-position dark bar at bottom-right (z-30, `#1a1a1a` bg, 44px height, 8px radius) with "3 days left in your trial" text

## 3. Greeting section (home-greeting)

- [x] 3.1 Create `components/home/greeting-section.tsx` — time-aware greeting ("Good morning/afternoon/evening, let's get started.") with right-aligned support contact text
- [x] 3.2 Create `components/home/sidekick-input.tsx` — multiline textarea with "Ask anything..." placeholder, "+" icon button, and "Send" button (UI-only, no submission logic)
- [x] 3.3 Create `components/home/store-name-header.tsx` — store name heading from mock data with adjacent pencil edit icon

## 4. Setup cards (home-setup-cards)

- [x] 4.1 Create `components/home/product-preview-card.tsx` — product image thumbnail, name, price, "Product added" status with green check, and "Find products" secondary button using `AdminCard`
- [x] 4.2 Create `components/home/design-store-card.tsx` — "Design your store" heading, description, business description `AdminInput`, "Generate" `AdminButton` primary, "browse pre-designed themes" link
- [x] 4.3 Create `components/home/payment-provider-card.tsx` — "Set up a payment provider" heading, payment method icons (PayPal/Visa/Mastercard), "Activate" action
- [x] 4.4 Create `components/home/shipping-rates-card.tsx` — "Review your shipping rates" heading, "Domestic" label, "Review" action
- [x] 4.5 Create `components/home/domain-card.tsx` — "Domain customized" heading, store domain from mock data, "Get $20" tag, "Buy a domain" button
- [x] 4.6 Create `components/home/educational-card.tsx` — "Learn the basics of dropshipping" H2, description paragraph, "Watch video" button, "Learn more" link

## 5. Page composition

- [x] 5.1 Update barrel export `components/home/index.ts` to re-export all home components
- [x] 5.2 Rewrite `apps/admin/src/routes/_auth/index.tsx` — compose all home components in vertical stack layout (`flex flex-col gap-4`), wire banner dismiss `useState`, import mock data

## 6. Verification

- [x] 6.1 Run dev server and visually verify all sections render correctly against the reference spec (`docs/shopify-redesign/01-home.md`)
- [x] 6.2 Verify trial banner dismiss works and content shifts up
- [x] 6.3 Verify floating trial bar stays fixed on scroll and layers below TopBar/Sidebar
- [x] 6.4 Verify time-of-day greeting changes based on local time
- [x] 6.5 Verify no TypeScript or build errors
