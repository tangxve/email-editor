export type EmailBlockType = 'text' | 'image' | 'button'
export type LayoutTagName = 'mj-wrapper' | 'mj-section' | 'mj-column' | 'mj-group'
export type BlockTagName = 'mj-button' | 'mj-text' | 'mj-image' | 'mj-social' | 'mj-divider'
export type MjmlTagName = LayoutTagName | BlockTagName

export interface BaseBlock {
  type: EmailBlockType
  tagName: BlockTagName
  attributes?: any
  content?: string
}

export interface BaseLayout {
  colNum: Number
  tagName: LayoutTagName[]
}

export interface MjmlNode {
  tagName: MjmlTagName | string
  attributes: any
  children?: Array<MjmlNode>
  line: number // 顺序 优先深度
  content?: string
}

