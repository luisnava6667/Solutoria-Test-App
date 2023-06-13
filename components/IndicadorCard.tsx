import { IndicadorContext } from '@/context/indicador'
import { FC, useContext } from 'react'
import { BiTrash, BiPencil } from 'react-icons/bi'
import { IndicadorProps } from '../interfaces/indicador'
import { useRouter } from 'next/router'
import Link from 'next/link'
interface Props {
  indicador: IndicadorProps
}
export const IndicadorCard: FC<Props> = ({ indicador }) => {
  const {
    _id: id,
    nombreIndicador,
    codigoIndicador,
    unidadMedidaIndicador,
    valorIndicador,
    fechaIndicador
  } = indicador
  const { deleteIndicador } = useContext(IndicadorContext)
  const router = useRouter()
  return (
    <div className='grid  gap-4 border border-gray-300 rounded-md p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out bg-blue-300 text-white w-full '>
      <div className='grid font-semibold text-lg md:text-xl text-center '>
        <p className='h-12'>{nombreIndicador}</p>
      </div>
      <div className='grid font-medium md:text-lg'>
        <p>
          Codigo del Indicador: <span className=''>{codigoIndicador}</span>
        </p>
        <p>
          Unidad de Medida: <span>{unidadMedidaIndicador}</span>
        </p>
        <p>
          Valor de Indicador: <span>{valorIndicador}</span>
        </p>
        <p>
          Fecha de Indicador: <span>{fechaIndicador}</span>
        </p>
        <p>
          Origen de Indicador: <span>mindicador.cl</span>
        </p>
      </div>
      <div className='flex w-full gap-2'>
        <Link
          href={`/indicador/${id}`}
          className='rounded-lg flex w-1/2  items-center justify-center gap-2 bg-green-700 p-1 h-10 hover:bg-green-900 transition duration-700 cursor-pointer'>
          <BiPencil />
          Editar
        </Link>
        <div
          className='rounded-lg flex w-1/2 items-center justify-center gap-2  bg-red-700 p-1 h-10 hover:bg-red-900 transition duration-700 cursor-pointer'
          onClick={() => deleteIndicador(id!)}>
          <BiTrash /> Eliminar
        </div>
      </div>
    </div>
  )
}
