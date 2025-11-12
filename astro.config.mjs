// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mitfreuden.com",

  i18n: {
    locales: ["de", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
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
