import { AppShell } from "@/components/admin/app-shell";
import { authQueryOptions } from "@/lib/auth";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: AppShell,
  beforeLoad: async ({ context }) => {
    const user = await context.queryClient.ensureQueryData({
      ...authQueryOptions(),
      revalidateIfStale: true,
    });
    if (!user) {
      throw redirect({ to: "/login" });
    }

    // re-return to update type as non-null for child routes
    return { user };
  },
});
