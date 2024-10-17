import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

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
  output: 'hybrid',
  integrations: [tailwind()],
  adapter: vercel()
});