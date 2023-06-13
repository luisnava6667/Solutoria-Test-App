import { FC, useContext, useEffect, useState } from 'react'
import { codeAndNameSelector, initialValues, validationSchema } from '@/utils'
import { IoClose } from 'react-icons/io5'
import { useRouter } from 'next/router'
import { IndicadorContext } from '@/context/indicador'
import {
  CodigoIndicador,
  IndicadorProps,
  NombreIndicador,
  UnidadMedidaIndicador
} from '@/interfaces'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import { toast } from 'react-toastify'

interface Props {
  id?: string | undefined
}
export const Formulario: FC<Props> = ({ id }) => {
  const { addNewIndicador } = useContext(IndicadorContext)

  const router = useRouter()
  const handleBack = (e: any) => {
    e.preventDefault()
    router.back()
  }
  const onSubmit = (
    values: IndicadorProps,
    { resetForm }: FormikHelpers<IndicadorProps>
  ) => {
    const codigo = codeAndNameSelector.find(
      (indicador) => indicador.nombre === values.nombreIndicador
    )
    console.log(codigo)

    values.codigoIndicador = codigo!.codigo
    console.log(values)
    toast.success('Indicador agregado correctamente')
    resetForm()
    addNewIndicador(values)
  }

  return (
    <div className='sm:px-36  grid'>
      <h2 className='text-center text-2xl uppercase font-bold'>
        Agregar Indicador
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
              className='error-message'
            />
          </div>

          <div className='grid mb-4'>
            <label htmlFor='unidadMedidaIndicador'>Unidad de Medida</label>
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
              className='error-message'
            />
          </div>
          <div className='grid mb-4'>
            <label htmlFor='valorIndicador'>Valor de Indicador</label>
            <Field
              type='number'
              name='valorIndicador'
              id='valorIndicador'
              className='border rounded-md p-2'
            />
            <ErrorMessage
              name='valorIndicador'
              component='div'
              className='error-message'
            />
          </div>
          <div className='grid mb-4'>
            <label htmlFor='fechaIndicador'>Fecha del Indicador</label>
            <Field
              type='date'
              name='fechaIndicador'
              id='fechaIndicador'
              className='border rounded-md p-2'
            />
            <ErrorMessage
              name='fechaIndicador'
              component='div'
              className='error-message'
            />
          </div>
          <div className='grid md:flex w-full justify-items-center gap-4 mt-10'>
            <button
              type='submit'
              className='bg-blue-500 w-4/5 md:w-1/3  sm:p-2 p-4 rounded-lg text-white uppercase hover:bg-blue-700 transition duration-700 font-semibold '>
              AgregarIndicador
            </button>
            <button
              className='flex items-center justify-center w-4/5 md:w-1/3  sm:p-2 p-4  bg-red-700  text-white transition duration-700 hover:bg-red-900 rounded-lg font-semibold  uppercase cursor-pointer'
              onClick={handleBack}>
              <IoClose size={25} />
              Cancelar
            </button>

            <button
              className='flex items-center justify-center w-4/5 md:w-1/3  sm:p-2 p-4  bg-slate-500  text-white transition duration-700 hover:bg-slate-900 rounded-lg font-semibold  uppercase cursor-pointer'
              onClick={()=>{}}
            ></button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
