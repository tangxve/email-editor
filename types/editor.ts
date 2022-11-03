export type EmailBlockType = 'text' | 'image' | 'button'

export type MjmlTagName =
  'mj-wrapper'
  | 'mj-section'
  | 'mj-column'
  | 'mj-group'
  | 'mj-button'
  | 'mj-text'
  | 'mj-image'
  | 'mj-social'
  | 'mj-divider'

export interface EmailBlock {
  type: EmailBlockType
  tagName: MjmlTagName
  attributes?: any
  content?: string
}

