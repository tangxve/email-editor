<script setup lang="ts">
import { defineProps } from 'vue'
import type { BaseBlock, Designer, Widget } from '@/types/editor'
import { baseBlocks } from '@/views/editor/emailConfig'
import { containers } from '@/components/widgetPanel/widgetConfig'
import BlockItem from '@/components/widgetPanel/BlockItem.vue'
import LayoutItem from '@/components/widgetPanel/LayoutItem.vue'

const { designer } = defineProps<{ designer: Designer }>()

const blocks = reactive<BaseBlock[]>(baseBlocks)
const layouts = reactive<Widget[]>(containers)

const addContainerByDbClick = function (layout: Widget) {
  designer.addContainerByDbClick(layout)
}
</script>

<template>
  <div>
    <n-collapse :default-expanded-names="['1', '2', '3']">
      <n-collapse-item title="布局 Layout" name="1">
        <div class="layout-box">
          <LayoutItem
            v-for="(layout, i) in layouts" :key="i"
            :layout="layout"
            @dblclick="addContainerByDbClick(layout)"
          />
        </div>
      </n-collapse-item>
      <n-collapse-item title="内容 Content" name="2">
        <div class="block-box">
          <BlockItem v-for="(block, i) in blocks" :key="i" :block="block" />
        </div>
      </n-collapse-item>
      <n-collapse-item title="自定义 Custom" name="3">
        <div>真棒</div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style scoped lang="scss">
.layout-box {
  display: flex;
  flex-wrap: wrap;

  .layout-item {
    width: 100%;
  }
}

.block-box {
  //width: 310px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
