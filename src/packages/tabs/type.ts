import { BasicComponent } from '@/utils/typings'

export type TabsTitle = {
  title: string
  disabled: boolean
  active?: boolean
  value: string | number
}

export interface TabsProps extends BasicComponent {
  tabStyle: React.CSSProperties
  value: string | number
  defaultValue: string | number
  activeColor: string
  activeType: 'line' | 'smile' | 'simple' | 'card' | 'button' | 'divider'
  duration: number | string
  align: 'left' | 'right'
  name?: string
  title: () => JSX.Element[]
  onChange: (index: string | number) => void
  onClick: (index: string | number) => void
  autoHeight: boolean
  children?: React.ReactNode
}
export type RectItem = {
  bottom: number
  dataset: { sid: string }
  height: number
  id: string
  left: number
  right: number
  top: number
  width: number
}
