<script setup lang="ts">
import { defineProps } from 'vue'
import type { Designer, Widget } from '@/types/editor'
import { useIsSelect, useSelectWidget } from '@/hooks'

const { widget, designer } = defineProps<{
  widget: Widget
  designer: Designer
}>()

const selectWidget = () => {
  useSelectWidget(widget, designer)
}

const isSelected = useIsSelect(widget, designer)
</script>

<template>
  <div class="ContainerWrapper" @click.stop="selectWidget">
    <div class="container-content" :class="{ 'is-selected': isSelected }">
      <slot :widget="widget" :designer="designer" />
    </div>
    <!-- <div ref="ContainerWrapperRef" class="ContainerWrapper-box" /> -->
  </div>
</template>

<style scoped lang="scss">
.ContainerWrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 1px;

  .is-selected {
    outline: 2px solid #409EFF;
  }
}
</style>
