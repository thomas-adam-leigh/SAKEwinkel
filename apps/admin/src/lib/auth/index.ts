import { createAuthQueryOptions } from "@b4i-atlas/auth/tanstack-start";
import { createMiddleware, createServerFn } from "@tanstack/react-start";

const $getUser = createServerFn({ method: "GET" }).handler(async () => {
  const { getAuthSession } = await import("@b4i-atlas/auth/tanstack-start/server");
  return getAuthSession(async () => (await import("./auth")).auth);
});

const authMiddleware = createMiddleware().server(async ({ next }) => {
  const { requireAuthSession } = await import("@b4i-atlas/auth/tanstack-start/server");
  const user = await requireAuthSession(async () => (await import("./auth")).auth);
  return next({ context: { user } });
});

const { authQueryOptions, useAuth, useAuthSuspense } = createAuthQueryOptions($getUser);

export type { AuthQueryResult } from "@b4i-atlas/auth/tanstack-start";
export { $getUser, authMiddleware, authQueryOptions, useAuth, useAuthSuspense };
