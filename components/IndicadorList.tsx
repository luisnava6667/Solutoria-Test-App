import { IndicadorCard } from './IndicadorCard'
import { useContext, useEffect, useState, CSSProperties, FC } from 'react'
import { PuffLoader } from 'react-spinners'
import { IndicadorProps } from '@/interfaces'
interface Props {
  indicadores: IndicadorProps[]
  cargando: boolean
}
export const IndicadorList: FC<Props> = ({ cargando, indicadores }) => {
    return (
    <div className='m-10'>
      {cargando ? (
        <div
          className='grid w-full  m-0 p-0 place-items-center
        '>
          <PuffLoader color={'#719cf3'} loading={cargando} size={250} />
        </div>
      ) : (
        <>
          {indicadores.length === 0 ? (
            <div className=' grid text-3xl text-blue-400 justify-items-center font-semibold'>
              <h3 className='text-center'>No hay datos que coincidan con los parametros de busqueda</h3>
              <p className='text-center'>
                Por favor, intente con otros parametros de busqueda
              </p>
            </div>
          ) : (
            <div className='grid grid-col gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-4'>
              {indicadores.map((indicador) => (
                <IndicadorCard key={indicador._id} indicador={indicador} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
