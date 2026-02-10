import { env } from "@/env/client";
import { initAuthClient } from "@b4i-atlas/auth/client";

export default initAuthClient({ baseURL: env.VITE_BASE_URL });
