import type { BetterAuthOptions, BetterAuthPlugin } from "better-auth";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { oAuthProxy } from "better-auth/plugins";

import { db } from "@b4i-atlas/db/client";

export interface InitAuthOptions<
  TExtraPlugins extends BetterAuthPlugin[] = [],
> {
  baseURL: string;
  secret?: string;
  socialProviders?: BetterAuthOptions["socialProviders"];
  emailAndPassword?: { enabled: boolean };
  session?: BetterAuthOptions["session"];
  productionUrl?: string;
  extraPlugins?: TExtraPlugins;
  trustedOrigins?: string[];
  telemetry?: { enabled: boolean };
}

export function initAuth<TExtraPlugins extends BetterAuthPlugin[] = []>(
  options: InitAuthOptions<TExtraPlugins>,
) {
  return betterAuth({
    baseURL: options.baseURL,
    secret: options.secret,
    telemetry: options.telemetry ?? { enabled: false },
    database: prismaAdapter(db, { provider: "postgresql" }),
    plugins: [
      tanstackStartCookies(),
      ...(options.productionUrl
        ? [oAuthProxy({ productionURL: options.productionUrl })]
        : []),
      ...(options.extraPlugins ?? []),
    ],
    session: options.session ?? {
      cookieCache: { enabled: true, maxAge: 5 * 60 },
    },
    socialProviders: options.socialProviders,
    emailAndPassword: options.emailAndPassword,
    trustedOrigins: options.trustedOrigins,
    onAPIError: {
      onError(error, ctx) {
        console.error("BETTER AUTH API ERROR", error, ctx);
      },
    },
  });
}

export type Auth = ReturnType<typeof initAuth>;
export type Session = Auth["$Infer"]["Session"];
export type User = Session["user"];
