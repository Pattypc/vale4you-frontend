import { z } from 'zod'
import { loginError } from '../constants/login'

export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: loginError.invalidEmail.message })
    .min(1, { message: loginError.invalidEmailLength.message }),
  password: z
    .string()
    .min(1, { message: loginError.invalidPasswordLength.message })
})

export type LoginSchemaData = z.infer<typeof LoginSchema>
