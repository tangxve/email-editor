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
      v-for="widget in widgetList" :key="widget.key"
      :widget="widget" :designer="designer"
    >
      <ColumnContainer
        v-for="colWidget in widget.widgetList" :key="colWidget.key"
        :widget="colWidget" :designer="designer" :parent-widget="widget"
      >
        {{ colWidget.key }}
      </ColumnContainer>
    </SectionContainer>
  </div>
</template>

<style scoped>
.EmailContent {
  padding: 18px;
  overflow: hidden;
  background: #fff;
  height: 2000px;
}
</style>
