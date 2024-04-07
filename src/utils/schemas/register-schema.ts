import { z } from 'zod'
import { loginError } from '../constants/login'

export const RegisterSchema = z
  .object({
    email: z
      .string()
      .email({ message: loginError.invalidEmail.message })
      .min(1, { message: loginError.invalidEmailLength.message }),
    password: z
      .string()
      .min(1, { message: loginError.invalidPasswordLength.message }),
    confirmPassword: z
      .string()
      .min(1, { message: loginError.invalidPasswordLength.message })
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'As senhas não coincidem'
      })
    }

    if (password.length < 8) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'A senha precisa conter pelo menos 8 dígitos'
      })
    }

    if (!/[A-Z]/.test(password)) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'A senha precisa conter pelo menos 1 letra maíuscula'
      })
    }

    if (!/[a-z]/.test(password)) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'A senha precisa conter pelo menos 1 letra minúscula'
      })
    }

    if (!/[@$!%*?&]/.test(password)) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'A senha precisa conter pelo menos um caractere especial'
      })
    }

    if (!/\d/.test(password)) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'A senha precisa conter pelo menos um número'
      })
    }
  })

export type RegisterSchemaData = z.infer<typeof RegisterSchema>
