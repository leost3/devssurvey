import faker from 'faker'

import { RequiredFieldError } from '../errors'
import { RequiredFieldsValidation } from './required-field-validation'

describe('RequiredFieldsValidation', () => {
  it('should return error if fields is empty', () => {
    const sut = new RequiredFieldsValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  it('should return falsy if fields is not empty', () => {
    const sut = new RequiredFieldsValidation('email')
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
