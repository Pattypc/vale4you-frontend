export const loginError: { [key: string]: { message: string } } = {
  invalidEmail: {
    message: 'Preencha um e-mail válido'
  },
  invalidEmailLength: {
    message: 'E-mail é um campo obrigatório'
  },
  invalidPasswordLength: {
    message: 'Senha é um campo obrigatório'
  },
  invalidUppercaseLetterPassword: {
    message: 'A senha precisa conter pelo menos 1 letra maíuscula'
  },
  invalidLowercaseLetterPassword: {
    message: 'A senha precisa conter pelo menos 1 letra minúscula'
  },
  invalidSpecialCharacterPassword: {
    message: 'A senha precisa conter pelo menos um caractere especial'
  },
  invalidNumberPassword: {
    message: 'A senha precisa conter pelo menos um número'
  }
}
