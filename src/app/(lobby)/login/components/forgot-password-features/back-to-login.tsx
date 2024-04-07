import { useTabsLobby } from '@/app/hooks/useTabsLobby'
import { Button } from '@/components/ui/button'

export const BackToLogin = () => {
  const { setActiveTab } = useTabsLobby()

  return (
    <h3 className="font-firasans font-normal flex flex-row space-x-1 text-sm dark:text-white-400 text-white-700 mt-4">
      Deseja voltar? Escolha uma das opções ao lado{' '}
      <Button
        onClick={() => setActiveTab('login')}
        size="clear"
        variant="link"
        className="ml-1"
      >
        Entrar
      </Button>
      <span>ou</span>
      <Button
        onClick={() => setActiveTab('register')}
        size="clear"
        variant="link"
      >
        Registrar
      </Button>
    </h3>
  )
}
