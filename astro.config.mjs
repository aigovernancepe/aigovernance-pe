import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aigovernance.pe',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-PE' } },
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  build: { format: 'directory' },
  vite: {
    build: { cssMinify: true },
  },
});
