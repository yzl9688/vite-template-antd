import { defineConfig } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/astro'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        eslintrc: {
          enabled: true,
        },
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: ['vue', 'vue-router'],
        dts: './auto-imports.d.ts',
      }),
      Components({
        dts: true,
        types: [
          {
            from: 'vue-router',
            names: ['RouterLink', 'RouterView'],
          },
        ],
        resolvers: [AntDesignVueResolver()],
      }),
    ],
  }
})
