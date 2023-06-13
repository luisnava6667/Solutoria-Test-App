import { Formulario } from '@/components'
import { IndicadorContext } from '@/context/indicador'
import { IndicadorProps } from '@/interfaces'
import { useRouter } from 'next/router'
import { FC, useContext, useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { dbIndicadores } from '@/database'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { IoClose } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  indicador: IndicadorProps
}
const IndicatorPageById: FC<Props> = ({ indicador }) => {
  const { updateIndicador } = useContext(IndicadorContext)
  const router = useRouter()
  const initialValues = {
    _id: indicador._id,
    nombreIndicador: indicador.nombreIndicador,
    codigoIndicador: indicador.codigoIndicador,
    unidadMedidaIndicador: indicador.unidadMedidaIndicador,
    valorIndicador: indicador.valorIndicador,
    fechaIndicador: indicador.fechaIndicador,
    tiempoIndicador: indicador.tiempoIndicador,
    origenIndicador: indicador.origenIndicador
  }
  const onSubmit = (values: IndicadorProps) => {
    updateIndicador(indicador._id!, values)
    router.back()
  }
  const validationSchema = Yup.object().shape({
    valorIndicador: Yup.number()
      .required('Valor del indicador es requerido')
      .test(
        'validacion-float',
        'El valor debe ser mayor que 0',
        (value) => value > 0
      ),
    fechaIndicador: Yup.date()
      .required('Fecha del indicador es requerida')
      .max(new Date(), 'La fecha no puede ser mayor a la actual')
  })
  const handleBack = (e: any) => {
    e.preventDefault()
    router.back()
  }
  return (
    <div className='px-12 bg-gray-300 h-screen w-full'>
      <div className='grid justify-items-center mb-5 pt-5'>
        <Link href='/' className='cursor-pointer flex items-center'>
          <Image
            src='/solutoria.png'
            alt='Solutoria'
            width={100}
            height={100}
          />
          <h2
            className=' 
          text-2xl sm:text-5xl  font-bold text-center text-blue-400 
          '>
            Solutoria Test{' '}
          </h2>
        </Link>
      </div>
      <div className='sm:px-36  grid'>
        <h2 className='text-center text-2xl uppercase font-bold'>
          Editar Indicador
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          className={` w-full mx-auto my-0 px-0 py-10  `}>
          <Form>
            <div className='grid mb-4 w-full'>
              <label
                htmlFor='nombreIndicador'
                className='text-xl font-semibold'>
                Nombre del Indicador:
              </label>
              <Field
                readOnly
                as='input'
                name='nombreIndicador'
                id='nombreIndicador'
                className='border rounded-md p-2 w-full'
              />
            </div>
            <div className='grid mb-4 w-full'>
              <label
                htmlFor='nombreIndicador'
                className='text-xl font-semibold'>
                Unidad de Medida:
              </label>
              <Field
                readOnly
                as='input'
                name='unidadMedidaIndicador'
                id='unidadMedidaIndicador'
                className='border rounded-md p-2 w-full'
              />
            </div>
            <div className='grid mb-4 w-full'>
              <label
                htmlFor='nombreIndicador'
                className='text-xl font-semibold'>
                Valor Indicado:
              </label>
              <Field
                as='input'
                name='valorIndicador'
                id='valorIndicador'
                type='number'
                className='border rounded-md p-2 w-full'
              />
              <ErrorMessage
                name='valorIndicador'
                component='div'
                className='text-lg text-red-500 font-bold pl-3'
              />
            </div>
            <div className='grid mb-4 w-full'>
              <label
                htmlFor='nombreIndicador'
                className='text-xl font-semibold'>
                Fecha del Indicador:
              </label>
              <Field
                as='input'
                name='fechaIndicador'
                id='fechaIndicador'
                type='date'
                className='border rounded-md p-2 w-full'
              />
              <ErrorMessage
                name='fechaIndicador'
                component='div'
                className='text-lg text-red-500 font-bold pl-3'
              />
            </div>
            <div className='grid md:flex w-full justify-items-center gap-4 mt-10 px-5 md:px-24'>
              <Link
                href='/'
                className='flex items-center justify-center w-4/5 md:w-1/2  sm:p-2 p-4  bg-red-700  text-white transition duration-700 hover:bg-red-900 rounded-lg font-semibold  uppercase cursor-pointer'>
                <IoClose size={25} />
                Cancelar
              </Link>
              <button
                type='submit'
                className='bg-blue-500 w-4/5 md:w-1/2  sm:p-2 p-4 rounded-lg text-white uppercase hover:bg-blue-700 transition duration-700 font-semibold '>
                Guardar
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string }
  const indicador = await dbIndicadores.getIndicadorById(id)
  return {
    props: {
      indicador
    }
  }
}
export default IndicatorPageById
