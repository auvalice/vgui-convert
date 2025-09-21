import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import cp from 'vite-plugin-cp'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      fileName: 'index',
      formats: ['es'],
    },
  },
  plugins: [
    dts({
      include: ['src'],
      rollupTypes: true,
      tsconfigPath: './tsconfig.base.json',
    }),
    cp({
      targets: [
        { src: './package.json', dest: './dist' },
        { src: './README.md', dest: './dist' },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src/'),
    },
  },
})
