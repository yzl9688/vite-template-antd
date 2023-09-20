<template>
  <a-menu :items="menuItems" theme="dark" mode="inline"> </a-menu>
</template>

<script setup lang="ts">
import { ItemType } from 'ant-design-vue'
import { RouteRecordRaw } from 'vue-router'
const router = useRouter()

const transformRoute = (route: RouteRecordRaw): ItemType => {
  return {
    key: route.name as string,
    label: route.meta?.title,
    title: route.meta?.title,
    children: route.children
      ? route.children.map((item) => transformRoute(item))
      : undefined,
  }
}

const menuItems = computed<ItemType[]>(() => {
  return (router.options.routes || [])
    .filter((item) => !item.meta?.ignoreInMenu)
    .map((item) => transformRoute(item))
})
</script>

<style lang="less" scoped></style>
