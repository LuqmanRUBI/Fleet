import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      ignored: ['**/node_modules/**', '**/.git/**', '**/.cache/**']
    }
  },
  plugins: [react()],
});
