import { Moon, SunMedium } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Suspense, useEffect, useState } from 'react'
import { ThemeToggleSkeleton } from './skeletons/theme-toggle-skeleton'
import { Button } from './ui/button'

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)

  const { setTheme, theme } = useTheme()

  const handleChangeThemeMode = () => {
    if (theme === 'dark') {
      return setTheme('light')
    }
    setTheme('dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <ThemeToggleSkeleton />

  return (
    <Suspense fallback="Carregando...">
      <Button
        className="dark:bg-dark-200 border dark:border-white-500 dark:text-white-500  border-white-700 rounded-full  text-white-700"
        onClick={handleChangeThemeMode}
        variant="clear"
        size="icon"
      >
        {theme === 'light' ? <SunMedium size={20} /> : <Moon size={20} />}
      </Button>
    </Suspense>
  )
}
