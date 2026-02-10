## Why

The store app (`apps/store/`) has all user-facing text hardcoded in English. To support a multilingual customer base (starting with English and German), we need internationalization. The `apps/i18n/` reference app already proves out the Paraglide JS + TanStack Start pattern on the same stack — we should adopt it directly rather than reinventing.

## What Changes

- Add Paraglide JS (`@inlang/paraglide-js`) as a dependency to `apps/store/`
- Add inlang project configuration (`project.inlang/settings.json`) with `en` base locale and `de` as the first additional locale
- Add message files (`messages/en.json`, `messages/de.json`) containing all translatable strings extracted from the store
- Configure the Vite plugin (`paraglideVitePlugin`) to generate typed message functions into `src/paraglide/`
- Integrate URL-based locale routing via TanStack Router rewrite hooks (`deLocalizeUrl`, `localizeUrl`)
- Wrap the server entry with `paraglideMiddleware` for SSR locale detection
- Set the HTML `lang` attribute dynamically from the current locale in `__root.tsx`
- Add a `LocaleSwitcher` component for users to change language
- Replace all hardcoded English strings in components and routes with `m.*()` message function calls

## Capabilities

### New Capabilities

- `store-i18n`: Paraglide JS integration into the store app — covers locale configuration, message file structure, Vite plugin setup, URL-based locale routing, server middleware, locale switching UI, and the pattern for using typed message functions throughout the app.

### Modified Capabilities

_None — no existing specs to modify._

## Impact

- **Dependencies**: Adds `@inlang/paraglide-js` to `apps/store/package.json`
- **Build**: Vite config gains the Paraglide plugin; generates `src/paraglide/` at build time (should be gitignored)
- **Routing**: All store URLs gain a locale prefix (`/en/...`, `/de/...`). Existing bookmarks/links to unprefixed routes will redirect to the base locale version.
- **Server**: The TanStack Start server handler gets wrapped with Paraglide middleware
- **Components**: Every component with user-facing text needs message function calls instead of string literals
- **Auth routes**: `/api/auth/*` must remain locale-agnostic (no prefix rewriting)
- **SEO**: `<html lang>` attribute set per-locale; locale-prefixed URLs improve search engine indexing per language
