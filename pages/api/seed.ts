import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedDatabase } from '../../database'

import { Indicador } from '@/models'
type Data = { message: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({ message: 'No tiene acceso a este API' })
  }

  await db.connect()
  await Indicador.deleteMany()
  await Indicador.insertMany(seedDatabase.initialData.data)
  await db.disconnect()
  res.status(201).json({ message: 'Base de datos sembrada' })
}
