import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-ashish-react",
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip', // You can also use 'brotli'
      // Optionally configure other settings like file extensions to compress
    }),
  ],
})
