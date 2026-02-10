import {
  getRequest,
  setResponseHeader,
  setResponseStatus,
} from "@tanstack/react-start/server";

import type { Auth } from "./index";

/** Call inside a createServerFn handler to get the current user session. */
export async function getAuthSession(getAuth: () => Auth | Promise<Auth>) {
  const auth = await getAuth();
  const session = await auth.api.getSession({
    headers: getRequest().headers,
    returnHeaders: true,
  });

  const cookies = session.headers?.getSetCookie();
  if (cookies?.length) {
    setResponseHeader("Set-Cookie", cookies);
  }

  return session.response?.user || null;
}

/** Call inside a createMiddleware handler to require auth. Returns user or throws 401. */
export async function requireAuthSession(getAuth: () => Auth | Promise<Auth>) {
  const auth = await getAuth();
  const session = await auth.api.getSession({
    headers: getRequest().headers,
    query: { disableCookieCache: true },
    returnHeaders: true,
  });

  const cookies = session.headers?.getSetCookie();
  if (cookies?.length) {
    setResponseHeader("Set-Cookie", cookies);
  }

  if (!session?.response?.user) {
    setResponseStatus(401);
    throw new Error("Unauthorized");
  }

  return session.response.user;
}
