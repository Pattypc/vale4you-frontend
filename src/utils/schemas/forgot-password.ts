import { z } from 'zod'
import { loginError } from '../constants/login'

export const ForgotAccessEmailSchema = z.object({
  email: z
    .string()
    .email({ message: loginError.invalidEmail.message })
    .min(1, { message: loginError.invalidEmailLength.message })
})

export const ForgotAccessPasswordSchema = z
  .object({
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

export type ForgotAccessEmailData = z.infer<typeof ForgotAccessEmailSchema>
export type ForgotAccessPasswordData = z.infer<
  typeof ForgotAccessPasswordSchema
>
