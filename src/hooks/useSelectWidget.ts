import type { Designer, Widget } from '@/types/editor'

export interface UseSelectWidget {
  (widget: Widget, designer: Designer): void
}

export const useSelectWidget: UseSelectWidget = function (
  widget,
  designer,
) {
  designer.setSelected(widget)
}
