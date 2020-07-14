import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import faker from 'faker'

import { EmailValidation } from './email-validation'

describe('Email', () => {
  it('should return error if email is not valid', () => {
    const sut = new EmailValidation('email')
    const error = sut.validate(faker.internet.email())
    expect(error).toEqual(new InvalidFieldError())
  })
})
