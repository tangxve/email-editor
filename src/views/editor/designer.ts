import { cloneDeep } from 'lodash-es'
import { getDefaultConfig } from '@/views/editor/emailConfig'

export function createDesigner() {
  const defaultConfig = cloneDeep(getDefaultConfig())
  console.log('defaultConfig', defaultConfig)
}
