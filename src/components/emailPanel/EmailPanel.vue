<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { Designer, Widget } from '@/types/editor'
import Container from '@/components/widgets/Container.vue'

const { designer } = defineProps<{ designer: Designer }>()

const widgetList = computed<Widget[]>(() => {
  return designer.widgetList || []
})
console.log('widgetList', widgetList.value)
</script>

<template>
  <div class="EmailContent">
    <Container
      v-for="widget in widgetList" :key="widget.key"
      :widget="widget" :designer="designer"
    />
  </div>
</template>

<style scoped>
.EmailContent {
  overflow: hidden;
  background: #fff;
  height: 2000px;
}
</style>
