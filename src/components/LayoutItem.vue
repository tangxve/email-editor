<script setup lang="ts">
// import { defineProps } from 'vue'
import type { BaseLayout } from '../../types/editor'

interface Props {
  layout: BaseLayout
}

const { layout } = defineProps<Props>()
</script>

<template>
  <div class="layout-item">
    <div class="layout-label">
      {{ layout.colNum }} 列 columns
    </div>
    <div class="layoutItemContainer">
      <div class="layoutItem-content">
        <div v-for="col in layout.colNum" :key="col" class="col">
          {{ col }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-item + .layout-item {
  margin-top: 18px;
  cursor: pointer;
}

.layout-label {
padding-top: 4px;
}

.layoutItemContainer {
  margin-top: 4px;
  //border: 1px solid rgb(229, 229, 229);
  width: 100%;
  box-shadow: rgb(55 63 71 / 4%) 0px 0px 0px 1px, rgb(55 63 71 / 8%) 0px 4px 4px 0px,
  rgb(55 63 71 / 8%) 0px 8px 24px 0px;
  padding: 8px;

  &:hover {
    box-shadow: 0px 0px 2px 2px rgb(123, 192, 252);
  }
}

.layoutItem-content {
  line-height: 20px;
  height: 20px;
  border: 1px solid rgb(85, 85, 85);
  border-radius: 3px;
  display: flex;

  .col {
    flex: auto;
    text-align: center;
  }

  .col + .col {
    border-left: 1px solid rgb(85, 85, 85);
  }
}
</style>
