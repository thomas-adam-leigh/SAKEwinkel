import { createAuthClient } from "better-auth/react";

export function initAuthClient(options: { baseURL: string }) {
  return createAuthClient({ baseURL: options.baseURL });
}

export type AuthClient = ReturnType<typeof initAuthClient>;
