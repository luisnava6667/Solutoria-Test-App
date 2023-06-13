import { IndicadorProps } from '@/interfaces'
import { IndicadorState } from './IndicadorProvider'
type IndicadorActionType =
  | { type: '[Inidicador] Get-Indicadores'; payload: IndicadorProps[] }
  | { type: '[Inidicador] New-Indicador'; payload: IndicadorProps }
  | { type: '[Inidicador] Delete-Indicador'; payload: number | string }
  | { type: '[Inidicador] Update-Indicador'; payload: IndicadorProps }

export const indicadorReducer = (
  state: IndicadorState,
  action: IndicadorActionType
): IndicadorState => {
  switch (action.type) {
    case '[Inidicador] Get-Indicadores':
      return {
        ...state,
        indicadores: action.payload
      }

    case '[Inidicador] New-Indicador':
      return {
        ...state,
        indicadores: [...state.indicadores, action.payload]
      }
    case '[Inidicador] Delete-Indicador':
      return {
        ...state,
        indicadores: state.indicadores.filter(
          (indicador) => indicador._id !== action.payload
        )
      }
    case '[Inidicador] Update-Indicador':
      return {
        ...state,
        indicadores: state.indicadores.map((indicador) => {
          if (indicador._id === action.payload._id) {
            indicador.fechaIndicador = action.payload.fechaIndicador
            indicador.valorIndicador = action.payload.valorIndicador
          }
          return indicador
        })
      }

    default:
      return state
  }
}
