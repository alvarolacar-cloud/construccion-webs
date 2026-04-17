// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@data': path.resolve(__dirname, 'src/data'),
      }
    }
  }
});