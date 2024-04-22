import { ReactNode, createContext, useState } from 'react'

export interface LoginProps {
  username: string
  password: string
}

interface UserDataProps {
  id: string
  fullName: string
  email: string
  permissions: string[]
}

type AuthContextData = {
  isAuthenticated: boolean
  userData: UserDataProps | null
  logout: () => void
  login: (data: LoginProps) => void
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userData, setUserData] = useState<UserDataProps | null>(null)
  const isAuthenticated = !!userData?.fullName

  const login = (data: LoginProps) => {
    setUserData({
      id: '1',
      email: 'mateuspaulo1337@gmail.com',
      fullName: 'Mateus Paulo da Silva',
      permissions: ['read-dashboard']
    })
  }

  const logout = () => {
    setUserData(null)
  }

  const value: AuthContextData = {
    userData,
    isAuthenticated,
    login,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
