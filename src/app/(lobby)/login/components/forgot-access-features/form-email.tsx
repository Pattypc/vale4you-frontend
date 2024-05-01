'use client'

import { useTabsLobby } from '@/app/hooks/useTabsLobby'
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
  ForgotAccessEmailData,
  ForgotAccessEmailSchema
} from '@/utils/schemas/forgot-password'
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { BackToLogin } from '../back-to-login'

export const FormForgotAccessEmail = () => {
  const { onChangeActiveTab } = useTabsLobby()

  const form = useForm<ForgotAccessEmailData>({
    resolver: zodResolver(ForgotAccessEmailSchema),
    defaultValues: {
      email: ''
    }
  })

  const handleRequestPassword = (data: ForgotAccessEmailData) => {
    console.log('data', data)
    onChangeActiveTab('forgot-access-new-password')
  }

  const isDisabledSubmitButton = form.formState.isValid

  return (
    <>
      <Form {...form}>
        <h1 className="text-white-700 dark:text-white-100 font-poppins font-medium text-lg">
          Recuperar senha
        </h1>
        <p className="text-white-600 dark:text-white-400 font-firasans font-normal text-base">
          Insira seu e-mail e siga os próximos passos
        </p>
        <form
          onSubmit={form.handleSubmit(handleRequestPassword)}
          className="mt-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    icon={<User size={16} />}
                    placeholder="seuemail@exemplo.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={!isDisabledSubmitButton}
            type="submit"
            variant="gradient"
            className="w-full mt-5"
          >
            Solicitar recuperação
          </Button>
        </form>
      </Form>
      <BackToLogin />
    </>
  )
}
