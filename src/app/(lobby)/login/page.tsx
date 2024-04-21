'use client'

import { useAuth } from '@/app/hooks/auth'
import { useTabsLobby } from '@/app/hooks/useTabsLobby'
import { Vale4YouLogo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FormForgotAccessEmail } from './components/forgot-access-features/form-email'
import { FormForgotAccessPassword } from './components/forgot-access-features/form-new-passwords'
import { FormLogin } from './components/login-features/form-login'
import { ConfirmEmail } from './components/register-features/confirm-email'
import { FormRegister } from './components/register-features/form-register'

const LoginPage = () => {
  const { activeTab, setActiveTab } = useTabsLobby()
  const { userData } = useAuth()

  const isLogin = activeTab === 'login'
  const isRegister = activeTab === 'register'
  const showButtonsNavigation = isLogin || isRegister

  console.log('userData', userData)

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

        <section className="mt-14 flex flex-col gap-2">
          {activeTab === 'login' && <FormLogin />}
          {activeTab === 'register' && <FormRegister />}
          {activeTab === 'confirm-email' && <ConfirmEmail />}
          {activeTab === 'forgot-access-email' && <FormForgotAccessEmail />}
          {activeTab === 'forgot-access-new-password' && (
            <FormForgotAccessPassword />
          )}
        </section>
      </section>
    </main>
  )
}

export default LoginPage
