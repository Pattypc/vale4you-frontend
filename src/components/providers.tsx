'use client'

import { AuthProvider } from '@/app/contexts/auth'
import { TabsLobbyProvider } from '@/app/contexts/tabs-lobby'
import { queryClient } from '@/config/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ThemeProvider } from './theme-provider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TabsLobbyProvider>
          <AuthProvider>{children}</AuthProvider>
        </TabsLobbyProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
