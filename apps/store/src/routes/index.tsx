import { LocaleSwitcher } from "@/components/locale-switcher";
import { SignOutButton } from "@/components/sign-out-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useAuthSuspense } from "@/lib/auth";
import { m } from "@/paraglide/messages";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 p-2">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold sm:text-4xl">{m.app_title()}</h1>
        <div className="text-foreground/80 flex items-center gap-2 text-sm max-sm:flex-col">
          {m.unprotected_page_note()}
          <pre className="bg-card text-card-foreground rounded-md border p-1">
            routes/index.tsx
          </pre>
        </div>
      </div>

      <Suspense fallback={<div className="py-6">{m.loading_user()}</div>}>
        <UserAction />
      </Suspense>

      <div className="flex flex-col items-center gap-2">
        <p className="text-foreground/80 max-sm:text-xs">
          {m.starter_description()}{" "}
          <a
            className="text-foreground group"
            href="https://tanstack.com/start/latest"
            target="_blank"
            rel="noreferrer noopener"
          >
            🏝️ <span className="group-hover:underline">{m.tanstack_start()}</span>
          </a>
          .
        </p>
        <div className="flex items-center gap-3">
          <a
            className="text-foreground/80 hover:text-foreground underline max-sm:text-sm"
            href="https://github.com/dotnize/react-tanstarter"
            target="_blank"
            title="Template repository on GitHub"
            rel="noreferrer noopener"
          >
            dotnize/react-tanstarter
          </a>

          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

function UserAction() {
  const { user } = useAuthSuspense();

  return user ? (
    <div className="flex flex-col items-center gap-2">
      <p>{m.welcome_back_user({ name: user.name })}</p>
      <Button
        render={<Link to="/dashboard" />}
        className="mb-2 w-fit"
        size="lg"
        nativeButton={false}
      >
        {m.go_to_dashboard()}
      </Button>
      <div className="text-center text-xs sm:text-sm">
        {m.session_user()}
        <pre className="max-w-screen overflow-x-auto px-2 text-start">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>

      <SignOutButton />
    </div>
  ) : (
    <div className="flex flex-col items-center gap-2">
      <p>{m.you_are_not_signed_in()}</p>
      <Button
        render={<Link to="/login" />}
        className="w-fit"
        size="lg"
        nativeButton={false}
      >
        {m.login()}
      </Button>
    </div>
  );
}
