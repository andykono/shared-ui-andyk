import {resolve} from 'node:path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import {viteStaticCopy} from 'vite-plugin-static-copy'
import alias from './aliases';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dts(),
        cssInjectedByJsPlugin(),
        viteStaticCopy({
            targets: [
                {
                    src: './package.json',
                    dest: './',
                },
                {
                    src: './README.md',
                    dest: './',
                },
                {
                    src: './src/styles/scss/',
                    dest: './styles/',
                },
            ],
        }),],
    resolve: {
        alias,
    },
    build: {
        outDir: './dist',
        assetsDir: './src/assets',
        emptyOutDir: true,
        target: 'esnext',
        cssCodeSplit: true,
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
