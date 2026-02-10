import { m } from "@/paraglide/messages";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link, useRouter } from "@tanstack/react-router";
import { Button } from "./ui/button";

export function DefaultCatchBoundary({ error, reset }: ErrorComponentProps) {
  const router = useRouter();

  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-4">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-xl font-bold">{m.error_something_went_wrong()}</h1>
        <p className="text-foreground/60 text-sm">{error.message}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          onClick={() => {
            reset();
            router.invalidate();
          }}
        >
          {m.try_again()}
        </Button>
        <Button render={<Link to="/" />} variant="secondary" nativeButton={false}>
          {m.home()}
        </Button>
      </div>
    </div>
  );
}
