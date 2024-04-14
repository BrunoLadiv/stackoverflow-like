'use client'

import React, { createContext, useContext } from 'react'

type ThemeContextType = {
  theme: string
  setTheme: (theme: string) => void
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState('light')

  function handleThemeChange() {
    if (theme === 'light') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.add('light')
    }
  }

  React.useEffect(() => {
    handleThemeChange()
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
