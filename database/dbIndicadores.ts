import { db } from '.'
import { Indicador } from '@/models'
import { IndicadorProps } from '@/interfaces'
import { isValidObjectId } from 'mongoose'
export const getIndicadorById = async (id:string): Promise<IndicadorProps | null> => {
  if (!isValidObjectId(id)) return null
  await db.connect()
  const indicador = await Indicador.findById(id).lean()
  await db.disconnect()
  return JSON.parse(JSON.stringify(indicador))
}
