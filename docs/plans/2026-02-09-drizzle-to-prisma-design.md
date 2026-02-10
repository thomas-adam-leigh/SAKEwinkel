# Drizzle to Prisma Migration

## Decisions

- Full Prisma replacement (including Better Auth adapter)
- Direct DATABASE_URL connection (no @vercel/postgres driver adapter)
- `prisma db push` for schema deployment (no migration files)
- `zod-prisma-types` for auto-generated Zod validation schemas

## File Structure

```
packages/db/
├── prisma/
│   └── schema.prisma          # All models (Post + auth tables)
├── src/
│   ├── index.ts               # Re-exports Prisma types
│   ├── client.ts              # PrismaClient singleton
│   └── schema.ts              # Re-exports generated Zod validators
├── package.json
└── tsconfig.json
```

Removed: `drizzle.config.ts`, `src/auth-schema.ts`

## Schema

Prisma schema maps to existing snake_case tables via `@@map` / `@map` directives. No data migration needed.

Models: Post, User, Session, Account, Verification

## Consumer Changes

- `@b4i-atlas/api` post router: Drizzle query builder → Prisma client methods
- `@b4i-atlas/auth`: `drizzleAdapter` → `prismaAdapter`
- `@b4i-atlas/db/client`: Drizzle instance → PrismaClient singleton
- `@b4i-atlas/db` index: Drizzle SQL re-exports → Prisma type re-exports
- `@b4i-atlas/db/schema`: drizzle-zod schemas → zod-prisma-types generated schemas

## Package Changes

Add: `prisma`, `@prisma/client`, `zod-prisma-types`
Remove: `drizzle-orm`, `drizzle-zod`, `drizzle-kit`, `@vercel/postgres`

## Root Script Changes

- `db:push` → `prisma db push`
- `db:studio` → `prisma studio`
- `db:generate` → `prisma generate`
