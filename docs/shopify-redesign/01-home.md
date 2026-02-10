# Shopify Admin - Home Page UI Reference

## Global Design Tokens (Polaris)

Shopify uses their **Polaris** design system. All CSS values below are extracted from the live admin.

### Typography
- **Font Family:** `Inter, -apple-system, "system-ui", "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif`
- **Base Font Size:** `13px` (body)
- **Base Line Height:** `20px`
- **Font Weights:**
  - Regular: `450` (`--p-font-weight-regular`)
  - Medium: `550` (`--p-font-weight-medium`)
  - Semibold: `600` (`--p-font-weight-semibold`)
  - Bold: `650` (`--p-font-weight-bold`)
- **Font Sizes (tokens):**
  - `--p-font-size-275`: `0.6875rem` (11px)
  - `--p-font-size-300`: `0.75rem` (12px)
  - `--p-font-size-325`: `0.8125rem` (13px) — primary body
  - `--p-font-size-350`: `0.875rem` (14px)
  - `--p-font-size-400`: `1rem` (16px)
  - `--p-font-size-500`: `1.25rem` (20px)
  - `--p-font-size-600`: `1.5rem` (24px)
  - `--p-font-size-750`: `1.875rem` (30px)
  - `--p-font-size-800`: `2rem` (32px)
  - `--p-font-size-900`: `2.25rem` (36px)

### Color Palette

#### Backgrounds
| Token | Value | Usage |
|---|---|---|
| `--p-color-bg` | `#f1f1f1` | Page background |
| `--p-color-bg-surface` | `#ffffff` | Card / surface background |
| `--p-color-bg-surface-secondary` | `#f7f7f7` | Secondary surface |
| `--p-color-bg-surface-tertiary` | `#f3f3f3` | Tertiary surface |
| `--p-color-bg-surface-active` | `#f3f3f3` | Active surface state |
| `--p-color-bg-fill` | `#ffffff` | Fill background |
| `--p-color-bg-fill-secondary` | `#f1f1f1` | Secondary fill |
| `--p-color-bg-fill-tertiary` | `#e3e3e3` | Tertiary fill |
| `--p-color-bg-fill-brand` | `#303030` | Brand fill (dark buttons) |
| `--p-color-bg-fill-brand-hover` | `#1a1a1a` | Brand fill hover |
| `--p-color-bg-fill-brand-active` | `#1a1a1a` | Brand fill active |
| `--p-color-bg-fill-brand-selected` | `#303030` | Brand fill selected |
| `--p-color-bg-fill-success` | `#047b5d` | Success fill |
| `--p-color-bg-fill-critical` | `#c70a24` | Critical/error fill |
| `--p-color-bg-fill-warning` | `#ffb800` | Warning fill |
| `--p-color-bg-fill-info` | `#91d0ff` | Info fill |
| `--p-color-bg-fill-transparent` | `rgba(0,0,0,0.02)` | Transparent fill |
| `--p-color-bg-fill-transparent-hover` | `rgba(0,0,0,0.05)` | Transparent hover |
| `--p-color-bg-fill-transparent-active` | `rgba(0,0,0,0.08)` | Transparent active |
| `--p-color-bg-inverse` | `#1a1a1a` | Inverse bg (top bar, bottom bar) |
| `--p-color-input-bg-surface` | `#fdfdfd` | Input field background |

#### Text Colors
| Token | Value | Usage |
|---|---|---|
| `--p-color-text` | `#303030` | Primary text |
| `--p-color-text-secondary` | `#616161` | Secondary/subdued text |
| `--p-color-text-brand` | `#4a4a4a` | Brand text |
| `--p-color-text-brand-on-bg-fill` | `#ffffff` | Text on brand bg |
| `--p-color-text-inverse` | `#e3e3e3` | Text on dark bg |
| `--p-color-text-info` | `#003a5a` | Info text |
| `--p-color-text-success` | `#014b40` | Success text |
| `--p-color-text-critical` | `#8e0b21` | Critical/error text |
| `--p-color-text-warning` | `#5e4200` | Warning text |

#### Borders
| Token | Value |
|---|---|
| `--p-color-border` | `#e3e3e3` |
| `--p-color-border-secondary` | `#ebebeb` |
| `--p-color-input-border` | `#8a8a8a` |

#### Icons
| Token | Value |
|---|---|
| `--p-color-icon` | `#4a4a4a` |

### Spacing Scale
| Token | Value |
|---|---|
| `--p-space-050` | `0.125rem` (2px) |
| `--p-space-100` | `0.25rem` (4px) |
| `--p-space-150` | `0.375rem` (6px) |
| `--p-space-200` | `0.5rem` (8px) |
| `--p-space-300` | `0.75rem` (12px) |
| `--p-space-400` | `1rem` (16px) |
| `--p-space-500` | `1.25rem` (20px) |
| `--p-space-600` | `1.5rem` (24px) |
| `--p-space-800` | `2rem` (32px) |
| `--p-space-1000` | `2.5rem` (40px) |

### Border Radius
| Token | Value |
|---|---|
| `--p-border-radius-050` | `0.125rem` (2px) |
| `--p-border-radius-100` | `0.25rem` (4px) |
| `--p-border-radius-200` | `0.5rem` (8px) |
| `--p-border-radius-300` | `0.75rem` (12px) |
| `--p-border-radius-400` | `1rem` (16px) |
| `--p-border-radius-500` | `1.25rem` (20px) |

### Shadows
| Token | CSS Value |
|---|---|
| `--p-shadow-100` | `0 5px 5px -2.5px rgba(0,0,0,0.03), 0 3px 3px -1.5px rgba(0,0,0,0.02), 0 2px 2px -1px rgba(0,0,0,0.02), 0 1px 1px -0.5px rgba(0,0,0,0.03), 0 0.5px 0.5px 0 rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.06)` |
| `--p-shadow-200` | `0 8px 10px -5px rgba(0,0,0,0.08), 0 5px 5px -2.5px rgba(0,0,0,0.03), 0 3px 3px -1.5px rgba(0,0,0,0.02), 0 2px 2px -1px rgba(0,0,0,0.02), 0 1px 1px -0.5px rgba(0,0,0,0.03), 0 0.5px 0.5px 0 rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.06)` |
| `--p-shadow-300` | `0 8px 24px -8px rgba(0,0,0,0.28), 0 8px 16px -4px rgba(0,0,0,0.05), 0 3px 6px 0 rgba(0,0,0,0.05), 0 2px 4px 0 rgba(0,0,0,0.05), 0 1px 2px 0 rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.06)` |

---

## Page Layout Structure

### Overall Frame
```
┌─────────────────────────────────────────────────────────────────┐
│  TOP BAR (56px height, bg: #1a1a1a, full width, fixed)         │
│  [Logo] [Search ⌘K]                    [Sidekick][Alerts][User]│
├──────────┬──────────────────────────────────────────────────────┤
│ SIDEBAR  │  MAIN CONTENT                                       │
│ 240px    │  bg: #f1f1f1                                        │
│ bg:      │  padding-left: 240px                                │
│ #ebebeb  │  margin-top: 56px                                   │
│ fixed    │  scrollable                                         │
│ top: 56px│                                                     │
│          │                                                     │
│          │                                                     │
├──────────┴─────────────────────────────────────────────────┐    │
│  BOTTOM FLOATING BAR (fixed, bottom: 16px, right: 16px)   │    │
│  bg: #1a1a1a, border-radius: 8px, height: 44px            │    │
│  box-shadow: 0 0 3px rgba(0,0,0,0.1), 0 4px 20px rgba(0,0,0,0.15) │
└────────────────────────────────────────────────────────────┘
```

### Top Bar
- **Height:** `56px`
- **Background:** `rgb(26, 26, 26)` / `#1a1a1a`
- **Position:** Fixed, top of page, full width
- **Contents (left to right):**
  1. Shopify logo (glyph, white, 21x24px) + wordmark (62x20px)
  2. Search bar — transparent bg, text `#e3e3e3`, `640px` wide, `36px` height, shows "Search ⌘ K"
  3. **Right side:** Sidekick button, Alerts button (bell icon), User avatar/menu button
- **Text color on top bar:** `#e3e3e3` (inverse text)

### Left Sidebar
- **Width:** `240px`
- **Background:** `#ebebeb` (`rgb(235, 235, 235)`)
- **Position:** Fixed, `top: 56px`, `left: 0`
- **Height:** fills remaining viewport (approx `668px` for 724px viewport)

#### Sidebar Sections (top to bottom):
1. **Shopify Logo** area at top of sidebar (inside top bar)
2. **Primary Navigation Links:**
   - Home, Orders, Products, Customers, Marketing, Discounts, Content, Markets, Analytics
   - **Style per link:**
     - Font size: `13px`
     - Font weight: `450` (regular)
     - Color: `#303030`
     - Height: `28px`
     - Padding: `0 4px 0 8px`
     - Border radius: `8px`
     - On hover: subtle bg highlight
   - Each link has an icon on the left (20px icon) + text label
   - Active link gets a slightly darker background

3. **"Sales channels" section header:**
   - Collapsible, padding: `4px 3px 4px 8px`, height `24px`
   - Under it: "Online Store" link (same style as nav links)

4. **"Apps" section header:**
   - Collapsible, same styling
   - "Add" button below: color `#616161`, font-weight `550`

5. **Settings link** (bottom of sidebar):
   - Same link style, with gear icon

---

## Main Content Area — Home Page

### Trial Banner (top of main)
- Full-width bar at top of content area
- **Background:** White (`#ffffff`)
- **Text:** "Get 3 months for $1/month"
- **CTA Button:** "Select a plan" — link style
- **Dismiss button** (X) on right
- Rounded corners, shadow-100 styling

### Welcome/Greeting Section
- **Text:** "Good afternoon, let's get started."
- **Font size:** `18px`
- **Font weight:** `600` (semibold)
- **Color:** `#303030`
- **Line height:** `20px`
- **Sub-text:** "Questions? 080 062 7837" — right aligned

### Sidekick Chat Input
- Input area below greeting
- Placeholder: "Ask anything..."
- Multiline textarea
- Has "Add files and more" button (+ icon) and "Send" button
- Rounded container

### Store Name Section
- **"Neocortexa"** as H1 heading with edit (pencil) icon link
- Links to store settings

### Product Preview Card
- White card with border-radius `12px`
- Shadow: `--p-shadow-100`
- Contains product image thumbnail (centered)
- Product name: "25 Year Anniversary Magazine"
- Price: "R 250.00"
- Status: "Product added" with green checkmark
- **"Find products"** button:
  - bg: `#ffffff` (white)
  - color: `#303030`
  - font-size: `13px`, font-weight: `450`
  - padding: `6px 12px`
  - border-radius: `8px`
  - height: `32px`

### Setup Guide Cards
White cards with `border-radius: 12px` and `--p-shadow-100`, containing:

1. **"Design your store"**
   - H3 heading
   - Description text
   - Text input for business description
   - "Generate" button (dark, brand-fill style)
   - Link: "browse pre-designed themes"

2. **"Set up a payment provider"**
   - Payment icons (PayPal, Visa, Mastercard)
   - "Activate" link/button

3. **"Review your shipping rates"**
   - Shows "Domestic" label
   - "Review" link/button

4. **"Domain customized"**
   - Shows domain: "neocortexa.myshopify.com"
   - "Get $20" tag
   - "Buy a domain" button

### Educational Content Card
- **"Learn the basics of dropshipping"** (H2)
- Description paragraph text
- "Watch video" button
- "Learn more" link

### Bottom Floating Trial Bar
- **Position:** Fixed, bottom: `16px`, right: `16px`
- **Background:** `#1a1a1a` (dark)
- **Height:** `44px`
- **Border radius:** `8px`
- **Box shadow:** `0 0 3px rgba(0,0,0,0.1), 0 4px 20px rgba(0,0,0,0.15)`
- **Padding:** `6px 12px`
- **Text color:** `#ffffff`
- **Content:** "3 days left in your trial" — expandable, shows plan selection CTA

---

## Component Patterns

### Card Component
```css
background: #ffffff;
border-radius: 12px;
padding: 8px; /* inner padding varies — outer container is 8px, inner content sections have 16px */
box-shadow: var(--p-shadow-100);
/* No border — shadow provides the edge definition */
```

### Primary Button (Brand/Dark)
```css
background: #303030;  /* --p-color-bg-fill-brand */
color: #ffffff;       /* --p-color-text-brand-on-bg-fill */
font-size: 13px;
font-weight: 450;
padding: 6px 12px;
border-radius: 8px;
height: 32px;
border: none;
cursor: pointer;
/* Hover: bg #1a1a1a */
```

### Secondary/Outline Button
```css
background: #ffffff;
color: #303030;
font-size: 13px;
font-weight: 450;
padding: 6px 12px;
border-radius: 8px;
height: 32px;
border: none;
box-shadow: var(--p-shadow-100); /* subtle ring shadow acts as border */
```

### Text Link
```css
color: #303030;
text-decoration: none;
font-weight: 450;
/* Blue links: color #005bd3 for specific action links */
```

### Input Field
```css
background: #fdfdfd;  /* --p-color-input-bg-surface */
border: 1px solid #8a8a8a; /* --p-color-input-border */
border-radius: 8px;
font-size: 13px;
padding: 6px 12px;
height: 32px;
color: #303030;
```

### Navigation Link (Sidebar)
```css
font-size: 13px;
font-weight: 450;
color: #303030;
height: 28px;
padding: 0 4px 0 8px;
border-radius: 8px;
display: flex;
align-items: center;
gap: 8px;
text-decoration: none;
/* Hover: background rgba(0,0,0,0.05) */
/* Active/Current: background rgba(0,0,0,0.08) */
```
