'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginSchema, LoginSchemaData } from '@/utils/schemas/login-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from 'lucide-react'
import { useForm } from 'react-hook-form'

export const FormForgotPassword = () => {
  const form = useForm<LoginSchemaData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleRequestPassword = (data: LoginSchemaData) => {
    console.log('data', data)
  }

  const isDisabledSubmitButton = form.formState.isValid

  return (
    <Form {...form}>
      <h1 className="text-white-700 dark:text-white-100 font-poppins font-medium text-lg">
        Recuperar senha
      </h1>
      <p className="text-white-600 dark:text-white-400 font-firasans font-normal text-base">
        Insira seu e-mail e senha e siga os próximos passos
      </p>
      <form
        onSubmit={form.handleSubmit(handleRequestPassword)}
        className="mt-5"
      >
        <div className="flex flex-col gap-4">
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          // disabled={!isDisabledSubmitButton}
          type="submit"
          variant="gradient"
          className="w-full mt-5"
        >
          Solicitar recuperação
        </Button>
      </form>
    </Form>
  )
}
