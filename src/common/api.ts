import axios from 'axios'
import { apiUrl } from './const'
import { Highlight, ScatterData } from './types'

export const axiosRequest = axios.create({
  baseURL: apiUrl,
})

interface GetAdaptersResponse {
  adapters: string[]
}

interface GetHighlightScatterDataResponse {
  scatterData: ScatterData
  highlights: Highlight[]
}

export const getAdapters = async () => {
  const data = await axiosRequest
    .get<GetAdaptersResponse>('/adapters')
    .then(resp => resp.data)
    .catch(err => console.error(err))
  if (!data) {
    return []
  }
  const adapters = data.adapters.map((adapterAlias: string) => ({
    alias: adapterAlias,
    isSelected: true,
  }))
  return adapters
}

export const getHighlightScatterData = async () => {
  const data = await axiosRequest
    .get<GetHighlightScatterDataResponse>('/scatter_data')
    .then(resp => resp.data)
    .catch(err => console.error(err))
  if (!data) {
    return {
      scatterData: [],
      highlights: [],
    }
  }
  return data
}
