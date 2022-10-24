import { defineConfig, resolveBaseUrl } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      { find: '@comopnents', replacement: resolve(__dirname, 'comopnents') },
      { find: '@pages', replacement: resolve(__dirname, 'pages') },
      { find: '@router', replacement: resolve(__dirname, 'router') },
    ]
  }
})
