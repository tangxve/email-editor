<script setup lang="ts">
import { defineProps } from 'vue'
import type { MjmlNode } from '../../../types/editor'
import BorderWrapper from '@/components/wrapper/BorderWrapper.vue'
import { generateId } from '@/utils/util'

interface Props {
  widget: MjmlNode
}

const { widget } = defineProps<Props>()

// eslint-disable-next-line vue/no-mutating-props
widget.key = `${widget.tagName}_${generateId()}`
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
