<script setup lang="ts">
import { defineProps } from 'vue'
import { Delete20Regular } from '@vicons/fluent'
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
    <div v-if="isSelected" class="container-action">
      <div class="widget-label action-item">
        {{ widget.type }}
      </div>
      <div class="widget-delete action-item">
        <n-icon size="20">
          <Delete20Regular />
        </n-icon>
      </div>
    </div>
    <div class="container-drag-handler" />
    <!-- <div ref="ContainerWrapperRef" class="ContainerWrapper-box" /> -->
  </div>
</template>

<style scoped lang="scss">
.ContainerWrapper {
  position: relative;
  display: inline-block;
  width: 100%;

  .container-content {
    position: relative;
  }

  .is-selected {
    position: relative;
    z-index: 10; /* 解决 outline 被覆盖 */
    outline: 2px solid #409EFF;
  }

  .container-action {
    position: absolute;
    z-index: 20;
    top: -30px;
    left: -2px;
    display: flex;
    align-content: center;
    align-items: center;
    height: 30px;
    padding: 4px 8px;
    background-color: $--color-selected;
    color: #fff;

    .action-item {
      cursor: pointer;
      display: flex;
      align-content: center;
    }

    .action-item + .action-item {
      margin-left: 6px;
    }
  }
}
</style>
