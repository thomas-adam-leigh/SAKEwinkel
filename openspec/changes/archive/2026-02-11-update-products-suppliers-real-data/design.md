## Context

SAKEwinkel's admin panel currently contains mock data based on a Japanese sake wine shop. The real platform serves OntbytSAKE (an Afrikaans TV show's ecommerce arm) selling diverse products across three types: physical goods with courier delivery, digital vouchers with auto-generated codes, and clickthrough products that redirect to a supplier's own store. The v1 production backend (Supabase project `qflvgmkyuyyjtvxlowyc`, `production` schema) contains 11 real suppliers and ~14 active products with variants, providing a reference for realistic data structures.

The current frontend uses simple flat types for both suppliers and products, with no concept of product types, no conditional form sections, and no fields for commissions, sale pricing, scheduling, or voucher/clickthrough behavior.

## Goals / Non-Goals

**Goals:**
- Replace all sake-wine mock data with representative SAKEwinkel data reflecting real South African suppliers and diverse product types
- Introduce a product type system (Physical, Voucher, Clickthrough) that conditionally controls which form sections are visible
- Add product status "Unlisted" alongside existing Draft and Active
- Support variants as sub-items within a single product (each with own price, stock, image)
- Add fields for commission, sale pricing, max per order, and product scheduling (start/end dates)
- Update the supplier type to include business registration details, banking, multiple contacts, and website/description
- Update supplier and product list pages with realistic table columns and data

**Non-Goals:**
- No backend API integration — all data remains as local JSON mocks
- No form validation logic — forms remain presentational
- No actual file upload or image handling
- No delivery options management (that's a separate feature)
- No email template system (future feature)
- No order flow changes
- No customer-facing storefront changes

## Decisions

### 1. Product type as an enum field, not a separate table
The v1 backend uses a `product_types` table with 5 rows. For the frontend, we model this as a simple TypeScript union type `"Physical" | "Voucher" | "Clickthrough"`. The v1 types "Product with Variants" and "Supplier Voucher" are collapsed: variants are orthogonal to type (any type can have variants), and the distinction between SAKEwinkel and Supplier voucher is unnecessary at this stage.

### 2. Variants modeled as an array within the product type
Rather than the v1 approach of a separate `products_variants` table, variants are nested inside the Product type as `variants: ProductVariant[]`. Each variant has its own name, variation label, prices, stock, max per order, commission, and image. This keeps the JSON mock simple and the form component self-contained.

### 3. Supplier type includes flattened contact and address
The v1 uses three tables (`businesses`, `business_contacts`, `business_addresses`). For the frontend mock, we keep a primary contact inline on the supplier (matching v1's `primary_contact_*` fields) and support an additional `contacts: Contact[]` array for extra contacts. Address is a single object (we only need one address in the admin view).

### 4. Conditional form sections driven by product type
- **Physical**: Shows shipping/delivery card, inventory/stock card, weight field
- **Voucher**: Shows voucher details card (code prefix, expiry, offer text, optional headline), hides shipping
- **Clickthrough**: Shows clickthrough card (redirect URL, CTA button text), hides shipping, inventory, and price fields (or shows with `hide_price` toggle)
- **All types**: Title, description, media, pricing (original + sale), commission, scheduling, status, variants, SEO

### 5. Product status lifecycle
- **Draft**: Product is saved but not visible anywhere. Default for new products.
- **Unlisted**: Product exists and has a URL but does not appear in the product gallery. Useful for soft launches or testing.
- **Active**: Product is live in the gallery and available for purchase (or clickthrough).

### 6. Pricing model
Products have `originalPrice` and optional `salePrice`. When `salePrice` is set, the storefront would show the original price struck through. `commissionValue` tracks SAKEwinkel's cut per sale. These apply at both product and variant level, with variant prices overriding the parent.

### 7. Supplier mock data selection
From the 11 v1 businesses, we'll create 6 representative suppliers (excluding test accounts): Boot & Rally (leather goods), B4i Productions/OntbytSAKE (media/merchandise), Afrimunt/afrikaansis100 (commemorative coins), Banhoek Lodge (hospitality/vouchers), Tapputi (perfume oils/clickthrough), The Cape Mint (minting/coins). This covers all product types.

### 8. Product mock data selection
We'll create ~8 representative products spanning all three types:
- Physical: Boot & Rally leather bag, Boot & Rally leather apron
- Voucher: Banhoek Lodge accommodation voucher
- Clickthrough: Afrimunt gold coin, Tapputi perfume oils
- Products with Variants: OntbytSAKE 25-year magazine (6 variants by signer), Pinotage commemorative coin (silver + gold variants)
- Draft/Unlisted examples included for status variety

## Risks / Trade-offs

- **Data fidelity vs. privacy**: Real supplier banking details and ID numbers from v1 must NOT be copied verbatim. Mock data uses realistic but fabricated values.
- **Form complexity**: Adding conditional sections by product type significantly increases the form's complexity. Mitigated by keeping each section as its own card component.
- **Variant UX**: Inline variant editing within the product form is complex. For now, variants are shown as a simple expandable list — a more sophisticated variant editor is deferred.
- **No backend validation**: Without API integration, the form has no real validation. Field requirements and conditional logic are purely visual. Future backend integration will need to enforce these rules server-side.
