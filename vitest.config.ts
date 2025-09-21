import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.spec.ts'],
    globals: true,
    setupFiles: ['vitest.setup.ts'],
  },
  resolve: {
    alias: {
      '@': resolve('src/'),
    },
  },
})
