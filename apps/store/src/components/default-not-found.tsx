import { m } from "@/paraglide/messages";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export function DefaultNotFound() {
  return (
    <div className="space-y-2 p-2">
      <p>{m.not_found_message()}</p>
      <p className="flex flex-wrap items-center gap-2">
        <Button type="button" onClick={() => window.history.back()}>
          {m.go_back()}
        </Button>
        <Button render={<Link to="/" />} variant="secondary" nativeButton={false}>
          {m.home()}
        </Button>
      </p>
    </div>
  );
}
