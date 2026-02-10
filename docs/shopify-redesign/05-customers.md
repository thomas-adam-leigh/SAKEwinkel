# Shopify Admin - Customers Page UI Reference

> Design tokens are shared across all pages — see `01-home.md` for the full token table.

## Page Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  TOP BAR (56px, #1a1a1a)                                       │
├──────────┬──────────────────────────────────────────────────────┤
│ SIDEBAR  │  HEADER: [←] "Customers" (H1)                      │
│ 240px    │                                                     │
│ #ebebeb  │  WHITE CARD (border-radius: 12px, shadow-100)       │
│          │  ┌───────────────────────────────────────────┐      │
│ Customers│  │ ┌─────────────────────┐ ┌──────────────┐ │      │
│  *active*│  │ │  TEXT SECTION       │ │ ILLUSTRATION │ │      │
│  Segments│  │ │                     │ │ (SVG, right) │ │      │
│ Marketing│  │ │  "Everything        │ │              │ │      │
│ Discounts│  │ │   customers-related │ │              │ │      │
│ ...      │  │ │   in one place"     │ │              │ │      │
│          │  │ │                     │ │              │ │      │
│          │  │ │  Description text   │ │              │ │      │
│          │  │ │                     │ │              │ │      │
│          │  │ │  [Add customer]     │ │              │ │      │
│          │  │ │  [Import customers] │ │              │ │      │
│          │  │ └─────────────────────┘ └──────────────┘ │      │
│          │  │                                          │      │
│          │  │  "Get customers with apps"               │      │
│          │  │  Description text                        │      │
│          │  │  [See app recommendations]               │      │
│          │  └───────────────────────────────────────────┘      │
│          │                                                     │
│          │  "Learn more about customers" (centered link)       │
│          │                                                     │
│ Settings │                                                     │
└──────────┴──────────────────────────────────────────────────────┘
```

## Sidebar — Customers Expanded

When Customers is active, the sidebar shows sub-navigation:
- **Customers** (highlighted/active)
  - Segments (padding-left: `36px`, font-size: `13px`, font-weight: `450`, color: `#303030`)

---

## Page Header

### Title
```css
/* "Customers" */
font-size: 18px;
font-weight: 600;
color: #303030;
line-height: 24px;
/* Back arrow icon to left */
```

No additional header action buttons on this page (unlike Products/Orders).

---

## Empty State Card

Single white card containing the full empty state.

### Card Container
```css
background: #ffffff;
border-radius: 12px;
box-shadow: var(--p-shadow-100);
/* Generous internal padding */
```

### Layout: Two Sections Side by Side

The empty state has a **text section on the left** and an **illustration on the right**, arranged in a flex row.

#### Left Section — Text Content

##### Main Heading
```css
/* "Everything customers-related in one place" */
/* Visually rendered larger than body text */
font-size: 14px;
font-weight: 600;   /* semibold */
color: #303030;
line-height: 20px;
```

##### Description
```css
/* "Manage customer details, see customer order history, and group customers into segments." */
font-size: 13px;
font-weight: 450;
color: #303030;
line-height: 20px;
margin-top: 4px;
```

##### Action Buttons Row
Buttons are displayed side by side below the description text.

###### "Add customer" (Primary CTA)
```css
background: #303030;       /* --p-color-bg-fill-brand */
color: #ffffff;
font-size: 13px;
font-weight: 450;
padding: 6px 12px;
border-radius: 8px;
height: 28px;
border: none;
box-shadow: rgba(0,0,0,0.8) 0px -1px 0px 1px inset,
            #303030 0px 0px 0px 1px inset,
            rgba(255,255,255,0.25) 0px 0.5px 0px 1.5px inset;
```

###### "Import customers" (Secondary Button)
```css
background: #ffffff;
color: #303030;
font-size: 13px;
font-weight: 450;
padding: 6px 12px;
border-radius: 8px;
height: 28px;
border: none;
box-shadow: #b5b5b5 0px -1px 0px 0px inset,
            rgba(0,0,0,0.1) 0px 0px 0px 1px inset,
            #ffffff 0px 0.5px 0px 1.5px inset;
/* This is the standard Shopify "secondary" button style */
/* The box-shadow creates the appearance of a subtle border */
```

#### Right Section — Illustration
- SVG illustration: `empty-state-customers-*.svg`
- Shows stylized customer avatars/profiles
- Positioned to the right of the text content

---

## "Get customers with apps" Section

This appears as a sub-section within the same white card, separated by whitespace.

### Section Heading
```css
/* "Get customers with apps" */
font-size: 14px;
font-weight: 600;
color: #303030;
line-height: 20px;
```

### Description
```css
/* "Grow your customer list by adding a lead capture form to your store and marketing." */
font-size: 13px;
font-weight: 450;
color: #303030;
line-height: 20px;
```

### "See app recommendations" Button
```css
/* Secondary/outlined button */
background: #ffffff;
color: #303030;
font-size: 13px;
font-weight: 450;
padding: 6px 12px;
border-radius: 8px;
height: 28px;
border: none;
box-shadow: #b5b5b5 0px -1px 0px 0px inset,
            rgba(0,0,0,0.1) 0px 0px 0px 1px inset,
            #ffffff 0px 0.5px 0px 1.5px inset;
```

---

## Footer Link

### "Learn more about customers"
```css
font-size: 12px;
font-weight: 450;
color: #303030;
padding: 6px 12px;
border-radius: 8px;
text-align: center;
/* Centered below the main card */
/* Underline on hover */
```

---

## Customers Page WITH Data (Expected Layout)

When customers exist, the page shows a filterable, searchable data table (same pattern as Products page).

### Header Row
- "Customers" (H1) on the left
- "Export", "Import", "More actions" (secondary buttons), "Add customer" (primary CTA) on the right

### Tab / Segment Bar
- Tabs for saved customer segments: "All", "Email subscribers", "Returning", etc.
- Same tab styling as Products page

### Search & Filter
- "Search and filter customers" input
- Sort button

### Data Table Columns
| Column | Content |
|---|---|
| Checkbox | Select row |
| Customer name | Full name (link to customer detail) |
| Email subscription | Subscribed / Not subscribed |
| Location | City, Country |
| Orders | Number of orders |
| Amount spent | Total spent |

### Table Styles
Same as Products page data table (see `03-products.md`):
- White card container, 12px border-radius, shadow-100
- Header row: font-size 12px, font-weight 550, color #616161
- Data row: font-size 12px-13px, height ~52px, hover bg #f7f7f7

### Email Subscription Badge
| Status | Background | Text Color |
|---|---|---|
| Subscribed | `#d4f3e5` | `#014b40` |
| Not subscribed | `#f1f1f1` | `#616161` |

---

## Button Style Summary (Shopify Polaris Patterns)

### Primary Button
```css
background: #303030;
color: #ffffff;
box-shadow: rgba(0,0,0,0.8) 0px -1px 0px 1px inset,
            #303030 0px 0px 0px 1px inset,
            rgba(255,255,255,0.25) 0px 0.5px 0px 1.5px inset;
```

### Secondary Button
```css
background: #ffffff;
color: #303030;
box-shadow: #b5b5b5 0px -1px 0px 0px inset,
            rgba(0,0,0,0.1) 0px 0px 0px 1px inset,
            #ffffff 0px 0.5px 0px 1.5px inset;
```

### Tertiary / Ghost Button (used for "More actions", "Export", "Import" on list pages)
```css
background: #e3e3e3;
color: #303030;
box-shadow: none;
```

### Plain Button (text-only link style)
```css
background: transparent;
color: #303030;
font-weight: 550;
box-shadow: none;
/* Underline on hover */
```
