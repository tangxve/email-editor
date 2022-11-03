<script setup lang="ts">

</script>

<template>
  <n-layout class="">
    <n-layout-header>header</n-layout-header>
    <n-layout has-sider>
      <n-layout-sider>
        <div class="sider p-6">
          333
        </div>
      </n-layout-sider>
      <n-layout-content>
        展示
      </n-layout-content>
      <n-layout-sider>
        编辑
      </n-layout-sider>
    </n-layout>
  </n-layout>
  <div class="h-4" />
</template>

<style scoped>
.n-layout {
  height: 100vh;
}
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
