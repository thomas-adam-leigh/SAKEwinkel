## 1. Product Form Cards — Add defaultValues Support

- [x] 1.1 Add `defaultValues` prop to ProductTypeCard (accept optional `ProductType` to pre-select type)
- [x] 1.2 Add `defaultValues` prop to TitleDescriptionCard (name, shortOverview, description fields)
- [x] 1.3 Add `defaultValues` prop to PriceCard (originalPrice, salePrice)
- [x] 1.4 Add `defaultValues` prop to CommissionCard (commissionValue)
- [x] 1.5 Add `defaultValues` prop to InventoryCard (maxPerOrder, variant stock data)
- [x] 1.6 Add `defaultValues` prop to ShippingCard (deliveryCost, weight, packageType, countryOfOrigin)
- [x] 1.7 Add `defaultValues` prop to VoucherDetailsCard (voucherCodePrefix, voucherExpiry, voucherOffer, optionalHeadline)
- [x] 1.8 Add `defaultValues` prop to ClickthroughCard (clickThroughUrl, ctaButtonText)
- [x] 1.9 Add `defaultValue` prop to StatusCard (ProductStatus)
- [x] 1.10 Add `defaultValues` prop to SchedulingCard (productStart, productEnd)
- [x] 1.11 Add `defaultValues` prop to VariantsCard (variant array)
- [x] 1.12 Add `defaultValues` prop to SeoCard (SEO title, description)

## 2. Product Detail Route

- [x] 2.1 Create route file `_auth/products/$productId.tsx` with `Route.useParams()` to extract productId
- [x] 2.2 Implement product lookup from products.json data, with "Product not found" fallback for invalid IDs
- [x] 2.3 Render NewProductLayout with all form cards, passing `defaultValues` from the product data
- [x] 2.4 Initialize `productType` state from `product.productType` to render correct conditional cards
- [x] 2.5 Set page header to product name with "Products" breadcrumb link to `/products`
- [x] 2.6 Wire up `isDirty` state and ContextualSaveBar for field change tracking

## 3. Products Listing — Navigation

- [x] 3.1 Wrap "Add product" button in `Link` component pointing to `/products/new`
- [x] 3.2 Add row click handler to ProductsDataTable that navigates to `/products/$productId` using `useNavigate`
- [x] 3.3 Ensure checkbox column click calls `stopPropagation` to prevent row navigation (verify existing behavior)

## 4. Verification

- [x] 4.1 Verify navigating to `/products/prod-001` renders the detail page with pre-filled data
- [x] 4.2 Verify clicking a row in the products table navigates to the correct detail page
- [x] 4.3 Verify clicking "Add product" navigates to `/products/new`
- [x] 4.4 Verify conditional cards render correctly (Physical shows Shipping, Voucher shows VoucherDetails, Clickthrough shows ClickthroughCard)
- [x] 4.5 Verify "Product not found" renders for invalid product IDs
- [x] 4.6 Verify the app compiles without TypeScript errors
