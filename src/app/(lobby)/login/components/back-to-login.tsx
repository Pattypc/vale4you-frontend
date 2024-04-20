import { useTabsLobby } from '@/app/hooks/useTabsLobby'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface BackToLoginProps {
  className?: string
}

export const BackToLogin = ({ className }: BackToLoginProps) => {
  const { setActiveTab } = useTabsLobby()

  return (
    <h3
      className={cn(
        'font-firasans font-normal flex flex-row space-x-1 text-sm dark:text-white-400 text-white-700 mt-4',
        className
      )}
    >
      Deseja voltar? Escolha uma das opções ao lado{' '}
      <Button
        onClick={() => setActiveTab('login')}
        size="clear"
        variant="link"
        className="ml-1"
        type="button"
      >
        Entrar
      </Button>
      <span>ou</span>
      <Button
        onClick={() => setActiveTab('register')}
        size="clear"
        variant="link"
        type="button"
      >
        Registrar
      </Button>
    </h3>
  )
}
