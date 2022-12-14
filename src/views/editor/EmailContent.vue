<script setup lang="ts">
import { defineProps } from 'vue'
import type { BaseLayout, MjmlNode } from '../../../types/editor'
import SectionContainer from '@/components/container/SectionContainer.vue'
import ColumnContainer from '@/components/container/ColumnContainer.vue'

interface Props {
  userSchema: MjmlNode[]
}

const { userSchema } = defineProps<Props>()
</script>

<template>
  <div class="EmailContent">
    <SectionContainer v-for="(sectionNode, sectionI) in userSchema" :key="`sectionNode_${sectionI}`">
      <ColumnContainer v-for="(colNode, colI) in sectionNode.children" :key="`colNode_${colI}`">
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
