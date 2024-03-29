import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export type AxiosMethods = 'get' | 'post' | 'put' | 'delete' | 'patch'

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

const makeRequest = async <T>(
  method: AxiosMethods,
  endpoint: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await httpClient({
    method,
    url: endpoint,
    data,
    ...config
  })

  return response.data
}

export const apiGet = <T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T> =>
  makeRequest(
    'get',
    process.env.NEXT_PUBLIC_API_URL + endpoint,
    undefined,
    config
  )

export const apiPost = <T>(
  endpoint: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> =>
  makeRequest('post', process.env.NEXT_PUBLIC_API_URL + endpoint, data, config)

export const apiPut = <T>(
  endpoint: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> =>
  makeRequest('put', process.env.NEXT_PUBLIC_API_URL + endpoint, data, config)

export const apiDelete = <T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T> =>
  makeRequest(
    'delete',
    process.env.NEXT_PUBLIC_API_URL + endpoint,
    undefined,
    config
  )

export const apiPatch = <T>(
  endpoint: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> =>
  makeRequest('patch', process.env.NEXT_PUBLIC_API_URL + endpoint, data, config)
