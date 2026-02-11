## Context

The admin app uses a fixed TopBar with a center search placeholder, a sidebar, and a scrollable main content area. Product and supplier detail/new pages currently render an inline `ContextualSaveBar` component at the top of their page content. This save bar is always visible regardless of whether changes exist, and it occupies space inside the page content area rather than the TopBar.

A proven reference implementation (vanilla CSS) shows the correct pattern: the save bar lives inside the TopBar's center slot, animating in from below to replace the search bar when `hasUnsavedChanges` becomes true, and animating out (with the search bar returning from above) when changes are reverted.

## Goals / Non-Goals

**Goals:**
- Move the contextual save bar into TopBar's center slot, replacing the search bar with a smooth animation
- Match the reference implementation's animation behavior exactly (search slides up/out, save bar slides up/in from below, and vice versa)
- Remove the inline ContextualSaveBar from all four detail/new pages
- Maintain the existing `isDirty` / `markDirty` / `handleDiscard` / `handleSave` state pattern on each page
- Keep search as a placeholder (no functionality)

**Non-Goals:**
- Implementing actual search functionality
- Changing form field dirty-tracking logic
- Modifying the sidebar or main content area
- Adding unsaved-changes route-leave guards
- Persistence or autosave

## Decisions

### 1. State propagation: React Context over prop drilling

**Decision**: Create a `TopBarContext` (or similar) provided by AppShell, consumed by TopBar. Detail pages call a hook (e.g. `useTopBarSaveBar`) to set `hasUnsavedChanges`, `onDiscard`, and `onSave`.

**Rationale**: The TopBar is rendered in `AppShell` and the detail pages render inside `<Outlet />`. Prop drilling through TanStack Router outlets is impractical. A context allows any page to opt into the save bar without touching intermediate components.

**Alternative considered**: Passing props through route loaders or search params — too complex for UI-only state, and couples routing to UI animation state.

### 2. Animation: Tailwind v4 `@keyframes` in styles.css

**Decision**: Define four keyframe animations (`above-out`, `above-in`, `below-in`, `below-out`) in the app's `styles.css` and expose them as custom Tailwind animation utilities via `@theme inline`. Apply them conditionally via className toggling.

**Rationale**: The reference implementation uses these exact four keyframes with `cubic-bezier(0.42, 0, 0.58, 1)` easing over 200ms. Tailwind v4's `@theme inline` allows defining custom animation utilities that can be applied as classes. This avoids inline styles and keeps animations declarative.

**Alternative considered**: Framer Motion — adds a dependency for a simple two-state animation that vanilla CSS handles perfectly.

### 3. Component structure: SearchBar and ContextualSaveBar as functions in top-bar.tsx

**Decision**: Define `SearchBar()` and `ContextualSaveBar()` as named function components within `top-bar.tsx`. TopBar orchestrates the animation state machine between them.

**Rationale**: User explicitly requested this structure. These components are tightly coupled to TopBar's animation logic and not reused elsewhere. Keeping them colocated reduces file proliferation.

### 4. Animation state machine: three-state enum

**Decision**: Use an `AnimationState` type with values `'idle' | 'showing-save-bar' | 'hiding-save-bar'`, tracked alongside a `showSaveBar` boolean. Transitions trigger on `hasUnsavedChanges` prop changes via `useEffect` with a `useRef` for previous value.

**Rationale**: Directly ported from the reference implementation. The ref-based previous-value pattern cleanly detects transitions. The 200ms timeout on `hiding-save-bar` matches the animation duration before removing the save bar from the DOM.

### 5. Center slot container: overflow clip

**Decision**: The center slot container uses `overflow: clip` (not `hidden`) to contain the slide animations within the TopBar's 56px height.

**Rationale**: `overflow: clip` prevents scroll containers from being created while still clipping content, which is what the reference implementation uses for clean animation containment.

## Risks / Trade-offs

- **Context cleanup on navigation**: Pages must clear `hasUnsavedChanges` when unmounting (via useEffect cleanup), otherwise stale save bars could persist. → Mitigation: The context hook's cleanup resets state automatically.
- **Animation timing vs React renders**: If `hasUnsavedChanges` toggles rapidly (e.g., typing then immediately undoing), the 200ms timeout could conflict. → Mitigation: The useEffect cleanup cancels pending timers, matching the reference implementation's pattern.
- **Tailwind purge**: Custom keyframe class names must be used in source code to survive purging. → Mitigation: Classes are applied via template literals in JSX, which Tailwind's scanner detects.
