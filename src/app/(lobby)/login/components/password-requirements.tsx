import { RegisterSchemaData } from '@/utils/schemas/register-schema'
import { CheckCircle2, X } from 'lucide-react'
import { ReactNode, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

interface RequirementPasswordItemProps {
  content: string
  icon: ReactNode
}

const RequirementPasswordItem = ({
  content,
  icon
}: RequirementPasswordItemProps) => {
  return (
    <li className="flex items-center flex-row gap-2">
      {icon}
      <p>{content}</p>
    </li>
  )
}

export const PasswordRequirements = () => {
  const form = useFormContext<RegisterSchemaData>()

  const passwordWatch = form.watch('password')
  const confirmWatch = form.watch('confirmPassword')

  const hasMinHeightDigits = passwordWatch.length >= 8
  const hasMinOneUpperLetter = /[A-Z]/.test(passwordWatch)
  const hasMinOneLowerLetter = /[a-z]/.test(passwordWatch)
  const hasMinSpecialCaracter = /[@$!%*?&]/.test(passwordWatch)
  const hasMinOneDigit = /\d/.test(passwordWatch)
  const matchPassword = passwordWatch !== '' && passwordWatch === confirmWatch

  useEffect(() => {
    if (matchPassword) {
      form.clearErrors('password')
    }
  }, [matchPassword])

  return (
    <main className="mt-5">
      <h1 className="font-poppins font-semibold text-base dark:text-white-100 text-white-700">
        A senha precisa conter pelo menos:
      </h1>
      <ul className="flex flex-col gap-2 mt-4">
        <RequirementPasswordItem
          content="8 dígitos"
          icon={
            hasMinHeightDigits ? (
              <CheckCircle2
                size={20}
                className={`text-alert-failure ${hasMinHeightDigits && 'text-alert-success'}`}
              />
            ) : (
              <X
                size={20}
                className={`text-alert-failure ${hasMinHeightDigits && 'text-alert-success'}`}
              />
            )
          }
        />
        <RequirementPasswordItem
          content="1 letra maiuscula"
          icon={
            hasMinOneUpperLetter ? (
              <CheckCircle2
                size={20}
                className={`text-alert-failure ${hasMinOneUpperLetter && 'text-alert-success'}`}
              />
            ) : (
              <X
                size={20}
                className={`text-alert-failure ${hasMinOneUpperLetter && 'text-alert-success'}`}
              />
            )
          }
        />
        <RequirementPasswordItem
          content="1 letra minúscula"
          icon={
            hasMinOneLowerLetter ? (
              <CheckCircle2
                size={20}
                className={`text-alert-failure ${hasMinOneLowerLetter && 'text-alert-success'}`}
              />
            ) : (
              <X
                size={20}
                className={`text-alert-failure ${hasMinOneLowerLetter && 'text-alert-success'}`}
              />
            )
          }
        />
        <RequirementPasswordItem
          content="1 caracter especial"
          icon={
            hasMinSpecialCaracter ? (
              <CheckCircle2
                size={20}
                className={`text-alert-failure ${hasMinSpecialCaracter && 'text-alert-success'}`}
              />
            ) : (
              <X
                size={20}
                className={`text-alert-failure ${hasMinSpecialCaracter && 'text-alert-success'}`}
              />
            )
          }
        />
        <RequirementPasswordItem
          content="1 número"
          icon={
            hasMinOneDigit ? (
              <CheckCircle2
                size={20}
                className={`text-alert-failure ${hasMinOneDigit && 'text-alert-success'}`}
              />
            ) : (
              <X
                size={20}
                className={`text-alert-failure ${hasMinOneDigit && 'text-alert-success'}`}
              />
            )
          }
        />
        <RequirementPasswordItem
          content="As senhas coincidem"
          icon={
            matchPassword ? (
              <CheckCircle2
                size={20}
                className={`text-alert-failure ${matchPassword && 'text-alert-success'}`}
              />
            ) : (
              <X
                size={20}
                className={`text-alert-failure ${matchPassword && 'text-alert-success'}`}
              />
            )
          }
        />
      </ul>
    </main>
  )
}
