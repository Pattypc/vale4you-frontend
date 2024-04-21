import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useAuth } from './auth'

describe('useAuth', () => {
  it('should return default values', () => {
    const { result } = renderHook(() => useAuth())

    expect(result.current.userData).toBe(null)
    expect(result.current.isAuthenticated).toBe(false)
    expect(typeof result.current.login).toBe('function')
    expect(typeof result.current.logout).toBe('function')
  })
})
