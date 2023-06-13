export interface IndicadorProps {
  _id?: number | string
  nombreIndicador: NombreIndicador
  codigoIndicador: CodigoIndicador
  unidadMedidaIndicador: UnidadMedidaIndicador
  valorIndicador: number
  fechaIndicador: string
  tiempoIndicador?: null
  origenIndicador?: string
}
export type NombreIndicador =
  | 'BITCOIN'
  | 'DÓLAR OBSERVADO'
  | 'EURO'
  | 'IMACEC'
  | 'INDICE DE PRECIOS AL CONSUMIDOR (IPC)'
  | 'INDICE DE VALOR PROMEDIO (IVP)'
  | 'LIBRA DE COBRE'
  | 'TASA DE DESEMPLEO'
  | 'TASA POLÍTICA MONETARIA (TPM)'
  | 'UNIDAD DE FOMENTO (UF)'
  | 'UNIDAD TRIBUTARIA MENSUAL (UTM)'
export type CodigoIndicador =
  | 'BITCOIN'
  | 'DOLAR'
  | 'EURO'
  | 'IPC'
  | 'IMACEC'
  | 'IVP'
  | 'LIBRA_COBRE'
  | 'TPM'
  | 'TASA_DESEMPLEO'
  | 'UF'
  | 'UTM'
export type UnidadMedidaIndicador = 'Dólar' | 'Pesos' | 'Porcentaje'
export type Indicador = {
  nombre: NombreIndicador
  codigo: CodigoIndicador
}
