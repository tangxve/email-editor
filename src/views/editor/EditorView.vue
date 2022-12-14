<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { MjmlNode } from '../../../types/editor'
import EmailWidget from '@/views/editor/EmailWidget.vue'
import EmailContent from '@/views/editor/EmailContent.vue'
import EmailDesign from '@/views/editor/EmailDesign.vue'
import { createDesigner } from '@/views/editor/designer'

const userSchema = reactive<MjmlNode[]>([])

const addLayout = function (mjmlNode: MjmlNode) {
  userSchema.push(mjmlNode)
}

createDesigner()
</script>

<template>
  <div class="edior-page h-screen relative">
    <n-layout position="absolute">
      <n-layout-header bordered class="px-8 py-4">
        <n-space justify="space-between" align="center">
          <n-space align="center">
            <n-h3 class="m-0">
              Email Editor
            </n-h3>
          </n-space>
          <n-space align="center">
            <n-button>Export MJML</n-button>
            <n-button>Export HTML</n-button>
            <n-button>Send test email</n-button>
            <n-button type="primary">
              Primary
            </n-button>
          </n-space>
        </n-space>
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 67px; bottom: 0px">
        <n-layout-sider bordered width="302">
          <EmailWidget @addLayout="addLayout" />
        </n-layout-sider>
        <n-layout-content class="p-5">
          <EmailContent :user-schema="userSchema" />
        </n-layout-content>
        <n-layout-sider bordered width="302">
          <EmailDesign />
        </n-layout-sider>
      </n-layout>
    </n-layout>
  </div>
</template>

<style scoped lang="scss">
.edior-page {
  background-color: rgb(244, 244, 244);
}

.n-layout-header,
.n-layout-footer {
  //background: rgba(128, 128, 128, 0.2);
}

.n-layout-sider {
  //background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background-color: rgb(244, 244, 244);
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

:deep(.n-collapse-item + .n-collapse-item) {
  margin-top: 14px;
}
</style>
