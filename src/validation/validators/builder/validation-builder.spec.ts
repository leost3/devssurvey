import faker from 'faker'

import { RequiredFieldsValidation } from '..'
import { EmailValidation } from '../email/email-validation'
import { MinLengthValidation } from '../min-length/min-length-validation'
import { ValidationBuilder as sut } from './validation-builder'

describe('ValidationBuilder', () => {
  it('Should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldsValidation(field)])
  })

  it('Should return EmailValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new RequiredFieldsValidation(field)])
  })

  it('Should return MinLengthlValidation', () => {
    const length = faker.random.number()
    const field = faker.database.column()
    const validations = sut.field(field).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })

  it('Should return a list of validations', () => {
    const field = faker.database.column()
    const length = faker.random.number()
    const validations = sut.field(field).required().min(length).email().build()
    expect(validations).toEqual([
      new RequiredFieldsValidation(field),
      new MinLengthValidation(field, length),
      new EmailValidation(field)
    ])
  })
})
