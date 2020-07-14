import { InvalidFieldError } from '@/validation/errors/invalid-field-error'

import { MinLengthValidation } from './min-length-validation'

describe('MinLengthValidator', () => {
  it('should return error if value is invalid', () => {
    const sut = new MinLengthValidation('any_field', 6)
    const error = sut.validate('any_value')
    expect(error).toEqual(new InvalidFieldError())
  })
})
