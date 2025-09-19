import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio',  // replace <portfolio> with your repo name if using GitHub Pages without custom domain
  plugins: [react()],
})
