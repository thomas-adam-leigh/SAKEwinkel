import { defineConfig } from "eslint/config";

import { baseConfig } from "@b4i-atlas/eslint-config/base";
import { reactConfig } from "@b4i-atlas/eslint-config/react";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig,
  reactConfig,
);
