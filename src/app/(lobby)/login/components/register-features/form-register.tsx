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
  RegisterSchema,
  RegisterSchemaData
} from '@/utils/schemas/register-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { PasswordRequirements } from './password-requirements'

export const FormRegister = () => {
  const { setActiveTab } = useTabsLobby()
  const form = useForm<RegisterSchemaData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const handleRegister = (data: RegisterSchemaData) => {
    console.log('data', data)
    setActiveTab('confirm-email')
  }

  return (
    <Form {...form}>
      <h1 className="text-white-700 dark:text-white-100 font-poppins font-medium text-lg">
        Registre-se na Vale4YOU
      </h1>
      <p className="text-white-600 dark:text-white-400 font-firasans font-normal text-base">
        Registre-se e comece a criar vales para presentear seus amigos em
        momentos especiais.
      </p>
      <form onSubmit={form.handleSubmit(handleRegister)} className="mt-5">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    icon={<User size={16} />}
                    placeholder="seuemail@exemplo.com"
                    className={`${form.formState.errors.email?.message && '!border-alert-failure focus-visible:!ring-alert-failure'}`}
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
          Criar conta
        </Button>
      </form>
    </Form>
  )
}
