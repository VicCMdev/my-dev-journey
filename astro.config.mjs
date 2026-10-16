// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://viccmdev.github.io',
  base: '/my-dev-journey',
  redirects: {
    '/': '/my-dev-journey/home',
  },
});
