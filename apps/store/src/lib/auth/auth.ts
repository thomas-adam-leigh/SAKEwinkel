import { createServerOnlyFn } from "@tanstack/react-start";
import { initAuth } from "@b4i-atlas/auth";
import { env } from "@/env/server";

const getAuthConfig = createServerOnlyFn(() =>
  initAuth({
    baseURL: env.VITE_BASE_URL,
    secret: env.BETTER_AUTH_SECRET,
    socialProviders: {
      github: {
        clientId: env.GITHUB_CLIENT_ID!,
        clientSecret: env.GITHUB_CLIENT_SECRET!,
      },
      google: {
        clientId: env.GOOGLE_CLIENT_ID!,
        clientSecret: env.GOOGLE_CLIENT_SECRET!,
      },
    },
    emailAndPassword: { enabled: true },
  }),
);

export const auth = getAuthConfig();
