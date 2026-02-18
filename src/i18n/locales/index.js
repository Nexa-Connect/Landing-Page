import ptBR from './pt-BR.js'
import en from './en.js'
import es from './es.js'
import fr from './fr.js'
import de from './de.js'
import ja from './ja.js'
import zh from './zh.js'

export const locales = {
  'pt-BR': ptBR,
  'en': en,
  'es': es,
  'fr': fr,
  'de': de,
  'ja': ja,
  'zh': zh,
}

export const defaultLocale = 'pt-BR'

export const localeList = Object.values(locales).map(locale => ({
  code: locale.lang,
  name: locale.langName,
}))
