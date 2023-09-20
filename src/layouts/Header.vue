<template>
  <div class="header">
    <div class="flex-1 text-right">
      <a-dropdown>
        <a-avatar class="header-avatar cursor-pointer" size="large">U</a-avatar>
        <template #overlay>
          <a-menu>
            <a-menu-item key="1" @click="handleLogout">
              <PoweroffOutlined />
              退出登录
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleLogout = () => {}
</script>

<style scoped lang="less">
.header {
  display: flex;
  align-items: center;
  padding-right: 20px;

  &-avatar {
    background-color: #f56a00;
    vertical-align: middle;
  }
}
</style>
