import { z } from 'zod'
import { loginError } from '../constants/login'

export const LoginSchema = z
  .object({
    email: z
      .string()
      .email({ message: loginError.invalidEmail.message })
      .min(1, { message: loginError.invalidEmailLength.message }),
    password: z
      .string()
      .min(1, { message: loginError.invalidPasswordLength.message })
  })
  .superRefine(({ password }, ctx) => {
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

export type LoginSchemaData = z.infer<typeof LoginSchema>
