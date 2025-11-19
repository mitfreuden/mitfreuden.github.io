// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mitfreuden.com",

  i18n: {
    locales: ["de", "en"],
    defaultLocale: "en",
    fallback: {
      "de": "en",
    },
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
      fallbackType: "rewrite"
    },
  },

  server: {
    host: true,
    allowedHosts: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
