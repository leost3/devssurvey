import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import faker from 'faker'

import { EmailValidation } from './email-validation'

const makeSut = (): EmailValidation => {
  const sut = new EmailValidation(faker.database.column())
  return sut
}
describe('Email', () => {
  it('should return error if email is not valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError())
  })

  it('should return falsy if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
  it('should return falsy if email is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toBeFalsy()
  })
})
