// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  // Set the base path for GitHub Pages
  base: '/peo226.github.io', // Replace with your actual GitHub repository name

  plugins: [react()],
})
