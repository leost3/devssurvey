import {
  RemoteAuthentication
} from '@/data/usecases/authentication/remote-authentication'
import { Authentication } from '@/domain/usecases'

import { makeApiUrl } from '../../http/api-url-factory'
import { makeSxiosHttpClient } from '../../http/axios-http-client-factory'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl('/login'), makeSxiosHttpClient())
}
