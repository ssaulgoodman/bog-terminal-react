import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true,
    host: true,
    cors: true,
    strictPort: true,
    allowedHosts: [
      'localhost',
      '.ngrok-free.app',
      '4a8c-183-83-166-29.ngrok-free.app'
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  }
}) 