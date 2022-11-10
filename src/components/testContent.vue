<script setup lang="ts">
import BorderWrapper from '@/components/BorderWrapper.vue'
</script>

<template>
  <div class="text-center-box">
    <BorderWrapper>
      <div class="w-40 h-40 text-center bg-red-400">
        test content
      </div>
    </BorderWrapper>
  </div>
</template>

<style scoped lang="scss">
.text-center-box {
  margin: 50px;
}
</style>
