# Shopify Admin - Orders Page UI Reference

> Design tokens are shared across all pages — see `01-home.md` for the full token table.

## Page Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  TOP BAR (56px, #1a1a1a)                                       │
├──────────┬──────────────────────────────────────────────────────┤
│ SIDEBAR  │  HEADER ROW                                         │
│ 240px    │  [← icon] "Orders" (H1)         [More actions ▼]   │
│ #ebebeb  │─────────────────────────────────────────────────────│
│          │                                                     │
│ Nav:     │  WHITE CARD (border-radius: 12px, shadow-100)       │
│ Home     │  ┌─────────────────────────────────────────────┐    │
│ *Orders* │  │                                             │    │
│  Drafts  │  │   [Illustration SVG, 226x226px]             │    │
│  Abandoned│  │                                            │    │
│ Products │  │   "Your orders will show here"              │    │
│ Customers│  │   description text                          │    │
│ ...      │  │   [Select plan] button                      │    │
│          │  │                                             │    │
│          │  └─────────────────────────────────────────────┘    │
│          │                                                     │
│          │  "Learn more about orders" (link, centered)         │
│          │                                                     │
│ Settings │                                                     │
└──────────┴──────────────────────────────────────────────────────┘
```

## Sidebar — Expanded Navigation

When "Orders" is the active section, the sidebar expands to show sub-nav items:

- **Orders** (active, bold/highlighted)
  - **Drafts** — indented sub-item
  - **Abandoned checkouts** — indented sub-item

### Sub-navigation Items
```css
/* Sub-nav items under an expanded section */
font-size: 13px;
font-weight: 450;
color: #303030;
padding-left: 36px;  /* indented from parent */
height: 28px;
display: flex;
align-items: center;
border-radius: 8px;
```

### Active Nav Item
- The parent "Orders" link appears visually selected with a slightly darker/active background

---

## Page Header

### Layout
- **Padding:** `0px 16px` within page content area
- **Display:** `flex`, `justify-content: space-between`
- Content is horizontally aligned — title on left, actions on right

### Page Title (H1)
```css
font-size: 18px;
font-weight: 600;   /* semibold */
color: #303030;
line-height: 24px;
margin: 0;
```

### Back Arrow Icon
- Small left-arrow (←) icon before the H1 title
- Acts as breadcrumb navigation
- Icon color: `#4a4a4a`

### "More actions" Button (Top Right)
```css
background: #e3e3e3;
color: #303030;
font-size: 13px;
font-weight: 450;
padding: 4px 6px 4px 12px;  /* asymmetric — space for dropdown arrow */
border-radius: 8px;
height: 28px;
border: none;
/* Has a dropdown chevron icon on the right */
```

---

## Main Content — Empty State

When there are no orders, a centered empty state is shown inside a white card.

### Empty State Card
```css
background: #ffffff;
border-radius: 12px;
box-shadow: var(--p-shadow-100);
/* Centered content, generous vertical padding */
padding: ~40px; /* inner content is centered */
text-align: center;
```

### Illustration
- **SVG image:** `empty-state-orders-*.svg`
- **Size:** `226px × 226px`
- Shows a stylized clipboard/document illustration in muted grays and accent colors
- Centered horizontally

### Empty State Title
```css
/* "Your orders will show here" */
font-size: 14px;
font-weight: 600;   /* semibold */
color: #303030;
line-height: 20px;
text-align: center;
margin-top: 16px;
```

### Empty State Description
```css
/* "To get orders and accept payments from customers..." */
font-size: 12px;
font-weight: 450;
color: #303030;
line-height: 16px;
text-align: center;
max-width: ~440px;   /* wraps nicely */
margin-top: 4px;
```

### "Select plan" CTA Button
```css
background: #303030;       /* --p-color-bg-fill-brand */
color: #ffffff;
font-size: 13px;
font-weight: 450;
padding: 6px 12px;
border-radius: 8px;
height: 28px;
border: none;
text-decoration: none;
/* Centered below the description */
margin-top: 16px;
```

---

## Footer Link

### "Learn more about orders"
```css
font-size: 12px;
font-weight: 550;  /* medium */
color: #303030;
text-align: center;
/* Positioned below the card with some spacing */
margin-top: 16px;
/* Underline on hover */
```

---

## Orders Page WITH Data (Expected Layout)

When orders exist, the page shows a filterable, searchable data table:

### Filter/Tab Bar
- Tabs: "All", "Unfulfilled", "Unpaid", "Open", "Closed"
- Active tab has underline indicator
- Search input on the right
- Filter buttons

### Data Table
```
┌──────┬───────┬──────────┬──────────┬────────────┬──────────┬─────────┐
│  ☐   │ Order │ Date     │ Customer │ Total      │ Payment  │ Fulfill │
│      │       │          │          │            │ status   │ status  │
├──────┼───────┼──────────┼──────────┼────────────┼──────────┼─────────┤
│  ☐   │ #1001 │ Jan 10   │ John Doe │ R 250.00   │ Paid     │ Unfulfilled │
│  ☐   │ #1002 │ Jan 11   │ Jane Doe │ R 150.00   │ Pending  │ Fulfilled   │
└──────┴───────┴──────────┴──────────┴────────────┴──────────┴─────────┘
```

### Table Styles
```css
/* Table container */
background: #ffffff;
border-radius: 12px;
box-shadow: var(--p-shadow-100);
overflow: hidden;

/* Table header row */
background: #f7f7f7;  /* --p-color-bg-surface-secondary */
font-size: 12px;
font-weight: 550;
color: #616161;  /* --p-color-text-secondary */
padding: 8px 16px;
border-bottom: 1px solid #e3e3e3;

/* Table body row */
padding: 12px 16px;
font-size: 13px;
color: #303030;
border-bottom: 1px solid #f1f1f1;
/* Hover: background #f7f7f7 */

/* Checkbox column */
width: 32px;

/* Status badges */
/* Payment: "Paid" = green bg, "Pending" = yellow bg */
/* Fulfillment: "Unfulfilled" = yellow, "Fulfilled" = green */
font-size: 11px;
font-weight: 550;
padding: 2px 8px;
border-radius: 9999px; /* pill shape */
```

### Status Badge Colors
| Status | Background | Text Color |
|---|---|---|
| Paid | `#d4f3e5` | `#014b40` |
| Pending / Partially paid | `#ffedb3` | `#5e4200` |
| Unfulfilled | `#ffedb3` | `#5e4200` |
| Fulfilled | `#d4f3e5` | `#014b40` |
| Refunded | `#f1f1f1` | `#616161` |
