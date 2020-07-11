import { ValidationStub } from '@/presentation/test'
import {
  cleanup,
  fireEvent,
  render,
  RenderResult
} from '@testing-library/react'
import faker from 'faker'
import React from 'react'

import Login from './login'

type SutTypes = {
  sut: RenderResult
  validationStub: ValidationStub
}
const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = faker.random.words()
  const sut = render(< Login validation={validationStub} />)
  return {
    sut,
    validationStub
  }
}
describe(Login, () => {
  afterEach(cleanup)
  it('should start with initial state', () => {
    const { sut, validationStub } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe(validationStub.errorMessage)
    expect(emailStatus.textContent).toBe('🔴')
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe(validationStub.errorMessage)
    expect(passwordStatus.textContent).toBe('🔴')
  })

  it('should show email error if validation fails', () => {
    const { sut, validationStub } = makeSut()

    const emailInput = sut.getByTestId('email')
    const email = faker.internet.email()
    fireEvent.input(emailInput, { target: { value: email } })
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe(validationStub.errorMessage)
    expect(emailStatus.textContent).toBe('🔴')
  })
  it('should show password error if validation fails', () => {
    const { sut, validationStub } = makeSut()

    const emailInput = sut.getByTestId('password')
    const password = faker.internet.password()
    fireEvent.input(emailInput, { target: { value: password } })
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe(validationStub.errorMessage)
    expect(passwordStatus.textContent).toBe('🔴')
  })

  it('should show valid password state if validation succeeds', () => {
    const { sut, validationStub } = makeSut()
    validationStub.errorMessage = null
    const emailInput = sut.getByTestId('password')
    const password = faker.internet.password()
    fireEvent.input(emailInput, { target: { value: password } })
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe('ok')
    expect(passwordStatus.textContent).toBe('🔵')
  })
})
