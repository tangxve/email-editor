<script setup lang="ts">
import { defineProps } from 'vue'
import type { Designer, Widget } from '@/types/editor'
import ContainerWrapper from '@/components/wrapper/ContainerWrapper.vue'

const { widget, designer } = defineProps<{
  widget: Widget
  designer: Designer
  parentWidget?: Widget
}>()
</script>

<template>
  <div class="SectionContainer">
    <ContainerWrapper
      :widget="widget" :designer="designer"
      :parent-widget="parentWidget"
    >
      <div class="section-content">
        <slot :widget="widget" />
      </div>
    </ContainerWrapper>
  </div>
</template>

<style scoped lang="scss">
.SectionContainer {
  width: 100%;

  .section-content {
    display: flex;
    padding: 20px;
    background-color: #51d6a9;
  }
}

.SectionContainer + .SectionContainer {
  margin-top: 10px;
}
</style>
