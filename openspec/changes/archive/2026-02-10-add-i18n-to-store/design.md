## Context

The store app (`apps/store/`) is a TanStack Start application with React 19, Vite, Tailwind, Better Auth, and React Query. All user-facing text is hardcoded in English. The monorepo already contains a working reference implementation at `apps/i18n/` that integrates Paraglide JS with the same stack.

The store app currently:
- Has no `server.ts` — it uses TanStack Start's default server entry
- Uses `createRootRouteWithContext` (not `createRootRoute`) to pass `queryClient` and `user` through router context
- Has auth API routes at `/api/auth/$` that must not be locale-prefixed
- Uses the React Compiler via a Babel plugin in Vite
- Uses `suppressHydrationWarning` on `<html>` for the theme provider

## Goals / Non-Goals

**Goals:**
- Add Paraglide JS with URL-based locale routing (`/en/...`, `/de/...`)
- Integrate without breaking auth, React Query, or theme provider flows
- Follow the proven pattern from `apps/i18n/` as closely as possible
- Make it easy to add new locales later by only changing `project.inlang/settings.json` and adding a message file

**Non-Goals:**
- Locale-specific content from the database (product descriptions, etc.) — this is about UI chrome only
- Automatic locale detection from browser `Accept-Language` headers (Paraglide middleware handles basic detection; we won't add custom logic)
- Right-to-left (RTL) language support
- Translating auth provider UI (social login buttons come from Better Auth)

## Decisions

### 1. Use Paraglide JS with URL strategy

**Choice**: `@inlang/paraglide-js` with `strategy: ['url']`

**Why**: The `apps/i18n/` reference app proves this works with TanStack Start. Paraglide generates typed, tree-shakeable message functions at build time — no runtime bundle overhead for unused translations. The URL strategy gives each locale its own URL path, which is best for SEO and shareable links.

**Alternatives considered**:
- *Cookie-based locale*: Worse for SEO, can't share locale-specific links
- *react-intl / react-i18next*: Runtime-heavy, no codegen, no type safety for message keys
- *Subdomain strategy*: Overkill for two locales, requires DNS configuration

### 2. Add a server.ts with Paraglide middleware

**Choice**: Create `apps/store/src/server.ts` that wraps the default TanStack Start handler with `paraglideMiddleware`.

**Why**: The store currently uses TanStack Start's implicit default server entry. Paraglide needs to intercept requests before the handler to detect locale from the URL and set up the server-side locale context. This is the same pattern used in `apps/i18n/`.

**Note**: The auth API route (`/api/auth/$`) is handled by TanStack Router's file-based server handlers, which run inside the TanStack Start handler. Since Paraglide's middleware only rewrites URLs that match locale patterns and passes through unmatched paths, `/api/auth/*` requests will flow through unaffected — the URL rewrite hooks only apply to router-matched routes.

### 3. Preserve existing router context pattern

**Choice**: Add Paraglide's `rewrite` hooks to the existing `getRouter()` function without changing the `createRootRouteWithContext` pattern or React Query integration.

**Why**: The store's router already passes `queryClient` and `user` through context and uses SSR query integration. Paraglide's URL rewriting is additive — it only needs a `rewrite` property on the router config. No changes to context shape or query setup required.

### 4. Keep suppressHydrationWarning for both theme and locale

**Choice**: The `<html>` element already has `suppressHydrationWarning` for the theme provider's class manipulation. The dynamic `lang` attribute from `getLocale()` is set during SSR and matches the client, so it won't cause hydration mismatches. Keep the existing suppression as-is.

### 5. Start with en + de, structure for easy expansion

**Choice**: `baseLocale: "en"`, `locales: ["en", "de"]`. Messages in `messages/en.json` and `messages/de.json`.

**Why**: Matches the reference app. German is the first target translation language. Adding a new locale later requires only: (1) add the locale code to `settings.json`, (2) create a new `messages/<locale>.json` file.

### 6. Extract strings incrementally

**Choice**: Start with a minimal set of translated strings (navigation, auth UI, common labels) rather than translating every string at once.

**Why**: The store is under active development. Extracting all strings upfront creates a large diff and slows down feature work. Better to establish the pattern and infrastructure, then translate strings as components are touched.

## Risks / Trade-offs

**[URL structure change]** → All existing store URLs gain a locale prefix. Unprefixed URLs redirect to the base locale (`/en/...`). Any hardcoded links in external systems (emails, bookmarks) will need the redirect. Mitigation: Paraglide's middleware handles the redirect automatically.

**[Auth route interference]** → If Paraglide's URL rewrite incorrectly matches `/api/auth/*` paths, auth will break. Mitigation: Paraglide's URL strategy only rewrites paths that start with a known locale prefix; API routes don't match this pattern. Verify in integration testing.

**[React Compiler compatibility]** → The store uses `babel-plugin-react-compiler`. Paraglide's generated message functions are simple function calls (`m.key()`) that should be compatible. Mitigation: Test that the compiler doesn't optimize away reactive locale changes.

**[Build-time codegen ordering]** → The Paraglide Vite plugin must run before `tanstackStart()` and `viteReact()` so that generated files exist when routes are compiled. Mitigation: Place `paraglideVitePlugin` early in the plugins array (same ordering as `apps/i18n/`).

**[Message file merge conflicts]** → Multiple developers editing `messages/en.json` concurrently will create merge conflicts. Mitigation: Keep message files alphabetically sorted; JSON conflicts are straightforward to resolve.
