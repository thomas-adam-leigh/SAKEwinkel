import { initAuthClient } from "@b4i-atlas/auth/client";
import { env } from "@/env/client";

export default initAuthClient({ baseURL: env.VITE_BASE_URL });
