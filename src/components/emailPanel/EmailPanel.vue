<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { Designer, Widget } from '@/types/editor'
import SectionContainer from '@/components/widgets/SectionContainer.vue'
import ColumnContainer from '@/components/widgets/ColumnContainer.vue'

const { designer } = defineProps<{ designer: Designer }>()

const widgetList = computed<Widget[]>(() => {
  return designer.widgetList || []
})
</script>

<template>
  <div class="EmailContent">
    <SectionContainer
      v-for="widget in widgetList"
      :key="widget.key" :widget="widget"
    >
      <ColumnContainer v-for="(colNode, colI) in widget.children" :key="`colNode_${colI}`">
        <div class="text-center">
          {{ colNode.tagName }}
        </div>
      </ColumnContainer>
    </SectionContainer>
  </div>
</template>

<style scoped>
.EmailContent {
  overflow: hidden;
  background: #fff;
  height: 2000px;
}
</style>
