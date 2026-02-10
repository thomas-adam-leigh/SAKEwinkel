# Drizzle to Prisma Migration — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace Drizzle ORM with Prisma across the entire `@b4i-atlas/db` package and all consumers.

**Architecture:** Rewrite `packages/db/` to use Prisma with a `schema.prisma` file that maps to the existing snake_case database tables. Export a PrismaClient singleton and auto-generated Zod schemas. Update `@b4i-atlas/api` and `@b4i-atlas/auth` to use Prisma APIs.

**Tech Stack:** Prisma, @prisma/client, zod-prisma-types, PostgreSQL (Supabase)

---

### Task 1: Update @b4i-atlas/db package.json — swap dependencies

**Files:**
- Modify: `packages/db/package.json`

**Step 1: Replace dependencies in package.json**

Replace the full contents of `packages/db/package.json` with:

```json
{
  "name": "@b4i-atlas/db",
  "private": true,
  "type": "module",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "default": "./src/index.ts"
    },
    "./client": {
      "types": "./dist/client.d.ts",
      "default": "./src/client.ts"
    },
    "./schema": {
      "types": "./dist/schema.d.ts",
      "default": "./src/schema.ts"
    }
  },
  "license": "MIT",
  "scripts": {
    "build": "tsc",
    "clean": "git clean -xdf .cache .turbo dist node_modules",
    "dev": "tsc",
    "format": "prettier --check . --ignore-path ../../.gitignore",
    "lint": "eslint --flag unstable_native_nodejs_ts_config",
    "push": "pnpm with-env prisma db push",
    "studio": "pnpm with-env prisma studio",
    "generate": "pnpm with-env prisma generate",
    "typecheck": "tsc --noEmit --emitDeclarationOnly false",
    "with-env": "dotenv -e ../../.env --"
  },
  "dependencies": {
    "@prisma/client": "^6.5.0",
    "zod": "catalog:"
  },
  "devDependencies": {
    "@b4i-atlas/eslint-config": "workspace:*",
    "@b4i-atlas/prettier-config": "workspace:*",
    "@b4i-atlas/tsconfig": "workspace:*",
    "eslint": "catalog:",
    "prettier": "catalog:",
    "prisma": "^6.5.0",
    "typescript": "catalog:",
    "zod-prisma-types": "^3.2.5"
  },
  "prettier": "@b4i-atlas/prettier-config"
}
```

**Step 2: Install dependencies**

Run: `pnpm install` from the repo root.
Expected: Clean install with Prisma packages added, Drizzle packages removed.

---

### Task 2: Write the Prisma schema

**Files:**
- Create: `packages/db/prisma/schema.prisma`

**Step 1: Create the Prisma schema file**

Create `packages/db/prisma/schema.prisma` with:

```prisma
generator client {
  provider = "prisma-client-js"
}

generator zod {
  provider         = "zod-prisma-types"
  output           = "../src/generated/zod"
  createInputTypes = true
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model Post {
  id        String   @id @default(uuid()) @db.Uuid
  title     String   @db.VarChar(256)
  content   String   @db.Text
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  @@map("post")
}

model User {
  id            String    @id
  name          String
  email         String    @unique
  emailVerified Boolean   @map("email_verified")
  image         String?
  createdAt     DateTime  @map("created_at")
  updatedAt     DateTime  @map("updated_at")
  sessions      Session[]
  accounts      Account[]

  @@map("user")
}

model Session {
  id        String   @id
  expiresAt DateTime @map("expires_at")
  token     String   @unique
  createdAt DateTime @map("created_at")
  updatedAt DateTime @map("updated_at")
  ipAddress String?  @map("ip_address")
  userAgent String?  @map("user_agent")
  userId    String   @map("user_id")
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("session")
}

model Account {
  id                    String    @id
  accountId             String    @map("account_id")
  providerId            String    @map("provider_id")
  userId                String    @map("user_id")
  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  accessToken           String?   @map("access_token")
  refreshToken          String?   @map("refresh_token")
  idToken               String?   @map("id_token")
  accessTokenExpiresAt  DateTime? @map("access_token_expires_at")
  refreshTokenExpiresAt DateTime? @map("refresh_token_expires_at")
  scope                 String?
  password              String?
  createdAt             DateTime  @map("created_at")
  updatedAt             DateTime  @map("updated_at")

  @@map("account")
}

model Verification {
  id         String    @id
  identifier String
  value      String
  expiresAt  DateTime  @map("expires_at")
  createdAt  DateTime? @map("created_at")
  updatedAt  DateTime? @map("updated_at")

  @@map("verification")
}
```

---

### Task 3: Update .env to use DATABASE_URL and DIRECT_URL

**Files:**
- Modify: `.env.example`

**Step 1: Update env variables**

The existing `POSTGRES_URL` needs to be renamed/aliased. Replace the database section in `.env.example`:

```
# The pooled database URL (port 6543) — used by Prisma at runtime
DATABASE_URL="postgres://postgres.[USERNAME]:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?workaround=supabase-pooler.vercel"

# The direct (non-pooled) database URL (port 5432) — used by Prisma for migrations/push
DIRECT_URL="postgres://postgres.[USERNAME]:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres"
```

Also update the actual `.env` file to have `DATABASE_URL` (the old `POSTGRES_URL` value) and `DIRECT_URL` (same URL but port 5432 instead of 6543, without the `?workaround=...` query param).

---

### Task 4: Generate Prisma client and Zod types

**Files:**
- Generated: `packages/db/src/generated/zod/` (auto-generated by zod-prisma-types)
- Generated: `node_modules/.prisma/client/` (auto-generated by prisma)

**Step 1: Run prisma generate**

Run from `packages/db/`:
```bash
pnpm with-env prisma generate
```

Expected: Prisma client generated + zod types generated in `packages/db/src/generated/zod/`.

**Step 2: Verify the generated Zod files exist**

Check that `packages/db/src/generated/zod/index.ts` exists and contains schemas like `PostSchema`, `PostCreateInputSchema`, etc.

---

### Task 5: Rewrite @b4i-atlas/db source files

**Files:**
- Modify: `packages/db/src/client.ts`
- Modify: `packages/db/src/index.ts`
- Modify: `packages/db/src/schema.ts`
- Delete: `packages/db/src/auth-schema.ts`
- Delete: `packages/db/drizzle.config.ts`

**Step 1: Rewrite client.ts**

Replace `packages/db/src/client.ts` with:

```typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
```

**Step 2: Rewrite index.ts**

Replace `packages/db/src/index.ts` with:

```typescript
export { Prisma } from "@prisma/client";
export type { Post, User, Session, Account, Verification } from "@prisma/client";
```

**Step 3: Rewrite schema.ts**

Replace `packages/db/src/schema.ts` with:

```typescript
export {
  PostCreateInputSchema,
  PostUpdateInputSchema,
} from "./generated/zod";

import { z } from "zod";

export const CreatePostSchema = z.object({
  title: z.string().max(256),
  content: z.string().max(256),
});
```

Note: We keep a hand-written `CreatePostSchema` because the generated input schemas include `id`, `createdAt`, `updatedAt` fields. The consumer expects an input schema with only `title` and `content`.

**Step 4: Delete old Drizzle files**

Delete:
- `packages/db/src/auth-schema.ts`
- `packages/db/drizzle.config.ts`

---

### Task 6: Update @b4i-atlas/api post router

**Files:**
- Modify: `packages/api/src/router/post.ts`

**Step 1: Rewrite post.ts**

Replace `packages/api/src/router/post.ts` with:

```typescript
import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod/v4";

import { CreatePostSchema } from "@b4i-atlas/db/schema";

import { protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = {
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: { id: "desc" },
      take: 10,
    });
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.post.findFirst({
        where: { id: input.id },
      });
    }),

  create: protectedProcedure
    .input(CreatePostSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.post.create({ data: input });
    }),

  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.db.post.delete({ where: { id: input } });
  }),
} satisfies TRPCRouterRecord;
```

The import of `desc`, `eq` from `@b4i-atlas/db` is removed — Prisma doesn't use standalone query operators.

---

### Task 7: Update @b4i-atlas/auth to use Prisma adapter

**Files:**
- Modify: `packages/auth/src/index.ts`

**Step 1: Rewrite auth index.ts**

Replace `packages/auth/src/index.ts` with:

```typescript
import type { BetterAuthOptions, BetterAuthPlugin } from "better-auth";
import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { oAuthProxy } from "better-auth/plugins";

import { db } from "@b4i-atlas/db/client";

export function initAuth<
  TExtraPlugins extends BetterAuthPlugin[] = [],
>(options: {
  baseUrl: string;
  productionUrl: string;
  secret: string | undefined;

  discordClientId: string;
  discordClientSecret: string;
  extraPlugins?: TExtraPlugins;
}) {
  const config = {
    database: prismaAdapter(db, {
      provider: "postgresql",
    }),
    baseURL: options.baseUrl,
    secret: options.secret,
    plugins: [
      oAuthProxy({
        productionURL: options.productionUrl,
      }),
      expo(),
      ...(options.extraPlugins ?? []),
    ],
    socialProviders: {
      discord: {
        clientId: options.discordClientId,
        clientSecret: options.discordClientSecret,
        redirectURI: `${options.productionUrl}/api/auth/callback/discord`,
      },
    },
    trustedOrigins: ["expo://"],
    onAPIError: {
      onError(error, ctx) {
        console.error("BETTER AUTH API ERROR", error, ctx);
      },
    },
  } satisfies BetterAuthOptions;

  return betterAuth(config);
}

export type Auth = ReturnType<typeof initAuth>;
export type Session = Auth["$Infer"]["Session"];
```

---

### Task 8: Update root package.json scripts

**Files:**
- Modify: `package.json` (root)

**Step 1: Update db scripts**

Change these scripts in the root `package.json`:

- `"db:push": "turbo -F @b4i-atlas/db push"` — keep as-is (the inner script in @b4i-atlas/db already changed)
- `"db:studio": "turbo -F @b4i-atlas/db studio"` — keep as-is
- Add: `"db:generate": "turbo -F @b4i-atlas/db generate"`

**Step 2: Update auth:generate script**

The `auth:generate` script currently generates a Drizzle schema file. With Prisma, Better Auth's schema is defined directly in `schema.prisma`. This script is no longer needed.

Remove: `"auth:generate": "pnpm -F @b4i-atlas/auth generate"`

Also remove the `generate` script from `packages/auth/package.json`.

---

### Task 9: Add generated files to .gitignore

**Files:**
- Modify: `.gitignore` (or create `packages/db/.gitignore`)

**Step 1: Gitignore the generated Zod files**

Add to the appropriate `.gitignore`:

```
# Prisma generated
packages/db/src/generated/
```

The Prisma client itself lives in `node_modules` so it's already ignored.

---

### Task 10: Verify everything works

**Step 1: Run prisma generate**

```bash
cd /Users/adamleigh/Development/SAKEwinkel && pnpm db:generate
```

Expected: Prisma client + Zod types generated successfully.

**Step 2: Run typecheck**

```bash
pnpm typecheck
```

Expected: No TypeScript errors across the monorepo.

**Step 3: Run db:push (if you have a DATABASE_URL configured)**

```bash
pnpm db:push
```

Expected: Schema pushed successfully. Since the tables already exist with matching column names, Prisma should detect them and report no changes needed.
