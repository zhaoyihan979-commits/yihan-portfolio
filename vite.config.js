import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/' is correct for Cloudflare Pages served at the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
