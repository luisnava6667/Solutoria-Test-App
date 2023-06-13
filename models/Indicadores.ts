import mongoose, { Schema, model, Model } from 'mongoose'
import { IndicadorProps } from '@/interfaces'
const indicadorSchema = new Schema({
  nombreIndicador: {
    type: String,
    required: true,
    enum: [
      'BITCOIN',
      'DÓLAR OBSERVADO',
      'EURO',
      'IMACEC',
      'INDICE DE PRECIOS AL CONSUMIDOR (IPC)',
      'INDICE DE VALOR PROMEDIO (IVP)',
      'LIBRA DE COBRE',
      'TASA DE DESEMPLEO',
      'TASA POLÍTICA MONETARIA (TPM)',
      'UNIDAD DE FOMENTO (UF)',
      'UNIDAD TRIBUTARIA MENSUAL (UTM)'
    ]
  },
  codigoIndicador: {
    type: String,
    required: true,
    enum: [
      'BITCOIN',
      'DOLAR',
      'EURO',
      'IPC',
      'IMACEC',
      'IVP',
      'LIBRA_COBRE',
      'TPM',
      'TASA_DESEMPLEO',
      'UF',
      'UTM'
    ]
  },
  unidadMedidaIndicador: {
    type: String,
    required: true,
    enum: ['Dólar', 'Pesos', 'Porcentaje']
  },
  valorIndicador: {
    type: Number,
    required: true
  },
  fechaIndicador: {
    type: String,
    required: true
  },
  tiempoIndicador: {
    type: String,
    required: false
  },
  origenIndicador: {
    type: String,
    default: 'mindicador.cl'
  },
})
const IndicadorModel: Model<IndicadorProps> =
  mongoose.models.Indicador || model('Indicador', indicadorSchema)
export default IndicadorModel
