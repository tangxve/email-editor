import { generateId } from '@/utils/util'

const generateCol = (num: number): any[] => {
  return Array.from({ length: num }, () => {
    return {
      type: 'column',
      tagName: 'mj-column',
      attributes: {}, //
      children: [],
      id: generateId(),
      options: {},
    }
  })
}

const generateSection = (): Array<any> => {
  return Array.from([1, 2, 3, 4], (v) => {
    return {
      type: 'section',
      tagName: 'mj-section',
      attributes: {}, //
      children: [],
      id: generateId(),
      columns: generateCol(v),
      colNum: v,
      options: {},
    }
  })
}

// 容器
export const containers = generateSection()

// 基础组件
export const basicWidget = []
