import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Static SPA build — no SSR, no server runtime needed.
// Deployed as plain HTML/CSS/JS to GitHub Pages behind a custom domain (see /public/CNAME),
// so base stays "/".
export default defineConfig({
  base: '/',
  plugins: [tailwindcss(), viteReact()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
