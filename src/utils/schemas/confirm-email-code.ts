import { z } from 'zod'

export const ConfirmEmailCodeSchema = z.object({
  code: z.string()
})

export type ConfirmEmailCodeData = z.infer<typeof ConfirmEmailCodeSchema>
