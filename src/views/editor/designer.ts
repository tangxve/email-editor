import type { Designer } from '@/types/editor'
import { getDefaultConfig } from '@/views/editor/emailConfig'

export function createDesigner(): Designer {
  const defaultConfig = getDefaultConfig()

  return {
    defaultConfig: {},
    selectedId: null,
    selectedWidget: null,
    selectedWidgetName: null,
    widgetList: [],
    initDesigner() {
      this.defaultConfig = defaultConfig
      this.widgetList = []
    },
    addContainerByDbClick(container) {
      console.log('container', container)
      this.widgetList.push(container)
    },
  }
}
