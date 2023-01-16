import type { Designer, Widget } from '@/types/editor'

export function useRemoveWidget(widget: Widget, parentWidget: Widget, designer: Designer): void

export function useRemoveWidget(widget: Widget, parentWidget: Designer, designer: Designer): void

export function useRemoveWidget(
  widget: Widget,
  parentWidget: Widget | Designer,
  designer: Designer,
): void {
  const widgetIndex = parentWidget.widgetList.findIndex(p => p.id === widget.id)

  parentWidget.widgetList.splice(widgetIndex, 1)

  console.log('designer', designer)
}
