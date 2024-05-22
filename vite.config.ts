import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/TheBlog/", // Ensure the trailing slash
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:4000",
        changeOrigin: true
      }
    }
  }
})
