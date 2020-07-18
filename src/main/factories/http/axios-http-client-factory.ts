import {
  AxiosHttpClient
} from '@/infra/http/axios-http-client/axios-http-client'

export const makeSxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
