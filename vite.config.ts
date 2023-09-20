import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '~': path.join(__dirname, './src/assets'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          // javascriptEnabled: true,
        },
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      visualizer(),
      AutoImport({
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: ['vue', 'vue-router'],
        dts: true,
      }),
      Components({
        dts: true,
        extensions: ['vue', 'ts', 'tsx'],
        include: [/\.vue$/, /\.vue?vue/, /\.tsx?$/],
        types: [
          {
            from: 'vue-router',
            names: ['RouterLink', 'RouterView'],
          },
        ],
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
            resolveIcons: true,
            // importStyle: 'less',
          }),
        ],
      }),
    ],
  }
})
