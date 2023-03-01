import { defineConfig } from 'astro/config';
import { CUSTOM_DOMAIN, BASE_PATH } from './src/server-constants';
import FeaturedImageDownloader from './src/integrations/featured-image-downloader';
import PublicNotionCopier from './src/integrations/public-notion-copier';
import react from '@astrojs/react';
import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import addClasses from 'rehype-add-classes';

const getSite = function () {
  if (!process.env.CF_PAGES) {
    return new URL(BASE_PATH, 'http://localhost:3000').toString();
  }
  if (process.env.CF_PAGES_BRANCH !== 'main') {
    return new URL(BASE_PATH, process.env.CF_PAGES_URL).toString();
  }
  if (CUSTOM_DOMAIN) {
    return new URL(BASE_PATH, `https://${CUSTOM_DOMAIN}`).toString();
  }
  return new URL(
    BASE_PATH,
    `https://${new URL(process.env.CF_PAGES_URL).host
      .split('.')
      .slice(1)
      .join('.')}`
  ).toString();
};

// https://astro.build/config
export default defineConfig({
  site: getSite(),
  base: BASE_PATH,
  integrations: [
    FeaturedImageDownloader(),
    PublicNotionCopier(),
    react(),
    image(),
    tailwind(),
  ],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6',
          a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500',
        },
      ],
    ],
  },
});
