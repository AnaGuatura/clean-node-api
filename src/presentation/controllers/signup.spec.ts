// rota que vamos passar nome, email e senha para criar a conta de um usuário

import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        // name: 'any_name', removendo o name para validar o teste
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_passwrowd'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})
