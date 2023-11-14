import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { terser } from 'rollup-plugin-terser'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'source-diff',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'style.css') return 'index.css';
          return assetInfo.name;
        },
      },
      plugins: [
        terser({
          compress: {
            defaults: false,
            drop_console: true,
          },
        }),
      ],
    },
  },
  test: {
    environment: 'jsdom',
  },
  plugins: [
    vue(),
    dts()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
