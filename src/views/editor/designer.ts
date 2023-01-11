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
      this.widgetList.push(container)
    },
    setSelected(selected) {
      if (!selected) {
        this.clearSelected()
        return
      }

      this.selectedId = selected.id
      this.selectedWidget = selected
      this.selectedWidgetName = selected.type
    },
    clearSelected() {
      this.selectedId = null
      this.selectedWidget = null
      this.selectedWidgetName = null
    },
  }
}
