import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adyaakhera.github.io',
  base: '/',
  output: 'static',
  build: { format: 'directory' }
});
