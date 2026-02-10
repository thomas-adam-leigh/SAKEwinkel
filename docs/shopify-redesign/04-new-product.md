# Shopify Admin - Create New Product Page UI Reference

> Design tokens are shared across all pages — see `01-home.md` for the full token table.

## Page Layout

This is a **form page** with a two-column layout and a contextual save bar in the top bar.

```
┌─────────────────────────────────────────────────────────────────┐
│  TOP BAR (56px, #1a1a1a)                                       │
│  [Logo][Search] "Unsaved product" [Discard][Save] [icons][user]│
├──────────┬──────────────────────────────────────────────────────┤
│ SIDEBAR  │  HEADER: [← Products] "Add product" (H1)           │
│ 240px    │                                                     │
│          │  TWO-COLUMN LAYOUT (max-width: 998px, centered)     │
│          │  ┌──────────────────────┐ ┌────────────────┐        │
│          │  │  LEFT COLUMN (~633px)│ │ RIGHT (~317px) │        │
│          │  │                      │ │                │        │
│          │  │  [Title Card]        │ │ [Status Card]  │        │
│          │  │  [Description RTE]   │ │ [Publishing]   │        │
│          │  │  [Media Upload]      │ │ [Product Org]  │        │
│          │  │  [Category]          │ │ [Theme Template]│       │
│          │  │  [Price Card]        │ │                │        │
│          │  │  [Inventory Card]    │ └────────────────┘        │
│          │  │  [Shipping Card]     │                           │
│          │  │  [Variants Card]     │                           │
│          │  │  [SEO Card]          │                           │
│          │  └──────────────────────┘                           │
│          │                                                     │
│          │  ─────────────────────────────────────               │
│          │  [Save] button (full-width row at bottom)           │
│ Settings │                                                     │
└──────────┴──────────────────────────────────────────────────────┘
```

## Contextual Save Bar (in Top Bar)

When there are unsaved changes, the top bar shows a contextual save bar alongside the search.

### "Unsaved product" Text
```css
font-size: 12px;
font-weight: 450;
color: #e3e3e3;  /* light text on dark bar */
```

### "Discard" Button
```css
background: transparent;
color: #e3e3e3;
font-size: 12px;
font-weight: 550;   /* medium */
padding: 6px 8px;
border-radius: 8px;
height: 28px;
border: none;
/* Hover: bg rgba(255,255,255,0.1) */
```

### "Save" Button (Top Bar)
```css
/* Disabled state (no changes yet): */
background: transparent;
color: #8a8a8a;  /* muted */
font-size: 12px;
font-weight: 550;
padding: 6px 8px;
border-radius: 8px;
height: 28px;

/* Enabled state (with changes): */
background: #ffffff;
color: #303030;
/* Same size/radius as disabled */
```

---

## Page Header

### Breadcrumb
- "Products" link with left arrow — navigates back to products list
- Font size: 12px, color: `#303030`

### Page Title
```css
/* "Add product" */
font-size: 18px;
font-weight: 600;
color: #303030;
line-height: 24px;
```

---

## Two-Column Layout (Polaris Layout)

### Container
```css
display: flex;
flex-wrap: wrap;
margin: -16px 0 0 -16px; /* negative margin for gap simulation */
max-width: 998px;
/* Centered in the page with margin: 0 auto effectively (margin: 0 83px) */
padding: 0 16px;
```

### Left Column (Primary Section)
```css
flex: 2 2 480px;
max-width: calc(100% - 16px);
min-width: 51%;
/* Effective width: ~633px on 1164px content area */
/* Contains main form cards */
/* Each card has margin-top: 16px (from layout negative margin technique) */
/* Each card has margin-left: 16px */
```

### Right Column (Sidebar Section)
```css
flex: 1 1 240px;
max-width: calc(100% - 16px);
min-width: 0;
/* Effective width: ~317px */
/* Contains Status, Publishing, Product Organization, Theme Template */
```

---

## Form Cards (White Sections)

All form sections are wrapped in white cards:
```css
background: #ffffff;
border-radius: 12px;
box-shadow: var(--p-shadow-100);
/* See shadow definition in home.md */
padding: 0;  /* Outer card has no padding; inner content areas have their own */
```

### Card Inner Content Padding
- Section heading area: `padding: 16px 16px 0`
- Form field areas: `padding: 0 16px 16px`
- Varies per card section

### Card Section Heading (H2)
```css
font-size: 13px;
font-weight: 600;    /* semibold */
color: #303030;
line-height: 20px;
/* Used for: "Price", "Inventory", "Shipping", "Variants", "Status", etc. */
```

---

## Form Field Styles

### Field Label
```css
font-size: 13px;
font-weight: 450;   /* regular */
color: #303030;
line-height: 20px;
margin-bottom: 4px;
```

### Text Input
```css
/* The visible input wrapper div: */
border: 1px solid #8a8a8a;   /* --p-color-input-border */
border-radius: 8px;
background: #fdfdfd;          /* --p-color-input-bg-surface */
height: 32px;

/* The actual input inside: */
font-size: 13px;
color: #303030;
padding: 6px 12px;
background: transparent;
border: none;

/* Focus state: */
border-color: #303030;      /* or use a blue focus ring */
outline: 2px solid #005bd3; /* focus ring */
outline-offset: 1px;

/* Placeholder: */
color: #8a8a8a;
```

### Textarea / Rich Text Editor
- Rich text toolbar at top with formatting buttons
- Toolbar buttons: `24×24px`, `padding: 2px`, `border-radius: 4px`, `color: #4a4a4a`
- Toolbar separator: `0.5px solid #8a8a8a` bottom border
- Editor area: min-height ~150px, same bg as input
- "Generate text" button in toolbar (AI feature)
- "Paragraph" dropdown selector
- Formatting: Bold, Italic, Underline, Color, Alignment, Link, Image, Video, More, HTML

### Number/Price Input
```css
/* Same as text input but with currency prefix */
/* "R " prefix displayed inside the input wrapper, left-aligned */
/* Prefix style: */
font-size: 13px;
font-weight: 450;
color: #303030;
padding-left: 12px;
/* Input padding adjusted: padding: 6px 12px 6px 0 (no left padding, prefix takes that space) */
```

### Combobox / Autocomplete Input
```css
/* Same border/radius as text input */
border: 1px solid #8a8a8a;
border-radius: 8px;
background: #fdfdfd;
height: 32px;
font-size: 13px;
padding: 6px 12px;
/* Has dropdown chevron icon on right */
/* Placeholder text in muted color */
```

### Select / Dropdown
```css
/* "Weight unit" select: */
border: 1px solid #8a8a8a;
border-radius: 8px;
background: #fdfdfd;
height: 32px;
font-size: 13px;
padding: 6px 12px;
/* Chevron icon on the right */
```

### Checkbox
```css
width: 16px;
height: 16px;
border: 1px solid #8a8a8a;
border-radius: 4px;
/* Checked: bg #303030, white checkmark icon */
```

### Toggle Switch
```css
/* Used for "Inventory tracked" and "Physical product" */
width: 36px;
height: 20px;
border-radius: 9999px;  /* fully rounded */
/* ON: background #303030, knob white on right */
/* OFF: background #b5b5b5, knob white on left */
/* Transition: smooth slide animation */
```

### Spinbutton (Quantity)
```css
/* Number input with increment/decrement controls */
border: 1px solid #8a8a8a;
border-radius: 8px;
background: #fdfdfd;
height: 32px;
font-size: 13px;
padding: 6px 12px;
text-align: right;
/* Spinner arrows on the right */
```

### Helper / Description Text
```css
font-size: 12px;
font-weight: 450;
color: #616161;   /* --p-color-text-secondary */
line-height: 16px;
margin-top: 4px;
```

---

## Expandable Option Buttons

Used to show/hide optional fields like "Compare at", "Unit price", "Cost per item", "SKU", "Barcode", etc.

```css
background: transparent;
color: #303030;
font-size: 13px;
font-weight: 400;
padding: 4px 8px;
border-radius: 8px;
height: 28px;
border: none;
/* Has a "+" icon or expansion chevron */
/* Hover: bg rgba(0,0,0,0.05) */
/* When expanded, the button disappears and the field is shown */
```

Arranged horizontally in a row (flex-wrap).

---

## Left Column Cards (Detail)

### 1. Title & Description Card
- **Title** field: full-width text input with placeholder "Short sleeve t-shirt"
- **Description** label + rich text editor
- Width of this card is part of the main card which also contains Media and Category

### 2. Media Card
- **"Media"** section label
- Drop zone area with dashed border:
  ```css
  border: 1px dashed #c0c0c0;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background: #f7f7f7;
  ```
- "Upload new" and "Select existing" buttons
- Helper text: "Accepts images, videos, or 3D models"

### 3. Category
- Combobox with placeholder "Choose a product category"
- Helper text about tax rates and metafields

### 4. Price Card
- **H2:** "Price"
- Price input with "R " currency prefix
- Expandable options row: "Compare at", "Unit price", "Charge tax Yes", "Cost per item"

### 5. Inventory Card
- **H2:** "Inventory"
- Toggle: "Inventory tracked" (on by default)
- Quantity table:
  - Header: "Quantity" label (font-size: 12px, font-weight: 550, color: #616161)
  - Row: "Shop location" + spinbutton input
- Expandable options: "SKU", "Barcode", "Sell when out of stock Off"

### 6. Shipping Card
- **H2:** "Shipping"
- Toggle: "Physical product" (on by default)
- Package selector (combobox): "Store default - Sample box..."
- Product weight: number input + unit select (kg/g/lb/oz)
- Expandable: "Country of origin", "HS Code"

### 7. Variants Card
- **H2:** "Variants"
- "Add options like size or color" — expandable combobox button

### 8. Search Engine Listing Card
- **H2:** "Search engine listing"
- "Edit" button to expand
- Placeholder text: "Add a title and description to see how this product might appear..."

---

## Right Column Cards

### 1. Status Card
- **H2:** "Status"
- Dropdown select: "Active" (default), "Draft"
- Height: 92px total card

### 2. Publishing Card
- **H2:** "Publishing"
- "Manage publishing" button
- Channel pills:
  ```css
  /* Each channel shown as a pill/chip */
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 13px;
  background: #f1f1f1;
  /* With an "x" remove button */
  ```
- Channels: "Online Store", "Point of Sale"

### 3. Product Organization Card
- **H2:** "Product organization" + "Learn more" link
- Fields:
  - **Type** — combobox autocomplete
  - **Vendor** — combobox autocomplete
  - **Collections** — combobox autocomplete (with search icon)
  - **Tags** — combobox autocomplete
- Card height: ~332px

### 4. Theme Template Card
- Small card (88px height)
- Dropdown: "Default product"

---

## Bottom Save Button (Full Width)

A save button appears at the very bottom of the form spanning the full content width.
```css
background: #303030;       /* --p-color-bg-fill-brand */
color: #ffffff;
font-size: 13px;
font-weight: 450;
padding: 6px 12px;
border-radius: 8px;
height: 28px;
/* Disabled when no changes */
/* Same box-shadow as primary buttons */
```

---

## Quantity Table Styles

```css
/* Table header */
font-size: 12px;
font-weight: 550;
color: #616161;  /* secondary */
padding: 8px 0;
border-bottom: 1px solid #e3e3e3;

/* Table row */
font-size: 13px;
color: #303030;
padding: 8px 0;
display: flex;
justify-content: space-between;
align-items: center;
```
