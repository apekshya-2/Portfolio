import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio',  // replace <portfolio> with your repo name if using GitHub Pages without custom domain
  plugins: [react()],
})
