# Shopify Admin - Products Page UI Reference

> Design tokens are shared across all pages — see `01-home.md` for the full token table.

## Page Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  TOP BAR (56px, #1a1a1a)                                       │
├──────────┬──────────────────────────────────────────────────────┤
│ SIDEBAR  │  HEADER ROW                                         │
│ 240px    │  [←] "Products" (H1)    [Export][Import][More▼][+Add]│
│ #ebebeb  │──────────────────────────────────────────────────────│
│          │  TAB BAR                                             │
│ Products │  [All*] [Active] [Draft] [Archived] [+]   [🔍][≡][⇅]│
│  *active*│──────────────────────────────────────────────────────│
│  Collect.│  TABLE HEADER ROW                                   │
│  Inventory│ ☐ | Product        | Status | Inventory | Cat | Ch │
│  Purchase│──────────────────────────────────────────────────────│
│  Transfers│ ☐ | [img] Title   | Draft  | 0 in stock| ... | 0  │
│  Gift card│──────────────────────────────────────────────────────│
│ Customers│                                                     │
│ ...      │  "Learn more about products" (centered link)        │
│          │                                                     │
│ Settings │                                                     │
└──────────┴──────────────────────────────────────────────────────┘
```

## Sidebar — Products Expanded

When Products is active, the sidebar shows sub-navigation:
- **Products** (highlighted/active)
  - Collections (padding-left: `36px`)
  - Inventory
  - Purchase orders
  - Transfers
  - Gift cards

All sub-nav items: `font-size: 13px`, `font-weight: 450`, `color: #303030`, `padding-left: 36px`

---

## Page Header

### Title Row
- Display: `flex`, `justify-content: space-between`
- Title "Products": `font-size: 18px`, `font-weight: 600`, `color: #303030`, `line-height: 24px`
- Back arrow icon to left of title

### Header Action Buttons (left to right)

#### Secondary Buttons: "Export", "Import"
```css
background: #e3e3e3;
color: #303030;
font-size: 13px;
font-weight: 450;
padding: 4px 12px;
border-radius: 8px;
height: 28px;
border: none;
```

#### "More actions" Button (with dropdown chevron)
```css
background: #e3e3e3;
color: #303030;
font-size: 13px;
font-weight: 450;
padding: 4px 6px 4px 12px;  /* extra space right for chevron */
border-radius: 8px;
height: 28px;
border: none;
```

#### Primary CTA: "Add product"
```css
background: #303030;
color: #ffffff;
font-size: 13px;
font-weight: 450;
padding: 6px 12px;
border-radius: 8px;
height: 28px;
border: none;
/* Special inset shadow for depth effect: */
box-shadow: rgba(0,0,0,0.8) 0px -1px 0px 1px inset,
            #303030 0px 0px 0px 1px inset,
            rgba(255,255,255,0.25) 0px 0.5px 0px 1.5px inset;
```

---

## Tabs Bar

Inside the white card, at the top.

### Container
```css
display: flex;
padding: 0 4px;
gap: 4px;
background: transparent;
/* No visible border-bottom on tab bar itself */
```

### Tab Item (inactive)
```css
background: transparent;
color: #4a4a4a;
font-size: 13px;
font-weight: 450;
padding: 4px 12px;
height: 28px;
border-radius: 8px;
cursor: pointer;
/* Hover: bg rgba(0,0,0,0.05) */
```

### Tab Item (active/selected)
```css
background: rgba(0,0,0,0.08);
color: #303030;
font-size: 13px;
font-weight: 400;
padding: 4px 12px;
height: 28px;
border-radius: 8px;
```

### "Create new view" Button (+ icon tab)
- Appears as a `+` icon after the last tab
- Same height as tabs

---

## Search & Filter Bar

Located between the tabs and the table header.

### "Search and filter products" Button
```css
/* Acts as a button that opens a search modal/input */
background: transparent;
color: #616161;  /* placeholder-like color */
font-size: 13px;
font-weight: 450;
height: 32px;
border: 1px solid #e3e3e3;
border-radius: 8px;
padding: 0 12px;
/* Full width of the available space */
/* Search icon (magnifying glass) on the left */
```

### "Sort the results" Button
- Icon button on the right of the search bar
- Same height (32px)

---

## Data Table

### Table Container (White Card)
```css
background: #ffffff;
border-radius: 12px;
box-shadow: var(--p-shadow-100);
overflow: hidden;
/* Contains tabs, search, and the table */
```

### Table Header Row
```css
/* Row contains: checkbox, Product, Status, Inventory, Category, Channels */
background: #ffffff;
border-bottom: 1px solid #f1f1f1;
padding: 0;
```

### Header Cell Text
```css
font-size: 12px;
font-weight: 550;  /* medium weight */
color: #616161;  /* secondary text */
padding: 8px 16px;
text-transform: none;  /* NOT uppercase */
```

### Column Headers
| Column | Label | Sortable |
|---|---|---|
| Checkbox | (select all) | No |
| Product | "Product" | Yes (ascending/descending) |
| Status | "Status" | No |
| Inventory | "Inventory" (sortable) | Yes |
| Category | "Category" | No |
| Channels | "Channels" | No |
| Actions | (hidden label) | No |

### Data Row
```css
background: #ffffff;
display: grid;  /* uses CSS Grid for columns */
height: 52px;
align-items: center;
border-bottom: 1px solid #f1f1f1;
/* Hover: background #f7f7f7 */
cursor: pointer;
```

### Checkbox (per row)
```css
width: 16px;
height: 16px;
border: 1px solid #8a8a8a;
border-radius: 4px;
/* Checked: bg #303030, border #303030 */
```

### Product Cell
- **Product Thumbnail:** Small image placeholder (36x36px approx), `border-radius: 4px`
- **Product Name Link:**
  ```css
  font-size: 12px;
  font-weight: 450;
  color: #303030;
  text-decoration: none;
  /* Hover: underline */
  ```

### Status Cell — "Draft" Badge
```css
font-size: 12px;
font-weight: 550;
color: #4a4a4a;
background: #e3e3e3;  /* gray badge for Draft */
padding: 2px 8px;
border-radius: 9999px;  /* pill shape */
```

### Status Badge Colors
| Status | Background | Text Color |
|---|---|---|
| Active | `#d4f3e5` | `#014b40` (success) |
| Draft | `#e3e3e3` | `#4a4a4a` (neutral) |
| Archived | `#f1f1f1` | `#616161` (subdued) |

### Inventory Cell
```css
/* "0 in stock" */
font-size: 12px;
font-weight: 450;
color: #303030;
/* When 0 stock, shows in warning color: #5e4200 or red */
```

### Category Cell
```css
font-size: 12px;
font-weight: 450;
color: #303030;
```

### Channels Cell
```css
font-size: 12px;
font-weight: 450;
color: #303030;
/* Shows a number */
```

### Actions Cell (rightmost)
- "Preview on Online Store" button — icon only, appears on hover
- Small icon button, ghost/transparent style

---

## Footer

### "Learn more about products"
```css
font-size: 12px;
font-weight: 550;
color: #303030;
text-align: center;
margin-top: 16px;
/* Clickable link, underline on hover */
```
