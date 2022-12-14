import { generateId } from '@/utils/util'
import type { Widget } from '@/types/editor'

const generateCol = (num: number): Widget[] => {
  return Array.from({ length: num }, (): Widget => {
    return {
      type: 'column',
      tagName: 'mj-column',
      attributes: {},
      children: [],
      id: generateId(),
      key: '',
      options: {},
    }
  })
}

const generateSection = (): Widget[] => {
  const colNumList = [1, 2, 3, 4]
  return colNumList.map((v): Widget => {
    return {
      type: 'section',
      tagName: 'mj-section',
      attributes: {},
      children: [],
      id: generateId(),
      columns: generateCol(v),
      options: {},
    }
  })
}

// 容器
export const containers = generateSection()

// 基础组件
export const basicWidget = []

