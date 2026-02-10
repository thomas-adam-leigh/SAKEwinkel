## 1. Dependencies & Configuration

- [x] 1.1 Add `@inlang/paraglide-js` to `apps/store/package.json` and install
- [x] 1.2 Create `apps/store/project.inlang/settings.json` with `baseLocale: "en"`, `locales: ["en", "de"]`, message format plugin, and `pathPattern: "./messages/{locale}.json"`
- [x] 1.3 Create `apps/store/messages/en.json` with initial translatable strings (navigation labels, auth UI text, common labels like "Sign in", "Sign out", "Dashboard", "Home", etc.)
- [x] 1.4 Create `apps/store/messages/de.json` with German translations for all keys in `en.json`
- [x] 1.5 Add `src/paraglide/` to `apps/store/.gitignore`

## 2. Vite Plugin Setup

- [x] 2.1 Add `paraglideVitePlugin` import to `apps/store/vite.config.ts`
- [x] 2.2 Configure the plugin with `project: './project.inlang'`, `outdir: './src/paraglide'`, `strategy: ['cookie', 'baseLocale']` — place it before `tanstackStart()` and `viteReact()` in the plugins array
- [x] 2.3 Run the dev server to verify `src/paraglide/` is generated with `runtime.ts`, `messages.ts`, and `server.ts`

## 3. Server Middleware

- [x] 3.1 Create `apps/store/src/server.ts` that imports `paraglideMiddleware` from `./paraglide/server` and wraps the TanStack Start handler (reads locale from cookie for SSR)
- [x] 3.2 ~~Verify that `/api/auth/*` requests still work without locale prefix interference~~ N/A — cookie strategy does not modify URLs

## 4. Router Integration

- [x] 4.1 ~~Add `deLocalizeUrl` and `localizeUrl` imports~~ N/A — cookie strategy; no router URL rewriting needed
- [x] 4.2 ~~Add the `rewrite` property to the `createRouter` config~~ N/A — cookie strategy; no router URL rewriting needed
- [x] 4.3 ~~Verify locale-prefixed URLs work~~ N/A — URLs are not locale-prefixed with cookie strategy
- [x] 4.4 ~~Verify unprefixed URLs redirect to base locale~~ N/A — URLs are not locale-prefixed with cookie strategy

## 5. Root Route & HTML Lang

- [x] 5.1 Import `getLocale` from `@/paraglide/runtime` in `apps/store/src/routes/__root.tsx`
- [x] 5.2 Update `beforeLoad` to set `document.documentElement.lang` via `getLocale()` on the client
- [x] 5.3 Replace the hardcoded `lang="en"` on `<html>` with `lang={getLocale()}` in the `RootDocument` component
- [ ] 5.4 Verify SSR output includes the correct `lang` attribute for each locale (manual test)

## 6. Locale Switcher Component

- [x] 6.1 Create `apps/store/src/components/locale-switcher.tsx` using `getLocale`, `setLocale`, and `locales` from `@/paraglide/runtime`
- [x] 6.2 Style the switcher to match the store's existing UI (shadcn/ui patterns)
- [x] 6.3 Add the `LocaleSwitcher` to the app layout (e.g., header or navigation area)
- [ ] 6.4 Verify switching locale reloads the page with the correct translations (manual test)

## 7. String Extraction & Translation

- [x] 7.1 Replace hardcoded strings in `__root.tsx` (page title, meta description) with `m.*()` calls
- [x] 7.2 Replace hardcoded strings in auth-related components (`sign-in-social-button.tsx`, `sign-out-button.tsx`) with `m.*()` calls
- [x] 7.3 Replace hardcoded strings in `_guest/login.tsx` and `_guest/signup.tsx` with `m.*()` calls
- [x] 7.4 Replace hardcoded strings in `default-catch-boundary.tsx` and `default-not-found.tsx` with `m.*()` calls
- [x] 7.5 Replace hardcoded strings in `index.tsx` (home page) with `m.*()` calls
- [x] 7.6 Add all new message keys to `messages/en.json` and `messages/de.json` as strings are extracted

## 8. Verification

- [x] 8.1 Run a full build (`pnpm build` or equivalent) and confirm no TypeScript or build errors
- [ ] 8.2 Test that the app renders correctly with English and German translations via locale switcher (manual test)
- [ ] 8.3 Test that auth flows (login, signup, sign out) work correctly (manual test)
- [ ] 8.4 Test that locale switching preserves the current route path (manual test)
- [ ] 8.5 Test that `<html lang>` attribute updates on client-side locale switch (manual test)
