## 1. Animation Infrastructure

- [x] 1.1 Add four `@keyframes` (`above-out`, `above-in`, `below-in`, `below-out`) to `apps/admin/src/styles.css` with 200ms duration, `cubic-bezier(0.42, 0, 0.58, 1)` easing, translateY/scale/opacity transforms matching the reference implementation
- [x] 1.2 Register custom animation utilities in the Tailwind `@theme inline` block (e.g. `animate-above-out`, `animate-above-in`, `animate-below-in`, `animate-below-out`) so they can be applied as Tailwind classes

## 2. TopBar Context

- [x] 2.1 Create a `TopBarContext` with provider and `useTopBarSaveBar` hook in a new file `apps/admin/src/components/admin/top-bar-context.tsx`. The context holds `hasUnsavedChanges`, `onDiscard`, `onSave`, and a `setSaveBar` function. The hook auto-clears on unmount.
- [x] 2.2 Wrap `<Outlet />` in `AppShell` with the `TopBarProvider` and pass context values to `TopBar`

## 3. TopBar Component Update

- [x] 3.1 Add `SearchBar` function component inside `top-bar.tsx` — renders the existing search placeholder UI (magnifying glass icon, "Search" text, ⌘K badges) with `#303030` background, 12px border-radius, 36px height
- [x] 3.2 Add `ContextualSaveBar` function component inside `top-bar.tsx` — renders unsaved icon, "Unsaved changes" title (13px, font-weight 550), Discard button (secondary: transparent bg, `#e3e3e3` text), Save button (primary: white bg, `#303030` text), all in a 36px-high container with 12px border-radius
- [x] 3.3 Update `TopBar` to accept `hasUnsavedChanges`, `onDiscard`, `onSave` props. Implement the animation state machine (`idle` / `showing-save-bar` / `hiding-save-bar`) with `useEffect` + `useRef` for previous-value tracking. Render a slots container (relative, overflow-clip, 56px height) with SearchBar in the default slot and ContextualSaveBar absolutely positioned, applying animation classes conditionally.

## 4. Page Integration

- [x] 4.1 Update `products/$productId.tsx` — remove `ContextualSaveBar` import and inline render; call `useTopBarSaveBar({ isDirty, onDiscard: handleDiscard, onSave: handleSave })` instead
- [x] 4.2 Update `products/new.tsx` — same removal and hook wiring as 4.1
- [x] 4.3 Update `suppliers/$supplierId.tsx` — same removal and hook wiring as 4.1
- [x] 4.4 Update `suppliers/new.tsx` — same removal and hook wiring as 4.1

## 5. Cleanup

- [x] 5.1 Delete or empty `apps/admin/src/components/admin/products/contextual-save-bar.tsx` if no other consumers remain
- [x] 5.2 Verify no remaining imports of the old `ContextualSaveBar` across the codebase
