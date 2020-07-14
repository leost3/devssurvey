import { RequiredFieldError } from '../errors'
import { RequiredFieldsValidation } from './required-field-validation'

describe('RequiredFieldsValidation', () => {
  it('should return error if fields is empty', () => {
    const sut = new RequiredFieldsValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })
})
