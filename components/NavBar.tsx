import { IndicadorProps } from '@/interfaces'
import { codeAndNameSelector } from '@/utils'
import { FC, useState, ChangeEvent, useEffect } from 'react'
interface Props {
  indicadores: IndicadorProps[]
  filtro: IndicadorProps[]
  setFiltro: (indicadores: IndicadorProps[]) => void
}
export const NavBar: FC<Props> = ({ indicadores, setFiltro, filtro }) => {
  const [codigo, setCodigo] = useState('')
  const [unidad, setUnidad] = useState('')
  const [fechaIndicador, setFechaIndicador] = useState('')

  const handlerCodigo = (e: ChangeEvent<HTMLSelectElement>) => {
    setCodigo(e.target.value)
  }
  const handleUnidad = (e: ChangeEvent<HTMLSelectElement>) => {
    setUnidad(e.target.value)
  }
  const handlerFecha = (e: ChangeEvent<HTMLInputElement>) => {
    setFechaIndicador(e.target.value)
  }
  const filteredIndicadores = indicadores.filter((indicador) => {
    const fechaMatch = indicador.fechaIndicador.includes(fechaIndicador)
    const codigoMatch = indicador.codigoIndicador.includes(codigo)
    const unidadMedidaMatch = indicador.unidadMedidaIndicador.includes(unidad)
    return fechaMatch && codigoMatch && unidadMedidaMatch
  })
 
  useEffect(() => {
    setFiltro(filteredIndicadores)
  }, [codigo, unidad, fechaIndicador])
  return (
    <div className='lg:flex md:w-full gap-3  md:justify-evenly font-semibold text-lg justify-self-center'>
      <div className='md:flex grid gap-3 items-center px-10 mb-2'>
        <label htmlFor='fecha' className='md:w-1/2'>
          Fecha:
        </label>
        <input
          id='fecha'
          type='date'
          className=' md:w-1/2 lg:w-72 w-80  rounded-md p-2'
          value={fechaIndicador}
          onChange={handlerFecha}
        />
      </div>

      <div className='md:flex grid gap-3 items-center px-10 mb-2'>
        <label htmlFor='codigo' className='md:w-1/2'>
          Codigo de indicador:
        </label>
        <select
          name=''
          id='codigo'
          className='md:w-1/2 w-80 rounded-md p-2'
          onChange={handlerCodigo}>
          <option value=''>Seleccione un codigo de indicador</option>

          {codeAndNameSelector.map((indicador) => (
            <option
              key={indicador.codigo}
              value={indicador.codigo}
              className='w-full'>
              {`${indicador.codigo}`}
            </option>
          ))}
        </select>
      </div>
      <div className='md:flex grid gap-3 items-center px-10 mb-2'>
        <label htmlFor='medida' className='md:w-1/2'>
          Unidad de medida:
        </label>
        <select
          name=''
          id='medida'
          className=' rounded-md p-2 md:w-1/2 w-80'
          onChange={handleUnidad}>
          <option value=''>Seleccione una unidad de medida</option>
          <option value='Dólar'>Dólar</option>
          <option value='Pesos'>Pesos</option>
          <option value='Porcentaje'>Porcentaje</option>
        </select>
      </div>
    </div>
  )
}
