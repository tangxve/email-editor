<script setup lang="ts">
import { defineProps, reactive } from 'vue'
import type { Designer } from '@/types/editor'
import SectionContainer from '@/components/widgets/SectionContainer.vue'
import ColumnContainer from '@/components/widgets/ColumnContainer.vue'

defineProps<{
  designer: Designer
}>()

const userSchema = reactive([])
</script>

<template>
  <div class="EmailContent">
    <SectionContainer
      v-for="(sectionNode, sectionI) in userSchema"
      :key="`sectionNode_${sectionI}`" :widget="sectionNode"
    >
      <template #default="{ widget }">
        {{ widget.id }}
        {{ widget.key }}
        <ColumnContainer v-for="(colNode, colI) in sectionNode.children" :key="`colNode_${colI}`">
          <div class="text-center">
            {{ colNode.tagName }}
          </div>
        </ColumnContainer>
      </template>
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
