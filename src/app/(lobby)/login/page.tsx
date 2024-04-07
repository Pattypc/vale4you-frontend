'use client'

import { useTabsLobby } from '@/app/hooks/useTabsLobby'
import { Vale4YouLogo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { LoginSchema, LoginSchemaData } from '@/utils/schemas/login-schema'
import {
  RegisterSchema,
  RegisterSchemaData
} from '@/utils/schemas/register-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { FormProvider, useForm } from 'react-hook-form'
import { FormForgotPassword } from './components/forgot-password-features'
import { BackToLogin } from './components/forgot-password-features/back-to-login'
import { ForgotPassowrd } from './components/login-features/forgot-password'
import { FormLogin } from './components/login-features/form-login'
import { ConfirmEmail } from './components/register-features/confirm-email'
import { FormRegister } from './components/register-features/form-register'

const LoginPage = () => {
  const { activeTab, setActiveTab } = useTabsLobby()

  const formLogin = useForm<LoginSchemaData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const formRegister = useForm<RegisterSchemaData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const isLogin = activeTab === 'login'
  const isRegister = activeTab === 'register'
  const showButtonsNavigation =
    activeTab !== 'forgot-password' && activeTab !== 'confirm-email'

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

      <section className="px-10 md:px-16 lg:px-24 py-20 h-screen overflow-auto w-full lg:w-2/3">
        <header className="flex flex-row items-end justify-between w-full">
          <Vale4YouLogo />
          <ThemeToggle />
        </header>
        {showButtonsNavigation && (
          <nav className="flex mt-14 flex-row justify-center">
            <Button
              onClick={() => setActiveTab('login')}
              className="w-full flex-1 rounded-l-lg"
              variant={`${isLogin ? 'default' : 'black'}`}
            >
              Entrar
            </Button>
            <Button
              onClick={() => setActiveTab('register')}
              variant={`${isRegister ? 'default' : 'black'}`}
              className="w-full flex-1 rounded-r-lg"
            >
              Registrar
            </Button>
          </nav>
        )}

        <section className="mt-10 flex flex-col gap-2">
          <FormProvider {...formLogin}>
            {activeTab === 'login' && (
              <>
                <FormLogin />
                {/* <LoginSocialMedias /> */}
                <ForgotPassowrd />
              </>
            )}
          </FormProvider>
          <FormProvider {...formRegister}>
            {activeTab === 'register' && <FormRegister />}
            {activeTab === 'forgot-password' && (
              <>
                <FormForgotPassword />
                <BackToLogin />
              </>
            )}
            {activeTab === 'confirm-email' && (
              <>
                <ConfirmEmail />
                <BackToLogin />
              </>
            )}
          </FormProvider>
        </section>
      </section>
    </main>
  )
}

export default LoginPage
