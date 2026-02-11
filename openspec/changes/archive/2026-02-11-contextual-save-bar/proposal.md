## Why

The current `ContextualSaveBar` component renders inline at the top of product/supplier detail and new pages. It is always visible (even with no changes), cluttering the page content area. The correct UX — proven in a prior implementation — is for the save bar to live in the TopBar, replacing the search bar with a smooth animation only when form fields are modified. Reverting changes should restore the search bar. This eliminates the always-visible save banner and provides a polished, contextual editing experience.

## What Changes

- **Remove** the inline `ContextualSaveBar` from `/products/[id]`, `/products/new`, `/suppliers/[id]`, and `/suppliers/new` page content
- **Add** a `SearchBar` component and a `ContextualSaveBar` component as separate functions inside `top-bar.tsx`
- **Update** `TopBar` to accept `hasUnsavedChanges`, `onDiscard`, and `onSave` props, conditionally animating between SearchBar and ContextualSaveBar in the center slot
- **Implement** slide-up/slide-down animations (search exits upward, save bar enters from below) using Tailwind CSS keyframes — matching the reference implementation exactly
- **Wire** the `isDirty` / `onDiscard` / `onSave` state from each detail page through to `TopBar` (via layout context or props)

## Capabilities

### New Capabilities
- `contextual-save-bar`: Animated contextual save bar in TopBar that replaces the search bar when unsaved changes are detected on detail/new pages

### Modified Capabilities
- `admin-shell-layout`: TopBar gains props for unsaved-changes state; center slot now conditionally renders search vs save bar

## Impact

- **Components**: `top-bar.tsx`, `app-shell.tsx`, `contextual-save-bar.tsx` (delete or repurpose)
- **Pages**: `products/$productId.tsx`, `products/new.tsx`, `suppliers/$supplierId.tsx`, `suppliers/new.tsx` — remove inline ContextualSaveBar, pass dirty state up
- **CSS**: New Tailwind keyframe animations added to `styles.css` or `theme.css`
- **No API/backend changes**
