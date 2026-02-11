## ADDED Requirements

### Requirement: TopBar center slot conditionally renders search bar or contextual save bar
The TopBar center slot SHALL render the SearchBar by default. When `hasUnsavedChanges` is true, the center slot SHALL render the ContextualSaveBar in place of the SearchBar. When `hasUnsavedChanges` returns to false, the SearchBar SHALL be restored.

#### Scenario: Default state shows search bar
- **WHEN** the TopBar renders with `hasUnsavedChanges` equal to false
- **THEN** the center slot displays the SearchBar

#### Scenario: Save bar replaces search bar on dirty state
- **WHEN** `hasUnsavedChanges` transitions from false to true
- **THEN** the SearchBar is replaced by the ContextualSaveBar in the center slot

#### Scenario: Search bar restored when changes reverted
- **WHEN** `hasUnsavedChanges` transitions from true to false
- **THEN** the ContextualSaveBar is replaced by the SearchBar in the center slot

### Requirement: SearchBar component renders in TopBar center slot
The SearchBar SHALL be a function component defined in `top-bar.tsx`. It SHALL render a button with background `#303030`, border-radius 12px, height 36px, containing a magnifying glass icon, "Search" label text in `#e3e3e3`, and keyboard shortcut badges (⌘ K) with background `rgba(255,255,255,0.08)`. The SearchBar SHALL have hover state background `#383838`.

#### Scenario: SearchBar displays all elements
- **WHEN** the SearchBar renders
- **THEN** it displays a search icon, "Search" text, and ⌘K keyboard shortcut badges inside a 36px-high rounded container

### Requirement: ContextualSaveBar component renders in TopBar center slot
The ContextualSaveBar SHALL be a function component defined in `top-bar.tsx`. It SHALL render a container with background `#303030`, border-radius 12px, height 36px, containing: an alert/unsaved icon and "Unsaved changes" title on the left, and "Discard" (secondary) and "Save" (primary) buttons on the right.

#### Scenario: ContextualSaveBar displays message and buttons
- **WHEN** the ContextualSaveBar renders
- **THEN** it displays an unsaved-changes icon, "Unsaved changes" text (13px, font-weight 550), a Discard button (transparent background, `#e3e3e3` text), and a Save button (white background, `#303030` text)

#### Scenario: Discard button calls onDiscard
- **WHEN** the user clicks the Discard button
- **THEN** the `onDiscard` callback is invoked

#### Scenario: Save button calls onSave
- **WHEN** the user clicks the Save button
- **THEN** the `onSave` callback is invoked

### Requirement: Animated transition between search bar and save bar
The transition between SearchBar and ContextualSaveBar SHALL be animated with 200ms duration and `cubic-bezier(0.42, 0, 0.58, 1)` easing. When showing the save bar: the SearchBar SHALL animate upward and fade out (`translateY(-100%) scale(0.95) opacity(0)`), and the ContextualSaveBar SHALL animate in from below (`translateY(100%) → translateY(0) scale(0.95→1) opacity(0→1)`). The reverse animation SHALL occur when hiding the save bar.

#### Scenario: Search bar animates out upward when save bar appears
- **WHEN** `hasUnsavedChanges` transitions from false to true
- **THEN** the SearchBar animates upward with fade-out over 200ms

#### Scenario: Save bar animates in from below when appearing
- **WHEN** `hasUnsavedChanges` transitions from false to true
- **THEN** the ContextualSaveBar animates in from below with fade-in over 200ms, simultaneously with the SearchBar exit animation

#### Scenario: Save bar animates out downward when search bar returns
- **WHEN** `hasUnsavedChanges` transitions from true to false
- **THEN** the ContextualSaveBar animates downward with fade-out over 200ms

#### Scenario: Search bar animates in from above when returning
- **WHEN** `hasUnsavedChanges` transitions from true to false
- **THEN** the SearchBar animates in from above with fade-in over 200ms, simultaneously with the ContextualSaveBar exit animation

### Requirement: Center slot container clips overflow
The center slot container SHALL use `overflow: clip` to contain all animations within the TopBar's 56px height. No content SHALL visually overflow during transitions.

#### Scenario: Animations contained within TopBar height
- **WHEN** the transition animation is in progress
- **THEN** no animated content is visible outside the 56px TopBar boundary

### Requirement: Animation state machine with three states
The animation SHALL be driven by a state machine with three states: `idle`, `showing-save-bar`, and `hiding-save-bar`. The `showing-save-bar` state SHALL apply exit animation to SearchBar and enter animation to ContextualSaveBar simultaneously. The `hiding-save-bar` state SHALL apply exit animation to ContextualSaveBar and enter animation to SearchBar. After the hiding animation completes (200ms), the state SHALL return to `idle` and the ContextualSaveBar SHALL be removed from the DOM.

#### Scenario: Rapid toggle does not break animation
- **WHEN** `hasUnsavedChanges` toggles rapidly (true→false within 200ms)
- **THEN** the pending animation timer is cancelled and the new transition begins cleanly

### Requirement: TopBar unsaved-changes state provided via React Context
A React Context SHALL be provided by the app shell that allows any page to set `hasUnsavedChanges`, `onDiscard`, and `onSave` on the TopBar. Pages SHALL use a hook to register their save bar state. When the page unmounts, the context SHALL automatically clear the save bar state.

#### Scenario: Detail page registers save bar via context
- **WHEN** a product or supplier detail page mounts and a form field is modified
- **THEN** the TopBar displays the ContextualSaveBar via the shared context

#### Scenario: Save bar clears on page navigation
- **WHEN** the user navigates away from a detail page with unsaved changes
- **THEN** the TopBar reverts to showing the SearchBar

### Requirement: Inline ContextualSaveBar removed from page content
The inline `ContextualSaveBar` component SHALL be removed from the page content of `/products/[id]`, `/products/new`, `/suppliers/[id]`, and `/suppliers/new`. The save bar SHALL only appear in the TopBar.

#### Scenario: No save bar in page content area
- **WHEN** a product or supplier detail/new page renders
- **THEN** there is no save bar visible in the scrollable page content area
