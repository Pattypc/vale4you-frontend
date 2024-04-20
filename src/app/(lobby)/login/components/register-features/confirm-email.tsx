import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '@/components/ui/input-otp'
import {
  ConfirmEmailCodeData,
  ConfirmEmailCodeSchema
} from '@/utils/schemas/confirm-email-code'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { BackToLogin } from '../back-to-login'

export const ConfirmEmail = () => {
  const form = useForm<ConfirmEmailCodeData>({
    resolver: zodResolver(ConfirmEmailCodeSchema),
    defaultValues: {
      code: ''
    }
  })

  const handleSendData = (data: ConfirmEmailCodeData) => {
    console.log('data', data)
  }

  return (
    <div className="grid place-content-center m">
      <header className="gap-1 flex flex-col items-center justify-center">
        {/* <Image
          src="/icon-confirm-email.png"
          width={70}
          height={70}
          alt="Imagem ilustrativa para confirmação do e-mail"
        /> */}
        <h1 className="font-poppins text-xl font-medium tracking-wide dark:text-white-100 text-dark-200">
          Confirmação de registro
        </h1>
        <p className="text-center dark:text-dark-700 mb-4 text-dark-300 font-poppins text-base">
          Estamos quase lá. Insira abaixo o código que <br /> te enviamos por
          e-mail.
        </p>
      </header>
      <main>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSendData)}>
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP {...field} className="bg-red-500 " maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="gradient" className="w-full mt-6">
              Confirmar
            </Button>
          </form>
        </Form>
        <BackToLogin className="mt-10" />
      </main>
    </div>
  )
}
