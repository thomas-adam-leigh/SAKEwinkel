# Shopify Admin - Analytics Page UI Reference

> Design tokens are shared across all pages — see `01-home.md` for the full token table.

## Page Layout

The Analytics page is a **dashboard** with a grid of metric cards displaying charts, breakdowns, funnels, cohort tables, and "no data" placeholders.

```
┌─────────────────────────────────────────────────────────────────┐
│  TOP BAR (56px, #1a1a1a)                                       │
├──────────┬──────────────────────────────────────────────────────┤
│ SIDEBAR  │  HEADER ROW                                         │
│ 240px    │  [←] "Analytics" "Last refreshed: 4:24 PM"          │
│ #ebebeb  │       [🔄][⛶][✏️] [New exploration]                  │
│          │──────────────────────────────────────────────────────│
│ Analytics│  CONTROLS ROW                                       │
│  *active*│  [Today] [📅 Feb 9, 2026] [💲 ZAR R]                │
│  Reports │──────────────────────────────────────────────────────│
│  Live View│ TOP METRIC SUMMARY ROW (4 small cards)             │
│ ...      │  [Gross sales] [Return rate] [Fulfilled] [Orders]  │
│          │──────────────────────────────────────────────────────│
│          │  3-COLUMN METRIC CARD GRID                          │
│          │  ┌─────────────────────────┐ ┌───────────────┐      │
│          │  │ Total sales over time   │ │ Total sales   │      │
│          │  │ (2-col wide chart)      │ │ breakdown     │      │
│          │  │ LINE CHART              │ │ LIST          │      │
│          │  └─────────────────────────┘ └───────────────┘      │
│          │  ┌───────┐ ┌───────┐ ┌───────┐                     │
│          │  │ Sales │ │ AOV   │ │ Sales │                     │
│          │  │by chan.│ │ chart │ │by prod│                     │
│          │  └───────┘ └───────┘ └───────┘                     │
│          │  ... more rows of 3-column cards ...                │
│ Settings │                                                     │
└──────────┴──────────────────────────────────────────────────────┘
```

## Sidebar — Analytics Expanded

When Analytics is active, the sidebar shows sub-navigation:
- **Analytics** (highlighted/active)
  - Reports (padding-left: `36px`, font-size: `13px`)
  - Live View (padding-left: `36px`, font-size: `13px`)

---

## Page Header

### Title Row
- "Analytics" H1: `font-size: 18px`, `font-weight: 600`, `color: #303030`, `line-height: 24px`
- "Last refreshed: 4:24 PM" inline text: `font-size: 13px`, `font-weight: 450`, `color: #303030`

### Header Action Buttons (right side)
- **Refresh icon** button
- **Fullscreen toggle** icon button
- **Customize** icon button (pencil)
- **"New exploration"** — Primary CTA button:
  ```css
  background: #303030;
  color: #ffffff;
  font-size: 13px;
  font-weight: 450;
  padding: 6px 12px;
  border-radius: 8px;
  height: 28px;
  box-shadow: (standard primary button shadow);
  ```

---

## Controls Row

A horizontal row of filter/control buttons below the header.

### "Today" Date Control
```css
/* Pill-style button */
font-size: 12px;
font-weight: 550;   /* medium */
color: #303030;
padding: 4px 8px;
border-radius: 8px;
height: 28px;
background: #ffffff;
/* Has calendar icon */
```

### "Compare to: Feb 9, 2026" Comparison Control
```css
/* Similar pill button */
font-size: 12px;
font-weight: 550;
color: #303030;
padding: 4px 12px;
border-radius: 8px;
height: 28px;
background: #ffffff;
/* Has calendar icon */
```

### "ZAR R" Currency Selector
```css
background: #ffffff;
color: #303030;
font-size: 13px;
padding: 4px 12px 4px 6px;
border-radius: 8px;
height: 28px;
/* Dropdown chevron */
```

---

## Top Metric Summary Row

4 small metric summary cards displayed in a horizontal row.

### Card Layout
```
[Gross sales  ] [Returning customer] [Orders fulfilled] [Orders       ]
[ZAR 0   ---  ] [0%            --- ] [0           ---  ] [0        --- ]
```

### Individual Summary Card
- **Width:** ~268px each
- **Height:** ~74px
- **Background:** `#ffffff`
- **Border-radius:** `12px`
- **Box-shadow:** `var(--p-shadow-100)`
- **Padding:** `~16px`

### Metric Title (in summary card)
```css
font-size: 12px;
font-weight: 450;
color: #616161;  /* secondary text */
line-height: 16px;
/* Clickable — links to detailed report */
```

### Metric Value (in summary card)
```css
font-size: 18px;
font-weight: 600;
color: #303030;
line-height: 24px;
```

### Trend Indicator (dash/arrow)
- "No change" — shows a horizontal dash icon (`—`)
- Positive change: green up arrow + percentage
- Negative change: red down arrow + percentage
- Color for no change: `#616161` (gray)
- Color for positive: `#014b40` (success green)
- Color for negative: `#8e0b21` (critical red)

### Mini Sparkline
- Small inline sparkline chart to the right of the value
- Height: ~30px
- Shows comparison period in lighter/dashed line

---

## Metric Card Grid

### Grid Layout (3-Column)
Based on the card positions, the dashboard uses a **3-column grid** system:

```css
/* Approximate grid dimensions (total content width: ~1137px) */
display: grid;
grid-template-columns: repeat(3, 1fr);  /* ~363px per column */
gap: 16px;
/* Some cards span 2 columns (e.g., "Total sales over time", "Customer cohort analysis") */
```

### Column Widths
- **Single column card:** ~363px wide
- **Double column card (2-col span):** ~742px wide
- **Gap between cards:** ~16px

### Card Sizes by Type
| Card Type | Width | Height | Span |
|---|---|---|---|
| Summary metric (top row) | 268px | 74px | — |
| Line chart card | 742px | 389px | 2 columns |
| Breakdown list | 363px | 389px | 1 column |
| Standard chart | 363px | 254px | 1 column |
| Tall chart / funnel | 363px | 344px | 1 column |
| Cohort table | 742px | 389px | 2 columns |

---

## Metric Card Components

### Card Container (Universal)
```css
background: #ffffff;
border-radius: 12px;
box-shadow: var(--p-shadow-100);
padding: 16px;
/* Overflow: hidden for charts that touch edges */
```

### Card Title (inside each card)
```css
font-size: 12px;
font-weight: 550;  /* medium */
color: #303030;
line-height: 16px;
/* Clickable button — links to detailed report */
/* Has a subtle hover underline */
```

### Card Large Value
```css
/* e.g., "ZAR 0.00" */
font-size: 24px;  /* or 18px depending on card */
font-weight: 600;
color: #303030;
line-height: 28px;
```

---

## Chart Types & Styles

### 1. Line Chart (Time Series)
- Used for: Total sales over time, Sessions over time, Average order value, Conversion rate
- **Current period line:** Solid, `#303030` (dark) or brand color
- **Comparison period line:** Dashed, `#8a8a8a` (gray)
- **Grid lines:** `#f1f1f1` (very subtle)
- **X-axis labels:** Hour labels ("12 AM", "3 AM", "6 AM", "9 AM", "12 PM", ...)
  ```css
  font-size: 11px;
  font-weight: 450;
  color: #8a8a8a;
  ```
- **Y-axis labels:** Value labels ("ZAR 0", "ZAR 5", "ZAR 10")
  ```css
  font-size: 11px;
  font-weight: 450;
  color: #8a8a8a;
  ```
- **Legend:** Below chart
  - Current date: bullet + label
  - Comparison date: bullet + label
  ```css
  font-size: 11px;
  color: #616161;
  ```

### 2. Breakdown List
- Used for: Total sales breakdown
- **Layout:** Vertical list of key-value pairs
- Each row:
  ```css
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f1f1f1;
  ```
- **Label:** Link text
  ```css
  font-size: 13px;
  font-weight: 450;
  color: #005bd3;  /* blue link */
  text-decoration: underline;
  ```
- **Value:**
  ```css
  font-size: 13px;
  font-weight: 450;
  color: #303030;
  ```
- **Trend dash:** Same as summary cards

### Breakdown Items
| Label | Links to |
|---|---|
| Gross sales | Gross sales report |
| Discounts | Discounts report |
| Returns | Returns report |
| Net sales | Net sales report |
| Shipping charges | Shipping report |
| Return fees | Returns report |
| Taxes | Taxes report |
| **Total sales** | Total sales report |

### 3. Donut/Pie Chart
- Used for: Total sales by sales channel, Sessions by device type
- Empty state: "No data for this date range" centered text
- When data exists: Donut chart with legend below

### 4. Horizontal Bar Chart
- Used for: Total sales by product, Sessions by location, Sessions by referrer, etc.
- Horizontal bars with labels on left, values on right
- Bar color: `#303030` (brand dark)

### 5. Funnel Chart
- Used for: Conversion rate breakdown
- Stages: Sessions → Added to cart → Reached checkout → Completed checkout
- **Funnel bars:** Decreasing width from top to bottom
- Each stage shows:
  - Label (e.g., "Sessions")
  - Percentage (e.g., "0%")
  - Count (e.g., "0")
  - Drop-off percentage

### 6. Cohort Grid/Heatmap
- Used for: Customer cohort analysis
- **Grid layout:** Months as rows, periods as columns
- **Headers:** "Cohort" (left), "Months" numbers across top
- **Row labels:** Month names ("Jun 2025", "Jul 2025", ...)
  ```css
  font-size: 12px;
  font-weight: 450;
  color: #303030;
  ```
- **Cell values:** Percentage values ("0%")
  ```css
  font-size: 11px;
  font-weight: 450;
  /* Color intensity varies by value — heatmap coloring */
  /* 0%: light/transparent */
  /* Higher %: deeper green (#047b5d) */
  ```
- Cells are clickable buttons

---

## "No Data" Empty State (per card)

When a metric card has no data:
```css
/* "No data for this date range" */
font-size: 13px;
font-weight: 450;
color: #616161;
text-align: center;
/* Vertically centered in the card */
padding: 40px 16px;
```

---

## Analytics Card Catalog

Full list of default metric cards on the Analytics dashboard:

### Top Summary Row (4 cards)
1. **Gross sales** — value + sparkline
2. **Returning customer rate** — percentage + sparkline
3. **Orders fulfilled** — count + sparkline
4. **Orders** — count + sparkline

### Main Grid (by row, left to right)

**Row 1** (2-col + 1-col):
- Total sales over time (line chart, 2-col)
- Total sales breakdown (list, 1-col)

**Row 2** (3 × 1-col):
- Total sales by sales channel (donut)
- Average order value over time (line chart)
- Total sales by product (bar chart)

**Row 3** (3 × 1-col):
- Sessions over time (line chart)
- Conversion rate over time (line chart)
- Conversion rate breakdown (funnel)

**Row 4** (3 × 1-col):
- Sessions by device type (donut)
- Sessions by location (bar chart)
- Total sales by social referrer (bar chart)

**Row 5** (2-col + 1-col):
- Customer cohort analysis (cohort grid, 2-col)
- Sessions by landing page (list, 1-col)

**Row 6** (3 × 1-col):
- Sessions by social referrer (bar chart)
- Total sales by referrer (bar chart)
- Sales attributed to marketing (bar chart)

**Row 7** (3 × 1-col):
- Sessions by referrer (bar chart)
- Total sales by POS location (bar chart)
- Products by sell-through rate (bar chart)

**Row 8:**
- POS staff sales total (bar chart)

---

## Footer

```css
/* "Learn more about analytics" */
font-size: 13px;
font-weight: 450;
color: #303030;
text-align: center;
margin-top: 16px;
/* "analytics" is a blue link: color #005bd3 */
```
