import { useContext } from 'react'
import { TabsLobbyContext } from '../contexts/tabs-lobby'

export const useTabsLobby = () => {
  return useContext(TabsLobbyContext)
}
