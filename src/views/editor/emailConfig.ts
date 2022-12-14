import type { BaseBlock, BaseLayout, MjmlNode } from '../../../types/editor'

export const baseBlocks: BaseBlock[] = [
  {
    type: 'text',
    tagName: 'mj-text',
  },
  {
    type: 'image',
    tagName: 'mj-image',
  },
  {
    type: 'button',
    tagName: 'mj-button',
  },
  {
    type: 'text',
    tagName: 'mj-text',
  },
  {
    type: 'image',
    tagName: 'mj-image',
  },
  {
    type: 'button',
    tagName: 'mj-button',
  },
  {
    type: 'button',
    tagName: 'mj-button',
  },
]

export const baseLayouts: BaseLayout[] = [
  {
    colNum: 1,
    tagName: ['mj-section', 'mj-column'],
  },
  {
    colNum: 2,
    tagName: ['mj-section', 'mj-column'],
  },
  {
    colNum: 3,
    tagName: ['mj-section', 'mj-column'],
  },
  {
    colNum: 4,
    tagName: ['mj-section', 'mj-column'],
  },
]

export const userSchemaBase: MjmlNode[] = [
  {
    tagName: 'mj-section',
    line: 1,
    attributes: {},
    children: [
      {
        tagName: 'mj-column',
        line: 2,
        attributes: {},
        children: [],
      },
      {
        tagName: 'mj-column',
        line: 2,
        attributes: {},
        children: [],
      },
    ],
  },
]

// 全局默认配置
export function getDefaultConfig() {
  return {
    layoutType: 'PC',
    pageAttribute: {},
    widgetList: [],
    historyData: {
      index: -1, // index: 0,
      maxStep: 20,
      steps: [],
    },
  }
}

