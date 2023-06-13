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

interface Props {
  indicador: IndicadorProps
}
const IndicatorPageById: FC<Props> = ({ indicador }) => {
  const { updateIndicador } = useContext(IndicadorContext)
  const router = useRouter()
  const initialValues = {
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
    valorIndicador: Yup.number().required('Valor del indicador es requerido'),
    fechaIndicador: Yup.string().required('Nombre del indicador es requerido')
  })
  const handleBack = (e: any) => {
    e.preventDefault()
    router.back()
  }
  return (
    <div className='p-12 bg-gray-300 h-screen w-full  '>
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
              <label htmlFor='nombreIndicador' className='text-xl '>
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
              <label htmlFor='nombreIndicador' className='text-xl '>
                Unidad de Medida:
              </label>
              <Field
                readOnly
                as='input'
                name='unidadMedidaIndicador'
                id='unidadMedidaIndicador'
                className='border rounded-md p-2 w-full'
              />
              <ErrorMessage
                name='unidadMedidaIndicador'
                component='div'
                className='error-message'
              />
            </div>
            <div className='grid mb-4 w-full'>
              <label htmlFor='nombreIndicador' className='text-xl '>
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
                className='error-message'
              />
            </div>
            <div className='grid mb-4 w-full'>
              <label htmlFor='nombreIndicador' className='text-xl '>
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
                name='valorIndicador'
                component='div'
                className='error-message'
              />
            </div>
            <div className='flex w-full justify-evenly'>
              <button
                className='flex items-center justify-center w-4/5 md:w-1/3  sm:p-2 p-4  bg-red-700  text-white transition duration-700 hover:bg-red-900 rounded-lg font-semibold  uppercase cursor-pointer'
                onClick={handleBack}>
                <IoClose size={25} />
                Cancelar
              </button>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4  w-4/5 md:w-1/3 rounded-lg font-semibold  uppercase cursor-pointer transition duration-700'>
                Editar
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
  if (!indicador) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {
      indicador
    }
  }
}
export default IndicatorPageById
