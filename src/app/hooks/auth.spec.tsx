import { act, renderHook } from '@testing-library/react'
import { ReactNode } from 'react'
import { describe, expect, it } from 'vitest'
import { AuthProvider } from '../contexts/auth'
import { useAuth } from './auth'

describe('useAuth', () => {
  it('should return default values', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    )

    const { result } = renderHook(() => useAuth(), { wrapper })
    expect(result.current.userData).toBe(null)
    expect(result.current.isAuthenticated).toBe(false)
    expect(typeof result.current.login).toBe('function')
    expect(typeof result.current.logout).toBe('function')
  })

  it('should isAuthenticated to be false and userData to be null when logout was called', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    )
    const { result } = renderHook(() => useAuth(), { wrapper })
    act(() => {
      result.current.logout()
    })

    expect(result.current.userData).toBe(null)
    expect(result.current.isAuthenticated).toBe(false)
  })

  it('should isAuthenticated to be true and userData isnt null when login was called', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    )
    const { result } = renderHook(() => useAuth(), { wrapper })
    act(() => {
      result.current.login({
        username: 'mateuspaulo1337@gmail.com',
        password: '123456789'
      })
    })

    expect(result.current.isAuthenticated).toBe(true)
    expect(result.current.userData).not.toBeNull()
  })
})
