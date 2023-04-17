import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'


export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        ElementPlus(),
        Components({
            resolvers: [ElementPlusResolver()],
        }),],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    },
    //base:'/vue3-music/',
    build: {
        outDir: 'docs',
    },
    server: {
        port: 3002,
        cors: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
            '/netease': {
                target: 'http://180.76.105.127:3000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/netease/, ''),
            }
        }

    }
})
