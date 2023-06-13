import { IndicadorProps } from '@/interfaces'
import { createContext } from 'react'

export interface ContextProps {
  indicadores: IndicadorProps[]
  getAllIndicadores: () => void
  addNewIndicador: (indicador: IndicadorProps) => void
  deleteIndicador: (_id: number | string) => void
  updateIndicador: (_id: string | number, indicador: IndicadorProps) => void
}
export const IndicadorContext = createContext({} as ContextProps)
