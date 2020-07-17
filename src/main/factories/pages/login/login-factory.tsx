import {
  RemoteAuthentication
} from '@/data/usecases/authentication/remote-authentication'
import {
  AxiosHttpClient
} from '@/infra/http/axios-http-client/axios-http-client'
import { Login } from '@/presentation/pages'
import { ValidationComposite } from '@/validation/validators'
import {
  ValidationBuilder
} from '@/validation/validators/builder/validation-builder'
import React from 'react'

export const makeLogin: React.FC = () => {
  const url = 'fordevs.herokuapp.com/api/login'
  const axiosHttpClient = new AxiosHttpClient()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
  const validationComposite = new ValidationComposite([
    ...ValidationBuilder.field('email').required().build(),
    ...ValidationBuilder.field('password').required().min(5).build()]
  )
  return (
    <Login
      authentication={remoteAuthentication}
      validation={validationComposite}
    />
  )
}
