<script setup lang="ts">
import type { BaseBlock } from '../../types/editor'

interface Props {
  block: BaseBlock
}

const { block } = defineProps<Props>()
</script>

<template>
  <div class="blockItem">
    <div class="blockItemContainer">
      <span class="bloc-title">{{ block.type }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blockItem {
  margin-bottom: 16px;
  cursor: pointer;
  box-shadow: rgb(55 63 71 / 4%) 0px 0px 0px 1px, rgb(55 63 71 / 8%) 0px 4px 4px 0px,
  rgb(55 63 71 / 8%) 0px 8px 24px 0px;
  border: 2px solid transparent;
  border-radius: 4px;

  &:hover {
    box-shadow: 0px 0px 2px 2px rgb(123, 192, 252);
  }

  .blockItemContainer {
    width: 70px;
    height: 70px;
    padding: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
