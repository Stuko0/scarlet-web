import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en","fr","pt","br"],
    fallback: {
      fr: "es",
      pt: "es",
      br: "es"
    },
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "rewrite"
    }
  },

  output: 'static',
  integrations: [tailwindcss()],
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  }
});