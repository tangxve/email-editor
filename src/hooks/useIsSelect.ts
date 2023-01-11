import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import type { Designer, Widget } from '@/types/editor'

export interface UseIsSelect {
  (widget: Widget, designer: Designer): ComputedRef<boolean>
}

export const useIsSelect: UseIsSelect = (widget, designer) => {
  return computed(() => widget.id === designer.selectedId)
}
