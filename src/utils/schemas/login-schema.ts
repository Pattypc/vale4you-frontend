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
      .min(8, { message: loginError.invalidPasswordLength.message })
  })
  .superRefine(({ password }, ctx) => {
    if (!/[A-Z]/.test(password)) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: loginError.invalidUppercaseLetterPassword.message
      })
    }

    if (!/[a-z]/.test(password)) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: loginError.invalidLowercaseLetterPassword.message
      })
    }

    if (!/[@$!%*?&]/.test(password)) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: loginError.invalidSpecialCharacterPassword.message
      })
    }

    if (!/\d/.test(password)) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: loginError.invalidNumberPassword.message
      })
    }
  })

export type LoginSchemaData = z.infer<typeof LoginSchema>
