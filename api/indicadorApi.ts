import axios from 'axios'

const indicadorApi = axios.create({
  baseURL: '/api'
})

export default indicadorApi
