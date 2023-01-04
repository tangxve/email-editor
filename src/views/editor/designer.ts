import { cloneDeep } from 'lodash-es'
import { getDefaultConfig } from '@/views/editor/emailConfig'

export function createDesigner() {
  const defaultConfig = getDefaultConfig()

  return {
    defaultConfig: {},
    selectedWidget: null,
    selectedWidgetName: null, // 唯一
    initDesigner() {
      this.defaultConfig = defaultConfig
    },
  }
}
