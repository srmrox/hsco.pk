// @ts-check
import { defineConfig } from 'astro/config';

// Static site. Every page builds to /<page>/index.html, same URLs as the WordPress site.
export default defineConfig({
  site: 'https://hsco.pk',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
