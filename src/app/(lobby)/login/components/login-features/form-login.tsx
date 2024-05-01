'use client'

import { CONSTANTS } from '@/app/constants'
import { LoaderSpinner } from '@/components/loader-spinner'
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
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ForgotPassowrd } from './forgot-password'

export const FormLogin = () => {
  const [isLoadingButton, setIsLoadingButton] = useState(false)
  const form = useForm<LoginSchemaData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleStartSession = (data: LoginSchemaData) => {
    console.log('data', data)
    setIsLoadingButton(true)
  }

  return (
    <>
      <Form {...form}>
        <h1 className="text-white-700 dark:text-white-100 font-poppins font-medium text-lg">
          Entrar em Vale4You
        </h1>
        <p className="text-white-600 dark:text-white-400 font-firasans font-normal text-base">
          Entre e comece a criar vales para presentear seus amigos em momentos
          especiais. Faça login e espalhe alegria!
        </p>
        <form
          aria-label="form-to-login"
          onSubmit={form.handleSubmit(handleStartSession)}
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
                      aria-label="Email"
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
              aria-label="Password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                      aria-label="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={isLoadingButton}
            type="submit"
            variant="gradient"
            className="w-full mt-5"
            aria-label="button-submit-login"
          >
            {isLoadingButton && <LoaderSpinner />}
            {isLoadingButton
              ? CONSTANTS.button_loading_start_session
              : CONSTANTS.button_start_session}
          </Button>
        </form>
      </Form>
      <ForgotPassowrd />
    </>
  )
}
