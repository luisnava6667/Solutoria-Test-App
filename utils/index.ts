import { CodigoIndicador, Indicador, NombreIndicador, UnidadMedidaIndicador } from "@/interfaces";
import * as Yup from 'yup';

export const codeAndNameSelector: Indicador[] = [
  { nombre: 'BITCOIN', codigo: 'BITCOIN' },
  { nombre: 'DÓLAR OBSERVADO', codigo: 'DOLAR' },
  { nombre: 'EURO', codigo: 'EURO' },
  { nombre: 'IMACEC', codigo: 'IPC' },
  { nombre: 'INDICE DE PRECIOS AL CONSUMIDOR (IPC)', codigo: 'IMACEC' },
  { nombre: 'INDICE DE VALOR PROMEDIO (IVP)', codigo: 'IVP' },
  { nombre: 'LIBRA DE COBRE', codigo: 'LIBRA_COBRE' },
  { nombre: 'TASA DE DESEMPLEO', codigo: 'TPM' },
  { nombre: 'TASA POLÍTICA MONETARIA (TPM)', codigo: 'TASA_DESEMPLEO' },
  { nombre: 'UNIDAD DE FOMENTO (UF)', codigo: 'UF' },
  { nombre: 'UNIDAD TRIBUTARIA MENSUAL (UTM)', codigo: 'UTM' }

]
export const initialValues = {
  nombreIndicador: '' as NombreIndicador,
  codigoIndicador: '' as CodigoIndicador,
  unidadMedidaIndicador: '' as UnidadMedidaIndicador,
  valorIndicador: 0,
  fechaIndicador: ''
}
export const validationSchema = Yup.object().shape({
  nombreIndicador: Yup.string().required('Nombre del indicador es requerido'),
  unidadMedidaIndicador: Yup.string().required(
    'Unidad de medida del indicador es requerida'
  ),
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