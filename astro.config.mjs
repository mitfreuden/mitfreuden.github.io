// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mitfreuden.com',

  server: {
    host: true,
    allowedHosts: true
  },

  vite: {
    plugins: [tailwindcss()]
  }
});