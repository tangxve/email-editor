<script setup lang="ts">
import { reactive } from 'vue'
import type { Designer } from '@/types/editor'
import { createDesigner } from '@/views/editor/designer'
import WidgetPanel from '@/components/widgetPanel/WidgetPanel.vue'
import EmailPanel from '@/components/emailPanel/EmailPanel.vue'
import DesignPanel from '@/components/designPanel/DesignPanel.vue'

const designer = reactive<Designer>(createDesigner())
</script>

<template>
  <div class="editor-page h-screen relative">
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
      <n-layout has-sider position="absolute" style="top: 67px; bottom: 0">
        <n-layout-sider bordered width="302">
          <WidgetPanel :designer="designer" />
        </n-layout-sider>
        <n-layout-content class="p-5">
          <EmailPanel :designer="designer" />
        </n-layout-content>
        <n-layout-sider bordered width="302">
          <DesignPanel :designer="designer" />
        </n-layout-sider>
      </n-layout>
    </n-layout>
  </div>
</template>

<style scoped lang="scss">
.editor-page {
  background-color: rgb(244, 244, 244);
}

.n-layout-header,
.n-layout-footer {
  //background: rgba(128, 128, 128, 0.2);
}

.n-layout-content {
  background-color: rgb(244, 244, 244);
}

:deep(.n-collapse .n-collapse-item) {
  margin: 0;

  .n-collapse-item__header {
    padding: 0;
  }

  .n-collapse-item__header-main {
    padding: 0 12px;
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
