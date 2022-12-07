<script setup lang="ts">
import BorderWrapper from '@/components/wrapper/BorderWrapper.vue'
</script>

<template>
  <div class="SectionContainer">
    <BorderWrapper>
      <div class="Section-slot">
        <slot />
      </div>
    </BorderWrapper>
  </div>
</template>

<style scoped lang="scss">
.SectionContainer {
  width: 100%;

  .Section-slot {
    display: flex;
    justify-content: space-between;
  }
}
</style>
