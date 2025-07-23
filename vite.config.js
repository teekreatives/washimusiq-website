import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [
    react(),

  ],
  // Uncomment the line below if deploying to GitHub Pages
  // base: '/washimusiq-website/'
})