<script setup lang="ts">
import EmailComponent from '@/components/EmailComponent.vue'
import EmailContent from '@/components/EmailContent.vue'
import EmailDesign from '@/components/EmailDesign.vue'
</script>

<template>
  <div class="edior-page h-screen relative">
    <n-layout position="absolute">
      <n-layout-header bordered class="h-20 p-0">
        header
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 80px; bottom: 0px">
        <n-layout-sider bordered width="302">
          <EmailComponent />
        </n-layout-sider>
        <n-layout-content class="p-5">
          <EmailContent />
        </n-layout-content>
        <n-layout-sider bordered width="302">
          <EmailDesign />
        </n-layout-sider>
      </n-layout>
    </n-layout>
  </div>
</template>

<style scoped lang="scss">
.edior-page {
  background-color: rgb(244, 244, 244);
}

.n-layout-header,
.n-layout-footer {
  //background: rgba(128, 128, 128, 0.2);
}

.n-layout-sider {
  //background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background-color: rgb(244, 244, 244);
}

:deep(.n-collapse .n-collapse-item) {
  margin: 0px;

  .n-collapse-item__header {
    padding: 0px;
  }

  .n-collapse-item__header-main {
    padding: 0px 12px;
    height: 40px;
    line-height: 40px;
    background: rgb(247, 248, 250);
  }

  .n-collapse-item__content-inner {
    padding: 16px;
  }
}

:deep(.n-collapse-item + .n-collapse-item) {
  margin-top: 14px;
}
</style>
