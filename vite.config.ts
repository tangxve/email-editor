import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers' // 每个库的扩展包

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    vueJsx(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        {
          'naive-ui': [
            'useDialog',
            // 'useMessage', // 使用 createDiscreteApi 包裹一层
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
      dts: 'src/types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      // 组件名称包含目录，防止同名冲突，命名空间
      directoryAsNamespace: true,
      dts: 'src/types/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        /* 自动引入全局scss文件 */
        additionalData: '@import "./src/styles/global.scss";',
      },
    },
  },
})
