import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/cb837570-7457-4664-b98d-71d3c3e59f1c/preview',
  plugins: [react()],
  server: {
    port: 5193,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5193,
    },
  },
})
