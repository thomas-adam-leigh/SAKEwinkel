## Why

The current sidebar mirrors Shopify's default structure with deeply nested sub-items (Orders → Drafts/Abandoned, Products → Collections/Inventory/etc.) and sections (Discounts, Markets, Online Store) that don't apply to SAKEwinkel's actual workflows. The navigation needs to reflect what this admin actually supports: core operations (orders, products, suppliers, customers), analytics, and configuration — with a clear path for future features like marketing and content.

## What Changes

- **Reorganize sidebar into semantic sections**: Replace the flat/expandable nav with grouped sections: **Operations**, **Insights**, **Growth**, **Configuration**
- **Simplify nav items**: Remove all sub-navigation items (no more expandable chevrons for Orders, Products, Customers, etc.)
- **Add new nav items**: Suppliers, Legal, Email Templates, Reports (standalone from Analytics)
- **Add "Coming Soon" pill**: Marketing, Content, and Reports get a coming-soon badge and are non-expandable single items
- **BREAKING: Remove unused routes**: Delete route files for `/orders/drafts`, `/orders/abandoned`, `/orders/:id`, `/products/:id`, `/products/collections`, `/products/inventory`, `/products/purchase-orders`, `/products/transfers`, `/products/gift-cards`, `/customers/new`, `/customers/:id`, `/customers/segments`, `/marketing/*`, `/content/*`, `/discounts`, `/markets`, `/analytics/reports`, `/analytics/live`, `/online-store`, `/settings`
- **Add new routes**: `/suppliers`, `/suppliers/new`, `/legal`, `/email-templates`, `/reports`
- **Remove Sales Channels and Apps sections** from sidebar

## Capabilities

### New Capabilities
- `sidebar-sections`: Grouped sidebar navigation with named sections (Operations, Insights, Growth, Configuration) and standalone top-level items
- `coming-soon-nav`: "Coming Soon" pill badge on nav items for unreleased features, with consistent styling and disabled sub-navigation

### Modified Capabilities
- `admin-navigation`: Nav items restructured — removal of all expandable sub-items, new section groupings, new items (Suppliers, Legal, Email Templates, Reports), removal of Discounts/Markets/Online Store/Settings items
- `admin-routes`: Route tree reduced to 11 routes total; 5 new route files added, ~20 route files removed

## Impact

- **Route files**: ~20 route files under `apps/admin/src/routes/_auth/` will be deleted; 5 new ones created
- **Sidebar component**: `apps/admin/src/components/admin/sidebar.tsx` will be significantly rewritten — sections replace flat list, expandable behavior removed for most items
- **Page components**: Any components only used by deleted routes can be cleaned up (e.g., customer segments, marketing campaigns)
- **No backend impact**: This is purely a frontend navigation and routing change
