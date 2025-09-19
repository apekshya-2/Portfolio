import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Custom domain use गर्दा / राख्ने
  plugins: [react()],
});
