<script setup lang="ts">
import { defineProps } from 'vue'
import SectionContainer from '@/components/widgets/SectionContainer.vue'
import ColumnContainer from '@/components/widgets/ColumnContainer.vue'
import type { Designer, Widget } from '@/types/editor'

const { widget } = defineProps<{
  widget: Widget
  designer: Designer
}>()

console.log('widget', widget)
</script>

<template>
  <div class="Container">
    <SectionContainer :widget="widget">
      <ColumnContainer v-for="col in widget.columns" :key="col.id">
        {{ col.type }}
      </ColumnContainer>
    </SectionContainer>
  </div>
</template>

<style scoped>
</style>
