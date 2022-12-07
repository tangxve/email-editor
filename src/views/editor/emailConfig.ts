import type { BaseBlock, BaseLayout } from '../../../types/editor'

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

