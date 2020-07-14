import { InvalidFieldError } from '@/validation/errors/invalid-field-error'

import { MinLengthValidation } from './min-length-validation'

describe('MinLengthValidator', () => {
  it('should return error if value is invalid', () => {
    const sut = new MinLengthValidation('field', 6)
    const error = sut.validate('value')
    expect(error).toEqual(new InvalidFieldError())
  })

  it('should return null if value is valid', () => {
    const sut = new MinLengthValidation('field', 6)
    const error = sut.validate('valid_value')
    expect(error).toBeFalsy()
  })
})
