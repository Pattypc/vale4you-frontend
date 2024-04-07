import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from 'react'

type ActiveTabProps = 'login' | 'register' | 'forgot-password' | 'confirm-email'

type TabsLobbyContextData = {
  activeTab: ActiveTabProps
  setActiveTab: Dispatch<SetStateAction<ActiveTabProps>>
}

interface TabsLobbyProviderProps {
  children: ReactNode
}

export const TabsLobbyContext = createContext({} as TabsLobbyContextData)

export const TabsLobbyProvider = ({ children }: TabsLobbyProviderProps) => {
  const [activeTab, setActiveTab] = useState<ActiveTabProps>('login')

  return (
    <TabsLobbyContext.Provider
      value={{
        activeTab,
        setActiveTab
      }}
    >
      {children}
    </TabsLobbyContext.Provider>
  )
}
