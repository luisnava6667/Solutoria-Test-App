import { FC, useContext, useEffect, useState } from 'react'
import { codeAndNameSelector, initialValues, validationSchema } from '@/utils'
import { IoClose } from 'react-icons/io5'
import { IndicadorContext } from '@/context/indicador'
import { IndicadorProps } from '@/interfaces'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import { toast } from 'react-toastify'
import Link from 'next/link'

export const Formulario: FC = () => {
  const { addNewIndicador } = useContext(IndicadorContext)
  const onSubmit = (
    values: IndicadorProps,
    { resetForm }: FormikHelpers<IndicadorProps>
  ) => {
    const codigo = codeAndNameSelector.find(
      (indicador) => indicador.nombre === values.nombreIndicador
    )
    values.codigoIndicador = codigo!.codigo
    console.log(values)
    toast.success('Indicador agregado correctamente')
    resetForm()
    addNewIndicador(values)
  }

  return (
    <div className='sm:px-36  grid mt-11 w-full'>
      <h2 className='text-center text-2xl uppercase font-bold'>
        Agregar Indicador
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        className={` w-full mx-auto my-0  py-10  `}>
        <Form>
          <div className='grid mb-4 w-full px-5'>
            <label htmlFor='nombreIndicador' className='text-xl font-semibold'>
              Nombre del Indicador:
            </label>
            <Field
              as='select'
              name='nombreIndicador'
              id='nombreIndicador'
              className='border rounded-md p-2 w-full'>
              <option value=''>Seleccione un indicador</option>
              {codeAndNameSelector.map((indicador) => (
                <option
                  key={indicador.nombre}
                  value={indicador.nombre}
                  className='w-full'>
                  {`${indicador.nombre}`}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name='nombreIndicador'
              component='div'
              className='text-lg text-red-500 font-bold pl-3'
            />
          </div>
          <div className='grid mb-4 px-5'>
            <label
              htmlFor='unidadMedidaIndicador'
              className='text-xl font-semibold'>
              Unidad de Medida
            </label>
            <Field
              as='select'
              name='unidadMedidaIndicador'
              id='unidadMedidaIndicador'
              className='border rounded-md p-2 w-full'>
              <option value='' disabled>
                Seleccione una unidad de medida
              </option>
              <option value='Dólar'>Dólar</option>
              <option value='Pesos'>Pesos</option>
              <option value='Porcentaje'>Porcentaje</option>
            </Field>
            <ErrorMessage
              name='unidadMedidaIndicador'
              component='div'
              className='text-lg text-red-500 font-bold pl-3'
            />
          </div>
          <div className='grid mb-4 px-5'>
            <label htmlFor='valorIndicador' className='text-xl font-semibold'>
              Valor de Indicador:
            </label>
            <Field
              type='number'
              name='valorIndicador'
              id='valorIndicador'
              className='border rounded-md p-2'
            />
            <ErrorMessage
              name='valorIndicador'
              component='div'
              className='text-lg text-red-500 font-bold pl-3'
            />
          </div>
          <div className='grid mb-4 px-5'>
            <label htmlFor='fechaIndicador' className='text-xl font-semibold'>
              Fecha del Indicador:
            </label>
            <Field
              type='date'
              name='fechaIndicador'
              id='fechaIndicador'
              className='border rounded-md p-2'
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
              Agregar Indicador
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
