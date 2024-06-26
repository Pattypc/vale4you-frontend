import { useTabsLobby } from '@/app/hooks/useTabsLobby'
import { Button } from '@/components/ui/button'

export const ForgotPassowrd = () => {
  const { onChangeActiveTab } = useTabsLobby()

  return (
    <nav className="flex flex-col gap-2 mt-6">
      <h3 className="font-firasans font-normal text-sm dark:text-white-400 text-white-700">
        Esqueceu sua senha?{' '}
        <Button
          onClick={() => onChangeActiveTab('forgot-access-email')}
          size="clear"
          variant="link"
        >
          Clique aqui.
        </Button>
      </h3>
    </nav>
  )
}
