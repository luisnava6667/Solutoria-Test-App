import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/database'
import { IndicadorProps } from '@/interfaces'
import { Indicador } from '@/models'

type Data = { message: string } | IndicadorProps[] | IndicadorProps
export default function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id} = req.query;
 
  
  switch (req.method) {
    case 'GET':
      return getAllIndicador(res)
    case 'POST':
      return postIndicador(req, res)
  case 'DELETE':
      return deleteIndicador(req, res )
      
    case 'PUT':
      return updateIndicador(req, res)
    default:
      return res.status(400).json({ message: 'Endpoint no existe' })
  }
}
const getAllIndicador = async (res: NextApiResponse<Data>) => {
  await db.connect()
  const indicadores = await Indicador.find({})
  await db.disconnect()
  return res.status(200).json(indicadores)
}
const postIndicador = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { body } = req
  const indicador = new Indicador(body)
  try {
    await db.connect()
    await indicador.save()
    await db.disconnect()
    return res.status(201).json(indicador)
  } catch (error) {
    await db.disconnect()
    console.log(error)
    return res.status(400).json({ message: 'Error al crear el indicador' })
  }
}
const deleteIndicador = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {id} = req.query
  try {
    await db.connect()
    await Indicador.findByIdAndDelete(id)
    await db.disconnect()
    return res.status(200).json({ message: 'Indicador eliminado' })
  }catch(error){
    await db.disconnect()
    console.log(error)
    return res.status(400).json({ message: 'Error al eliminar el indicador' })
  }
  
}
const updateIndicador = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { id } = req.query
  const { body } = req
  try {
    await db.connect()
    await Indicador.findByIdAndUpdate(id, body)
    await db.disconnect()
    return res.status(200).json({ message: 'Indicador actualizado' })
  } catch (error) {
    await db.disconnect()
    console.log(error)
    return res.status(400).json({ message: 'Error al actualizar el indicador' })
  }
}

