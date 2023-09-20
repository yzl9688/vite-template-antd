import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '@/layouts/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      meta: {
        ignoreInMenu: true,
      },
      redirect: '/example-comps/tree',
    },
    {
      path: '/example-comps',
      name: 'ExampleComp',
      component: BasicLayout,
      redirect: '/example-comps/tree',
      meta: {
        title: '组件示例',
      },
      children: [
        {
          path: '/example-comps/tree',
          name: 'Tree',
          meta: {
            title: '自定义Tree',
          },
          component: () => import('@/views/examples/Tree.vue'),
        },
      ],
    },
  ],
})

export default router
