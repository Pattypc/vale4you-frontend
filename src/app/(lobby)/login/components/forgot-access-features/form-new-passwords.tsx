import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  ForgotAccessPasswordData,
  ForgotAccessPasswordSchema
} from '@/utils/schemas/forgot-password'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { PasswordRequirements } from '../register-features/password-requirements'
import { BackToLogin } from './back-to-login'

export const FormForgotAccessPassword = () => {
  const form = useForm<ForgotAccessPasswordData>({
    resolver: zodResolver(ForgotAccessPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  })

  const handleSwitchPassword = (data: ForgotAccessPasswordData) => {
    console.log('data', data)
  }

  return (
    <>
      <Form {...form}>
        <h1 className="text-white-700 dark:text-white-100 font-poppins font-medium text-lg">
          Recuperar senha
        </h1>
        <p className="text-white-600 dark:text-white-400 font-firasans font-normal text-base">
          Insira sua nova senha para finalizarmos o processo
        </p>
        <form
          onSubmit={form.handleSubmit(handleSwitchPassword)}
          className="mt-5"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                      className={`${form.formState.errors.password?.message && '!border-alert-failure focus-visible:!ring-alert-failure'}`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                      className={`${form.formState.errors.confirmPassword?.message && '!border-alert-failure focus-visible:!ring-alert-failure'}`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <PasswordRequirements />

          <Button type="submit" variant="gradient" className="w-full mt-5">
            Solicitar recuperação
          </Button>
        </form>
      </Form>
      <BackToLogin />
    </>
  )
}
