import { defineConfig } from "eslint/config";

import { baseConfig } from "@b4i-atlas/eslint-config/base";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig,
);
