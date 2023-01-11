<script setup lang="ts">
import { defineProps } from 'vue'
import type { Designer, Widget } from '@/types/editor'
import { useIsSelect, useSelectWidget } from '@/hooks'

const { widget, designer } = defineProps<{
  widget: Widget
  designer: Designer
}>()

const selectWidget = () => {
  console.log('000', widget.type)
  console.log('111', widget.id)

  useSelectWidget(widget, designer)
  console.log('222', designer.selectedId)
}

const isSelected = useIsSelect(widget, designer)
console.log('isSelected', isSelected.value)
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

  &.is-selected > .container-content {
    outline: 2px solid #409EFF;
    //outline-offset: -4px;
  }
}
</style>
