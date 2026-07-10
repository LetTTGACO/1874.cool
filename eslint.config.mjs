import nextVitals from "eslint-config-next/core-web-vitals"
import nextTypeScript from "eslint-config-next/typescript"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import tailwindcss from "eslint-plugin-tailwindcss"
import { defineConfig, globalIgnores } from "eslint/config"

const tailwindRecommended = tailwindcss.configs.recommended

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  {
    ...tailwindRecommended,
    settings: {
      tailwindcss: {
        cssConfigPath: "./styles/globals.css",
      },
    },
    rules: {
      ...tailwindRecommended.rules,
      "tailwindcss/no-custom-classname": "off",
    },
  },
  eslintConfigPrettier,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "docs/superpowers/**",
    ".local/**",
  ]),
])
