import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.SLIDE_BASE || '/',
  resolve: {
    alias: {
      '@': resolve(__dirname)
    }
  }
})
