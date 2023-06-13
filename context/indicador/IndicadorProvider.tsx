import { IndicadorProps } from '@/interfaces'
import { FC, useEffect, useReducer } from 'react'
import { IndicadorContext } from './IndicadorContext'
import { indicadorReducer } from './indicadorReducer'
import { indicadorApi } from '@/api'
import { toast } from 'react-toastify'
import axios from 'axios'

export interface IndicadorState {
  indicadores: IndicadorProps[]
}
const Indicador_INITIAL_STATE: IndicadorState = {
  indicadores: []
}
interface ProviderProps {
  children: React.ReactNode
}
export const IndicadorProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(
    indicadorReducer,
    Indicador_INITIAL_STATE
  )
  const addNewIndicador = async (indicador: IndicadorProps) => {
    try {
      const { data } = await indicadorApi.post<IndicadorProps>(
        '/indicadores',
        indicador
      )
      dispatch({ type: '[Inidicador] New-Indicador', payload: data })
      toast.success('Indicador Agregado')
    } catch (error) {
      console.log(error)
      toast.error('Error! Por favor, comunicate con soporte')
    }
  }
  const getAllIndicadores = async () => {
    const { data } = await indicadorApi.get<IndicadorProps[]>('/indicador')
    dispatch({ type: '[Inidicador] Get-Indicadores', payload: data })
  }

  // deleteIndicador
  const deleteIndicador = async (id: number | string) => {
    try {
      dispatch({ type: '[Inidicador] Delete-Indicador', payload: id })
      await indicadorApi.delete(`/indicador?id=${id}`)
      toast.success('Indicador Eliminado')
    } catch (error) {
      console.log(error)
      toast.error('Error! Por favor, comunicate con soporte')
    }
  }
  const updateIndicador = async (
    id: string | number,
    indicador: IndicadorProps
  ) => {
    try {
      const { data } = await indicadorApi.put<IndicadorProps>(
        `/indicador?id=${id}`,
        indicador
      )
      dispatch({ type: '[Inidicador] Update-Indicador', payload: data })

      toast.success('Indicador Actualizado')
    } catch (error) {
      console.log(error)
      toast.error('Error! Por favor, comunicate con soporte')
    }
  }
  return (
    <IndicadorContext.Provider
      value={{
        ...state,
        getAllIndicadores,
        addNewIndicador,
        deleteIndicador,
        updateIndicador
      }}>
      {children}
    </IndicadorContext.Provider>
  )
}
