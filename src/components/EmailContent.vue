<script setup lang="ts">
import type { EmailBlock } from '../../types/editor'
import { baseContents } from '@/components/emailConfig'

const contents = ref<EmailBlock[]>(baseContents)
</script>

<template>
  <div class="EmailContent">
    <div v-for="(back, i) in contents" :key="i">
      {{ back.type }}
    </div>
    EmailContent
  </div>
</template>

<style scoped>
.EmailContent {
  background: #fff;
}
</style>
