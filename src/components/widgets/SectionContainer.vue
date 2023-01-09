<script setup lang="ts">
import { defineProps } from 'vue'
import type { Widget } from '@/types/editor'
import BorderWrapper from '@/components/wrapper/BorderWrapper.vue'

const { widget } = defineProps<{ widget: Widget }>()
</script>

<template>
  <div class="SectionContainer">
    <BorderWrapper>
      <div class="Section-slot">
        <slot :widget="widget" />
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
