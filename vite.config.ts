import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// For GitHub Pages project sites (e.g. https://user.github.io/repo-name/)
// set GITHUB_PAGES_BASE=/<repo-name>/ in the deploy workflow.
// Local dev defaults to '/' so `npm run dev` still works as expected.
const base = process.env.GITHUB_PAGES_BASE ?? './'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Split large vendor chunks so the initial load is faster
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'radix-vendor': Object.keys(
            (await import('./package.json', { with: { type: 'json' } })).default.dependencies
          ).filter((k) => k.startsWith('@radix-ui')),
          'chart-vendor': ['recharts'],
          'motion-vendor': ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
