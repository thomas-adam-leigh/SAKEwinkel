# Shopify Admin Clone — Infrastructure, Routing & Shared Components

This document is the **first thing to build**. It defines the app shell (top bar + sidebar), routing structure, and all shared design tokens. Individual page content comes later — start with empty pages that just show a title, wrapped in this shell.

---

## Tech Stack Recommendation

- **Framework:** TanStack Start
- **Styling:** Tailwind CSS (map Shopify Polaris tokens to Tailwind config)
- **Font:** Inter (load from Google Fonts or self-host)
- **Icons:** Lucide React or Heroicons (Shopify uses 20px monoline icons throughout)

---

## URL Structure & Routes

All routes live under a base path. In the real Shopify admin this is `/store/{store-name}/`. For the clone, use `/` as root.

### Primary Navigation Routes

| Sidebar Label | Route | Has Sub-nav | Sub-nav Items |
|---|---|---|---|
| Home | `/` | No | — |
| Orders | `/orders` | Yes | Drafts (`/orders/drafts`), Abandoned checkouts (`/orders/abandoned`) |
| Products | `/products` | Yes | Collections (`/products/collections`), Inventory (`/products/inventory`), Purchase orders (`/products/purchase-orders`), Transfers (`/products/transfers`), Gift cards (`/products/gift-cards`) |
| Customers | `/customers` | Yes | Segments (`/customers/segments`) |
| Marketing | `/marketing` | Yes | Automations (`/marketing/automations`), Campaigns (`/marketing/campaigns`) |
| Discounts | `/discounts` | No | — |
| Content | `/content` | Yes | Metaobjects (`/content/metaobjects`), Files (`/content/files`) |
| Markets | `/markets` | Yes | — |
| Analytics | `/analytics` | Yes | Reports (`/analytics/reports`), Live View (`/analytics/live`) |

### Secondary Navigation (below separator)

| Section | Label | Route |
|---|---|---|
| Sales channels | Online Store | `/online-store` |
| Apps | (dynamic) | — |
| — | Settings | `/settings` |

### Detail/Create Routes

| Page | Route |
|---|---|
| Create new product | `/products/new` |
| Edit product | `/products/:id` |
| Order detail | `/orders/:id` |
| Customer detail | `/customers/:id` |
| Add customer | `/customers/new` |

---

## Global Design Tokens (Tailwind Config)

Map these into your `tailwind.config.js` `extend` section:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'system-ui', 'San Francisco', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        'xs-polaris':   ['0.6875rem', { lineHeight: '0.75rem' }],   // 11px — captions
        'sm-polaris':   ['0.75rem',   { lineHeight: '1rem' }],      // 12px — table cells, secondary
        'base-polaris': ['0.8125rem', { lineHeight: '1.25rem' }],   // 13px — body, nav, inputs
        'md-polaris':   ['0.875rem',  { lineHeight: '1.25rem' }],   // 14px — empty state titles
        'lg-polaris':   ['1rem',      { lineHeight: '1.5rem' }],    // 16px
        'xl-polaris':   ['1.125rem',  { lineHeight: '1.5rem' }],    // 18px — page titles (H1)
        '2xl-polaris':  ['1.5rem',    { lineHeight: '1.75rem' }],   // 24px — large metric values
      },
      fontWeight: {
        'regular':  '450',
        'medium':   '550',
        'semibold': '600',
        'bold':     '650',
      },
      colors: {
        // Backgrounds
        'bg-page':              '#f1f1f1',
        'bg-surface':           '#ffffff',
        'bg-surface-secondary': '#f7f7f7',
        'bg-surface-tertiary':  '#f3f3f3',
        'bg-surface-hover':     '#f3f3f3',
        'bg-fill-brand':        '#303030',
        'bg-fill-brand-hover':  '#1a1a1a',
        'bg-fill-secondary':    '#f1f1f1',
        'bg-fill-tertiary':     '#e3e3e3',
        'bg-fill-success':      '#047b5d',
        'bg-fill-critical':     '#c70a24',
        'bg-fill-warning':      '#ffb800',
        'bg-fill-info':         '#91d0ff',
        'bg-fill-transparent':  'rgba(0,0,0,0.02)',
        'bg-fill-transparent-hover':   'rgba(0,0,0,0.05)',
        'bg-fill-transparent-active':  'rgba(0,0,0,0.08)',
        'bg-inverse':           '#1a1a1a',
        'bg-input':             '#fdfdfd',

        // Text
        'text-primary':           '#303030',
        'text-secondary':         '#616161',
        'text-tertiary':          '#8a8a8a',
        'text-brand':             '#4a4a4a',
        'text-on-fill':           '#ffffff',
        'text-inverse':           '#e3e3e3',
        'text-info':              '#003a5a',
        'text-success':           '#014b40',
        'text-critical':          '#8e0b21',
        'text-warning':           '#5e4200',
        'text-link':              '#005bd3',

        // Borders
        'border-primary':   '#e3e3e3',
        'border-secondary': '#ebebeb',
        'border-input':     '#8a8a8a',

        // Icons
        'icon-default':   '#4a4a4a',
        'icon-secondary': '#8a8a8a',
        'icon-subdued':   '#b5b5b5',

        // Sidebar
        'sidebar-bg': '#ebebeb',
      },
      spacing: {
        'polaris-050': '0.125rem',  // 2px
        'polaris-100': '0.25rem',   // 4px
        'polaris-150': '0.375rem',  // 6px
        'polaris-200': '0.5rem',    // 8px
        'polaris-300': '0.75rem',   // 12px
        'polaris-400': '1rem',      // 16px
        'polaris-500': '1.25rem',   // 20px
        'polaris-600': '1.5rem',    // 24px
        'polaris-800': '2rem',      // 32px
        'polaris-1000': '2.5rem',   // 40px
      },
      borderRadius: {
        'polaris-050': '0.125rem',  // 2px
        'polaris-100': '0.25rem',   // 4px
        'polaris-200': '0.5rem',    // 8px — buttons, inputs, nav items
        'polaris-300': '0.75rem',   // 12px — cards
        'polaris-400': '1rem',      // 16px
        'polaris-full': '9999px',   // pill badges
      },
      boxShadow: {
        'polaris-100': '0 5px 5px -2.5px rgba(0,0,0,0.03), 0 3px 3px -1.5px rgba(0,0,0,0.02), 0 2px 2px -1px rgba(0,0,0,0.02), 0 1px 1px -0.5px rgba(0,0,0,0.03), 0 0.5px 0.5px 0 rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.06)',
        'polaris-200': '0 8px 10px -5px rgba(0,0,0,0.08), 0 5px 5px -2.5px rgba(0,0,0,0.03), 0 3px 3px -1.5px rgba(0,0,0,0.02), 0 2px 2px -1px rgba(0,0,0,0.02), 0 1px 1px -0.5px rgba(0,0,0,0.03), 0 0.5px 0.5px 0 rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.06)',
        'polaris-300': '0 8px 24px -8px rgba(0,0,0,0.28), 0 8px 16px -4px rgba(0,0,0,0.05), 0 3px 6px 0 rgba(0,0,0,0.05), 0 2px 4px 0 rgba(0,0,0,0.05), 0 1px 2px 0 rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.06)',
        'polaris-button-primary': 'rgba(0,0,0,0.8) 0px -1px 0px 1px inset, #303030 0px 0px 0px 1px inset, rgba(255,255,255,0.25) 0px 0.5px 0px 1.5px inset',
        'polaris-button-secondary': '#b5b5b5 0px -1px 0px 0px inset, rgba(0,0,0,0.1) 0px 0px 0px 1px inset, #ffffff 0px 0.5px 0px 1.5px inset',
        'polaris-floating': '0 0 3px rgba(0,0,0,0.1), 0 4px 20px rgba(0,0,0,0.15)',
      },
      maxWidth: {
        'page-form': '998px',   // Two-column form pages (e.g., New Product)
      },
    },
  },
};
```

---

## App Shell Layout

The entire admin is wrapped in a fixed shell with 3 zones:

```
┌─────────────────────────────────────────────────────────────────┐
│                     TOP BAR (fixed, z-50)                       │
│  height: 56px | bg: #1a1a1a | full viewport width              │
├──────────┬──────────────────────────────────────────────────────┤
│ SIDEBAR  │  MAIN CONTENT AREA                                  │
│ fixed    │  bg: #f1f1f1                                        │
│ w: 240px │  margin-top: 56px                                   │
│ bg:      │  padding-left: 240px                                │
│ #ebebeb  │  overflow-y: auto (this area scrolls)               │
│ top: 56px│  full remaining height                              │
│ h: calc( │                                                     │
│ 100vh -  │  Content inside is page-specific                    │
│ 56px)    │                                                     │
│ overflow │                                                     │
│ -y: auto │                                                     │
└──────────┴──────────────────────────────────────────────────────┘
```

### HTML/JSX Structure

```jsx
<div className="min-h-screen bg-bg-page font-sans text-base-polaris text-text-primary">
  {/* Top Bar */}
  <TopBar />

  {/* Sidebar */}
  <Sidebar />

  {/* Main Content */}
  <main className="ml-[240px] mt-[56px] min-h-[calc(100vh-56px)] bg-bg-page">
    {/* Page-specific content renders here */}
    <Outlet /> {/* or {children} in Next.js */}
  </main>
</div>
```

---

## Component: TopBar

### Dimensions & Position
- **Height:** `56px`
- **Width:** Full viewport
- **Position:** `fixed`, `top: 0`, `left: 0`, `z-index: 50`
- **Background:** `#1a1a1a` (`bg-inverse`)

### Internal Layout (CSS Grid: 3 columns)
```css
display: grid;
grid-template-columns: 382px 640px 382px;  /* left | center | right */
grid-template-rows: 56px;
align-items: center;
```

On smaller screens, these columns should be responsive. The center (search) column is flexible.

### Left Section (382px)
Contains the Shopify logo.

- **Logo glyph:** 21×24px, white SVG, positioned at `x: 20px`, `y: 16px`
- **Logo wordmark:** 62×20px, white SVG, positioned at `x: 44px`, `y: 20px`
- Combined padding-left: `20px`
- Items are vertically centered in the 56px row

```jsx
<div className="flex items-center h-[56px] pl-5">
  <ShopifyGlyph className="w-[21px] h-[24px] text-white" />
  <ShopifyWordmark className="w-[62px] h-[20px] ml-[3px] text-white" />
</div>
```

### Center Section (640px, flexible)
Contains the search bar.

- **Padding:** `0 14px`
- The search "button" looks like an input but opens a modal

#### Search Bar
```css
background: #303030;           /* slightly lighter than top bar */
border-radius: 12px;
height: 36px;
width: 640px;                  /* fills center column */
color: #e3e3e3;                /* placeholder text color */
font-size: 13px;
font-weight: 400;
padding: 0 12px;
display: flex;
align-items: center;
gap: 8px;
```

Contents: `[🔍 icon] "Search" [spacer] [⌘] [K]`

- Search icon (magnifying glass): 20px, `#e3e3e3`
- "Search" text: `color: #e3e3e3`, `font-size: 13px`
- Keyboard shortcut badges `⌘` and `K`:
  ```css
  background: rgba(255,255,255,0.08);
  border-radius: 4px;
  padding: 1px 5px;
  font-size: 11px;
  color: #b5b5b5;
  ```

### Right Section (382px, justify-end)
Contains icon buttons aligned to the right.

All icon buttons in the top bar:
```css
width: 36px;
height: 36px;
border-radius: 12px;
background: transparent;
color: #e3e3e3;
padding: 6px;
/* Hover: background rgba(255,255,255,0.08) */
```

Items (left to right):
1. **Sidekick** button (sparkle icon) — 36×36px
2. **Alerts/Notifications** button (bell icon) — 36×36px
3. **Store switcher** button — wider (111px), contains store avatar (24px circle) + store name text
   ```css
   /* Store avatar: */
   width: 24px;
   height: 24px;
   border-radius: 9999px;
   background: #616161;  /* or brand color with initials */

   /* Store name text: */
   font-size: 12px;
   font-weight: 550;
   color: #e3e3e3;
   margin-left: 8px;
   ```

Right padding from viewport edge: `~8px`

---

## Component: Sidebar

### Container
```css
position: fixed;
top: 56px;                     /* below top bar */
left: 0;
width: 240px;
height: calc(100vh - 56px);    /* remaining viewport height */
background: #ebebeb;           /* sidebar-bg */
overflow-y: auto;
z-index: 40;
```

### Internal Padding
- Nav items are positioned with `x: 12px` from the left edge of the sidebar
- Nav items are `216px` wide (`240 - 12 - 12 = 216`, i.e. `12px` padding each side)
- Use: `padding: 0 12px`

### Sidebar Structure (top to bottom)

```
┌─────────────────────────────┐
│  px-3 pt-1                  │  ← 12px horizontal padding, 4px top
│                             │
│  [🏠] Home                  │  ← Primary nav items
│  [📦] Orders        ▸       │  ← expandable (has sub-nav)
│  [🏷️] Products      ▸       │
│  [👥] Customers     ▸       │
│  [📣] Marketing     ▸       │
│  [💰] Discounts              │
│  [📄] Content       ▸       │
│  [🌍] Markets       ▸       │
│  [📊] Analytics     ▸       │
│                             │
│  ── Sales channels ──  ▸   │  ← section header
│    [🛒] Online Store        │  ← sub-item (indent)
│                             │
│  ── Apps ──            ▸   │  ← section header
│    [+] Add                  │
│                             │
│  ... (flex grow spacer) ... │
│                             │
│  [⚙️] Settings              │  ← pinned to bottom
└─────────────────────────────┘
```

### Nav Item (Primary)
```css
display: flex;
align-items: center;
gap: 8px;                      /* between icon and label */
height: 28px;
width: 100%;                   /* 216px within padded container */
padding: 0 4px 0 8px;
border-radius: 8px;            /* polaris-200 */
font-size: 13px;               /* base-polaris */
font-weight: 450;              /* regular */
color: #303030;
text-decoration: none;
cursor: pointer;
transition: background 100ms;
```

**States:**
```css
/* Hover */
background: rgba(0,0,0,0.05);   /* bg-fill-transparent-hover */

/* Active / Current page */
background: rgba(0,0,0,0.08);   /* bg-fill-transparent-active */

/* The icon */
width: 20px;
height: 20px;
color: #4a4a4a;                  /* icon-default */
flex-shrink: 0;
```

**Expandable indicator:** Small chevron `▸` on the right side when the item has sub-navigation. Rotates downward `▾` when expanded.

### Sub-nav Item (Children of Expanded Parent)
```css
/* Same as primary nav item EXCEPT: */
padding-left: 36px;             /* indented further */
/* No icon — just text */
/* Appears directly below the parent when expanded */
```

### Section Header ("Sales channels", "Apps")
```css
display: flex;
align-items: center;
justify-content: space-between;
height: 24px;
padding: 4px 3px 4px 8px;
font-size: 13px;
font-weight: 400;
color: #000000;
/* Has a toggle chevron on the right */
/* Slightly smaller than nav items */
```

### "Add" Button (under Apps)
```css
display: flex;
align-items: center;
gap: 8px;
height: 28px;
padding: 4px 8px;
font-size: 13px;
font-weight: 550;               /* medium — bolder than nav items */
color: #616161;                  /* secondary text */
border-radius: 8px;
/* Has a "+" icon on the left */
```

### Settings Link (Pinned to Bottom)
- Same styling as primary nav items
- Positioned at the very bottom of the sidebar (use flex spacer or `mt-auto`)
- Gear icon + "Settings" text
- `y: 684px` from top (i.e., near the bottom of a 724px viewport)

---

## Sidebar: Expandable Nav Behavior

When a primary nav item is clicked:
1. The item becomes active (gets `bg-fill-transparent-active` background)
2. If the item has sub-nav, children appear **directly below** the parent
3. Other nav items shift down to make room
4. The parent shows `aria-expanded="true"` and chevron rotates

### Sub-nav items per section:

| Parent | Sub-nav Items | Sub-nav Routes |
|---|---|---|
| Orders | Drafts, Abandoned checkouts | `/orders/drafts`, `/orders/abandoned` |
| Products | Collections, Inventory, Purchase orders, Transfers, Gift cards | `/products/collections`, `/products/inventory`, `/products/purchase-orders`, `/products/transfers`, `/products/gift-cards` |
| Customers | Segments | `/customers/segments` |
| Marketing | Automations, Campaigns | `/marketing/automations`, `/marketing/campaigns` |
| Content | Metaobjects, Files | `/content/metaobjects`, `/content/files` |
| Analytics | Reports, Live View | `/analytics/reports`, `/analytics/live` |

---

## Shared Page Patterns

Every page inside `<main>` follows one of these patterns:

### Pattern A: List Page (Orders, Products, Customers with data)
```
┌────────────────────────────────────────────────┐
│  HEADER ROW        max-width: none, px: 16px   │
│  [← icon] Page Title (H1)   [action buttons]   │
│                                                │
│  WHITE CARD (border-radius: 12px, shadow-100)  │
│  ┌────────────────────────────────────────┐    │
│  │ [Tab bar]  [All] [Active] [Draft] [+]  │    │
│  │ [Search & filter]            [Sort]    │    │
│  │ ───────────────────────────────────     │    │
│  │ [Table header row]                     │    │
│  │ [Data rows...]                         │    │
│  └────────────────────────────────────────┘    │
│                                                │
│  "Learn more about X" (centered link)          │
└────────────────────────────────────────────────┘
```

### Pattern B: Form Page (New Product, Edit Product)
```
┌──────────────────────────────────────────────────────┐
│  [← Breadcrumb] Page Title (H1)                      │
│                                                      │
│  max-width: 998px, centered                          │
│  TWO-COLUMN FLEX LAYOUT                              │
│  ┌─────────────────────┐ ┌───────────────┐           │
│  │ Left column (~633px)│ │ Right (~317px)│           │
│  │ flex: 2 2 480px     │ │ flex: 1 1 240px│          │
│  │ (main form cards)   │ │ (status, org) │           │
│  └─────────────────────┘ └───────────────┘           │
│                                                      │
│  [Save button]                                       │
└──────────────────────────────────────────────────────┘
```

### Pattern C: Dashboard Page (Analytics)
```
┌────────────────────────────────────────────────┐
│  HEADER ROW + controls                         │
│                                                │
│  Summary metric row (4 small cards)            │
│                                                │
│  3-COLUMN GRID of metric cards                 │
│  grid-template-columns: repeat(3, 1fr)         │
│  gap: 16px                                     │
│  (some cards span 2 columns)                   │
└────────────────────────────────────────────────┘
```

### Pattern D: Empty State Page (Orders, Customers with no data)
```
┌────────────────────────────────────────────────┐
│  HEADER ROW                                    │
│                                                │
│  WHITE CARD (centered content)                 │
│  ┌────────────────────────────────────────┐    │
│  │  [SVG Illustration ~226×226px]         │    │
│  │  "Your X will show here" (bold)        │    │
│  │  Description text                      │    │
│  │  [Primary CTA button]                  │    │
│  └────────────────────────────────────────┘    │
│                                                │
│  "Learn more about X" (link)                   │
└────────────────────────────────────────────────┘
```

---

## Page Title (H1) — Universal

Every page has an H1 title in the header row:
```css
font-size: 18px;      /* xl-polaris */
font-weight: 600;     /* semibold */
color: #303030;
line-height: 24px;
```

With a back arrow icon to the left (breadcrumb-style navigation).

---

## Shared Button Variants

### Primary Button
```css
background: #303030;
color: #ffffff;
font-size: 13px;
font-weight: 450;
padding: 6px 12px;
border-radius: 8px;
height: 28px;
box-shadow: rgba(0,0,0,0.8) 0px -1px 0px 1px inset,
            #303030 0px 0px 0px 1px inset,
            rgba(255,255,255,0.25) 0px 0.5px 0px 1.5px inset;
/* Hover: bg #1a1a1a */
```

### Secondary Button
```css
background: #ffffff;
color: #303030;
font-size: 13px;
font-weight: 450;
padding: 6px 12px;
border-radius: 8px;
height: 28px;
box-shadow: #b5b5b5 0px -1px 0px 0px inset,
            rgba(0,0,0,0.1) 0px 0px 0px 1px inset,
            #ffffff 0px 0.5px 0px 1.5px inset;
```

### Tertiary Button (used for Export, Import, More actions)
```css
background: #e3e3e3;
color: #303030;
font-size: 13px;
font-weight: 450;
padding: 4px 12px;
border-radius: 8px;
height: 28px;
box-shadow: none;
```

### Plain/Ghost Button (text-only)
```css
background: transparent;
color: #303030;
font-size: 12px;
font-weight: 550;
padding: 0;
border: none;
/* Underline on hover */
```

---

## Shared Card Component

```css
background: #ffffff;
border-radius: 12px;            /* polaris-300 */
box-shadow: var(--polaris-shadow-100);
/* No visible border — the shadow's outer ring (0 0 0 1px rgba(0,0,0,0.06)) acts as border */
```

---

## Shared Input Field

```css
/* Wrapper div (visible border): */
border: 1px solid #8a8a8a;
border-radius: 8px;
background: #fdfdfd;
height: 32px;

/* Inner input: */
font-size: 13px;
color: #303030;
padding: 6px 12px;
background: transparent;
border: none;
outline: none;

/* Focus state on wrapper: */
border-color: #303030;
box-shadow: 0 0 0 2px #005bd3;  /* blue focus ring */
```

---

## Implementation Order

1. Set up the project with Tailwind, configure all design tokens
2. Build the `<TopBar />` component (fixed, dark header)
3. Build the `<Sidebar />` component (fixed, light sidebar with nav items)
4. Build the app shell layout (`<AppShell />`) combining TopBar + Sidebar + main content area
5. Configure all routes with empty placeholder pages (just the H1 title)
6. Build shared components: `<Card />`, `<Button />` (primary/secondary/tertiary), `<Input />`
7. Then proceed to individual page files in numbered order
