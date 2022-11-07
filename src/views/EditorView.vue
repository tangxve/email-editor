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
        <n-layout-content class="p-10">
          <EmailContent />
        </n-layout-content>
        <n-layout-sider bordered>
          <EmailDesign />
        </n-layout-sider>
      </n-layout>
    </n-layout>
  </div>
</template>

<style scoped>
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
</style>
