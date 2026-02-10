import { paraglideMiddleware } from "./paraglide/server";
import handler from "@tanstack/react-start/server-entry";

// Paraglide middleware reads the locale cookie and sets up
// AsyncLocalStorage context so SSR renders the correct locale
export default {
  fetch(req: Request): Promise<Response> {
    return paraglideMiddleware(req, ({ request }) => handler.fetch(request));
  },
};
