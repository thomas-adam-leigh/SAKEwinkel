import { queryOptions, useQuery, useSuspenseQuery } from "@tanstack/react-query";

import type { User } from "./index";

/** Create query options and hooks from an app-local $getUser server function. */
export function createAuthQueryOptions(
  $getUser: (opts: { signal: AbortSignal }) => Promise<User | null>,
) {
  const authQueryOptions = () =>
    queryOptions({
      queryKey: ["user"],
      queryFn: ({ signal }) => $getUser({ signal }),
    });

  function useAuth() {
    const { data: user, isPending } = useQuery(authQueryOptions());
    return { user, isPending };
  }

  function useAuthSuspense() {
    const { data: user } = useSuspenseQuery(authQueryOptions());
    return { user };
  }

  return { authQueryOptions, useAuth, useAuthSuspense };
}

export type AuthQueryResult = User | null;
