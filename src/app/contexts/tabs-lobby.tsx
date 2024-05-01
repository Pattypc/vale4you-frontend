import { ReactNode, createContext, useState } from 'react'

export type ActiveTabProps =
  | 'login'
  | 'register'
  | 'forgot-access-email'
  | 'forgot-access-new-password'
  | 'confirm-email'

type TabsLobbyContextData = {
  activeTab: ActiveTabProps
  onChangeActiveTab: (tab: ActiveTabProps) => void
}

interface TabsLobbyProviderProps {
  children: ReactNode
}

export const TabsLobbyContext = createContext({} as TabsLobbyContextData)

export const TabsLobbyProvider = ({ children }: TabsLobbyProviderProps) => {
  const [activeTab, setActiveTab] = useState<ActiveTabProps>('login')

  const onChangeActiveTab = (tab: ActiveTabProps) => {
    setActiveTab(tab)
  }

  return (
    <TabsLobbyContext.Provider
      value={{
        activeTab,
        onChangeActiveTab
      }}
    >
      {children}
    </TabsLobbyContext.Provider>
  )
}
