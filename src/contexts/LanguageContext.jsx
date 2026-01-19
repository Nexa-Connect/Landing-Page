import { createContext, useContext, useState, useCallback, useMemo } from 'react'
import { locales, defaultLocale } from '@/locales'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nexa-lang')
      if (saved && locales[saved]) {
        return saved
      }
      const browserLang = navigator.language
      if (locales[browserLang]) {
        return browserLang
      }
      const shortLang = browserLang.split('-')[0]
      const match = Object.keys(locales).find(key => key.startsWith(shortLang))
      if (match) {
        return match
      }
    }
    return defaultLocale
  })

  const setLanguage = useCallback((lang) => {
    if (locales[lang]) {
      setCurrentLang(lang)
      localStorage.setItem('nexa-lang', lang)
      document.documentElement.lang = lang
    }
  }, [])

  const t = useMemo(() => locales[currentLang] || locales[defaultLocale], [currentLang])

  const value = useMemo(() => ({
    currentLang,
    setLanguage,
    t,
  }), [currentLang, setLanguage, t])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
