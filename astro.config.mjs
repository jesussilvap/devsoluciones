import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://devsoluciones.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
