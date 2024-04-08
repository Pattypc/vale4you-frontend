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
import Image from 'next/image'
import { useForm } from 'react-hook-form'

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
      <header className=" gap-4 flex flex-col items-center justify-center">
        <Image
          src="/icon-confirm-email.png"
          width={70}
          height={70}
          alt="Imagem ilustrativa para confirmação do e-mail"
        />
        <h1 className="font-poppins text-xl font-medium tracking-wide dark:text-white-100 text-dark-200">
          Insira abaixo o código enviado por e-mail
        </h1>
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
                    <InputOTP {...field} maxLength={6}>
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
            <Button type="submit" variant="gradient" className="w-full mt-5">
              Confirmar
            </Button>
          </form>
        </Form>
      </main>
    </div>
  )
}
