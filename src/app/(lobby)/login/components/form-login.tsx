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
import { LoginSchemaData } from '@/utils/schemas/login-schema'
import { User } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

export const FormLogin = () => {
  const form = useFormContext<LoginSchemaData>()

  const handleStartSession = (data: LoginSchemaData) => {
    console.log('data', data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleStartSession)} className="mt-5">
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
        <Button type="submit" variant="gradient" className="w-full mt-5">
          Iniciar Sessão
        </Button>
      </form>
    </Form>
  )
}
