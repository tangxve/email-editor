<script setup lang="ts">
import { defineProps } from 'vue'
import { cloneDeep } from 'lodash-es'
import type { BasicWidget, Designer, Widget } from '@/types/editor'
import { basicWidget, containers } from '@/components/widgetPanel/widgetConfig'
import Basic from '@/components/widgetPanel/BasicWidget.vue'
import Container from '@/components/widgetPanel/ContainerWidget.vue'
import { useMessage } from '@/hooks'

const { designer } = defineProps<{ designer: Designer }>()

const basics = reactive<BasicWidget[]>(basicWidget)
const layouts = reactive<Widget[]>(containers)

const addContainerByDbClick = function (layout: Widget) {
  designer.addContainerByDbClick(cloneDeep(layout))
}

// 按钮点击触发
const addBasicByDbClick = (basic: BasicWidget) => {
  const msg = useMessage()
  console.log('msg', msg) // undefined
  msg.error('444')
}
</script>

<template>
  <div>
    <n-collapse :default-expanded-names="['1', '2', '3']">
      <n-collapse-item title="布局 Layout" name="1">
        <div class="layout-box">
          <Container
            v-for="(layout, i) in layouts" :key="i"
            :layout="layout"
            @dblclick="addContainerByDbClick(layout)"
          />
        </div>
      </n-collapse-item>
      <n-collapse-item title="内容 Content" name="2">
        <div class="block-box">
          <Basic
            v-for="widget in basics" :key="widget.id"
            :block="widget"
            @dblclick="addBasicByDbClick(widget)"
          />
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
