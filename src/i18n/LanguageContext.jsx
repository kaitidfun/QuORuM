import { createContext, useContext, useEffect, useState } from 'react'
import { en } from './en'
import { th } from './th'

const DICTS = { en, th }
const STORAGE_KEY = 'quorum-lang'

const LanguageContext = createContext(null)

function loadLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'th') return saved
  } catch {
    // storage unavailable, fall through to default
  }
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(loadLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // storage unavailable, ignore
    }
  }, [lang])

  const t = DICTS[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
