## Requirements

### Requirement: Locale configuration
The store app SHALL support multiple locales configured via `project.inlang/settings.json`. The base locale SHALL be `en`. The initial set of supported locales SHALL be `en` and `de`. Adding a new locale SHALL require only adding the locale code to `settings.json` and creating a corresponding message file.

#### Scenario: Base locale is English
- **WHEN** no locale-specific configuration is changed
- **THEN** the base locale is `en` and all fallback behavior uses English

#### Scenario: German locale is available
- **WHEN** a user switches to German via the locale switcher
- **THEN** the app renders using German translations from `messages/de.json`

#### Scenario: Adding a new locale
- **WHEN** a developer adds a locale code to `project.inlang/settings.json` and creates a `messages/<locale>.json` file
- **THEN** the new locale is available in the app without other code changes

### Requirement: Message files
The store app SHALL store translatable strings in JSON message files at `messages/{locale}.json`. Each message file SHALL use the inlang message format schema. All message keys SHALL exist in the base locale file (`messages/en.json`). Message functions SHALL be typed and generated at build time by Paraglide JS.

#### Scenario: Message keys are type-safe
- **WHEN** a developer references a message key via `m.<key>()`
- **THEN** TypeScript reports an error if the key does not exist in `messages/en.json`

#### Scenario: Parameterized messages
- **WHEN** a message contains parameters (e.g., `"greeting": "Hello, {name}"`)
- **THEN** the generated function `m.greeting({ name })` requires the parameter and TypeScript enforces it

#### Scenario: Missing translation in non-base locale
- **WHEN** a message key exists in `en.json` but not in `de.json`
- **THEN** the system falls back to the English string (Paraglide default behavior)

### Requirement: Vite plugin integration
The Paraglide Vite plugin SHALL be configured in `apps/store/vite.config.ts` with `strategy: ['cookie', 'baseLocale']`, pointing to `./project.inlang` and outputting generated code to `./src/paraglide`. The plugin SHALL be placed before `tanstackStart()` and `viteReact()` in the plugins array to ensure generated files exist before route compilation.

#### Scenario: Build generates paraglide runtime
- **WHEN** the Vite build runs
- **THEN** the `src/paraglide/` directory is generated with `runtime.js`, `messages.js`, and `server.js`

#### Scenario: Plugin ordering
- **WHEN** the Vite plugin array is processed
- **THEN** `paraglideVitePlugin` runs before `tanstackStart()` and `viteReact()`

### Requirement: Cookie-based locale strategy
The locale SHALL be stored in a cookie (`PARAGLIDE_LOCALE`). URLs SHALL NOT contain locale prefixes. Switching locale SHALL set the cookie and reload the page. The cookie strategy keeps URLs clean and locale-neutral.

#### Scenario: Locale persists across page loads
- **WHEN** a user selects German via the locale switcher
- **THEN** the `PARAGLIDE_LOCALE` cookie is set to `de` and subsequent page loads render in German

#### Scenario: URLs remain unchanged
- **WHEN** a user switches locale
- **THEN** the URL path does not change (no `/en/` or `/de/` prefixes)

#### Scenario: Default locale without cookie
- **WHEN** no `PARAGLIDE_LOCALE` cookie is set
- **THEN** the app renders in the base locale (`en`)

### Requirement: Server-side locale detection
The store SHALL have a `src/server.ts` that wraps the TanStack Start handler with Paraglide's `paraglideMiddleware`. The middleware SHALL detect the locale from the cookie on server-side requests and set the correct locale context for SSR.

#### Scenario: SSR renders correct locale
- **WHEN** a server-side request arrives with `PARAGLIDE_LOCALE=de` cookie
- **THEN** the SSR response contains German translations and `<html lang="de">`

#### Scenario: Server middleware wraps handler
- **WHEN** the server receives any request
- **THEN** `paraglideMiddleware` processes the request before the TanStack Start handler

### Requirement: HTML lang attribute
The `<html>` element SHALL have its `lang` attribute set to the current locale. On the server, this SHALL be set during SSR via `getLocale()`. On the client, the `beforeLoad` hook in `__root.tsx` SHALL update `document.documentElement.lang`.

#### Scenario: HTML lang matches locale on SSR
- **WHEN** a page is server-rendered with the `de` locale cookie
- **THEN** the HTML response contains `<html lang="de">`

#### Scenario: HTML lang updates on client navigation
- **WHEN** a user switches locale via the locale switcher
- **THEN** `document.documentElement.lang` is updated to the new locale

### Requirement: Locale switcher component
The store SHALL provide a `LocaleSwitcher` component that allows users to switch between available locales. The switcher SHALL use Paraglide's `setLocale()` to change the locale, which sets the cookie and reloads the page.

#### Scenario: Switching locale sets cookie and reloads
- **WHEN** a user selects German in the locale switcher
- **THEN** the `PARAGLIDE_LOCALE` cookie is set to `de` and the page reloads with German translations

#### Scenario: Switcher shows all available locales
- **WHEN** the `LocaleSwitcher` component renders
- **THEN** it displays options for all locales defined in `project.inlang/settings.json`

#### Scenario: Current locale is indicated
- **WHEN** the active locale is `de`
- **THEN** the switcher visually indicates that German is the current selection

### Requirement: Generated code is not committed
The `src/paraglide/` directory SHALL be listed in `.gitignore`. Generated Paraglide files SHALL be produced at build time and SHALL NOT be committed to version control.

#### Scenario: Gitignore includes paraglide output
- **WHEN** a developer runs `git status` after a build
- **THEN** files in `src/paraglide/` are not shown as untracked
