import { AxiosRequesetConfig, AxiosPromise, AxiosResponse } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequesetConfig): AxiosPromise {
  // TODO
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequesetConfig): void {
  config.url = transformURL(config)
  config.headers = transfromHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequesetConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequesetConfig): any {
  return transformRequest(config.data)
}

function transfromHeaders(config: AxiosRequesetConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  transformResponse(res.data)
  return res
}

export default axios
