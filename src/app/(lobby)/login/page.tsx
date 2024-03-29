'use client'

import { Line } from '@/components/line'
import { Vale4YouLogo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { LoginSchema, LoginSchemaData } from '@/utils/schemas/login-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { FormProvider, useForm } from 'react-hook-form'
import { FormLogin } from './components/form-login'

const LoginPage = () => {
  const form = useForm<LoginSchemaData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const isLogin = true

  return (
    <main className="flex flex-row min-h-screen w-full">
      <div className="h-screen hidden md:block">
        <Image
          src="/bg-login.png"
          width={1024}
          height={1024}
          alt="Background Login"
          className="object-cover h-full"
        />
      </div>

      <section className="px-10 md:px-16 lg:px-24 py-20 h-screen overflow-auto">
        <header className="flex flex-row items-end justify-between  w-full">
          <Vale4YouLogo />
          <ThemeToggle />
        </header>
        <nav className="flex mt-14 flex-row justify-center">
          <Button
            className="w-full flex-1 rounded-l-lg"
            variant={`${isLogin ? 'default' : 'black'}`}
          >
            Entrar
          </Button>
          <Button
            variant={`${!isLogin ? 'default' : 'black'}`}
            className="w-full flex-1 rounded-r-lg"
          >
            Registrar
          </Button>
        </nav>
        <section className="mt-10 flex flex-col gap-2">
          <h1 className="text-white-700 dark:text-white-100 font-poppins font-medium text-lg">
            Entrar em Vale4You
          </h1>
          <p className="text-white-600 dark:text-white-400 font-firasans font-normal text-base">
            Entre e comece a criar vales para presentear seus amigos em momentos
            especiais. Faça login e espalhe alegria!
          </p>
          <FormProvider {...form}>
            <FormLogin />
          </FormProvider>
          <div className="flex my-5 flex-row items-center gap-2">
            <Line />
            <span className="text-sm font-firasans text-white-700 dark:text-white-400">
              OU
            </span>
            <Line />
          </div>
          <nav className="flex flex-row gap-4 justify-between">
            <Button
              className="w-full flex-1 flex justify-center items-center"
              variant="ouline"
            >
              <Image
                src="/google-login.png"
                width={60}
                height={60}
                alt="Login google"
              />
            </Button>
            <Button
              className="w-full flex-1 flex justify-center items-center"
              variant="ouline"
            >
              <Image
                src="/apple-login.png"
                width={60}
                height={60}
                alt="Login google"
              />
            </Button>
          </nav>
          <nav className="flex flex-col gap-2 mt-6">
            <h3 className="font-firasans font-normal text-sm dark:text-white-400 text-white-700">
              Esqueceu sua senha?{' '}
              <span className="font-medium dark:text-primary-100 text-primary-tone-by-tone">
                Clique aqui.
              </span>
            </h3>
            <h3 className="font-firasans font-normal text-sm dark:text-white-400 text-white-700">
              Não possui uma conta ainda?{' '}
              <span className="font-medium dark:text-primary-100 text-primary-tone-by-tone">
                Clique aqui e registre-se.
              </span>
            </h3>
          </nav>
        </section>
      </section>
    </main>
  )
}

export default LoginPage
