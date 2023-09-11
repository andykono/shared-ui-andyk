import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './aliases';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias,
  },
  build:{
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'shared-ui-andyk',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        preserveModules: true,
        entryFileNames: '[name].vue.js',
        assetFileNames: 'assets/[name].[ext]',
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
})
