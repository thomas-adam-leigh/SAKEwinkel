## Why

The current admin UI was built under the false assumption that SAKEwinkel is a sake wine shop. In reality, SAKEwinkel ("sake" means "business" in Afrikaans) is the ecommerce platform for the Afrikaans television show OntbytSAKE. It sells a diverse range of products — from leather goods and commemorative coins to lodge vouchers and clickthrough affiliate products. The mock data (Japanese sake breweries, sake categories) and the product form (sake-oriented shipping, categories) must be replaced with real-world representative data and a form that supports the three distinct product types the business uses.

## What Changes

- **Replace supplier mock data** with representative South African supplier data inspired by the real v1 businesses (Boot & Rally leather goods, B4i Productions/OntbytSAKE, Afrimunt coins, Banhoek Lodge, Tapputi Perfumes, The Cape Mint) — including business type, identification, banking, contacts, and addresses
- **Replace product mock data** with representative product data reflecting the real product mix: physical products (leather bags, aprons), vouchers (lodge discounts), clickthrough products (coins, perfumes), and products with variants (25-year magazine signed by different cast members, gold/silver commemorative coins)
- **Update Supplier type definition** to include fields informed by the v1 backend: business type, identification type/number, VAT registration, banking details, website URL, short description, and support for multiple contacts per supplier
- **Update Product type definition** to support three product types (Physical, Voucher, Clickthrough), product statuses (Draft, Unlisted, Active), variants as sub-items, commission tracking, sale pricing, scheduling (product_start/product_end), and type-specific fields (click_through_url, voucher fields, delivery options)
- **Overhaul /products/new page** to support:
  - Product type selection (Physical / Voucher / Clickthrough) that conditionally shows/hides relevant form sections
  - Product status (Draft / Unlisted / Active) instead of just Draft/Active
  - Variant management within the same form
  - Type-specific fields: delivery/shipping for physical, voucher code/expiry/offer for vouchers, redirect URL/CTA text for clickthrough
  - Commission value, sale pricing alongside original price, max per order, scheduling dates
- **Remove sake-wine-themed content** from all supplier and product pages (Japanese brewery names, sake categories, sake-specific terminology)

## Capabilities

### New Capabilities
- `product-types`: Product type system (Physical, Voucher, Clickthrough) with type-specific form fields, conditional UI sections, and shared variant support
- `product-scheduling`: Product availability scheduling with start/end dates and status lifecycle (Draft, Unlisted, Active)

### Modified Capabilities
- `product-form-cards`: Cards must be restructured to support three product types with conditional rendering — shipping card for physical only, voucher fields card for vouchers only, clickthrough URL card for clickthrough only; plus new cards for commission, scheduling, and sale pricing
- `product-form-fields`: New field types needed for product type selector, commission input, sale price, max per order, scheduling date pickers, voucher code/expiry/offer, and clickthrough URL/CTA
- `product-form-layout`: Layout must accommodate product type selection at top driving conditional section visibility, plus the new status option (Unlisted)
- `products-list-page`: Product table and mock data must reflect real SAKEwinkel products with type badges, sale prices, and accurate statuses

## Impact

- **Data files**: `suppliers.json` and `products.json` completely rewritten with new structures
- **Type definitions**: `supplier.ts` extended significantly; new `product.ts` type file needed
- **Supplier pages**: `/suppliers/index.tsx`, `/suppliers/new.tsx`, `/suppliers/$supplierId.tsx` — updated table columns, form cards, and data rendering
- **Supplier components**: All 7 supplier form card components updated or replaced to match new supplier structure
- **Product pages**: `/products/index.tsx` table updated; `/products/new.tsx` substantially overhauled
- **Product components**: Multiple product form card components modified or added; data table updated
- **No backend/API changes** — this is frontend-only with JSON mock data
- **No breaking changes to routing** — existing routes preserved
