export class InvalidFieldError extends Error {
  constructor () {
    super('The Field is invalid')
    this.name = 'Required Field'
  }
}
