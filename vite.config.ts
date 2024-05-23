import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "", // Ensure the trailing slash if deploying to a subdirectory
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:4000",
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist', // Ensure the output directory is correct
  },
});