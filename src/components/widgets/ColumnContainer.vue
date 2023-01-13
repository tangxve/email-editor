<script setup lang="ts">
import { defineProps } from 'vue'
import ContainerWrapper from '@/components/wrapper/ContainerWrapper.vue'
import type { Designer, Widget } from '@/types/editor'

const { widget, designer } = defineProps<{
  widget: Widget
  parentWidget: Widget
  designer: Designer
}>()
</script>

<template>
  <div class="ColumnContainer">
    <ContainerWrapper :widget="widget" :designer="designer" :parent-widget="parentWidget">
      <div class="column-content">
        <slot :widget="widget" :designer="designer" />
      </div>
    </ContainerWrapper>
  </div>
</template>>

<style scoped lang="scss">
.ColumnContainer {
  flex: 1;

  .column-content {
    background: antiquewhite;
    padding: 10px;
  }
}
</style>
