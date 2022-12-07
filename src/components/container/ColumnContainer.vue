<script setup lang="ts">
import BorderWrapper from '@/components/wrapper/BorderWrapper.vue'
</script>

<template>
  <div class="ColumnContainer">
    <BorderWrapper>
      <slot />
    </BorderWrapper>
  </div>
</template>>

<style scoped lang="scss">
.ColumnContainer {
  flex: 1;
  background: antiquewhite;
}
</style>
