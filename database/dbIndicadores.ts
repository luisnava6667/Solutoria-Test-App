import { db } from '.'
import { Indicador } from '@/models'
import { IndicadorProps } from '@/interfaces'
export const getIndicadorById = async (id:string): Promise<IndicadorProps> => {
  await db.connect()
  const indicador = await Indicador.findById(id).lean()
  await db.disconnect()
  return JSON.parse(JSON.stringify(indicador))
}
