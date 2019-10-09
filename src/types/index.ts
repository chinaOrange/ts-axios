export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'head'
  | 'HEAD'
  | 'option'
  | 'OPTION'
  | 'delete'
  | 'DELETE'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequesetConfig {
  url: string
  method?: Method
  headers?: any
  data?: any
  params?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequesetConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {}
