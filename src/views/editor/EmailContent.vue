<script setup lang="ts">
import TestContent from '@/components/testContent.vue'
import SectionContainer from '@/components/container/SectionContainer.vue'
import ColumnContainer from '@/components/container/ColumnContainer.vue'
</script>

<template>
  <div class="EmailContent">
    <TestContent />
    <SectionContainer>
      <ColumnContainer>222</ColumnContainer>
      <ColumnContainer>222</ColumnContainer>
      <ColumnContainer>222</ColumnContainer>
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
