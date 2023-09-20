<template>
  <a-layout class="layout-root">
    <a-layout-sider
      class="layout-sider"
      v-model:collapsed="collapsedRef"
      collapsible>
      <!-- logo -->
      <div class="logo" />
      <!-- menu -->
      <SideMenu />
    </a-layout-sider>
    <a-layout class="layout-main">
      <a-layout-header class="layout-header">
        <Header />
      </a-layout-header>
      <a-layout-content class="layout-content">
        <div class="layout-component">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import SideMenu from './SideMenu.vue'
import Header from './Header.vue'

const collapsedRef = ref(false)
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.layout {
  &-root {
    min-height: 100vh;
    height: 100vh;
  }
  &-main {
    height: 100%;
  }
  &-header {
    background: #fff;
    height: 64px;
    line-height: 64px;
    padding-inline: 0px;
  }
  &-content {
    height: calc(100% - 64px);
    background: #f5f5f5;
    padding: 16px;
  }
  &-component {
    background: #fff;
    height: 100%;
    overflow-y: scroll;
  }
}
</style>
