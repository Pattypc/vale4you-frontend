import { act, renderHook } from '@testing-library/react'
import { ReactNode } from 'react'
import { describe, expect, it } from 'vitest'
import { TabsLobbyProvider } from '../contexts/tabs-lobby'
import { useTabsLobby } from './useTabsLobby'

describe('useTabsLobby', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <TabsLobbyProvider>{children}</TabsLobbyProvider>
  )
  it('should return default values', () => {
    const { result } = renderHook(() => useTabsLobby(), { wrapper })

    expect(result.current.activeTab).toBe('login')
    expect(typeof result.current.onChangeActiveTab).toBe('function')
  })

  it('should activeTab settled when onChangeActiveTab function is fire', () => {
    const { result } = renderHook(() => useTabsLobby(), { wrapper })

    act(() => {
      result.current.onChangeActiveTab('register')
    })
    expect(result.current.activeTab).toBe('register')

    act(() => {
      result.current.onChangeActiveTab('forgot-access-email')
    })
    expect(result.current.activeTab).toBe('forgot-access-email')

    act(() => {
      result.current.onChangeActiveTab('forgot-access-new-password')
    })
    expect(result.current.activeTab).toBe('forgot-access-new-password')

    act(() => {
      result.current.onChangeActiveTab('confirm-email')
    })
    expect(result.current.activeTab).toBe('confirm-email')
  })
})
