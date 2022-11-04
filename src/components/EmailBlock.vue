<script setup lang="ts">
import { reactive } from 'vue'
import type { BaseBlock, BaseLayout } from '../../types/editor'
import { baseBlocks, baseLayouts } from '@/components/emailConfig'

const blocks = reactive<BaseBlock[]>(baseBlocks)
const layouts = reactive<BaseLayout[]>(baseLayouts)

const msg = useMessage()

msg.success('222')
</script>

<template>
  <div>
    <n-collapse :default-expanded-names="['1', '2', '3']">
      <n-collapse-item title="布局 Layout" name="1">
        <div class="layout-box">
          <div v-for="(layout, i) in layouts" :key="i" class="layout-item">
            {{ layout.colNum }}
          </div>
        </div>
      </n-collapse-item>
      <n-collapse-item title="内容 Content" name="2">
        <div class="block-box">
          <div v-for="(block, i) in blocks" :key="i" class="blockItem">
            <div class="blockItemContainer">
              <span class="bloc-title">{{ block.type }}</span>
            </div>
          </div>
        </div>
      </n-collapse-item>
      <n-collapse-item title="自定义 Custom" name="3">
        <div>真棒</div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style scoped lang="scss">
.block-box {
  //width: 310px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .blockItem {
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

  .blockItem {
    margin-bottom: 16px;
  }
}

:deep(.n-collapse .n-collapse-item) {
  margin: 0px;

  .n-collapse-item__header {
    padding: 0px;
  }

  .n-collapse-item__header-main {
    padding: 0px 12px;
    height: 40px;
    line-height: 40px;
    background: rgb(247, 248, 250);
  }

  .n-collapse-item__content-inner {
    padding: 16px;
  }
}
</style>
