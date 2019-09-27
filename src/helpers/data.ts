import { isPlainObject } from './util'

export function transformRequest(data: any): any {
  if (!isPlainObject(data)) {
    return data
  }
  return JSON.stringify(data)
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }
  return data
}
