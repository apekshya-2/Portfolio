import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages host को लागि
export default defineConfig({
  base: '/Portfolio/', // GitHub Pages मा project को path
  plugins: [react()],
})
